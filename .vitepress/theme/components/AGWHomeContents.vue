<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
} from 'vitepress/theme'

import VPTeamMembers from './VPTeamMembers.vue'
import { VPHomeSponsors } from 'vitepress/theme'

import { members } from '../../../_data/team'
import { sponsors } from '../../../_data/sponsors'

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

<VPHomeSponsors
    v-if="sponsors"
    message="Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности."
    :data="sponsors"
/>

</template>

<style scoped>
</style>