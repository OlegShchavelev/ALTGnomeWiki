<script setup lang="ts">
import { VPImage } from 'vitepress/theme'
import type { MetaDeveloper } from '../types/index'
defineProps<{
  developer: MetaDeveloper
}>()
</script>

<template>
  <div class="developers">
    <figure v-if="developer?.avatar" class="avatar">
      <VPImage :image="developer?.avatar" :alt="developer.name" />
    </figure>
    <div>
      <div class="caption">{{ $t('meta.developer.caption') }}</div>
      <div class="name">
        {{ developer.name }}
        <span class="nickname">
          {{ developer.nickname }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.developers {
  margin-top: 12px;
  display: flex;
  gap: 12px;
}

.avatar {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: var(--vp-shadow-3);
}

.caption {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.name {
  line-height: 1.5;
  font-size: 14px;
}

.nickname {
  display: block;
  font-size: 11px;
  color: var(--vp-c-text-3);
  font-weight: 500;
}
</style>
