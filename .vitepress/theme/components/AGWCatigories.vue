<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import AGWCategory from './AGWCategory.vue'

export interface Items {
  title: string
  icon?: DefaultTheme.FeatureIcon
  apps: [
    {
      name: string
      link: string
    }
  ]
}

const props = defineProps<{
  title?: string
  items: Items[]
}>()
</script>

<template>
  <div v-if="items" class="AGWCatigories">
    <h2 v-if="title">{{ title }}</h2>
    <div class="items">
      <div v-for="item in items" :key="item.title" class="item grid-4">
        <AGWCategory :title="item.title" :icon="item.icon" :apps="item.apps" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.AGWCatigories {
  margin-bottom: 48px;
}

h2 {
  font-size: 24px;
  line-height: 56px;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: -0.02em;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-4 {
    width: calc(100% / 2);
  }
}

@media (min-width: 1060px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
