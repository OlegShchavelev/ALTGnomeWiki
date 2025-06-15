<script setup lang="ts">
import { VPHomeContent } from 'vitepress/theme'
import { useData } from '../composables/data'
import AGWAppPage from './AGWAppPage.vue'
import AGWAppPageTitle from './AGWAppPageTitle.vue'
import AGWAppCollections from './AGWAppCollections.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <AGWAppPage>
    <AGWAppPageTitle>
      <template v-if="fm.longtitle" #title> {{ fm.longtitle }} </template>
      <template v-if="fm.introtext" #lead>{{ fm.introtext }}</template>
    </AGWAppPageTitle>
    <AGWAppCollections :rows="fm.rows" />
    <VPHomeContent>
      <Content />
    </VPHomeContent>
  </AGWAppPage>
</template>
