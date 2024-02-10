<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { DefaultTheme, useData } from 'vitepress'
import * as icon from '../../icons'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const { theme, frontmatter } = useData();
const props = computed(() => frontmatter.value.docs.categories ?? theme.value.docs.categories ?? []);

console.log(props);

const url = '#';
</script>

<template>
    <article class="docsCategories">
        <h2 v-if="props.title">{{ props.title }}</h2>
        <div class="items">
            <div class="item grid-4">
                <div class="card">
                    <div class="body">
                        <div class="title">Браузеры</div>
                        <ul>
                            <li>
                                <VPLink :href="url">Яндекс Браузер</VPLink>
                            </li>
                            <li>
                                <VPLink :href="url">Chromium</VPLink>
                            </li>
                            <li>
                                <VPLink :href="url">Opera</VPLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="item grid-4">
                <div class="card">
                    <div class="body">
                        <div class="icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                                    stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </div>
                        <div class="title">Месенджеры</div>
                        <ul>
                            <li>
                                <VPLink :href="url">Telegrem</VPLink>
                            </li>
                            <li>
                                <VPLink :href="url">ICQ</VPLink>
                            </li>
                            <li>
                                <VPLink :href="url">Viber</VPLink>
                            </li>
                            <li>
                                <VPLink :href="url">Whatsapp</VPLink>
                            </li>
                            <li>
                                <VPLink :href="url">VK Massager</VPLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.docsCategories {
    margin-bottom: 48px;
}

h2 {
    font-size: 24px;
    line-height: 56px;
    margin-bottom: 16px;
    font-weight: bold;
    letter-spacing: -0.02em;
}

.items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
}

.item {
    padding: 8px;
}

.item.grid-4 {
    width: calc(100% / 4);
}

.card {
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-bg-soft);
    display: block;
    border-radius: 12px;
}

.body {
    padding: 24px;
}

.icon {
    margin-bottom: 16px;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
}</style>