<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { useData } from 'vitepress'

import AGWAsideMetaList from './AGWAsideMetaList.vue'
import AGWAsideMetaLink from './AGWAsideMetaLink.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

import { getLists, getLinks } from '../composables/asidemeta'

const { frontmatter, theme } = useData();

const thumb = computed(() => frontmatter.value?.appstream?.icon ? {
    src: frontmatter.value?.appstream?.icon?.src ?? frontmatter.value?.appstream?.icon,
    title: frontmatter.value?.appstream?.icon.title ?? frontmatter.value?.appstream?.name ?? null
} : {})
const title = computed(() => frontmatter.value?.appstream?.summary)
const lists = computed(() => getLists(frontmatter.value?.appstream?.url, theme.value?.asideMeta?.lists?.labels))
const links = computed(() => getLinks(frontmatter.value.aggregation, theme.value?.asideMeta?.links))
const hasAsideMeta = computed(() => title.value || thumb.value?.src || lists.value)

console.log(theme.value.asideMeta.links);

</script>

<template>
    <article v-if="hasAsideMeta" class="AKWDocsAsideMeta">
        <figure class="figure" v-if="thumb.src">
            <VPImage :image="thumb.src" :alt="thumb.title" />
        </figure>
        <div class="body">
            <div v-if="title" class="title">{{ title }}</div>
        </div>
        <AGWAsideMetaList :lists="lists" />
        <AGWAsideMetaLink :links="links" />
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

.figure> :deep(.VPImage) {
    filter: grayscale(1);
    transition: filter 0.25s;
    width: 128px;
    height: 128px;
}
</style>