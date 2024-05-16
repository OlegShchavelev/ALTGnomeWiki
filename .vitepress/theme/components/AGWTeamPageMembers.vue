<script setup lang="ts">

import { computed } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'

import { contributions, enable_autosearch, page_filter_type } from '../../../_data/team';
import { gitRepository } from '../../../_data/gitlog'
import { getContributors, filterContributors } from '../composables/git/stats'

const pageName = '[AGWTeamMembers]:'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4],
  enable_autosearch
).then( async response  => { 
  if (response) {
    return filterContributors( response, page_filter_type)
  } 
}).catch( err => { 
  console.warn(`${pageName} Не удалось получить данные: ${err}
                      (Сортировка будет проигнорирована. Проверьте наличие токена в .env или github actions.
                      Если вы уверены в конфигурации - откройте issue)`);
  return contributions 
})

const refs = computed(()=>{
  return contributors
})

</script>


<template>
    <VPTeamMembers :members="refs" />
</template>