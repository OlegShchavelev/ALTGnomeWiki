<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import { transformKeywords, transformActions } from '../composables/useMeta'
import AGWAsideMeta from './AGWAsideMeta.vue'
import type { AGWTheme } from '../types/index'

const { frontmatter, theme } = useData()

const fm = computed(() => {
  const appstream = frontmatter.value.appstream ?? {}
  const { icon, name, summary, developer } = appstream
  const aggregation = frontmatter.value.aggregation
  const meta = theme.value.meta

  const lists: AGWTheme.MetaLists[] = [
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

  const showAsideMeta = Object.keys(appstream).length

  return {
    showAsideMeta: showAsideMeta,
    appstream: {
      icon: icon,
      name: name,
      summary: summary,
      developer: developer,
      keywords: transformKeywords(appstream.keywords, meta.keywords),
      lists: lists,
      actions: transformActions(aggregation, meta.actions)
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
