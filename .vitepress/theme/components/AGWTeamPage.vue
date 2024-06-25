ву<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers,
} from 'vitepress/theme'

import { developersSection, membersSection, teamSorting } from '../../../_data/team';
import { sortMembers } from '../composables/sorters';
import * as team from '../../../_data/newteam.json'


import { useData } from 'vitepress'
const { frontmatter } = useData();

</script>

<template>
    <VPTeamPage>

        <VPTeamPageTitle>
            <template v-if="frontmatter.longtitle" #title>
                {{ frontmatter.longtitle }}
            </template>
        </VPTeamPageTitle>
        
        <div v-if="teamSorting.includes('role')">
            <VPTeamPageSection class="team">
                <template #title>
                    {{ developersSection.title }}
                </template>
                <template #lead>
                    {{ developersSection.description }}}
                </template>
                <template #members>
                    <VPTeamMembers :members="sortMembers(team.default, teamSorting).filter( member => member.title.includes('Разработчик'))" />
                </template>
            </VPTeamPageSection>

            <VPTeamPageSection class="team">
                <template #title>
                    {{ membersSection.title }}
                </template>
                <template #lead>
                    {{ membersSection.description }}
                </template>
                <template #members>
                    <VPTeamMembers :members="sortMembers(team.default, teamSorting).filter( member => !member.title.includes('Разработчик'))" />
                </template>
            </VPTeamPageSection>
        </div>

        <div v-if="!teamSorting.includes('role')">
            <VPTeamMembers :members="sortMembers(team.default, teamSorting)" />
        </div>

    </VPTeamPage>
</template>

<style scoped>
.VPTeamPage {
    margin-top: 0;
}

.title {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  letter-spacing: 0;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--vp-c-bg);
}

.team {
    margin-bottom: 40px;
}
</style>