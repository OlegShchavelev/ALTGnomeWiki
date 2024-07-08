import { createContentLoader } from 'vitepress'

export default createContentLoader('apps/*.md', {
  transform(rawData) {
    return rawData.filter((app) => {
      return (
        app?.frontmatter?.appstream?.keywords?.includes('core') ||
        app?.frontmatter?.appstream?.keywords?.includes('circle') ||
        app?.frontmatter?.appstream?.keywords?.includes('dev')
      )
    })
  }
})
