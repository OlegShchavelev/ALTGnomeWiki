<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
} from 'vitepress/theme'

import VPTeamMembers from './VPTeamMembers.vue'
import { members } from '../../../_data/team'
</script>

<template #home-team-after>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Участники
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
</template>

<style scoped>
</style>