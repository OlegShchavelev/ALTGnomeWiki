<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPButton,
} from 'vitepress/theme'

import AGWTeamPageButton from './AGWTeamPageButton.vue';
import { contributions } from '../../../_data/team'

const { members, size } = defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  members: {
    type: Object,
    default: () => {
      return contributions ?? [];
    },
  },
});

</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        Участники
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="contributions.slice(0, 6)" />
    <AGWTeamPageButton>
      <VPButton text="Все участники" class="button" size="big" href="/contributions.html" />
    </AGWTeamPageButton>
  </VPTeamPage>
</template>
