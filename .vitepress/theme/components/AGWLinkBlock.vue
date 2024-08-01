<script setup lang="ts">
import { homepage } from '../../../package.json'

const { href, title } = defineProps<{ href: string; title: string }>()

const isExternal = /https?:\/\//.test(href)
</script>

<template>
  <ClientOnly>
    <a v-if="href" :href :target="isExternal ? '_blank' : undefined">
      <div class="custom-block link-block">
        <p class="custom-block-title">
          <slot />
        </p>
        <p>
          {{ title }}
        </p>
        <div class="footer">
          <div class="link">
            <img
              class="icon"
              :src="
                isExternal
                  ? `https://s2.googleusercontent.com/s2/favicons?domain_url=${href}&sz=96`
                  : `/favicon.png`
              "
            />
            <div class="domain">
              {{ decodeURI((isExternal ? '' : homepage.slice(0, -1)) + href) }}
            </div>
          </div>
          <div>
            {{ homepage.replace(/https?:/, '').replaceAll('/', '') }}
          </div>
        </div>
      </div>
    </a>
  </ClientOnly>
</template>

<style scoped>
.link-block {
  background-color: var(--vp-c-bg-soft);
  transition-duration: 0.25s;
  color: var(--vp-custom-block-info-text);
}

.link-block:hover {
  border-color: var(--vp-c-brand);
}

a,
a:hover,
a:active {
  text-decoration: none;
}

.footer {
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
}

.link {
  max-width: 75%;
  display: flex;
  gap: 12px;
  align-items: center;
}

@media (max-width: 960px) {
  .link {
    max-width: 50%;
  }
}

.domain {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.icon {
  height: 24px;
}
</style>
