import { computed } from 'vue'
import { useData } from './data'
import { data as yamlAppsData } from '../../data/apps.data'
import { data as docsAppsData } from '../../data/docs-apps.data'
import { transformKeywords, transformActions } from './useMeta'
import type { App, Apps, MetaKeywords, MetaActionItem } from '../types'

export function useApps(source: 'all' | 'yaml' | 'docs' = 'all') {
  const { theme } = useData()

  const apps = computed<App[]>(() => {
    const yamlApps: App[] = yamlAppsData?.apps || []
    const docsApps: App[] = docsAppsData || []

    console.log(`📊 YAML apps: ${yamlApps.length}, Docs apps: ${docsApps.length}`)

    if (source === 'yaml') {
      console.log(`✅ Using only YAML apps: ${yamlApps.length}`)
      return yamlApps
    }

    if (source === 'docs') {
      console.log(`✅ Using only Docs apps: ${docsApps.length}`)
      return docsApps
    }

    const mergedApps = [...docsApps]

    yamlApps.forEach((yamlApp) => {
      const existingIndex = mergedApps.findIndex((docApp) => docApp.appstream.name === yamlApp.appstream.name)

      if (existingIndex === -1) {
        mergedApps.push(yamlApp)
      } else {
        const existingApp = mergedApps[existingIndex]
        mergedApps[existingIndex] = {
          ...yamlApp,
          more: existingApp.more
        }
      }
    })

    console.log(`✅ Total merged apps: ${mergedApps.length}`)
    return mergedApps
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
      group: app.group,
      more: app.more
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
