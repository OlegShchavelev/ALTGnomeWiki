<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { useData } from 'vitepress'

import AGWAsideMetaList from './AGWAsideMetaList.vue'
import AGWAsideMetaLink from './AGWAsideMetaLink.vue'
import AGWAsideMetaKeyword from './AGWAsideMetaKeyword.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

import { getLists, getLinks, getKeywords, getLicence, getDonation } from '../composables/asidemeta'

const { frontmatter, theme } = useData();

const thumb = computed(() => frontmatter.value?.appstream?.icon ? {
    src: frontmatter.value?.appstream?.icon?.src ?? frontmatter.value?.appstream?.icon,
    title: frontmatter.value?.appstream?.icon.title ?? frontmatter.value?.appstream?.name ?? null
} : {})
const title = computed(() => frontmatter.value?.appstream?.summary)
const lists = computed(() => getLists(Object.assign({}, getLicence(frontmatter.value?.appstream?.metadata_license), frontmatter.value?.appstream?.url), theme.value?.asideMeta?.lists?.labels ?? {}))
const links = computed(() => getLinks(Object.assign({}, getDonation(frontmatter.value?.appstream?.url.donation), frontmatter.value.aggregation), theme.value?.asideMeta?.links ?? {}))
const keywords = computed(() => getKeywords(frontmatter.value?.appstream?.keywords, theme.value?.asideMeta?.keywords))
const developer = computed(() => frontmatter.value?.appstream?.developer)
const hasAsideMeta = computed(() => title.value || thumb.value?.src || developer.value)

</script>

<template>
    <article v-if="hasAsideMeta" class="AKWDocsAsideMeta">
        <figure class="figure" v-if="thumb.src">
            <VPImage :image="thumb.src" :alt="thumb.title" />
        </figure>
        <div class="body">
            <div v-if="title" class="title">{{ title }}</div>
            <AGWAsideMetaKeyword :keywords="keywords" />
            <div v-if="developer" class="developers">
                <figure v-if="developer?.avatar" class="avatar">
                    <VPImage :image="developer?.avatar" :alt="developer?.name" />
                </figure>
                <div>
                    <div class="caption">Разработчик</div>
                    <div class="name">{{ developer?.name }}<span class="nickname">{{ developer?.nickname }}</span>
                    </div>
                </div>
            </div>
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