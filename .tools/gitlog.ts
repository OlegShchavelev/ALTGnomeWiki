import yargs from 'yargs/yargs'
import { Octokit } from '@octokit/core'
import { contributions as RawContributors } from '../_data/team'
import * as fs from 'fs'
import * as path from 'path'
import ora from 'ora'
import { cyan, gray, red } from 'colorette'

/*
    CLI Arguments
*/
const args = await yargs(process.argv)
  .options({
    key: { type: 'string', default: '' },
    repoUrl: { type: 'string', default: 'https://github.com/OlegShchavelev/ALTGnomeWiki' },
    dev: { type: 'boolean', default: false }
  })
  .parseAsync()

const Authors: {
  avatar?: string,
  name?: string,
  mapByNameAliases?: string[],
  title?: string,
  links?: object[],
  actionText?: string,
  sponsor?: string
}[] = []
const toolname = `${cyan(`[ @alt-gnome/alt-wiki-vitepress-gnome | Git Statistic ]`)}${gray(':')}`
const spiner = ora({ discardStdin: false })

if (!args.key && !args.dev) {
  spiner.fail(`${toolname} Не включен режим разработки или не введен ключ`)
} else if (args.key) {
  spiner.start(`${toolname} Читаем данные с гита...\n`)

  const octokit = new Octokit({
    auth: args.key
  })

  const CalculateStats = (GithubContributor, RawContributor) => {
    GithubContributor.weeks.forEach((week) => {
      RawContributor.summary.add += week.a
      RawContributor.summary.remove += week.d
    })

    GithubContributor.weeks.slice(-4).forEach((week) => {
      RawContributor.lastMonthActive.add += week.a
      RawContributor.lastMonthActive.remove += week.d
      RawContributor.lastMonthActive.commits += week.c
    })
  }

  const getGithubStats = async () => {
    let response: { status: number; data?: any }
    response = {
      status: 0
    }
    while (response?.status != 200 && response?.status != 500) {
      response = await octokit.request(
        'GET /repos/{owner}/{repo}/stats/contributors', 
          {
            owner: args.repoUrl.split('/')[3],
            repo: args.repoUrl.split('/')[4],
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          }
        )
        .then((response) => response)
        .catch((err)=>{
          response = {
            status: 500,
            data: err.toString()
          }
          return response
        })
    }
    return response
  }
  
  const GetUserInfo = async (user: any) => {
    let response: { status: number; data?: any }
    response = await octokit
      .request('GET /users/{user}', {
        user: user,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      .catch((err)=>{
        response = {
          status: 500,
          data: err.toString()
        }
        return response
      })
      .then((response) => response)

    return response
  }

  const GithubContributors = await getGithubStats().then((response) => response)

  if (GithubContributors.status == 200) {
    spiner.info(`${toolname} Данные получены.`)
    for await (const Contributor of GithubContributors.data) {
      spiner.info(`${toolname} Обрабатываем автора: ${Contributor.author.login}`)
      
      const ContributorProfileInfo = await GetUserInfo(Contributor.author.login).then((resp) => resp)
      
      const RawContributor = RawContributors.find(Author => Author.mapByNameAliases?.includes(Contributor.author.login))

      if (RawContributor) {
        let Author = {
          ...RawContributor,
          summary: {
            commits: Contributor.total,
            add: 0,
            remove: 0
          },
          lastMonthActive: {
            commits: 0,
            add: 0,
            remove: 0
          },
        } 
        CalculateStats(Contributor, Author)
        Authors.push(Author)
      } else {
        let Author = {
          mapByNameAliases: [Contributor.author.login],
          name: ContributorProfileInfo.data.name ?? Contributor.author.login,
          title: 'Участник',
          avatar: Contributor.author.avatar_url,
          summary: {
            commits: Contributor.total,
            add: 0,
            remove: 0
          },
          lastMonthActive: {
            commits: 0,
            add: 0,
            remove: 0
          },
          links: [{ icon: 'github', link: Contributor.author.html_url }]
        }
        CalculateStats(Contributor, Author)
        Authors.push(Author)
      }
    }

    for (const RawContributor of RawContributors) {
      let isGitContributed = false
      for (const GitContributed of Authors){
        if (RawContributor.mapByNameAliases){
          for (const login of RawContributor?.mapByNameAliases){
            if (GitContributed.mapByNameAliases?.includes(login)){
              isGitContributed = true
              break
            }
          }
        }
        if (isGitContributed) { 
          break
        }
      }

      if (!isGitContributed) {
        let Author = {
          ...RawContributor,
          summary: {
            commits: 0,
            add: 0,
            remove: 0
          },
          lastMonthActive: {
            commits: 0,
            add: 0,
            remove: 0
          },
        } 
        Authors.push(Author)
      }
    }

    fs.writeFile(
      path.join(__dirname, '../_data/fullteam.json'),
      JSON.stringify(Authors),
      (err) => err && spiner.fail(err.toString())
    )
  
    spiner.succeed(`${toolname} Список успешно сгенерирован!\n`)
  } else {
    spiner.fail(`${toolname} Неудалось получить данные с гита! (${GithubContributors.data})\n`)
  }
  //console.log(Authors) debug output
} else if (args.dev) {
  spiner.warn(`${toolname} Активен режим разработки. Создаём пустышку...\n`)
  fs.writeFile(
    path.join(__dirname, '../_data/fullteam.json'),
    JSON.stringify(RawContributors),
    (err) => err && spiner.fail(err.toString())
  )
  spiner.warn(`${toolname} Создана пустышка с содержимым team.ts\n`)
}
