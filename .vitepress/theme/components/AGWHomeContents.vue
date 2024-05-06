<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPButton,
  VPHomeSponsors
} from 'vitepress/theme'

import AGWTeamPageButton from './AGWTeamPageButton.vue';
import { contributions } from '../../../_data/team'
import { sponsors } from '../../../_data/sponsors'

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

<VPHomeSponsors
    v-if="sponsors"
    message="Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности."
    :data="sponsors"
/>

</template>