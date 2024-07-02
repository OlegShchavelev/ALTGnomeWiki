<script setup>
import AGWGnomeAppCard from './AGWGnomeAppCard.vue'
import { data as apps } from '../../composables/appsGnomeDataLoader.data.ts'

const props = defineProps({
  category: String
})

const appsByCategory = apps.filter(app => {
    return app?.frontmatter?.appstream?.keywords?.includes(props?.category)
})

console.log(appsByCategory)

</script>

<template>
  <div class="container">
    <AGWGnomeAppCard v-for="app of appsByCategory" :app="app"/>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  max-width: calc(276px * 3 + 24px * 2);
}
</style>