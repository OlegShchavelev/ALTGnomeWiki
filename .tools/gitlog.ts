import yargs from "yargs/yargs"
import { Octokit } from "@octokit/core"
import { gitMapContributors } from "../_data/gitlog"
import { contributions } from "../_data/team"
import * as fs from 'fs';
import * as path from 'path';
import ora from 'ora';
import { cyan, gray } from 'colorette'

const args = yargs(process.argv).options({
    key: { type: "string", default: ""},
    repoUrl: { type: "string", default: "https://github.com/OlegShchavelev/ALTGnomeWiki"},
    preview: {type: "boolean", default: false},
    limit: { type: "number", default: 6},
    filter: { type: "string", default: "role"},
    autosearch: { type: "boolean", default: true},
    leader: { type: "string", default: "Олег Щавелев"},
    debug: {type: "boolean", default: false}
}).parse()


/* 
  Network
*/

const toolname = `${cyan(`[ @alt-gnome/alt-wiki-vitepress-gnome | Git Statistic ]`)}${gray(':')}`

const spinner = ora({discardStdin: false})
spinner.start(`${toolname} Читаем данные с гита...\n`)

const octokit = new Octokit({
    auth: args.key
})

const contributorsRawBase = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
    owner: args.repoUrl.split("/")[3],
    repo: args.repoUrl.split("/")[4],
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
}).then( response => { 
    return response.data 
}).catch( err => {
    console.error(err)
    spinner.fail(err)
})

const userGetMore = async (user) => {
    spinner.text = `${toolname} Получаем дополнительную информацию о ${user}...\n`
    return await octokit.request('GET /users/{user}', {
      user: user,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
}


const teamRaw = []
    
gitMapContributors.forEach( gitMapped => {
    contributions.forEach( teamMapped => {
        if (gitMapped.name == teamMapped.name) {
            teamRaw.push({...gitMapped, ...teamMapped})
        }
    })
})


const authorsGitRaw = []

for await (const gitter of contributorsRawBase) {

    const userMore = await userGetMore(gitter.author.login).then( response => {return response.data}).catch( error => {
        console.error(error)
        spinner.fail(error)
        spinner.stop()
    })
    
    let author = {
        nameAliases: [ gitter.author.login ],
        name: userMore.name,
        avatar: gitter.author.avatar_url,
        weeks: gitter.weeks,
        links: [
            { icon: 'github', link: gitter.author.html_url}
        ]
    }

    teamRaw.forEach( memberRaw => {
        if (memberRaw.name == userMore.name || memberRaw.nameAliases.includes(gitter.author.login)){
            Object.keys(memberRaw).forEach( key => {
                author[key] = memberRaw[key] 
            })
        }
    })

    authorsGitRaw.push(author)
}


fs.writeFile(path.join(__dirname, "../_data/newteam.json"), JSON.stringify(authorsGitRaw), (err) => err && console.error(err))

if (args.debug) console.log(authorsGitRaw)

spinner.succeed()
spinner.stop()

