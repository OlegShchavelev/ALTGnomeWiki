<script setup>
import {useData} from 'vitepress'
import AGWHomeEngagementCard from './AGWHomeEngagementCard.vue'
import { data } from './engagementDataLoader.data.ts'
</script>

<template>
<AGWHomeEngagementCard v-for="page of data.splice(0, 6)" :pageData="page" />

{{data.splice(0, 6)}}
</template>

