<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPButton,
} from 'vitepress/theme'

import AGWHomeTeamButton from './AGWHomeTeamButton.vue';
import AGWHomeTeamMembers from './AGWHomeTeamMembers.vue';
import AGWTeamLoader from './AGWTeamLoader.vue';

</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                Участники
            </template>
        </VPTeamPageTitle>
        <ClientOnly>
            <Suspense>
                <AGWHomeTeamMembers/>
                <template #fallback>
                    <AGWTeamLoader />
                </template>
            </Suspense>
        </ClientOnly>
        <AGWHomeTeamButton>
            <VPButton text="Все участники" class="button" size="big" href="/contributions" />
        </AGWHomeTeamButton>
    </VPTeamPage>
</template>