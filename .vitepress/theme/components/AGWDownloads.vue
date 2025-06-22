<script setup lang="ts">
import images from '../../data/images.data.yaml'
import AGWDownloadsItem from './AGWDownloadsItem.vue'
</script>

<template>
  <div class="container">
    <div class="download-rows">
      <AGWDownloadsItem v-for="(image, index) in images" :key="index" :image="image" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
}

.download-rows {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
