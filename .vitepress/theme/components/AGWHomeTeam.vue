<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPButton,
  VPTeamMembers,
} from 'vitepress/theme'

import { sortMembers } from '../composables/sorters';
import { homeSorting, limit, contributions } from '../../../_data/team';
import { data as gitOnline } from '../../../_data/gitlog-loader.data.ts'

console.log(gitOnline)

</script>

<template>
    <CientOnly>
        <VPTeamPage v-if="gitOnline.length">
            <VPTeamPageTitle>
                <template #title>
                    Участники
                </template>
            </VPTeamPageTitle>
            <VPTeamMembers :members="sortMembers(gitOnline, homeSorting).slice(0,limit)" />
            <div class="teamButton">
                <VPButton text="Все участники" class="button" size="big" href="/contributions" />
            </div>
        </VPTeamPage>
        <VPTeamPage v-if="!gitOnline.length">
            <VPTeamPageTitle>
                <template #title>
                    Участники
                </template>
            </VPTeamPageTitle>
            <VPTeamMembers :members="contributions.slice(0,limit)" />
            <div class="teamButton">
                <VPButton text="Все участники" class="button" size="big" href="/contributions" />
            </div>
        </VPTeamPage>
    </CientOnly>
</template>

<style scoped>
.teamButton {
    margin-top: 40px;
    display: grid;
    place-items: center;
}
</style>