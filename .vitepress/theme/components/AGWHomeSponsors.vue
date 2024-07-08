<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { sponsors } from '../../../_data/sponsors'

const { message, actionLink, actionText, data } = defineProps({
  message: {
    type: String,
    default:
      'Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности.'
  },
  actionText: {
    type: String,
    default: 'Поддержать проект ALT Gnome'
  },
  actionLink: {
    type: String,
    default: 'https://boosty.to/alt_gnome'
  },
  data: {
    type: Object,
    default: () => {
      return sponsors ?? []
    }
  }
})
</script>

<template>
  <VPHomeSponsors
    v-if="sponsors"
    :message="message"
    :actionText="actionText"
    :actionLink="actionLink"
    :data="sponsors"
  />
</template>
