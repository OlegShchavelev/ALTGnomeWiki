<script setup lang="ts">
import type { AGWTheme } from '../types/index'

interface Props {
  size?: 'small' | 'medium'
  row: AGWTheme.AppRows
}

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
  <article class="AGWAppRowsItem" :class="[size]">
    <div class="card">
      <figure v-if="row.thumb" class="img">
        <img class="img" :src="row.thumb" :alt="row.name" />
      </figure>
      <div class="body">
        <div class="title">
          {{ row.name }}
        </div>
        <div class="text">
          {{ row.summary }}
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.AGWAppRowsItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
  padding: 48px 32px;
}

.AGWAppRowsItem.medium .img {
  width: 96px;
  height: 96px;
}

.AGWAppRowsItem.medium .body {
  padding-top: 24px;
  text-align: center;
}

.AGWAppRowsItem.medium .title {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.AGWAppRowsItem.medium .text {
  padding-top: 16px;
  max-width: 288px;
  font-size: 16px;
}

.img {
  margin: 0 auto;
}

.title {
  margin: 0;
  font-weight: 600;
}

.text {
  margin: 0 auto;
}
</style>
