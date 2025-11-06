import { computed } from 'vue'
import { useData } from './data'
import type {
  MetaKeyword,
  MetaKeywords,
  MetaKeywordKey,
  MetaActionItem,
  MetaActionKey,
  MetaActionsTheme,
  MetaLists,
  MetaAction,
  LinkObj
} from '../types'

export const transformKeywords = (
  dataKeywords?: string[],
  configKeywords?: MetaKeyword
): MetaKeywords[] | undefined => {
  if (!dataKeywords) return undefined

  return dataKeywords.map((keyword) => ({
    name: keyword,
    type: configKeywords?.[keyword as MetaKeywordKey] ?? 'tip'
  }))
}

export const transformActions = (
  dataActions?: Record<string, any>,
  configActions?: MetaAction
): MetaActionItem[] => {
  if (!dataActions) return []

  return Object.entries(dataActions)
    .filter(([key]) => configActions?.[key as MetaActionKey])
    .map(([key, value]) => {
      const baseValue =
        typeof value === 'object' && value !== null ? value : { id: typeof value === 'string' ? value : key }

      const { id = key, ...extraProps } = baseValue

      return {
        id,
        text: key,
        target: '_blank',
        theme: key as MetaActionsTheme,
        ...(configActions?.[key as MetaActionKey] ?? {}),
        ...extraProps
      }
    })
}

const toMetaList = (caption: string, value: string | LinkObj): MetaLists => {
  if (typeof value === 'string') {
    return { caption, link: value }
  }
  return {
    caption,
    link: value.link,
    text: value.name
  }
}

export const useAsideMeta = () => {
  const { frontmatter, theme } = useData()

  const metaLists = computed<MetaLists[]>(() => {
    const appstream = frontmatter.value.appstream ?? {}
    const lists: MetaLists[] = []

    if (appstream.metadata_license) {
      lists.push({
        caption: 'license',
        link: appstream.metadata_license.link,
        text: appstream.metadata_license.name
      })
    }

    if (appstream.url) {
      Object.entries(appstream.url).forEach(([caption, value]) => {
        lists.push(toMetaList(caption, value as string | LinkObj))
      })
    }

    return lists
  })

  const appstreamData = computed(() => {
    const appstream = frontmatter.value.appstream ?? {}
    const aggregation = frontmatter.value.aggregation
    const meta = theme.value.meta

    return {
      icon: appstream.icon,
      name: appstream.name,
      summary: appstream.summary,
      developer: appstream.developer,
      keywords: transformKeywords(appstream.keywords, meta?.keywords),
      lists: metaLists.value,
      actions: transformActions(aggregation, meta?.actions)
    }
  })

  const showAsideMeta = computed(() => {
    const appstream = frontmatter.value.appstream
    return appstream && Object.keys(appstream).length > 0
  })

  return {
    appstreamData,
    showAsideMeta,
    metaLists
  }
}
