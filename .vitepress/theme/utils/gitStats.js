import { Octokit } from "@octokit/core";
import { contributions, filter_type } from '../../../_data/team';
import { gitMapContributors } from '../../../_data/gitlog'

export async function getContributors(key, owner, repo){
    if (!key) return false
    if (!owner) return false
    if (!repo) return false

    const octokit = new Octokit({
        auth: key
    })

    const contributorsRaw = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
        owner: owner,
        repo: repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const contributors = []

    for (const contributor of contributorsRaw.data){
        const { author, total, weeks } = contributor
        let additions = 0
        for (const week of weeks) {
            additions += week.a
        }
        contributors.push({
            login: author.login,
            commits: total,
            additions: additions
        })
    }
    return contributors 
}

export function filterContributors(contributors, last){
    if (filter_type === "commits"){
        contributors = contributors.sort((a, b) => (-a.commits) - (-b.commits)).slice(0, last)
        console.log(contributors)
        return contributors
      }
    if (filter_type == "additions"){
        contributors = contributors.sort((a, b) => (-a.additions) - (-b.additions)).slice(0, last)
        return contributors
    }
} 

export function getContributorsTopInfo(contributors){
    for (let contributor of contributors){
        // Ищем имя для сайта по нику гита
        for (const gitContributor of gitMapContributors){
          if (gitContributor.nameAliases.includes(contributor.login)) {
            contributor.name = gitContributor.name
          }
        }
        // По имени достаем остальные параметры для сайта по нику
        for(const siteContributor of contributions){
          if(siteContributor.name == contributor.name){
            for (const key of Object.keys(siteContributor)){
              contributor[key] = siteContributor[key]
            }
          }
        }
    }
    return contributors
}