export const headTransformer = {
  root: {
    frontmatterHead: (pageData, normalize) => {
      pageData.frontmatter.head.push(
        ['meta', { name: 'og:title', content: pageData.title + ' — ALT Gnome Wiki' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:locale', content: 'ru-RU' }],
        [
          'meta',
          { name: 'og:url', content: `${'https://alt-gnome.wiki/' + normalize(pageData.relativePath)}.html` }
        ],
        ['meta', { name: 'og:site_name', content: 'ALT Gnome Wiki' }],
        ['meta', { name: 'og:image', content: 'https://alt-gnome.wiki/og-alt-wiki.jpg' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: 'https://alt-gnome.wiki/og-alt-wiki.jpg' }]
      )
    },
    notHomeFrontmatter: (pageData, normalize) => {
      if (pageData.frontmatter.layout !== 'home') {
        pageData.frontmatter.head.push([
          'link',
          { rel: 'canonical', href: `${'https://alt-gnome.wiki/' + normalize(pageData.relativePath)}.html` }
        ])
        pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ALT Regular Gnome. Последнее обновление ALT Gnome Wiki: ${new Date(pageData.lastUpdated).toLocaleString('ru-RU')}`
      }
    }
  }
}
