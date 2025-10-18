<script setup lang="ts">
import { VPTeamPage } from 'vitepress/theme'
import AGWDownloads from './AGWDownloads.vue'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPTeamPage>
    <AGWDownloads
      v-if="fm.downloads"
      :title="fm.downloads.title"
      :lead="fm.downloads.lead"
      :layout="fm.layout"
    />
  </VPTeamPage>
</template>
