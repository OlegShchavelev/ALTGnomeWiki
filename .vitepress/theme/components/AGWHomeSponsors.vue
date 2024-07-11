<script setup lang="ts">
import { useData } from 'vitepress'
import { VPHomeSponsors } from 'vitepress/theme'

const { frontmatter } = useData()
const actionText = frontmatter.value.sponsors.donationtext ?? null
const actionLink = frontmatter.value.sponsors.donationlink ?? null
const message = frontmatter.value.sponsors.introtext ?? null
const data = frontmatter.value.sponsors.collections ?? {}

</script>

<template>
  <VPHomeSponsors
    v-if="data"
    :actionText="actionText"
    :actionLink="actionLink"
    :message="message"
    :data="data"
  />
</template>