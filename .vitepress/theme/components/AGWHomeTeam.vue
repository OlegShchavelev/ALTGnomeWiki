<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPButton, VPTeamMembers } from 'vitepress/theme'

import { sortMembers } from '../composables/sorters.ts'
import { homeSorting, limit } from '../../../_data/team.ts'
import {default as map} from '../../../_data/fullteam.json'
</script>

<template>
  <ClientOnly>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template #title> Участники </template>
      </VPTeamPageTitle>
      <VPTeamMembers :members="sortMembers(map, homeSorting).slice(0, limit)" />
      <div class="teamButton">
        <VPButton text="Все участники" class="button" size="big" href="/contributions" />
      </div>
    </VPTeamPage>
  </ClientOnly>
</template>

<style scoped>
.VPTeamPage {
  margin-left:var(--vp-offset) !important;
  margin-right:var(--vp-offset) !important;
}
.teamButton {
  margin-top: 40px;
  display: grid;
  place-items: center;
}
</style>
