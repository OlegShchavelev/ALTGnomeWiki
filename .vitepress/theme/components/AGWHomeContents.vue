<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
} from 'vitepress/theme'

import AGWTeamMembers from './AGWTeamMembers.vue'
import { VPHomeSponsors } from 'vitepress/theme'

import { contributions } from '../../../_data/team'
import { sponsors } from '../../../_data/sponsors'

</script>

<template>
<VPTeamPage>
  <Suspense><AGWTeamMembers :members="contributions" /></Suspense>
</VPTeamPage>

<VPHomeSponsors
    v-if="sponsors"
    message="Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности."
    :data="sponsors"
/>

</template>

<style scoped>
</style>