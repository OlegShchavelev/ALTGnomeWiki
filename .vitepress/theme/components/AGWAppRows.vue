<script setup lang="ts">
import type { AGWTheme } from '../types/index'
import { computed } from 'vue'
import AGWAppRowsItem from './AGWAppRowsItem.vue'

interface Props {
  size?: 'small' | 'medium'
  rows: AGWTheme.AppRows[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const classes = computed(() => [props.size, `count-${props.rows.length}`])
</script>

<template>
  <div class="AGWAppRows" :class="classes">
    <div class="container">
      <div v-for="row in rows" :key="row.name" class="item">
        <AGWAppRowsItem :size="size" :row="row" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.AGWAppRows.small .container {
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
}

.AGWAppRows.small.count-1 .container {
  max-width: 276px;
}
.AGWAppRows.small.count-2 .container {
  max-width: calc(276px * 2 + 24px);
}
.AGWAppRows.small.count-3 .container {
  max-width: calc(276px * 3 + 24px * 2);
}

.AGWAppRows.medium .container {
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
}

@media (min-width: 375px) {
  .AGWAppRows.medium .container {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  }
}

.AGWAppRows.medium.count-1 .container {
  max-width: 368px;
}
.AGWAppRows.medium.count-2 .container {
  max-width: calc(368px * 2 + 24px);
}

.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
}
</style>
