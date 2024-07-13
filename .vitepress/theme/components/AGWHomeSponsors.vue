<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { VPHomeSponsors } from 'vitepress/theme'

const { frontmatter } = useData()
const props = computed(() => frontmatter.value.sponsors ?? {} )
</script>

<template>
  <VPHomeSponsors
    v-if="props.collections"
    :actionText="props.donationtext"
    :actionLink="props.donationlink"
    :message="props.introtext"
    :data="props.collections"
  />
</template>