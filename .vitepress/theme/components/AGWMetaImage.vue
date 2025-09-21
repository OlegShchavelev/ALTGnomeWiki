<script setup lang="ts">
import { useImagePath } from '../composables/useImagePath'
import { VPImage } from 'vitepress/theme'

defineProps<{
  icon?: string
}>()

const getImagePath = useImagePath()
</script>

<template>
  <figure class="figure" v-if="icon">
    <VPImage :image="getImagePath(icon)" :alt="icon" />
  </figure>
</template>

<style scoped>
.figure {
  margin: 0 auto;
  width: 96px;
  height: 96px;
}
</style>
