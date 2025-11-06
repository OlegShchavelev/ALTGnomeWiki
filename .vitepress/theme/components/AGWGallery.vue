<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import AGWGalleryPageTitle from './AGWGalleryPageTitle.vue'
import AGWGalleryContent from './AGWGalleryContent.vue'

interface Props {
  alias?: string
}

const props = defineProps<Props>()
const { frontmatter: fm } = useData()

const gallery = computed(() => {
  const gallery = fm.value.gallery

  if (!gallery) return null

  if (Array.isArray(gallery)) {
    if (props.alias) {
      return gallery.find((g) => g.alias === props.alias)
    }
    return gallery[0]
  }

  return gallery
})

const hasGallery = computed(() => {
  return gallery.value && gallery.value.images?.length > 0
})
</script>

<template>
  <div class="AGWGallery" v-if="hasGallery">
    <AGWGalleryPage>
      <AGWGalleryPageTitle>
        <template v-if="gallery.title" #title>
          {{ gallery.title }}
        </template>
      </AGWGalleryPageTitle>
      <AGWGalleryContent :type="gallery?.type" :images="gallery?.images" :alias="gallery?.alias" />
    </AGWGalleryPage>
  </div>
</template>
