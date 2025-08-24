<script setup lang="ts">
interface Actions {
  id: string
  text: string
  target: string
  theme: string
  baseUrl: string
  [key: string]: any
}

defineProps<{
  actions: Actions[]
}>()
</script>

<template>
  <div>
    <template v-for="action in actions">
      <a
        :href="(action.baseUrl ?? '') + action.id"
        :target="action.target"
        class="btn"
        :class="action.theme"
        >{{ $t('meta.actions.' + action.text) }}</a
      >
    </template>
  </div>
</template>

<style scoped>
.sisyphus {
  --agw-btn-bg: var(--vp-c-yellow-dimm-1);
  --agw-btn-color: var(--vp-c-yellow-darker);
  --agw-btn-hover-bg: var(--vp-c-yellow-dark);
  --agw-btn-hover-color: var(--vp-c-white);
}

.flatpak {
  --agw-btn-bg: var(--vp-c-blue-dimm-1);
  --agw-btn-color: var(--vp-c-blue-darker);
  --agw-btn-hover-bg: var(--vp-c-blue-dark);
  --agw-btn-hover-color: var(--vp-c-white);
}

.snap {
  --agw-btn-bg: var(--vp-c-orange-dimm-1);
  --agw-btn-color: var(--vp-c-orange-darker);
  --agw-btn-hover-bg: var(--vp-c-orange-dark);
  --agw-btn-hover-color: var(--vp-c-white);
}

.extension {
  --agw-btn-bg: var(--vp-c-blue-dimm-1);
  --agw-btn-color: var(--vp-c-blue-darker);
  --agw-btn-hover-bg: var(--vp-c-blue-dark);
  --agw-btn-hover-color: var(--vp-c-white);
}

.btn {
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  display: grid;
  background-color: var(--agw-btn-bg);
  color: var(--agw-btn-color);
  font-weight: 700;
}

.btn:hover {
  background-color: var(--agw-btn-hover-bg);
  color: var(--agw-btn-hover-color);
}
</style>
