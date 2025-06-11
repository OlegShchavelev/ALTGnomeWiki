<script setup lang="ts">
import { VPTeamPage } from 'vitepress/theme'
import AGWTeams from './AGWTeams.vue'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPTeamPage>
    <AGWTeams
      :title="fm.teams.title"
      :lead="fm.teams.lead"
      :moreText="fm.teams.moreText"
      :moreLink="fm.teams.moreLink"
      :layout="fm.layout"
    />
  </VPTeamPage>
</template>
