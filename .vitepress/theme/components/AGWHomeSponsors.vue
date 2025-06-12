<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPHomeSponsors
    v-if="fm.sponsors.data"
    :message="fm.sponsors.message"
    :data="fm.sponsors.data"
    :actionLink="fm.sponsors.donationlink"
    :actionText="fm.sponsors.donationtext"
  />
</template>

<style scoped>
.VPHomeSponsors {
  margin-top: 0;
  margin-left: var(--vp-offset) !important;
  margin-right: var(--vp-offset) !important;
}

.VPHomeSponsors:deep(.message) {
  max-width: 800px;
}

.VPHomeSponsors:deep(.VPSponsorsGrid.big .vp-sponsor-grid-image) {
  max-width: 170px;
  max-height: 120px;
}
</style>
