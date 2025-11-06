<script setup lang="ts">
import { VPImage } from 'vitepress/theme'

defineProps<{
  icon?: string
}>()
</script>

<template>
  <figure class="AGWDocsAsideImage" v-if="icon">
    <VPImage :image="icon" :alt="icon" />
  </figure>
</template>

<style scoped>
.AGWDocsAsideImage {
  margin: 0 auto;
  width: 96px;
  height: 96px;
}

.AGWDocsAsideImage :deep(.VPImage) {
  width: 100%;
  filter: grayscale(1);
  transition: filter 0.25s;
}
</style>
