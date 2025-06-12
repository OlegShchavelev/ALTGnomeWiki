<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import AGWAsideMeta from './AGWAsideMeta.vue'

const { frontmatter, theme } = useData()

const fm = computed(() => {
  const appstream = frontmatter.value.appstream ?? {}
  const { icon, name, summary, developer } = appstream
  const aggregation = frontmatter.value.aggregation
  const meta = theme.value.meta

  const keywords = appstream.keywords?.map((keyword: string, key: number) => {
    const types = meta.keywords
    return {
      name: keyword,
      type: types[keyword] ?? 'tip'
    }
  })

  const lists = [
    ...(appstream.metadata_license
      ? [
          {
            caption: 'license',
            link: appstream.metadata_license.link,
            text: appstream.metadata_license.name
          }
        ]
      : []),

    ...Object.entries(appstream.url ?? {}).map(([key, value]) => ({
      caption: key,
      link: value
    }))
  ]

  const actions = Object.entries(aggregation ?? {})
    .filter(([key]) => meta.actions && key in meta.actions)
    .map(([key, value]) => {
      // Initialize variables for ID and additional properties
      let id: string
      let extraProps: Record<string, any> = {}

      // Process value based on its type
      if (typeof value === 'string') {
        // String format: use value directly as ID
        id = value
      } else if (value && typeof value === 'object') {
        // Object format: extract ID property and store other properties
        id = value.id

        // Preserve all other properties except 'id'
        const { id: _, ...rest } = value
        extraProps = rest
      }

      // Retrieve base action configuration from meta.actions
      const baseActionConfig = meta.actions[key] || {}

      // Merge properties with priority:
      // 1. Core properties (id and text)
      // 2. Base configuration from meta.actions
      // 3. Additional properties from object format
      // 4. Guaranteed text = key for translation
      return {
        id,
        ...baseActionConfig,
        ...extraProps,
        text: key
      }
    })

  const showAsideMeta = Object.keys(appstream).length

  return {
    showAsideMeta: showAsideMeta,
    appstream: {
      icon: icon,
      name: name,
      summary: summary,
      developer: developer,
      keywords: keywords,
      lists: lists,
      actions: actions
    }
  }
})
</script>

<template>
  <AGWAsideMeta
    class="AGWDocsAsideMeta"
    v-if="fm.showAsideMeta"
    :icon="fm.appstream.icon"
    :name="fm.appstream.name"
    :summary="fm.appstream.summary"
    :developer="fm.appstream.developer"
    :keywords="fm.appstream.keywords"
    :lists="fm.appstream.lists"
    :actions="fm.appstream.actions"
  />
</template>
