<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
} from 'vitepress/theme'

import AGWTeamPageMembers from './AGWTeamPageMembers.vue';

import { useData } from 'vitepress'
const { frontmatter } = useData();

</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
        <template v-if="frontmatter.longtitle" #title>
        {{ frontmatter.longtitle }}
        </template>
        </VPTeamPageTitle>
        <AGWTeamPageMembers />
    </VPTeamPage>
</template>

<style scoped>
.VPTeamPage {
    margin-top: 0;
}
</style>