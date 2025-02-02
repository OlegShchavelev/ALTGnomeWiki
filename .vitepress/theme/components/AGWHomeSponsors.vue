<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { VPHomeSponsors } from 'vitepress/theme'

const { frontmatter } = useData()
const props = computed(() => frontmatter.value.sponsors ?? {})
</script>

<template>
  <VPHomeSponsors class="VPHomeSponsors" v-if="props.collections" :actionText="props.donationtext"
    :actionLink="props.donationlink" :message="props.introtext" :data="props.collections" />
</template>

<style scoped>

.VPHomeSponsors {
  margin-top: 0;
  margin-left:var(--vp-offset) !important;
  margin-right:var(--vp-offset) !important;
}

.VPHomeSponsors:deep(.message) {
  max-width: 800px;
}

.VPHomeSponsors:deep(.VPSponsorsGrid.big .vp-sponsor-grid-image) {
  max-width: 170px;
  max-height: 120px;
}
</style>