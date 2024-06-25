export const sortMembers = (team, filter) => {
    if (filter.includes('month')) {
        if (filter.includes('commits')){
            console.log(team.sort((member1, member2) => member1.lastMonthActive.commits < member2.lastMonthActive.commits ? 1 : -1))
            return team.sort((member1, member2) => member1.lastMonthActive.commits < member2.lastMonthActive.commits ? 1 : -1);
        }
        if (filter.includes('activity')){
            console.log(team.sort((member1, member2) => member1.lastMonthActive.commits < member2.lastMonthActive.commits ? 1 : -1))
            return team.sort((member1, member2) => member1.lastMonthActive.add+member1.lastMonthActive.remove < member2.lastMonthActive.add+member1.lastMonthActive.remove ? 1 : -1);
        }
    }
    if (filter.includes('summary')) {
        if (filter.includes('commits')){
            return team.sort((member1, member2) => member1.summary.commits < member2.summary.commits ? 1 : -1);
        }
        if (filter.includes('activity')){
            return team.sort((member1, member2) => member1.summary.add+member1.summary.remove < member2.summary.add+member1.summary.remove ? 1 : -1);
        }
    }
    alert("dawd")
    return team
}