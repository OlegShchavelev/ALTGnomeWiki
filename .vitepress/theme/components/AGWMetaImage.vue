<script setup lang="ts">
import { VPImage } from 'vitepress/theme'

defineProps<{
  icon?: string
}>()
</script>

<template>
  <figure class="figure" v-if="icon">
    <VPImage :image="icon" :alt="icon" />
  </figure>
</template>

<style scoped>
.figure {
  margin: 0 auto;
  width: 96px;
  height: 96px;
}
</style>
