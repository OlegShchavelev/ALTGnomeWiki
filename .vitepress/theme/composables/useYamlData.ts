import { ref, readonly } from 'vue'

const dataCache = new Map<string, any>()

export function useYamlData<T>(filePath: string) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const loadData = async () => {
    if (dataCache.has(filePath)) {
      data.value = dataCache.get(filePath)
      return
    }

    try {
      loading.value = true
      error.value = null

      if (!filePath || typeof filePath !== 'string') {
        throw new Error('Invalid file path')
      }

      let module: any

      try {
        module = await import(/* @vite-ignore */ filePath)
      } catch (importError) {
        throw new Error(`Failed to import ${filePath}: ${importError.message}`)
      }

      if (!module || !module.default) {
        throw new Error(`Module ${filePath} has no default export`)
      }

      data.value = module.default

      dataCache.set(filePath, module.default)
    } catch (err) {
      error.value = err as Error
      console.error(`[useYamlData] Failed to load ${filePath}:`, err)
      data.value = null
    } finally {
      loading.value = false
    }
  }

  loadData()

  return {
    data: readonly(data),
    error: readonly(error),
    loading: readonly(loading),
    reload: loadData
  }
}

export function clearYamlDataCache(filePath?: string) {
  if (filePath) {
    dataCache.delete(filePath)
  } else {
    dataCache.clear()
  }
}
