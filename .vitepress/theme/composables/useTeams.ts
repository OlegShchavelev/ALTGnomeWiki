import { computed, ref } from 'vue'
import { useData } from '../composables/data'
import { useYamlData } from './useYamlData'
import type { Member, AGWTheme } from '../types'

export function useTeams() {
  const { site, theme } = useData()

  const lang = computed(() => {
    const siteLang = site.value.lang || 'en'
    return siteLang.split('-')[0] // 'ru-RU' -> 'ru'
  })

  const teamsPath = computed(() => {
    if (!theme.value?.teams?.path) {
      console.warn('[useTeams] Teams path not configured')
      return null
    }
    return theme.value.teams.path
  })

  const {
    data: teamsData,
    error,
    loading
  } = teamsPath.value
    ? useYamlData<AGWTheme.TeamMember[]>(teamsPath.value)
    : { data: ref([]), error: ref(null), loading: ref(false) }

  const getLocalizedValue = (
    value: string | Record<string, string> | undefined,
    fallback: string = ''
  ): string => {
    if (!value) return fallback

    if (typeof value === 'string') return value

    return value[lang.value] || value['en'] || Object.values(value)[0] || fallback
  }

  const teams = computed<AGWTheme.TeamMember[]>(() => {
    if (!teamsData.value || !Array.isArray(teamsData.value)) {
      return []
    }

    return teamsData.value
      .filter((team): team is AGWTheme.TeamMember => !!team && typeof team === 'object')
      .map((team) => ({
        ...team,
        name: getLocalizedValue(team.name, 'Unknown'),
        desc: getLocalizedValue(team.desc, '')
      }))
  })

  const filterTeamsByIds = (teamIds: string[] | null): AGWTheme.TeamMember[] => {
    if (!teamIds || !Array.isArray(teamIds) || teamIds.length === 0) {
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
    teams: computed(() => teams.value),
    error,
    loading,
    lang,
    filterTeamsByIds,
    filterTeamsByCollaborator,
    filterTeamsByLimit
  }
}
