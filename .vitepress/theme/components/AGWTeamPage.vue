<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPTeamPageSection, VPTeamMembers } from 'vitepress/theme'

import { developersSection, membersSection, teamSorting } from '../../../_data/team.ts'
import {default as map} from '../../../_data/fullteam.json'
import { sortMembers } from '../composables/sorters.ts'

import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <ClientOnly>
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
            {{ developersSection.description }}
          </template>
          <template #members>
            <VPTeamMembers
              :members="
                sortMembers(map, teamSorting).filter((member) => member.title.includes('Разработчик'))
              "
            />
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
            <VPTeamMembers
              :members="
                sortMembers(map, teamSorting).filter((member) => !member.title.includes('Разработчик'))
              "
            />
          </template>
        </VPTeamPageSection>
      </div>

      <div v-if="!teamSorting.includes('role')">
        <VPTeamMembers :members="sortMembers(map, teamSorting)" />
      </div>

      <Content class="container" />
    </VPTeamPage>
  </ClientOnly>
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

.container {
  margin: 40px auto;
  max-width: 1152px;
  padding: 0 64px;
}

@media (min-width: 1600px) {
  .container {
    padding: 0;
  }
}
@media (max-width: 960px) {
  .container {
    padding: 0 48px;
  }
}
</style>
