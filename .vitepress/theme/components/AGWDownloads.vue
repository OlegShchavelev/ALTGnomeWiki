<script setup lang="ts">
import { ref, computed } from 'vue'
import images from '../../data/images.data.yaml'
import AGWDownloadsItem from './AGWDownloadsItem.vue'

interface Props {
  title?: string
  lead?: string
  layout?: string
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'doc'
})

const activeTab = ref(0)

const isHomePage = computed(() => props.layout === 'home')
const isDocPage = computed(() => props.layout === 'doc')
const isDownloadPage = computed(() => props.layout === 'download')
const shouldShowTabs = computed(() => props.layout === 'home' || props.layout === 'doc')

function setActiveTab(index: number) {
  activeTab.value = index
}
</script>

<template>
  <div class="AGWDownloads" :class="{ AGWDownloadsHome: isHomePage, AGWDownloadsDoc: isDocPage }">
    <div :class="{ container: isHomePage || isDownloadPage }">
      <div v-if="isHomePage" class="AGWDownloadsTitle">
        <h2 v-if="title" class="title">{{ title }}</h2>
        <p v-if="lead" class="lead">{{ lead }}</p>
      </div>

      <div v-if="shouldShowTabs" class="tabs">
        <button
          v-for="(image, idx) in images"
          :key="idx"
          class="tab"
          :class="{ active: activeTab === Number(idx) }"
          @click="setActiveTab(Number(idx))"
        >
          {{ image.name }}
        </button>
      </div>

      <div class="download-rows" :class="{ 'tabs-content': shouldShowTabs }">
        <template v-if="shouldShowTabs">
          <AGWDownloadsItem
            v-for="(image, idx) in images"
            v-show="activeTab === Number(idx)"
            :key="idx"
            :image="image"
          />
        </template>
        <template v-else>
          <AGWDownloadsItem v-for="(image, idx) in images" :key="idx" :image="image" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AGWDownloads {
  display: grid;
  gap: 24px;
  padding: 0 24px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.download-rows {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.AGWDownloadsHome {
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-gutter);
}

.AGWDownloadsDoc {
  margin-top: 32px;
  padding: 0;
}

.AGWDownloadsDoc :deep(.VPButton) {
  text-decoration: none;
}

.AGWDownloadsTitle {
  text-align: center;
  padding: 48px 32px;
}

.title {
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0;
}

.lead {
  margin: 16px auto 0;
  max-width: 576px;
  font-size: 16px;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.tabs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: thin;
}

.tabs::-webkit-scrollbar {
  height: 6px;
}

.tabs::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
}

.tabs::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 3px;
}

.tab {
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
}

.tab:hover {
  background-color: var(--vp-c-default-2);
}

.tab.active {
  color: var(--vp-c-white);
  background-color: var(--vp-button-brand-bg);
}

.tab.active:hover {
  background-color: var(--vp-c-brand-2);
}

.tabs-content {
  position: relative;
}

@media (min-width: 640px) {
  .tabs {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.5px;
  }

  .lead {
    font-size: 18px;
    line-height: 28px;
  }
}

@media (min-width: 960px) {
  .AGWDownloadsTitle {
    padding: 80px 64px 48px;
  }
  .download-rows {
    gap: 24px;
  }
}
</style>
