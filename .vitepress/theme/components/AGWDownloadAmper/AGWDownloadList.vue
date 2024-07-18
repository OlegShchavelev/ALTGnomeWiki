<script setup>
import { useData } from "vitepress";
import AGWDownloadCard from "./AGWDownloadCard.vue";

const { frontmatter } = useData()

</script>

<template>
  <div v-for="arch of Object.keys(frontmatter.archs)">
    <h2 class="arch-title">{{ arch }}</h2>
    <div class="VPHome, container">
      <AGWDownloadCard
        v-for="branch of Object.keys(frontmatter.archs[arch])"
        :branch="branch"
        :data="frontmatter.archs[arch][branch]"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  max-width: calc(276px * 3 - 30px) !important;
}
.arch-title {
  text-align: center;
}
</style>
