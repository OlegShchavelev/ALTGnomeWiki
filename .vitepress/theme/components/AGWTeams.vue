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
  tids: null,
  homeLimit: 6
})

const { teams, filterTeamsByIds, filterTeamsByLimit } = useTeams()

const members = computed(() => {
  const isHome = props.layout === 'home'
  const rowTeams = props.tids ? filterTeamsByIds(props.tids) : teams.value

  const limit = isHome ? props.homeLimit : props.limit

  return filterTeamsByLimit(rowTeams ?? [], limit)
})

const { loading, error } = useTeams()
</script>

<template>
  <div v-if="loading" class="loading">{{ $t('teams.loading') }}</div>
  <div v-else-if="error" class="error">{{ $t('teams.error', { error }) }}</div>

  <VPTeamPage v-else-if="layout === 'home'">
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

<style scoped>
.loading,
.error {
  padding: 48px;
  text-align: center;
}

.error {
  color: var(--vp-c-danger-1);
}
</style>
