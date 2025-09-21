import { useData } from 'vitepress'

export function useImagePath() {
  const { site, page } = useData()

  return (src: string): string => {
    // Return absolute paths and URLs as is
    if (src.startsWith('/') || src.startsWith('http')) {
      return src
    }

    // Get current page file path
    const currentPagePath = page.value.filePath

    // Remove the file name to get the directory
    const directory = currentPagePath.replace(/\/[^/]+\.md$/, '')

    // Combine base, directory and src, and remove duplicate slashes
    return `${site.value.base}${directory}/${src}`.replace(/\/+/g, '/')
  }
}
