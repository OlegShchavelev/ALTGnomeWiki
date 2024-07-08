<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { useData } from 'vitepress'

import AGWAsideMetaList from './AGWAsideMetaList.vue'
import AGWAsideMetaLink from './AGWAsideMetaLink.vue'
import AGWAsideMetaKeyword from './AGWAsideMetaKeyword.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

import { getLists, getLinks, getKeywords, getLicence, getDonation } from '../composables/asidemeta'

const { frontmatter, theme } = useData()

const props = computed(() => {
  if (!frontmatter.value.appstream) return

  const { icon, name, summary, metadata_license, developer, keywords, url } = frontmatter.value.appstream
  const links = frontmatter.value.aggregation
  const config = theme.value.asideMeta

  return {
    thumb: icon,
    name: name,
    title: summary,
    keywords: getKeywords(keywords, config.keywords),
    developer: developer,
    lists: getLists(
      { ...getLicence(frontmatter.value?.appstream?.metadata_license), ...url },
      config.lists.labels
    ),
    links: getLinks({ ...getDonation(url.donation), ...links }, config.links)
  }
})
</script>

<template>
  <article v-if="props" class="AKWDocsAsideMeta">
    <figure class="figure" v-if="props.thumb">
      <VPImage :image="props.thumb" :alt="props.thumb.alt ?? props.name" />
    </figure>
    <div class="body">
      <div v-if="props.title" class="title">{{ props.title }}</div>
      <AGWAsideMetaKeyword :keywords="props.keywords" />
      <div v-if="props.developer" class="developers">
        <figure v-if="props.developer?.avatar" class="avatar">
          <VPImage :image="props.developer?.avatar" :alt="props.developer?.name" />
        </figure>
        <div>
          <div class="caption">Разработчик</div>
          <div class="name">
            {{ props.developer?.name }}
            <span class="nickname">
              {{ props.developer?.nickname }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <AGWAsideMetaList :lists="props.lists" />
    <AGWAsideMetaLink :links="props.links" />
  </article>
</template>

<style scoped>
.AKWDocsAsideMeta {
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  margin-top: 24px;
}

.AKWDocsAsideMeta:hover :deep(.VPImage) {
  filter: grayscale(0) invert(0);
}

.body {
  padding: 16px;
}

.title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.title:last-child,
.title:only-child {
  margin-bottom: 0;
}

.figure {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
}

.figure > :deep(.VPImage) {
  filter: grayscale(1);
  transition: filter 0.25s;
  width: 128px;
  height: 128px;
}

.developers {
  margin-top: 12px;
  display: flex;
  gap: 12px;
}

.avatar {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: var(--vp-shadow-3);
}

.caption {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.name {
  line-height: 1.5;
  font-size: 14px;
}

.nickname {
  display: block;
  font-size: 11px;
  color: var(--vp-c-text-3);
  font-weight: 500;
}
</style>
