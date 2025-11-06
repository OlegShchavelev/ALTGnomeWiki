<script setup lang="ts">
import { VPBadge } from 'vitepress/theme'
import type { MetaKeywords } from '../types/index'

const props = defineProps<{
  keywords?: MetaKeywords[]
}>()
</script>

<template>
  <div class="badges">
    <template v-for="keyword in keywords">
      <VPBadge :type="keyword.type" :text="$t('meta.badges.' + keyword.name)" />
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
