<script setup lang="ts">
import { useData } from '../../data'
import AGWCatigories from './AGWCatigories.vue'

const { frontmatter: fm } = useData()
console.log(fm)
</script>

<template>
    <AGWCatigories
      v-if="fm.docs && fm.docs.categories && fm.docs.categories.items"
      class="AGWCatigories"
      :items="fm.docs.categories.items"
    />
</template>
  