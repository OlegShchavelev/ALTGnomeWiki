<script setup>
import { computed } from 'vue'
import AGWAsideMetaLink from '../AGWAsideMetaLink.vue';
import AGWAsideMetaKeyword from '../AGWAsideMetaKeyword.vue'
import { useData } from 'vitepress';

const { theme } = useData()
const config = theme.value.asideMeta
import { getLinks, getKeywords } from '../../composables/asidemeta'

const props = defineProps({
  app: Object
})

//console.log(props.app)

const cardProps = computed(() => {
  const { icon, name, summary } = props.app.appstream
  const repos = Object.fromEntries(Object.entries(props.app.aggregation).sort( (repo1, repo2) => {
      return repo1[0] == 'sisyphus'?-1:1
  }))

  console.log(repos)
  const is_adaptive = props.app.appstream?.keywords?.includes('adaptive')?['adaptive']:[]
  const is_donttheme = props.app.appstream?.keywords?.includes('dontthemes')?['dontthemes']:[]

  return {
    icon: icon,
    name: name,
    summary: summary,
    links: getLinks({ ...repos , ...{ about_app: props.app.about_app }, snap: undefined }, config.links),
    keywords: getKeywords([...is_adaptive, ...is_donttheme], config.keywords),
  }
})

</script>

<template>
    <article class="AGWGnomeAppCard">
      <div class="profile">
        <figure class="avatar">
          <img class="avatar-img" :src="cardProps.icon"/>
        </figure>
        <div class="data">
          <h3 class="name">
            {{cardProps.name}}
          </h3>
          <div class="badges">
            <AGWAsideMetaKeyword :keywords="cardProps.keywords" />
          </div>
          <p class="affiliation">
            {{cardProps.summary}}
          </p>
        </div>
      </div>
      <AGWAsideMetaLink :links="cardProps.links" />
    </article>
</template>

<style scoped>

.badges {
  margin-top: 5px;
}

.badges[data-v-834f837e] {
  display: inline;
}

AGWAsideMetaLink {
  text-decoration: none;
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

</style>