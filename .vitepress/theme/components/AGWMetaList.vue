<script setup lang="ts">
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { extractDomain } from './../composables/link'
import type { AGWTheme } from '../types/index'

defineProps<{
  lists: AGWTheme.MetaLists[]
}>()
</script>

<template>
  <dl>
    <template v-for="list in lists">
      <dt>{{ $t('meta.lists.' + list.caption) }}</dt>
      <dd>
        <VPLink :href="list.link">{{ extractDomain(list.link) }}</VPLink>
      </dd>
    </template>
  </dl>
</template>
<style scoped>
dl {
  margin-top: 0;
  margin-bottom: 0;
}

dt,
dd {
  padding-left: 16px;
  padding-right: 16px;
}

dt {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

dd {
  margin-left: 0;
  font-size: 14px;
  padding-bottom: 8px;
  margin-bottom: 8px;
}

dd:not(:last-child) {
  border-bottom: 1px solid var(--vp-c-divider);
}
</style>
