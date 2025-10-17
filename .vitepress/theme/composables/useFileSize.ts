import { Ref } from 'vue'

interface UseFileSizeReturn {
  getSize: (url: string, proxyPrefix?: string) => Promise<number | null>
  formatBytes: (bytes: number | null, decimals?: number) => string
  clearCache: () => void
}

const cache = new Map<string, number>()

export function useFileSize(): UseFileSizeReturn {
  const getSize = async (url: string, proxyPrefix?: string): Promise<number | null> => {
    if (cache.has(url)) {
      return cache.get(url) || null
    }

    try {
      let fetchUrl = url

      if (proxyPrefix) {
        const path = new URL(url).pathname
        fetchUrl = `${proxyPrefix}${path}`
      }

      const response = await fetch(fetchUrl, { method: 'HEAD' })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentLength = response.headers.get('Content-Length') || response.headers.get('content-length')

      if (!contentLength) {
        return null
      }

      const size = parseInt(contentLength, 10)

      if (isNaN(size)) {
        return null
      }

      cache.set(url, size)

      return size
    } catch (e) {
      console.error('Error fetching file size:', e)
      return null
    }
  }

  const formatBytes = (bytes: number | null, decimals: number = 1): string => {
    if (!bytes || bytes === 0) return '0 B'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  }

  const clearCache = (): void => {
    cache.clear()
  }

  return {
    getSize,
    formatBytes,
    clearCache
  }
}
