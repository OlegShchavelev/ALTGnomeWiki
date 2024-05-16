import { Octokit } from "@octokit/core";
import { contributions, leader_name } from '../../../../_data/team';
import { gitMapContributors } from '../../../../_data/gitlog'


export async function getContributors(key, owner, repo, autosearch){
    if (!key) return contributions
    if (!owner) return contributions
    if (!repo) return contributions

    const octokit = new Octokit({
        auth: key
    })

    const contributorsRawBase = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
        owner: owner,
        repo: repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }).then( response => { return response.data })
    
    const userGetMore = async (user) => {
      return await octokit.request('GET /users/{user}', {
        user: user,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    }

    const contributors = []

    if (contributorsRawBase && contributorsRawBase != {} ){

      for (const contributorRaw of contributorsRawBase) {    // Внутри forEach нельзя вызывать await

        const { author, total, weeks } = contributorRaw

        const contributor = {
          login: author.login,
          name: autosearch ? await userGetMore(author.login).then( response  => { return response.data.name }) : author.login,
          title: autosearch ? "Участник" : false, 
          links: autosearch ? [
            { icon: 'github', link: author.html_url },
          ] : false,
          avatar: author.avatar_url,
          commits: total,
          additions: 0
        }
        
        // Считаем изменения
        weeks.forEach( week => {
          contributor.additions += week.a
        })
        
        // Ищем имя для сайта по нику гита
        gitMapContributors.forEach( gitContributor => {
          if (gitContributor.nameAliases.includes(contributor.login)) {
            contributor.name = gitContributor.name
          }
        })
        // По имени достаем остальные параметры для сайта по нику
        contributions.forEach( siteContributor => {
          if(siteContributor.name == contributor.name){
            Object.keys(siteContributor).forEach( key => {
              contributor[key] = siteContributor[key]
            })
          }
        })
        if ( contributor.name && contributor.title ) {
          contributors.push(contributor)
        }
      }
      
      return contributors
    
    } else {
    
      return contributions
    
    }
}

export function filterContributors(contributors, filter_type){
  contributors = (filter_type.includes("commits")) ? contributors.sort((a, b) => (-a.commits) - (-b.commits)) : contributors
  contributors = (filter_type.includes("additions")) ? contributors.sort((a, b) => (-a.additions) - (-b.additions)) : contributors

  if (filter_type.includes("role")){
    contributors.forEach( contributor => {
      if (contributor.title.includes('Разработчик')){
        contributors = contributors.sort((x,y) => { 
          return x == contributor ? -1 : y == contributor ? 1 : 0; 
        });
      }
    })

    contributors.forEach( contributor => {
      if (contributor.name.includes(leader_name)){
        contributors = contributors.sort((x,y) => { 
          return x == contributor ? -1 : y == contributor ? 1 : 0; 
        });
      }
    })
  }

  return contributors
} 
