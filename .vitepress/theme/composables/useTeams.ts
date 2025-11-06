import { computed } from 'vue'
import { useData } from './data'
import { data as teamsData } from '../../data/teams.data'
import type { AGWTheme } from '../types'

export function useTeams() {
  const { site } = useData()

  const lang = computed(() => {
    const siteLang = site.value.lang || 'en'
    return siteLang.split('-')[0]
  })

  const getLocalizedValue = (
    value: string | Record<string, string> | undefined,
    fallback: string = ''
  ): string => {
    if (!value) return fallback
    if (typeof value === 'string') return value
    return value[lang.value] || value['en'] || Object.values(value)[0] || fallback
  }

  const teams = computed<AGWTheme.TeamMember[]>(() => {
    if (!teamsData || !Array.isArray(teamsData)) {
      return []
    }

    return teamsData
      .filter((team): team is AGWTheme.TeamMember => !!team && typeof team === 'object')
      .map((team) => ({
        ...team,
        name: getLocalizedValue(team.name, 'Unknown'),
        desc: getLocalizedValue(team.desc, '')
      }))
  })

  const parseTeamIds = (tids: string | string[] | null): string[] => {
    if (!tids) return []

    if (Array.isArray(tids)) {
      return tids
    }

    return tids
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
  }

  const filterTeamsByIds = (tids: string | string[] | null): AGWTheme.TeamMember[] => {
    const teamIds = parseTeamIds(tids)

    if (teamIds.length === 0) {
      return teams.value
    }

    const idsSet = new Set(teamIds)
    return teams.value.filter((team) => team.title && idsSet.has(team.title))
  }

  const filterTeamsByCollaborator = (collaborator: string): AGWTheme.TeamMember[] => {
    if (!collaborator) return []
    return teams.value.filter((team) => team.collaborator?.includes(collaborator))
  }

  const filterTeamsByLimit = (teamList: AGWTheme.TeamMember[], limit: number): AGWTheme.TeamMember[] => {
    if (!Array.isArray(teamList)) return []
    if (limit <= 0) return teamList
    return teamList.slice(0, Math.max(0, Math.floor(limit)))
  }

  return {
    teams,
    lang,
    filterTeamsByIds,
    filterTeamsByCollaborator,
    filterTeamsByLimit
  }
}
