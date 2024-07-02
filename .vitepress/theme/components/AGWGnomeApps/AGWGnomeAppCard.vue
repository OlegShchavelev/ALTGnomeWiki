<script setup>
import { computed } from 'vue'
import AGWAsideMetaLink from '../AGWAsideMetaLink.vue';
import { useData } from 'vitepress';

const { theme } = useData()
const config = theme.value.asideMeta
import { getLinks } from '../../composables/asidemeta'

const props = defineProps({
  app: Object
})

const { icon, name, summary, metadata_license, developer, keywords, url } = props.app.frontmatter.appstream
const wiki_url = props.app.url

const links = getLinks({ ...props.app.frontmatter.aggregation, ...{ about_app: wiki_url.slice(1, wiki_url) } }, config.links)
console.log(theme.value.asideMeta)

</script>

<template>
    <article class="AGWGnomeAppCard">
      <div class="profile">
        <figure class="avatar">
          <img class="avatar-img" :src="icon"/>
        </figure>
        <div class="data">
          <h3 class="name">
            {{name}}
          </h3>
          <p class="affiliation">
            {{summary}}
          </p>
        </div>
      </div>
      <AGWAsideMetaLink :links="links" />
    </article>
</template>

<style scoped>
.AGWCardRepoLinks {
  display: block;
  justify-content: center;
}
.AGWCardRepoLink {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
  text-decoration:none;
}

.AGWCardRepoLink:hover, :hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.AGWGnomeAppCard {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.profile {
  padding: 32px;
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
}

.data {
  padding-top: 20px;
  text-align: center;
}

.avatar {
  width: 64px;
  height: 64px;
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: var(--vp-shadow-3);
}

.avatar-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  object-fit: cover;
}

.name {
  line-height: 24px;
  font-size: 16px;
  margin: 0;
  font-weight: 600;
}

.affiliation {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
  margin: 0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.org.link {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.org.link:hover {
  color: var(--vp-c-brand-1);
}

.desc {
  margin: 0 auto;
  padding-top: 12px;
  line-height: 20px;
  font-size: 14px;
}

.desc :deep(a) {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration-style: dotted;
  transition: color 0.25s;
}

.links {
  margin: 0 -16px -20px;
  padding: 10px 0 0;
  display: flex;
  justify-content: center;
  height: 56px;
}

.sp-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sp .sp-link.link:hover,
.sp .sp-link.link:focus {
  outline: none;
  color: var(--vp-c-white);
  background-color: var(--vp-c-sponsor);
}

.sp-icon {
  margin-right: 8px;
  font-size: 16px;
}
</style>