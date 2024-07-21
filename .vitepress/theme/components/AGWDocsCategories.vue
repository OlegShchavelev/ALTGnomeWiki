<script setup lang="ts">
import { useData } from '../../support/data'
import AGWCatigories from './AGWCatigories.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <AGWCatigories
    v-if="fm.docs && fm.docs.categories && fm.docs.categories.items"
    class="AGWCatigories"
    :title="fm.docs.categories.title"
    :items="fm.docs.categories.items"
  />
</template>
