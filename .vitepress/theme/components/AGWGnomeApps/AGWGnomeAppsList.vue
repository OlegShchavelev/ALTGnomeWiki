<script setup>
import { useData } from 'vitepress';
import AGWGnomeAppCard from './AGWGnomeAppCard.vue'
import { data as apps } from '../../composables/appsGnomeDataLoader.data.ts'
import { sortAppsByName } from '../../composables/sorters.ts'
const { frontmatter } = useData()

const props = defineProps({
  category: String
})

const wikiApps = () => {
  const rawApps = apps.filter(app => {
    return app?.frontmatter?.appstream?.keywords?.includes(props?.category)
  })
  
  const Apps = []

  rawApps.forEach( app => {
    Apps.push({
        ...app.frontmatter,
        ...{about_app: app.url}
    })
  })
  
  return(Apps)

}

const frontmatterApps = () => {
  const Apps = []

  Object.entries(frontmatter?.value?.apps?.[props.category]).forEach( app => {
    Apps.push({
      ...app[1]
    })
  })

  return Apps
}


const appsByCategory = [
  ...frontmatterApps(),
  ...wikiApps()
]

</script>

<template>
  <div class="container">
    <AGWGnomeAppCard v-for="app of sortAppsByName(appsByCategory)" :app="app"/>
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