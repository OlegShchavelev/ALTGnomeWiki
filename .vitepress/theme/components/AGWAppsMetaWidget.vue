<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { DefaultTheme, useData } from 'vitepress'


const { theme, frontmatter } = useData();
const metainfo = computed(() => frontmatter.value.metainfo ?? theme.value.metainfo ?? false);

const props = {
    sisyphusId: frontmatter.value.sisyphus,
    flatpakId: frontmatter.value.appstreamFlatpak,
    snapcraftId: frontmatter.value.nameSnap
}

import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';


</script>

<template>
    <article v-if="metainfo" class="AppsWidget">
        <figure class="figure" v-if="metainfo.thumb && metainfo.thumb.src">
            <VPImage :image="metainfo.thumb.src" :alt="metainfo.thumb.title" class="card-image" />
            <img src="">
        </figure>
        <div class="body">
            <div class="summary">{{ metainfo.summary }}</div>
            <div v-if="metainfo.adaptive || metainfo.proprietary || metainfo.gnomeCircle || metainfo.gnomeCore || metainfo.createTheme || metainfo.restrictions"
                class="badges">
                <Badge v-if="metainfo.adaptive" type="tip">Адаптивное</Badge>
                <Badge v-if="metainfo.proprietary" type="danger">Проприетарное</Badge>
                <Badge v-if="metainfo.gnomeCircle" type="success">GNOME Circle</Badge>
                <Badge v-if="metainfo.gnomeCore" type="info">GNOME Core</Badge>
                <Badge v-if="metainfo.createTheme" type="success-1">Please don’t theme</Badge>
                <Badge v-if="metainfo.restrictions" type="danger">Региональные ограничения</Badge>
            </div>
            <div v-if="metainfo.developer && metainfo.developer.name" class="developers">
                <figure v-if="metainfo.developer && metainfo.developer.avatar" class="avatar">
                    <VPImage :image="metainfo.developer.avatar" :alt="metainfo.developer.name" class="avatar-developer" />
                </figure>
                <div>
                    <div class="caption">Разработчик</div>
                    <div class="name">{{ metainfo.developer.name }}<span class="nickname">{{ metainfo.developer.nickname
                    }}</span>
                    </div>
                </div>
            </div>
        </div>
        <dl>
            <dt v-if="metainfo.licence && metainfo.licence.url">Лицензия</dt>
            <dd v-if="metainfo.licence && metainfo.licence.url">
                <VPLink :href="metainfo.licence && metainfo.licence.url" class="title">
                    {{ metainfo.licence.anchor }}
                </VPLink>
            </dd>
            <dt v-if="metainfo.site && metainfo.site.url">Сайт проекта</dt>
            <dd v-if="metainfo.site && metainfo.site.url">
                <VPLink :href="metainfo.site.url" target="_blank" class="title">
                    {{ metainfo.site.anchor }}
                </VPLink>
            </dd>
            <dt v-if="metainfo.translate && metainfo.translate.url">Помочь с переводами</dt>
            <dd v-if="metainfo.translate && metainfo.translate.url">
                <VPLink :href="metainfo.translate.url" target="_blank" class="title">
                    {{ metainfo.translate.anchor }}
                </VPLink>
            </dd>
            <dt v-if="metainfo.issue && metainfo.issue.url">Сообщить о проблеме</dt>
            <dd v-if="metainfo.issue && metainfo.issue.url">
                <VPLink :href="metainfo.issue.url" target="_blank" class="title">
                    {{ metainfo.issue.anchor }}
                </VPLink>
            </dd>
        </dl>
        <div class="footet">
            <a target="_blank" v-if="metainfo.sponsor && metainfo.sponsor.url" :href="metainfo.sponsor.url"
                class="link-gnome-sponsor">Поддержать автора</a>
            <a target="_blank" v-if="(metainfo.snapcraft && metainfo.snapcraft.url) || (metainfo.snapcraft !== false && props.snapcraftId)"
                :href="(metainfo.snapcraft && metainfo.snapcraft.url) ? metainfo.snapcraft.url : 'https://snapcraft.io/' + props.snapcraftId"
                class="link-gnome-snap">Snapcraft</a>
            <a target="_blank" v-if="(metainfo.flathub && metainfo.flathub.url) || (metainfo.flathub !== false && props.flatpakId)"
                :href="(metainfo.flathub && metainfo.flathub.url) ? metainfo.flathub.url : 'https://flathub.org/apps/' + props.flatpakId"
                class="link-gnome-flathub">Flathub</a>
            <a target="_blank" v-if="(metainfo.sisyphus && metainfo.sisyphus.url) || (metainfo.sisyphus !== false && props.sisyphusId)" :href="(metainfo.sisyphus && metainfo.sisyphus.url) ? metainfo.sisyphus.url : 'https://packages.altlinux.org/ru/sisyphus/srpms/' + props.sisyphusId"
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

.figure> :deep(.VPImage) {
    filter: grayscale(1);
    transition: filter 0.25s;
}

.AppsWidget:hover .figure> :deep(.VPImage) {
    filter: grayscale(0) invert(0);
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

dt,
.developers .caption {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

dd,
.developers .name {
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

.link-gnome-snap {
    padding: 8px 24px;
    text-align: center;
    transition: all .5s ease-in-out;
    display: grid;
    color: var(--vp-c-orange-darker);
    background-color: var(--vp-c-orange-dimm-1);
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

.link-gnome-snap:hover {
    background-color: var(--vp-c-orange-darker);
    color: #fff;
}

.link-gnome-flathub:hover {
    background-color: var(--vp-c-blue-darker);
    color: #fff;
}
</style>