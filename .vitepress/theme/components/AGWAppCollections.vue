<script setup lang="ts">
import AGWAppPageSection from './AGWAppPageSection.vue'
import AGWAppRows from './AGWAppRows.vue'
import { useApps } from '../composables/useApps'
import { AppRows } from '../types'

const { transformedApps, filterAppsByGroup } = useApps()

defineProps<{
  rows: AppRows[]
}>()

const key = (row: AppRows, index: number) => `${row.group || 'unknown'}-${row.title || 'untitled'}-${index}`
</script>

<template>
  <template v-if="rows.length">
    <AGWAppPageSection v-for="(row, index) in rows" :key="key(row, index)">
      <template #title> {{ row.title }}</template>
      <template v-if="row.lead" #lead> {{ row.lead }}</template>
      <template #rows>
        <AGWAppRows :rows="filterAppsByGroup(transformedApps, row.group || '')" size="medium" />
      </template>
    </AGWAppPageSection>
  </template>
  <div v-else class="no-apps">
    <p>No applications found</p>
  </div>
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

.no-apps {
  padding: 48px;
  text-align: center;
  color: var(--vp-c-text-2);
}
</style>
