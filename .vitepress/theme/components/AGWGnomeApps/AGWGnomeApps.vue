<script setup>
import { useData } from 'vitepress';
import AGWGnomeAppsList from './AGWGnomeAppsList.vue'

const { frontmatter } = useData()

console.log(frontmatter)
</script>

<template>
    <h1>{{frontmatter.value.title}}</h1>
</template>