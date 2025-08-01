<script setup>
import { computed, watchEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const route = useRoute()

const currentPath = computed(() => route.path)

const license = computed(() => frontmatter.value.license || 'CC-BY-SA-4.0')
const originUrl = computed(() => frontmatter.value.origin_url)
const originAuthor = computed(() => frontmatter.value.origin_author)
const originTitle = computed(() => frontmatter.value.origin_title)

const baseRepoUrl = 'https://altlinux.space/alt-gnome/wiki/src/branch/transfer/docs/ru'
const pagePath = computed(() => route.path.replace(/\.html$/, '.md') + 'index.md')
const sourceLink = computed(() => `${baseRepoUrl}${pagePath.value}`)
</script>

<template>
  <div class="VPDocFooter">
    <p class="message">
      <a :href="`${sourceLink}`">Содержимое</a> этой страницы доступно по лицензии
      <a :href="`https://spdx.org/licenses/CC-BY-SA-4.0.html`">CC BY-SA 4.0</a>.
    </p>
  </div>
</template>

<style scoped>
.VPDocFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPDocFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
