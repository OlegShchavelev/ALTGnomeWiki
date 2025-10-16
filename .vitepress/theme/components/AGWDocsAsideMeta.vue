<script setup lang="ts">
import { useAsideMeta } from '../composables/useMeta'
import AGWAsideMeta from './AGWAsideMeta.vue'

const { appstreamData, showAsideMeta } = useAsideMeta()
</script>

<template>
  <AGWAsideMeta
    v-if="showAsideMeta"
    class="AGWDocsAsideMeta"
    :icon="appstreamData.icon"
    :name="appstreamData.name"
    :summary="appstreamData.summary"
    :developer="appstreamData.developer"
    :keywords="appstreamData.keywords"
    :lists="appstreamData.lists"
    :actions="appstreamData.actions"
  />
</template>
