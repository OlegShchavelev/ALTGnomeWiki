<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import { VPTeamPageTitle, VPTeamMembers, VPButton } from 'vitepress/theme'
import AGWTeamPageAction from './AGWTeamPageAction.vue'
import teams from '../../data/teams.data.yaml'

const { site } = useData()
const lang = computed(() => site.value.lang.replace('ru-RU', 'ru'))
const transformedTeams = computed(() => {
  return teams.map((team: any) => ({
    ...team,
    name: team.name[lang.value] ?? team.name,
    desc: typeof team.desc === 'object' && Object.keys(team.desc).length ? team.desc[lang.value] : team.desc
  }))
})

export interface Member {
  title: string
  lead?: string
  size: 'small' | 'medium'
}

interface Props {
  title: string
  lead?: string
  size?: 'small' | 'medium'
  limit?: number
  tids?: Array<string> | null
  layout: string
  moreLink?: string
  moreText?: string
}

withDefaults(defineProps<Props>(), {
  limit: 6,
  size: 'small',
  layout: 'doc',
  tids: null
})
</script>

<template>
  <VPTeamPage v-if="layout == 'home'">
    <VPTeamPageTitle>
      <template v-if="title" #title> {{ title }} </template>
      <template v-if="lead" #lead>{{ lead }}</template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="transformedTeams.slice(0, 6)" />
    <AGWTeamPageAction>
      <template v-if="moreLink" #action>
        <VPButton :text="moreText" class="button" size="big" :href="moreLink" />
      </template>
    </AGWTeamPageAction>
  </VPTeamPage>
  <VPTeamMembers
    v-else
    :members="
      transformedTeams.filter((team: Member) => (tids ? tids.includes(team.title) : true)).slice(0, limit)
    "
    :size="size"
    :limit="limit"
  />
</template>
