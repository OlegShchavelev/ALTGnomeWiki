<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { DefaultTheme, useData } from 'vitepress'


const {theme, frontmatter} = useData();
const appsMetaWidgets = computed(() => frontmatter.value.appsMetaWidgets ?? theme.value.appsMetaWidgets ?? []);

import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

</script>

<template>
    <article v-if="appsMetaWidgets.active" class="AppsWidget">
        <Badge v-if="appsMetaWidgets.adaptive" type="tip">Адаптивный</Badge>
        <Badge v-if="appsMetaWidgets.proprietary" type="danger">Проприетарный</Badge>
        <figure class="figure" v-if="appsMetaWidgets.thumb.src">
            <VPImage
            :image="appsMetaWidgets.thumb.src"
            :alt="appsMetaWidgets.thumb.title"
            class="card-image"
            />
            <img src="">
        </figure>
        <div class="card-body">
            <div class="card-title">{{ appsMetaWidgets.introtext }}</div>
        </div>
        <dl>
            <dt v-if="appsMetaWidgets.licence.url">Лицензия</dt>
            <dd v-if="appsMetaWidgets.licence.url">
                <VPLink :href="appsMetaWidgets.licence.url" class="title">
                    {{ appsMetaWidgets.licence.anchor }}
                </VPLink>
            </dd>
            <dt v-if="appsMetaWidgets.site.url">Сайт проекта</dt>
            <dd v-if="appsMetaWidgets.site.url">
                <VPLink :href="appsMetaWidgets.site.url" target="_blank" class="title">
                    {{ appsMetaWidgets.site.anchor }}
                </VPLink>
            </dd>
            <dt v-if="appsMetaWidgets.translate.url">Помочь с переводами</dt>
            <dd v-if="appsMetaWidgets.translate.url">
                <VPLink :href="appsMetaWidgets.translate.url" target="_blank" class="title">
                    {{ appsMetaWidgets.translate.anchor }}
                </VPLink>
            </dd>
            <dt v-if="appsMetaWidgets.issue.url">Сообщить о проблеме</dt>
            <dd v-if="appsMetaWidgets.issue.url">
                <VPLink :href="appsMetaWidgets.issue.url" target="_blank" class="title">
                    {{ appsMetaWidgets.issue.anchor }}
                </VPLink>
            </dd>
        </dl>
        <div class="footet">
            <a target="_blank" v-if="appsMetaWidgets.gnomeCircle" :href="'https://circle.gnome.org'" class="link-gnome-circle">GNOME Circle</a>
            <a target="_blank" v-if="appsMetaWidgets.sponsor.url" :href="appsMetaWidgets.sponsor.url" class="link-gnome-sponsor">Поддержать автора</a>
            <a target="_blank" v-if="appsMetaWidgets.sisyphus.url" :href="appsMetaWidgets.sisyphus.url" class="link-gnome-sisyphus">Сизиф</a>
            <a target="_blank" v-if="appsMetaWidgets.flathub.url" :href="appsMetaWidgets.flathub.url" class="link-gnome-flathub">Flathub</a>
        </div>
    </article>
</template>

<style scoped>
.AppsWidget {
    overflow: hidden;
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    margin-top: 24px;
}

.card-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}

.card-title:last-child, .card-title:only-child {
    margin-bottom: 0;
}

.card-body {
    padding: 16px;
}

.title {
    line-height: 1.2;
}

.figure {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
}

.VPBadge {
    border-radius: 0;
}

dl {
    margin-top: 0;
    margin-bottom: 0;
}

dt {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

dd {
    margin-left: 0;
    font-size: 14px;
    padding-bottom: 8px;
    margin-bottom: 8px;

}

dd:not(:last-child) {
    border-bottom: 1px solid var(--vp-c-divider);
}

dt,
dd {
    padding-left: 16px;
    padding-right: 16px;
}

.link-gnome-circle {
    padding: 8px 24px;
    text-align: center;
    transition: all .5s ease-in-out;
    display: grid;
    color: var(--vp-c-green-darker);
    background-color: var(--vp-c-green-dimm-1);
    font-weight: bold;
}


.link-gnome-sponsor {
    padding: 8px 24px;
    text-align: center;
    transition: all .5s ease-in-out;
    display: grid;
    color: var(--vp-c-purple-3);
    background-color: var(--vp-c-purple-soft);
    font-weight: bold;
}

.link-gnome-sisyphus {
    padding: 8px 24px;
    text-align: center;
    transition: all .5s ease-in-out;
    display: grid;
    color: var(--vp-c-yellow-darker);
    background-color: var(--vp-c-yellow-dimm-1);
    font-weight: bold;
}

.link-gnome-flathub {
    padding: 8px 24px;
    text-align: center;
    transition: all .5s ease-in-out;
    display: grid;
    color: var(--vp-c-blue-darker);
    background-color: var(--vp-c-blue-dimm-1);
    font-weight: bold;
}

.link-gnome-circle:hover {
    background-color: var(--vp-c-green-darker);
    color: #edfdf0;
}

.link-gnome-sponsor:hover {
    background-color: var(--vp-c-purple-3);
    color: #fff;
}

.link-gnome-sisyphus:hover {
    background-color: var(--vp-c-yellow-darker);
    color: #fff;
}

.link-gnome-flathub:hover {
    background-color: var(--vp-c-blue-darker);
    color: #fff;
}</style>