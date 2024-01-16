<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { sponsors } from '../../../_data/sponsors'
</script>

<template>
<VPHomeSponsors
    v-if="sponsors"
    message="Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности."
    :data="sponsors"
/>
</template>

<style scoped>
</style>