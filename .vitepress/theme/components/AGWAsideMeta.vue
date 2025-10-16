<script setup lang="ts">
import AGWMetaImage from './AGWMetaImage.vue'
import AGWMetaKeywords from './AGWMetaKeyword.vue'
import AGWMetaDeveloper from './AGWMetaDeveloper.vue'
import AGWMetaLists from './AGWMetaList.vue'
import AGWMetaActions from './AGWMetaActions.vue'
import type { MetaKeywords, MetaDeveloper, MetaLists, MetaActionItem } from '../types'

interface Actions {
  id: string
  text: string
  target: string
  theme: string
  baseUrl: string
}

defineProps<{
  icon?: string
  name: string
  summary?: string
  keywords?: MetaKeywords[]
  developer?: MetaDeveloper
  lists?: MetaLists[]
  actions?: MetaActionItem[]
}>()
</script>

<template>
  <article>
    <div class="card">
      <AGWMetaImage :icon="icon" />
      <div class="body">
        <div class="title" v-if="name">{{ name }}</div>
        <div class="text" v-if="summary">{{ summary }}</div>
        <AGWMetaKeywords :keywords="keywords" />
        <AGWMetaDeveloper :developer="developer" />
      </div>
      <AGWMetaLists :lists="lists" />
      <AGWMetaActions :actions="actions" />
    </div>
  </article>
</template>

<style scoped>
.AGWDocsAsideMeta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 24px;
}

.card {
  padding-top: 32px;
  background-color: var(--vp-c-bg-soft);
}

.body {
  padding: 24px 16px;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.text {
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
}
</style>
