<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

import AGWAsideMetaLink from '../AGWAsideMetaLink.vue'

import { getLinks } from '../../composables/asidemeta'


const { theme } = useData()
const config = theme.value.asideMeta

const props = defineProps({
  branch: String,
  data: Object
})

const cardProps = computed(() => {
  return {
    ...props.data,
    md5sum: 'adw8546daw5d485sa2s3aw854d86a1s',
    sha256sum: 'awdwa6d8w4a6s51d486aw4d1w6a84d6',
    links: getLinks({
        alt_download: props.data.links.alt,
        yandex_download: props.data.links.yandex
      }, config.links)
  }
})
</script>

<template>
  <div class="card">
  <Badge
        v-if="cardProps.recommended"
        class="recommendations"
        type="tip"
        text="Рекомендуемый"
  />
  <article class="AGWDownloadCard">
    <div class="summary">
      <img class="branch-img" :src="`/download/${props.branch}.png`" />
      <div class="branch-info">
        <h3 class="branch-name">{{props.branch}}</h3>

        <div class="about" v-for="benefit of cardProps.benefits">
          <svg class="i-octicon:check-16"></svg>
          <p class="affiliation">
            {{ benefit }}
          </p>
        </div>
        <div class="about" v-for="bad of cardProps.bads">
          <svg class="i-octicon:plus-16"></svg>
          <p class="affiliation">
            {{ bad }}
          </p>
        </div>

      </div>
    </div>
    <div class="data">
      <p class="affiliation">
        MD5:<br>
        {{ cardProps.md5sum }}<br>
        SHA256:<br>
        {{ cardProps.md5sum }}
      </p>
    </div>
    <AGWAsideMetaLink :links="cardProps.links" />
  </article>
  </div>
</template>

<style scoped>
.i-octicon\:plus-16{
  transform: rotate(45deg);
}

.card {
  position: relative;
}

.about {
  display: flex;
}

.recommendations {
  z-index: 3;
  margin-top: -6px;
  text-align: center;
  position: absolute;
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  margin-left: 30%;
  width: 40%;
}

AGWAsideMetaLink {
  text-decoration: none;
}

.AGWDownloadCard {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

}

.summary {
  border: solid;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-color: var(--vp-c-bg-soft);
  padding: 32px;
  flex-grow: 1;
  background-color: var(--vp-c-gray-2);
}

.data {
  padding: 15px;
  text-align: center;
  background-color: var(--vp-c-bg-soft);
}

.branch-img {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 5px;
}

.branch-name {
  text-align: center;
}

.affiliation {
  line-height: 20px;
  font-size: 14px;
  margin: 0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
