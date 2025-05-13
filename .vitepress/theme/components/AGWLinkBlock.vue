<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { homepage } from '../../../package.json'

// Конфигурация
const FAVICON_PROVIDER = 'https://favicon.yandex.net/favicon/'
const DEFAULT_ICONS = {
  internal: '/favicon.png',
  external: '/external-link.svg'
} as const

// Props
interface Props {
  href: string
  title: string
}
const props = defineProps<Props>()

// Состояния
const favicon = ref<string>(DEFAULT_ICONS.internal)
const isLoading = ref(false)
const error = ref<Error | null>(null)

// Вычисляемые свойства
const isExternal = computed(() => /^https?:\/\//.test(props.href))
const hostname = computed(() => {
  try {
    return isExternal.value ? new URL(props.href).hostname : new URL(homepage).hostname
  } catch {
    return isExternal.value ? props.href : homepage
  }
})
const domainParts = computed(() => hostname.value.split('.'))
const hasSubdomain = computed(() => domainParts.value.length > 2)
const rootDomain = computed(() => 
  hasSubdomain.value 
    ? `${domainParts.value[1]}.${domainParts.value[2]}` 
    : hostname.value
)

// Функции
const getImageResolution = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve({ 
      width: img.naturalWidth, 
      height: img.naturalHeight 
    })
    img.onerror = () => reject(new Error(`Image load failed: ${url}`))
    img.src = url
  })
}

const checkFaviconExists = async (host: string): Promise<boolean> => {
  try {
    const { width, height } = await getImageResolution(`${FAVICON_PROVIDER}${host}`)
    return width > 1 && height > 1
  } catch {
    return false
  }
}

const determineFaviconUrl = async (): Promise<string> => {
  if (!isExternal.value) return DEFAULT_ICONS.internal
  
  try {
    if (await checkFaviconExists(hostname.value)) {
      return `${FAVICON_PROVIDER}${hostname.value}`
    }
    
    if (hasSubdomain.value && await checkFaviconExists(rootDomain.value)) {
      return `${FAVICON_PROVIDER}${rootDomain.value}`
    }
    
    return DEFAULT_ICONS.external
  } catch (err) {
    error.value = err instanceof Error ? err : new Error('Favicon detection failed')
    return DEFAULT_ICONS.external
  }
}

// Загрузка favicon
onMounted(async () => {
  try {
    isLoading.value = true
    favicon.value = await determineFaviconUrl()
  } catch (err) {
    error.value = err instanceof Error ? err : new Error('Unknown favicon error')
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <ClientOnly>
    <a 
      v-if="props.href" 
      :href="props.href" 
      :target="isExternal ? '_blank' : undefined"
      :aria-label="`Перейти на ${props.title}`"
    >
      <div class="custom-block link-block">
        <p class="custom-block-title">
          <slot />
        </p>
        <p>{{ props.title }}</p>
        
        <div class="footer">
          <div class="link">
            <template v-if="isLoading">
              <span class="icon-loader" aria-hidden="true" />
            </template>
            <template v-else>
              <img
                class="icon"
                :src="favicon"
                :alt="`${hostname} favicon`"
                loading="lazy"
                width="16"
                height="16"
              />
            </template>
            
            <div class="domain">
              {{ props.href }}
            </div>
          </div>
          
          <div v-if="!error">
            {{ homepage.replace(/https?:/, '').replaceAll('/', '') }}
          </div>
          <div v-else class="error-message">
            Icon unavailable
          </div>
        </div>
      </div>
    </a>
  </ClientOnly>
</template>

<style scoped>
.link-block {
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s ease;
  color: var(--vp-custom-block-info-text);
}

.link-block:hover {
  border-color: var(--vp-c-brand);
}

a {
  text-decoration: none;
  color: inherit;
}

.footer {
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  max-width: 75%;
  display: flex;
  gap: 12px;
  align-items: center;
}

.icon {
  height: 24px;
  width: 24px;
  border-radius: 0 !important;
  object-fit: contain;
}

.icon-loader {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  border-top-color: currentColor;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.domain {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.error-message {
  color: var(--vp-c-red);
  font-size: 0.8em;
}

@media (max-width: 960px) {
  .link {
    max-width: 50%;
  }
}
</style>