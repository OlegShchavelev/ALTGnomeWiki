<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPButton, VPTeamMembers } from 'vitepress/theme'

import { sortMembers } from '../composables/sorters'
import { homeSorting, limit, contributions } from '../../../_data/team'
import { data as gitOnline } from '../loaders/gitlogDataLoader.data.ts'
</script>

<template>
  <ClientOnly>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template #title> Участники </template>
      </VPTeamPageTitle>
      <VPTeamMembers :members="gitOnline.length ? sortMembers(gitOnline, homeSorting).slice(0, limit) : contributions.slice(0, limit)" />
      <div class="teamButton">
        <VPButton text="Все участники" class="button" size="big" href="/contributions" />
      </div>
    </VPTeamPage>
  </ClientOnly>
</template>

<style scoped>
.teamButton {
  margin-top: 40px;
  display: grid;
  place-items: center;
}
</style>
