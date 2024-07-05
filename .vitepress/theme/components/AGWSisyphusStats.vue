<!-- Не завершено -->
<script>
const statistics_url = 'https://rdb.altlinux.org/api/packageset/repository_statistics'

export default {
    data() {
        return {
            branches: []
        }
    },
    async created() {
        this.response = await fetch(statistics_url).then((response) => response.json())
        this.branches = this.response.branches.map(({ branch, packages_count }) => ({
            branch,
            archs: packages_count.map(({ arch, count, size_hr }) => ({ arch, count, size_hr }))
        }))
    }
}
</script>

<template>
    <div class="items">
        <div v-for="{ branch, archs } in branches" class="card">
            <div>📦{{ branch }}</div>
            <div v-for="{ arch, count, size_hr } in archs.slice(0, -1)">
                ┣ 📂{{ arch }} ({{ count }}) - {{ size_hr }}
            </div>
            <div>┗ 📂{{ archs.at(-1).arch }} ({{ archs.at(-1).count }}) - {{ archs.at(-1).size_hr }}</div>
        </div>
    </div>
</template>

<style scoped>
.items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

@media (max-width: 640px) {
    .items {
        grid-template-columns: 1fr;
    }
}

.card {
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    padding: 24px;
}
</style>
