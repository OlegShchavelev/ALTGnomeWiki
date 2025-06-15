<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import { VPTeamPageTitle, VPButton } from 'vitepress/theme'
import AGWAppPage from './AGWAppPage.vue'
import AGWAppPageTitle from './AGWAppPageTitle.vue'
import AGWAppRows from './AGWAppRows.vue'
import AGWAppPageAction from './AGWAppPageAction.vue'
import apps from '../../../docs/ru/apps-gnome/apps.yaml'

const { theme } = useData()

const transformedApps = computed(() => {
  const meta = theme.value.meta

  return apps.map((app: any) => ({
    ...app,
    name: app.appstream.name,
    icon: app.appstream.icon,
    summary: app.appstream.summary,
    keywords: app.appstream.keywords?.map((keyword: string) => {
      const types = meta.keywords
      return {
        name: keyword,
        type: types[keyword] ?? 'tip'
      }
    }),
    actions: Object.entries(app.aggregation ?? {})
      .filter(([key]) => meta.actions?.[key])
      .map(([key, value]) => {
        const baseValue =
          typeof value === 'object' && value !== null
            ? value
            : { id: typeof value === 'string' ? value : undefined }

        const { id = key, ...extraProps } = baseValue as { id?: string }

        return {
          id,
          text: key,
          ...(meta.actions[key] ?? {}),
          ...extraProps
        }
      })
  }))
})

interface Props {
  title: string
  lead?: string
  size?: 'small' | 'medium'
  limit?: number
  layout: string
  moreLink?: string
  moreText?: string
}

withDefaults(defineProps<Props>(), {
  limit: 6,
  size: 'small',
  layout: 'doc'
})
</script>

<template>
  <AGWAppPage>
    <AGWAppPageTitle>
      <template v-if="title" #title> {{ title }} </template>
      <template v-if="lead" #lead>{{ lead }}</template>
    </AGWAppPageTitle>
    <AGWAppRows :rows="transformedApps.slice(0, 6)" />
    <AGWAppPageAction>
      <template v-if="moreLink" #action>
        <VPButton :text="moreText" class="button" size="big" :href="moreLink" />
      </template>
    </AGWAppPageAction>
  </AGWAppPage>
</template>
