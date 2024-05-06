import { Octokit } from "@octokit/core";

export async function getContributors(key, owner, repo){
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

    console.log(contributorsRaw.data)

    const contributors = []

    for (const contributor of contributorsRaw.data){
        const { author, total, weeks } = contributor
        let additions = 0
        for (const week of weeks) {
            additions += week.a
        }
        contributors.push({
            name: author.login,
            commits: total,
            additions: additions
        })
    }
    return contributors 
}