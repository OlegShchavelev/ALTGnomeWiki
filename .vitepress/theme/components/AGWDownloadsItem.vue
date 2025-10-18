<script setup lang="ts">
import { VPLink } from 'vitepress/theme'
import { ref, onMounted } from 'vue'
import { useFileSize } from '../composables/useFileSize'
import AGWDownloadButton from './AGWDownloadButton.vue'

const fileSizes = ref<Record<string, string>>({})
const { getSize, formatBytes } = useFileSize()

async function fetchFileSize(url: string): Promise<string> {
  try {
    let proxyPrefix = '/api/proxy/altlinux'

    if (url.includes('download.basealt.ru')) {
      proxyPrefix = '/api/proxy/basealt'
    } else if (url.includes('nightly.altlinux.org')) {
      proxyPrefix = '/api/proxy/altlinux'
    }

    const size = await getSize(url, proxyPrefix)
    return size ? formatBytes(size) : 'Недоступно'
  } catch {
    return 'Недоступно'
  }
}

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

onMounted(async () => {
  const urls = props.image.downloads.flatMap((d) => d.branches.flatMap((b) => b.images[0].urls))

  for (const url of urls) {
    if (!fileSizes.value[url]) {
      fileSizes.value[url] = await fetchFileSize(url)
    }
  }
})
</script>

<template>
  <article class="AGWDownloadsItem">
    <div class="card">
      <div class="body">
        <div class="title">{{ image.name }}</div>
        <div class="text">{{ image.description }}</div>
        <div class="actions">
          <template v-for="action in image.actions">
            <VPLink :href="action.link">{{ action.text }}</VPLink>
          </template>
        </div>
      </div>
      <div class="body">
        <div class="downloads">
          <template v-for="image in image.downloads" :key="image.arch">
            <div v-for="branch in image.branches" :key="branch.name" class="download">
              <dl>
                <dt>Архитектура:</dt>
                <dd>{{ image.arch }}</dd>
                <dt>Размер:</dt>
                <dd>
                  {{ fileSizes[branch.images[0].urls[0]] || 'Загрузка...' }}
                </dd>
                <dt>Тип выпуска:</dt>
                <dd>{{ branch.name }}</dd>
              </dl>
              <div class="action">
                <AGWDownloadButton :urls="branch.images[0].urls" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.AGWDownloadsItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  height: 100%;
}

.card {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 48px 32px;
  position: relative;
}

.AGWDownloadsItem .title {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.title {
  margin: 0;
  font-weight: 600;
}

.title + .text {
  margin-top: 16px;
}

.title + .actions,
.text + .actions {
  margin-top: 16px;
}

.text {
  margin: 0 auto;
}

.actions {
  display: inline-flex;
  gap: 8px;
}

.actions .link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
  text-decoration: none;
}

.actions .link:hover {
  color: var(--vp-c-brand-1);
}

.action :deep(.VPFlyout:hover .VPButton) {
  background-color: var(--vp-button-brand-bg);
}

.body + .body {
  margin-top: 32px;
}

.downloads {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.download {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: var(--vp-c-bg);
  border-radius: 12px;
}

dl {
  margin-top: 0;
  margin-bottom: 0;
  display: inline-flex;
  margin-right: auto;
}

dt {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

dd {
  margin-left: 0;
  font-size: 14px;
  font-weight: bold;
  padding-left: 4px;
  padding-right: 8px;
}
</style>
