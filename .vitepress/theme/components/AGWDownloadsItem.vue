<script setup lang="ts">
import { VPLink } from 'vitepress/theme'
import AGWDownloadButton from './AGWDownloadButton.vue'

defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="AGWDownloadsItem">
    <div class="card">
      <div class="body">
        <div class="title">{{ image.name }}</div>
        <div class="text">{{ image.description }}</div>
        <div class="actions">
          <template v-for="action in image.actions">
            <VPLink :href="action.link">{{ action.text }}</VPLink>
          </template>
        </div>
      </div>
      <div class="body">
        <div class="downloads">
          <template v-for="image in image.downloads" :key="image.arch">
            <div v-for="branch in image.branches" :key="branch.name" class="download">
              <dl>
                <dt>Архитектура:</dt>
                <dd>{{ image.arch }}</dd>
                <dt>Тип выпуска:</dt>
                <dd>{{ branch.name }}</dd>
              </dl>
              <AGWDownloadButton :urls="branch.images[0].urls" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.AGWDownloadsItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  height: 100%;
}

.card {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px 16px;
  position: relative;
}

.AGWDownloadsItem .title {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.title {
  margin: 0;
  font-weight: 600;
}

.title + .text {
  margin-top: 16px;
}

.title + .actions,
.text + .actions {
  margin-top: 16px;
}

.text {
  margin: 0 auto;
}

.actions {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
}

.actions .link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
  text-decoration: none;
}

.actions .link:hover {
  color: var(--vp-c-brand-1);
}

.action :deep(.VPFlyout:hover .VPButton) {
  background-color: var(--vp-button-brand-bg);
}

.body + .body {
  margin-top: 32px;
}

.downloads {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.download {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  background-color: var(--vp-c-bg);
  border-radius: 12px;
  gap: 12px;
}

dl {
  margin-top: 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 8px;
  margin-right: auto;
  width: 100%;
}

dt {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

dd {
  margin-left: 0;
  font-size: 14px;
  font-weight: bold;
  padding-left: 4px;
  padding-right: 8px;
}

.AGWDownloadButton {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}

.AGWDownloadButton :deep(.VPButton) {
  width: 100%;
}

@media (min-width: 640px) {
  dl {
    display: inline-flex;
    grid-template-columns: none;
  }

  .AGWDownloadButton {
    width: auto;
  }
}

@media (min-width: 768px) {
  .actions {
    flex-direction: row;
  }
  .download {
    flex-direction: row;
    align-items: center;
  }
}

@media (min-width: 960px) {
  .card {
    padding: 48px 32px;
  }
}
</style>
