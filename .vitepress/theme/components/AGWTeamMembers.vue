<script setup lang="ts">
import { contributions, mainPageTopLimit } from '../../../_data/team';
import { VPTeamMembers } from 'vitepress/theme';
import { gitRepository } from '../../../_data/gitlog'
import { getContributors, filterContributors, getContributorsTopInfo } from '../utils/gitStats'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4]
)


if (contributors) {
    contributors = filterContributors(contributors, mainPageTopLimit)
    contributors = getContributorsTopInfo(contributors)
} else {
  contributors = contributions.slice(0, mainPageTopLimit)
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
  <VPTeamMembers :members="contributors" />
</template>