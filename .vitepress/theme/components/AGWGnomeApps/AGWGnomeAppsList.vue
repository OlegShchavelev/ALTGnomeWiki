<script setup>
import { useData } from 'vitepress'
import AGWGnomeAppCard from './AGWGnomeAppCard.vue'
import { data as apps } from '../../loaders/appsGnomeDataLoader.data.ts'

const { frontmatter } = useData()

const props = defineProps({
  category: String
})

const getAppsList = () => {
  const rawWikiApps = apps.filter((app) => {
    return app?.frontmatter?.appstream?.keywords?.includes(props?.category)
  })

  const Apps = []

  rawWikiApps.forEach((app) => {
    Apps.push({
      ...app.frontmatter,
      ...{ about_app: app.url.split('/')[2] }
    })
  })

  Object.entries(frontmatter?.value?.apps?.[props.category]).forEach((app) => {
    Apps.find((appFound) => appFound.appstream.name == app[1].appstream.name) ? '' : Apps.push({ ...app[1] })
  })

  return Apps
}

const appsByCategory = getAppsList().sort((app1, app2) => {
  return app1.appstream.name.localeCompare(app2.appstream.name, 'ru-RU')
})
</script>

<template>
  <div class="container">
    <AGWGnomeAppCard v-for="app of appsByCategory" :app="app" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  max-width: calc(276px * 4 + 24px * 2) !important;
}
</style>
