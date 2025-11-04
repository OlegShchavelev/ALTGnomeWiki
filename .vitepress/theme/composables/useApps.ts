import { computed } from 'vue'
import { useData } from './data'
import { data as appsData } from '../../data/apps.data'
import { data as docsAppsData } from '../../data/docs-apps.data'
import { transformKeywords, transformActions } from './useMeta'
import type { App, Apps, MetaKeywords, MetaActionItem } from '../types'

export function useApps() {
  const { theme } = useData()

  const apps = computed<App[]>(() => {
    const yamlApps: App[] = appsData?.apps || []
    const docsApps: App[] = docsAppsData || []
    const docsAppsMap = new Map(docsApps.map((docApp) => [docApp.appstream.name, docApp]))
    const enrichedApps = yamlApps.map((yamlApp) => {
      const docsApp = docsAppsMap.get(yamlApp.appstream.name)

      if (docsApp) {
        return {
          ...yamlApp
        }
      }
      return yamlApp
    })
    return enrichedApps
  })

  const transformApp = (app: App): Apps => {
    const meta = theme.value.meta

    const aggregationWithMore = { ...app.aggregation }
    if (app.more) {
      aggregationWithMore.more = { id: app.more }
    }

    const actions = transformActions(aggregationWithMore, meta?.actions)

    return {
      name: app.appstream.name,
      icon: app.appstream.icon,
      summary: app.appstream.summary,
      keywords: transformKeywords(app.appstream.keywords, meta?.keywords) as MetaKeywords[],
      actions: actions,
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

  const getAppsWithDocs = (apps: Apps[]): Apps[] => {
    return apps.filter((app) => app.more)
  }

  return {
    apps,
    transformedApps,
    filterAppsByGroup,
    filterAppsByLimit,
    getAppsWithDocs
  }
}
