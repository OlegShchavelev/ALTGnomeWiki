<script setup lang="ts">
export interface Keywords {
    name: string
    type: string
}

const props = defineProps<{
    keywords: Keywords[]
}>();

</script>

<template>
    <div class="badges">
        <template v-for="keyword in keywords">
            <Badge :type="keyword.type">{{ keyword.name }}</Badge>
        </template>
    </div>
</template>

<style scoped>
.badges {
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
}
</style>