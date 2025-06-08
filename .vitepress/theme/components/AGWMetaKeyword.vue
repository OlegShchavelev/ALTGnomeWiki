<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { VPBadge } from 'vitepress/theme'
import type { AGWTheme } from '../types/index'

const props = defineProps<{
  keywords?: AGWTheme.MetaKeywords[]
}>()
</script>

<template>
  <div class="badges">
    <template v-for="keyword in keywords">
      <VPBadge :type="keyword.type" :text="$t('meta.bagdes.' + keyword.name)" />
    </template>
  </div>
</template>

<style scoped>
.badges {
  padding-top: 8px;
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
}
</style>
