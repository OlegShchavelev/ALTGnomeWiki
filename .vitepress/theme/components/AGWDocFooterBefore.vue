<script setup>
import { useData } from '../composables/data'
import { computed } from 'vue'

const { theme, frontmatter } = useData()
const resolvedMessage = computed(() => {
  const message = theme.value.footer?.docFooter?.message || ''

  if (!message) return ''

  const licenceData = {
    ...theme.value.footer?.licence?.content,
    ...frontmatter.value.footer?.licence?.content
  }

  if (!licenceData.link && !licenceData.name) return ''

  return message.replace(/:licence_link/g, licenceData.link).replace(/:licence_name/g, licenceData.name)
})
</script>

<template>
  <div class="VPDocFooter">
    <p v-if="resolvedMessage" class="message" v-html="resolvedMessage"></p>
  </div>
</template>

<style scoped>
.VPDocFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPDocFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
