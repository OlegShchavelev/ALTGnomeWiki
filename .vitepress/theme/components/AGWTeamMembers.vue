<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import { VPTeamPageSection, VPTeamMembers } from 'vitepress/theme'
import type { Collaborator } from '../types/index'
import teams from '../../data/teams.data.yaml'

const { site } = useData()
const lang = computed(() => site.value.lang.replace('ru-RU', 'ru'))

export interface Member {
  title: string
  lead?: string
  collaborator: Collaborator
  name: string | object
  size?: 'small' | 'medium'
}

defineProps<{
  members: Member[]
}>()
</script>

<template>
  <VPTeamPageSection v-for="member in members">
    <template #title> {{ member.title }}</template>
    <template v-if="member.lead" #lead> {{ member.lead }}</template>
    <template #members>
      <VPTeamMembers
        :size="member.size"
        :members="
          teams
            .map((team: any) => ({
              ...team,
              name: team.name[lang] ?? team.name,
              desc:
                typeof team.desc === 'object' && Object.keys(team.desc).length ? team.desc[lang] : team.desc
            }))
            .filter((team: any) => team.collaborator.includes(member.collaborator))
        "
      />
    </template>
  </VPTeamPageSection>
</template>

<style scoped>
.VPTeamPageSection + .VPTeamPageSection {
  margin-top: 64px;
}

@media (min-width: 768px) {
  .VPTeamPageSection + .VPTeamPageSection {
    margin-top: 96px;
  }
}
</style>
