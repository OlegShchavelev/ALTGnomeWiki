<script setup>
import { useData } from 'vitepress'
import AGWGnomeAppCard from './AGWDownloadCard.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="container">
    <AGWGnomeAppCard v-for="(branch, name) of frontmatter.archs2" :branch :name :key="name" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
}
</style>
