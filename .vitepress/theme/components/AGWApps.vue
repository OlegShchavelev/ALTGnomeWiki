<script setup lang="ts">
import { computed } from 'vue'
import { VPButton } from 'vitepress/theme'
import AGWAppPage from './AGWAppPage.vue'
import AGWAppPageTitle from './AGWAppPageTitle.vue'
import AGWAppRows from './AGWAppRows.vue'
import AGWAppPageAction from './AGWAppPageAction.vue'
import { useApps } from '../composables/useApps'
import { AppRows } from '../types'

const { transformedApps, filterAppsByLimit } = useApps()

const props = withDefaults(defineProps<AppRows>(), {
  limit: 6,
  size: 'medium',
  layout: 'doc',
  homeLimit: 6
})

const apps = computed(() => {
  const isHome = props.layout === 'home'
  const limit = isHome ? props.homeLimit : props.limit
  return filterAppsByLimit(transformedApps.value, limit)
})
</script>

<template>
  <AGWAppPage v-if="layout === 'home'">
    <AGWAppPageTitle>
      <template v-if="title" #title> {{ title }} </template>
      <template v-if="lead" #lead>{{ lead }}</template>
    </AGWAppPageTitle>
    <AGWAppRows :rows="apps" :size="size" />
    <AGWAppPageAction v-if="moreLink">
      <template #action>
        <VPButton :text="moreText" class="button" size="big" :href="moreLink" />
      </template>
    </AGWAppPageAction>
  </AGWAppPage>

  <AGWAppRows v-else :rows="apps" :size="size" />
</template>
