import yargs from 'yargs/yargs'
import { Octokit } from '@octokit/core'
import { contributions } from '../_data/team'
import * as fs from 'fs'
import * as path from 'path'
import ora from 'ora'
import { cyan, gray, red } from 'colorette'

/*
    CLI Arguments
*/
const args = yargs(process.argv)
  .options({
    key: { type: 'string', default: '' },
    repoUrl: { type: 'string', default: 'https://github.com/OlegShchavelev/ALTGnomeWiki' },
    debug: { type: 'boolean', default: false },
    dev: { type: 'boolean', default: false }
  })
  .parse()

const authors = []
const toolname = `${cyan(`[ @alt-gnome/alt-wiki-vitepress-gnome | Git Statistic ]`)}${gray(':')}`
const spiner = ora({ discardStdin: false })

/*
    Net + Local Mapping
*/
if (!args.dev) {
  const spiner = ora({ discardStdin: false })
  spiner.start(`${toolname} Читаем данные с гита...\n`)

  const octokit = new Octokit({
    auth: args.key
  })

  const contributorsRawBase = async () => {
    let retryCount = 0
    while (retryCount < 1000) {
      const response = await octokit
        .request('GET /repos/{owner}/{repo}/stats/contributors', {
          owner: args.repoUrl.split('/')[3],
          repo: args.repoUrl.split('/')[4],
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
        .then((response) => response)
        .catch((err) =>
          spiner.fail(`${toolname} Не удалось получить данные:
  \t\t\t\t\t\t\t     ${red(err.toString())}
  \t\t\t\t\t\t\t   Проверьте соединение с интернетом и ключ или оставьте ISSUE.`)
        )

      if (response.status == 202) {
        spiner.text = `${toolname} Ожидаем генерации статистики со стороны API GitHub... ${args.debug ? '( Попытка ' + retryCount + ' )' : ''}\n`
        retryCount += 1
      } else {
        return response.data
      }
    }
  }

  const userGetMore = async (user) => {
    spiner.text = `${toolname} Получаем дополнительную о пользователях ${args.debug ? '( ' + user + ' )' : ''}...\n`
    return await octokit
      .request('GET /users/{user}', {
        user: user,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      .catch((err) =>
        spiner.fail(`${toolname} Не удалось получить данные:
  \t\t\t\t\t\t\t     ${red(err.toString())}
  \t\t\t\t\t\t\t   Проверьте соединение с интернетом и ключ или оставьте ISSUE.`)
      )
  }

  for await (const gitter of await contributorsRawBase().then((response) => response)) {
    const userMore = await userGetMore(gitter.author.login)
      .then((response) => response.data)
      .catch((err) =>
        spiner.fail(`${toolname} Не удалось получить данные:
  \t\t\t\t\t\t\t     ${red(err.toString())}
  \t\t\t\t\t\t\t   Проверьте соединение с интернетом и ключ или оставьте ISSUE.`)
      )

    const author = {
      mapByNameAliases: [gitter.author.login],
      name: userMore.name ?? gitter.author.login,
      title: 'Участник',
      avatar: gitter.author.avatar_url,
      summary: {
        commits: gitter.total,
        add: 0,
        remove: 0
      },
      lastMonthActive: {
        commits: 0,
        add: 0,
        remove: 0
      },
      links: [{ icon: 'github', link: gitter.author.html_url }]
    }

    gitter.weeks.forEach((week) => {
      author.summary.add += week.a
      author.summary.remove += week.d
    })

    gitter.weeks.slice(-4).forEach((week) => {
      author.lastMonthActive.add += week.a
      author.lastMonthActive.remove += week.d
      author.lastMonthActive.commits += week.c
    })

    contributions.forEach((memberRaw) => {
      if (
        memberRaw.name == userMore.name ||
        Object.values(memberRaw.links[0])[1] == Object.values(author.links[0])[1] ||
        (memberRaw.nameAliases && memberRaw.nameAliases.includes(gitter.author.login))
      ) {
        Object.keys(memberRaw).forEach((key) => {
          key == 'mapByNameAliases'
            ? memberRaw[key].forEach((alias) => {
                author[key].push(alias)
              })
            : (author[key] = memberRaw[key])
        })
      }
    })

    authors.push(author)
  }

  fs.writeFile(
    path.join(__dirname, '../_data/fullteam.json'),
    JSON.stringify(authors),
    (err) => err && spiner.fail(err.toString())
  )

  spiner.succeed(`${toolname} Список успешно сгенерирован!\n`)
} else {
  spiner.warn(`${toolname} Активен режим разработки. Создаём пустышку...\n`)
  fs.writeFile(
    path.join(__dirname, '../_data/fullteam.json'),
    JSON.stringify(contributions),
    (err) => err && spiner.fail(err.toString())
  )
  spiner.warn(`${toolname} Создана пустышка с содержимым team.ts\n`)
}
