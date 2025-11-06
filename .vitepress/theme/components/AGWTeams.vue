<script setup lang="ts">
import { computed } from 'vue'
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPButton } from 'vitepress/theme'
import AGWTeamPageAction from './AGWTeamPageAction.vue'
import type { Member } from '../types/index'
import { useTeams } from '../composables/useTeams'

const props = withDefaults(defineProps<Member>(), {
  limit: 6,
  size: 'small',
  layout: 'doc',
  tids: null
})

const { teams, filterTeamsByIds, filterTeamsByLimit } = useTeams()

const members = computed(() => {
  const rowTeams = props.tids ? filterTeamsByIds(props.tids) : teams.value
  return filterTeamsByLimit(rowTeams ?? [], props.limit)
})
</script>

<template>
  <VPTeamPage v-if="layout === 'home'">
    <VPTeamPageTitle>
      <template v-if="title" #title>{{ title }}</template>
      <template v-if="lead" #lead>{{ lead }}</template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members" />
    <AGWTeamPageAction v-if="moreLink">
      <template #action>
        <VPButton :text="moreText" class="button" size="big" :href="moreLink" />
      </template>
    </AGWTeamPageAction>
  </VPTeamPage>

  <VPTeamMembers v-else :members="members" :size="size" />
</template>
