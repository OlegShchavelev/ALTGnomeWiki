<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'

interface Props {
  urls: string[]
}

const props = defineProps<Props>()
const open = ref(false)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function getDomain(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname
  } catch {
    return url
  }
}

function formatDomain(url: string): { line1: string; line2: string } {
  const domain = getDomain(url)

  if (domain.includes('nightly.altlinux.org')) {
    return { line1: 'nightly.altlinux', line2: '.org' }
  } else if (domain.includes('mirror.yandex.ru')) {
    return { line1: 'mirror.yandex', line2: '.ru' }
  } else if (domain.includes('download.basealt.ru')) {
    return { line1: 'download.basealt', line2: '.ru' }
  }

  // Общая логика для других доменов
  const parts = domain.split('.')

  if (parts.length >= 3) {
    const line1 = parts.slice(0, -1).join('.')
    const line2 = '.' + parts[parts.length - 1]
    return { line1, line2 }
  } else if (parts.length === 2) {
    return { line1: parts[0], line2: '.' + parts[1] }
  }

  return { line1: domain, line2: '' }
}

function getLabel(index: number): string {
  if (index === 0) {
    return 'Основной'
  }
  return `Зеркало ${index}`
}
</script>

<template>
  <div class="AGWDownloadButton">
    <VPButton v-if="urls.length === 1" size="medium" tag="a" :href="urls[0]" text="Скачать" />

    <div v-else class="VPFlyout" @mouseenter="open = true" @mouseleave="close">
      <VPButton size="medium" class="button" text="Скачать" aria-haspopup="true" :aria-expanded="open" />

      <div class="menu" :class="{ open }">
        <a v-for="(url, index) in urls" :key="index" :href="url" class="item" @click="close">
          <span class="vpi-download icon" />
          <span class="text">
            <span class="label">{{ getLabel(index) }}</span>
            <span class="domain">{{ getDomain(url) }}</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AGWDownloadButton {
  position: relative;
}

.VPFlyout {
  position: relative;
}

.VPFlyout .button {
  cursor: pointer;
}

.menu {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.25s,
    visibility 0.25s,
    transform 0.25s;
  transform: translateY(-4px);
  z-index: 100;
  border-radius: 12px;
  padding: 12px;
  min-width: 220px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  border: 1px solid var(--vp-c-divider);
}

.menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  text-decoration: none;
  border-radius: 6px;
  transition:
    background-color 0.25s,
    color 0.25s;
}

.item:hover {
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-brand-1);
}

.icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 2px;
}

.text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.label {
  display: block;
  font-weight: 600;
  font-size: 13px;
}

.domain {
  display: block;
  font-size: 12px;
  opacity: 0.7;
  font-weight: 400;
}

.vpi-download {
  --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288L11 12.175V5q0-.425.288-.712T12 4t.713.288T13 5v7.175l1.875-1.875q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z'/%3E%3C/svg%3E");
  mask: var(--icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 20px;
  height: 20px;
}
</style>
