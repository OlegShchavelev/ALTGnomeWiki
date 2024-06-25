<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPButton,
  VPTeamMembers,
} from 'vitepress/theme'

import { sortMembers } from '../composables/sorters';
import { homeSorting, limit } from '../../../_data/team';
import * as team from '../../../_data/newteam.json'


</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                Участники
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members="sortMembers(team.default, homeSorting).slice(0,limit)" />
        <div class="teamButton">
            <VPButton text="Все участники" class="button" size="big" href="/contributions" />
        </div>
    </VPTeamPage>
</template>

<style scoped>
.teamButton {
    margin-top: 40px;
    display: grid;
    place-items: center;
}
</style>