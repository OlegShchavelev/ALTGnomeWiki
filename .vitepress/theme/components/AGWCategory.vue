<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

defineProps<{
  title: string
  icon?: DefaultTheme.FeatureIcon
  apps: [
    {
      name: string
      link: string
    }
  ]
}>()
</script>

<template>
  <div class="card">
    <div class="body">
      <div v-if="typeof icon === 'object' && icon.wrap" class="icon">
        <VPImage :image="icon" :alt="icon.alt" :height="icon.height || 48" :width="icon.width || 48" />
      </div>
      <VPImage
        v-else-if="typeof icon === 'object'"
        :image="icon"
        :alt="icon.alt"
        :height="icon.height || 48"
        :width="icon.width || 48"
      />
      <div v-else-if="icon" class="icon" v-html="icon"></div>
      <div class="title">{{ title }}</div>
      <ul v-if="apps" class="AGWCategoryNav">
        <li v-for="app in apps" :key="app.name">
          <VPLink class="AGWCategoryNavLink" :href="app.link" tabindex="0">
            {{ app.name }}
          </VPLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  display: block;
  border-radius: 12px;
  height: 100%;
}

.body {
  padding: 24px;
}

.body > :deep(.VPImage) {
  margin-bottom: 20px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
}

.AGWCategoryNav {
  padding-left: 0;
  list-style: none;
  line-height: 16px;
}

.AGWCategoryNavLink {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
  text-decoration: none;
}

.AGWCategoryNavLink.active {
  color: var(--vp-c-brand-1);
}

.AGWCategoryNavLink:hover {
  color: var(--vp-c-brand-1);
}
</style>
