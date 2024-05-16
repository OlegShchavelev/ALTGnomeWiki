<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { sponsors } from '../../../_data/sponsors';

const { message, data } = defineProps({
  message: {
    type: String,
    default: 'Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности.'
  },
  data: {
    type: Object,
    default: () => {
      return sponsors ?? [];
    },
  },
});

</script>

<template>
    <VPHomeSponsors v-if="sponsors"
        :message="message"
        :data="sponsors" />
</template>