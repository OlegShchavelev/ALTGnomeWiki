<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <h3 v-if="frontmatter?.analogues">Похожие приложения</h3>
  <div v-for="{ link, description, title } in frontmatter?.analogues" :key="title">
    <AGWLinkBlock :href="link" :title="description">{{ title }}</AGWLinkBlock>
  </div>
</template>
