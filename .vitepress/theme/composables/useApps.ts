import { computed } from 'vue'
import { useData } from './data'
import { data as appsData } from '../../data/apps.data'
import { transformKeywords, transformActions } from './useMeta'
import type { App, Apps, MetaKeywords, MetaActionItem } from '../types'

export function useApps() {
  const { theme } = useData()

  const apps = computed<App[]>(() => {
    if (!appsData || !appsData.apps || !Array.isArray(appsData.apps)) {
      console.warn('❌ No apps data found')
      return []
    }
    console.log('✅ Apps data loaded:', appsData.apps.length, 'apps')
    return appsData.apps
  })

  const transformApp = (app: App): Apps => {
    const meta = theme.value.meta

    return {
      name: app.appstream.name,
      icon: app.appstream.icon,
      summary: app.appstream.summary,
      keywords: transformKeywords(app.appstream.keywords, meta?.keywords) as MetaKeywords[],
      actions: transformActions(app.aggregation, meta?.actions) as MetaActionItem[],
      group: app.group
    }
  }

  const transformApps = (apps: App[]): Apps[] => {
    return apps.map(transformApp)
  }

  const transformedApps = computed(() => transformApps(apps.value))

  const filterAppsByGroup = (apps: Apps[], group: string): Apps[] => {
    if (!group) return apps
    return apps.filter((app: Apps) => app.group?.includes(group))
  }

  const filterAppsByLimit = (apps: Apps[], limit: number): Apps[] => {
    return apps.slice(0, limit)
  }

  return {
    apps,
    transformedApps,
    filterAppsByGroup,
    filterAppsByLimit
  }
}
