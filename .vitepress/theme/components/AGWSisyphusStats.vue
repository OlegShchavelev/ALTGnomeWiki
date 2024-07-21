<!-- Не завершено -->
<script>
const statistics_url = 'https://rdb.altlinux.org/api/packageset/repository_statistics'

export default {
  data() {
    return {
      branches: [],
      colors: {
        checkinstall: { background: '--vp-c-purple-soft', color: '--vp-c-purple-3' },
        classic: { background: '--vp-c-yellow-dimm-1', color: '--vp-c-yellow-darker' },
        debuginfo: { background: '--vp-c-blue-dimm-1', color: '--vp-c-blue-darker' },
        gostcrypto: { background: '--vp-c-orange-dimm-1', color: '--vp-c-orange-darker' },
        srpm: { background: '--vp-c-purple-soft', color: '--vp-c-purple-3' }
      }
    }
  },
  async created() {
    this.response = await fetch(statistics_url).then((response) => response.json())
    this.branches = this.response.branches.map(({ branch, packages_count }) => ({
      branch,
      archs: packages_count.reduce((acc, obj) => {
        const archEntry = acc.find((item) => item.arch === obj.arch)
        const arch = obj.arch
        delete obj.arch

        if (archEntry) archEntry.components.push(obj)
        else acc.push({ arch, components: [obj] })

        return acc
      }, [])
    }))
  }
}
</script>

<template>
  <div v-for="{ branch, archs } in branches" :key="branch">
    <h3>{{ branch }}</h3>
    <ul class="items">
      <li v-for="{ arch, components } in archs" :key="arch">
        <h4>{{ arch }}</h4>
        <ul>
          <li v-for="{ component, count, size_hr } in components" :key="component">
            {{ component }} {{ size_hr }} ({{ count }})
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding-top: 12px;
  align-items: center;
}

@media (max-width: 640px) {
  .items {
    grid-template-columns: 1fr;
  }
}

.card {
  text-align: center;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  padding: 12px;
}

.card h4 {
  margin: 12px;
}

.info {
  font-weight: bold;
  border-radius: 12px;
  padding: 12px;
  text-decoration: none;
}
</style>
