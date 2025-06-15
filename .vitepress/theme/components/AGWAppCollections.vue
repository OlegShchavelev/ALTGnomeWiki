<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import { transformKeywords, transformActions } from '../composables/useMeta'
import AGWAppPageSection from './AGWAppPageSection.vue'
import AGWAppRows from './AGWAppRows.vue'
import apps from '../../../docs/ru/apps-gnome/apps.yaml'

const { theme } = useData()

const transformedApps = computed(() => {
  const meta = theme.value.meta

  return apps.map((app: any) => ({
    ...app,
    name: app.appstream.name,
    icon: app.appstream.icon,
    summary: app.appstream.summary,
    keywords: transformKeywords(app.appstream.keywords, meta.keywords),
    actions: transformActions(app.aggregation, meta.actions)
  }))
})

export interface App {
  title: string
  lead?: string
  group?: string
}

defineProps<{
  rows: App[]
}>()
</script>

<template>
  <AGWAppPageSection v-for="row in rows">
    <template #title> {{ row.title }}</template>
    <template v-if="row.lead" #lead> {{ row.lead }}</template>
    <template #rows>
      <AGWAppRows :rows="transformedApps.filter((app: any) => app.group?.includes(row.group))" />
    </template>
  </AGWAppPageSection>
</template>

<style scoped>
.AGWAppPageSection + .AGWAppPageSection {
  margin-top: 64px;
}

@media (min-width: 768px) {
  .AGWAppPageSection + .AGWAppPageSection {
    margin-top: 96px;
  }
}
</style>
