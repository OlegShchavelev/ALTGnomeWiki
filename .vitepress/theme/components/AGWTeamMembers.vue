<script setup lang="ts">
import { computed } from 'vue'
import { VPTeamPageSection, VPTeamMembers } from 'vitepress/theme'
import type { Member } from '../types'
import { useTeams } from '../composables/useTeams'

const { filterTeamsByCollaborator } = useTeams()

const props = defineProps<{
  members: Member[]
}>()

const validMembers = computed(() => props.members?.filter((m) => m.title) || [])

const key = (member: Member, index: number) =>
  `${member.collaborator || 'unknown'}-${member.title || 'untitled'}-${index}`
</script>

<template>
  <template v-if="validMembers.length">
    <VPTeamPageSection v-for="(member, index) in validMembers" :key="key(member, index)">
      <template #title>{{ member.title }}</template>
      <template v-if="member.lead" #lead>{{ member.lead }}</template>
      <template #members>
        <VPTeamMembers
          :size="member.size || 'medium'"
          :members="filterTeamsByCollaborator(member.collaborator)"
        />
      </template>
    </VPTeamPageSection>
  </template>
  <div v-else class="no-members">
    <p>{{ $t('teams.empty') }}</p>
  </div>
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

.no-members {
  padding: 48px;
  text-align: center;
  color: var(--vp-c-text-2);
}
</style>
