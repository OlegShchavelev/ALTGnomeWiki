<script setup lang="ts">
import AGWAppPageSection from './AGWAppPageSection.vue'
import AGWAppRows from './AGWAppRows.vue'
import apps from '../../../docs/ru/apps-gnome/apps.yaml'

const filterAppsByGroup = (group?: string) => {
  if (!group) return apps
  return apps.filter((app) => app.group === group)
}

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
      <AGWAppRows :rows="filterAppsByGroup(row.group)" />
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
