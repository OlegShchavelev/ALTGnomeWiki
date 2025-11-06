<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPHomeContent } from 'vitepress/theme'
import AGWTeamMembers from './AGWTeamMembers.vue'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <div class="AGWTeam">
    <slot name="team-top" />
    <VPTeamPage>
      <VPTeamPageTitle>
        <template v-if="fm.longtitle" #title> {{ fm.longtitle }} </template>
        <template v-if="fm.introtext" #lead>{{ fm.introtext }}</template>
      </VPTeamPageTitle>
      <AGWTeamMembers :members="fm.members" />
      <VPHomeContent>
        <Content />
      </VPHomeContent>
    </VPTeamPage>
    <slot name="team-bottom" />
  </div>
</template>

<style scoped>
.VPTeamPage {
  margin: 96px 0;
}

@media (min-width: 768px) {
  .VPTeamPage {
    margin: 128px 0;
  }
}
</style>
