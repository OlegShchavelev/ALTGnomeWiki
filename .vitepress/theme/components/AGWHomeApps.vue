<script setup lang="ts">
import { VPTeamPage } from 'vitepress/theme'
import AGWApps from './AGWApps.vue'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPTeamPage>
    <AGWApps
      :title="fm.apps.title"
      :lead="fm.apps.lead"
      :moreText="fm.apps.moreText"
      :moreLink="fm.apps.moreLink"
      :layout="fm.layout"
    />
  </VPTeamPage>
</template>
