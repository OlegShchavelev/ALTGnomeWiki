<script setup lang="ts">
import { contributions } from '../../../_data/team';
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';
import { gitRepository } from '../../../_data/gitlog'
import { getContributors, filterContributors, getContributorsTopInfo } from '../utils/gitStats'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4]
)


if (contributors) {
    contributors = filterContributors(contributors, 6)
    contributors = getContributorsTopInfo(contributors)
}

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
    <VPTeamMembers :members="contributors" />
  </VPTeamPage>
</template>