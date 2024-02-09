<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { DefaultTheme, useData } from 'vitepress'


const { theme, frontmatter } = useData();
const props = computed(() => frontmatter.value.metainfo ?? theme.value.metainfo ?? []);

import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

</script>

<template>
    <article v-if="props.active" class="AppsWidget">
        <figure class="figure" v-if="props.thumb && props.thumb.src">
            <VPImage :image="props.thumb.src" :alt="props.thumb.title" class="card-image" />
            <img src="">
        </figure>
        <div class="body">
            <div class="summary">{{ props.summary }}</div>
            <div v-if="props.adaptive || props.proprietary || props.gnomeCircle || props.gnomeCore || props.createTheme || props.restrictions" class="badges">
                <Badge v-if="props.adaptive" type="tip">Адаптивное</Badge>
                <Badge v-if="props.proprietary" type="danger">Проприетарное</Badge>
                <Badge v-if="props.gnomeCircle" type="success">GNOME Circle</Badge>
                <Badge v-if="props.gnomeCore" type="info">GNOME Core</Badge>
                <Badge v-if="props.createTheme" type="success-1">Please don’t theme</Badge>
                <Badge v-if="props.restrictions" type="danger">Региональные ограничения</Badge>
            </div>
            <div v-if="props.developer && props.developer.name" class="developers">
                <figure v-if="props.developer && props.developer.avatar" class="avatar">
                    <VPImage :image="props.developer.avatar" :alt="props.developer.name" class="avatar-developer" />
                </figure>
                <div>
                    <div class="caption">Разработчик</div>
                    <div class="name">{{ props.developer.name }}<span class="nickname">{{ props.developer.nickname }}</span></div>
                </div>
            </div>
        </div>
        <dl>
            <dt v-if="props.licence && props.licence.url">Лицензия</dt>
            <dd v-if="props.licence && props.licence.url">
                <VPLink :href="props.licence && props.licence.url" class="title">
                    {{ props.licence.anchor }}
                </VPLink>
            </dd>
            <dt v-if="props.site && props.site.url">Сайт проекта</dt>
            <dd v-if="props.site && props.site.url">
                <VPLink :href="props.site.url" target="_blank" class="title">
                    {{ props.site.anchor }}
                </VPLink>
            </dd>
            <dt v-if="props.translate && props.translate.url">Помочь с переводами</dt>
            <dd v-if="props.translate && props.translate.url">
                <VPLink :href="props.translate.url" target="_blank" class="title">
                    {{ props.translate.anchor }}
                </VPLink>
            </dd>
            <dt v-if="props.issue && props.issue.url">Сообщить о проблеме</dt>
            <dd v-if="props.issue && props.issue.url">
                <VPLink :href="props.issue.url" target="_blank" class="title">
                    {{ props.issue.anchor }}
                </VPLink>
            </dd>
        </dl>
        <div class="footet">
            <a target="_blank" v-if="props.sponsor && props.sponsor.url" :href="props.sponsor.url"
                class="link-gnome-sponsor">Поддержать автора</a>
            <a target="_blank" v-if="props.flathub && props.flathub.url" :href="props.flathub.url"
                class="link-gnome-flathub">Flathub</a>
            <a target="_blank" v-if="props.sisyphus && props.sisyphus.url" :href="props.sisyphus.url"
                class="link-gnome-sisyphus">Сизиф</a>
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

.summary {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}

.summary:last-child,
.summary:only-child {
    margin-bottom: 0;
}

.body {
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

.badges {
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
}

.VPBadge {
    border-radius: .5rem;
    padding: 0 8px;
    margin-left: 0;
}



.developers {
    margin-top: 12px;
    display: flex;
    gap: 12px;
}

.developers .avatar {
    width: 48px;
    height: 48px;
}

.avatar {
    position: relative;
    flex-shrink: 0;
    border-radius: 50%;
    box-shadow: var(--vp-shadow-3);
}

.nickname {
    display: block;
    font-size: 11px;
    color: var(--vp-c-text-3);
    font-weight: 500;
}

.name {
    line-height: 1.5;
}

dl {
    margin-top: 0;
    margin-bottom: 0;
}

dt, .developers .caption {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

dd, .developers .name {
    margin-left: 0;
    font-size: 14px;
    padding-bottom: 8px;
    margin-bottom: 8px;

}
.developers .name:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
}

dd:not(:last-child) {
    border-bottom: 1px solid var(--vp-c-divider);
}

dt,
dd {
    padding-left: 16px;
    padding-right: 16px;
}

.link-gnome-core {
    padding: 8px 24px;
    text-align: center;
    transition: all .5s ease-in-out;
    display: grid;
    color: var(--vp-c-blue-dark);
    background-color: var(--vp-c-blue-dimm-1);
    font-weight: bold;
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

.link-gnome-core:hover {
    background-color: var(--vp-c-blue-dark);
    color: #edfdf0;
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
}
</style>