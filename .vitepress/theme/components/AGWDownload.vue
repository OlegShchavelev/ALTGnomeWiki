<script setup lang="ts">
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
import AGWDownloadPage from './AGWDownloadPage.vue'
import AGWDownloadPageTitle from './AGWDownloadPageTitle.vue'
import AGWDownloads from './AGWDownloads.vue'

interface Props {
  longtitle: string
  lead?: string
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <AGWDownloadPage>
    <AGWDownloadPageTitle>
      <template v-if="fm.longtitle" #title> {{ fm.longtitle }} </template>
      <template v-if="fm.lead" #lead>{{ fm.lead }}</template>
    </AGWDownloadPageTitle>
    <AGWDownloads :layout="fm.layout" />
  </AGWDownloadPage>
</template>
