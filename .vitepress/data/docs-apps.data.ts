import { defineLoader } from 'vitepress'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { App } from '../theme/types'

export const data: App[] = []

async function loadDocsAppsData(): Promise<App[]> {
  const baseDir = process.cwd()
  const apps: App[] = []

  const scanAppsDirectory = (locale: string) => {
    const appsDirPath = path.join(baseDir, 'docs', locale, 'apps')

    if (!fs.existsSync(appsDirPath)) {
      console.log(`📁 Apps directory not found for locale: ${locale}`)
      return
    }

    const scanDirectory = (dir: string) => {
      const files = fs.readdirSync(dir)

      for (const file of files) {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)

        if (stat.isDirectory()) {
          scanDirectory(filePath)
        } else if (file.endsWith('.md')) {
          try {
            const fileContent = fs.readFileSync(filePath, 'utf-8')
            const { data: frontmatter } = matter(fileContent)

            if (frontmatter.aggregation || frontmatter.appstream) {
              const relativePath = path.relative(path.join(baseDir, 'docs'), filePath)
              const more = `/${relativePath.replace(/\.md$/, '')}`

              const app: App = {
                appstream: {
                  id: frontmatter.appstream?.id,
                  name: frontmatter.appstream?.name || '',
                  icon: frontmatter.appstream?.icon || '',
                  summary: frontmatter.appstream?.summary || '',
                  keywords: frontmatter.appstream?.keywords || [],
                  url: frontmatter.appstream?.url
                },
                aggregation: frontmatter.aggregation || {},
                group: frontmatter.group,
                more: more
              }

              apps.push(app)
              console.log(`📄 Loaded app from docs: ${app.appstream.name} -> ${more}`)
            }
          } catch (error) {
            console.error(`❌ Error reading ${filePath}:`, error)
          }
        }
      }
    }

    scanDirectory(appsDirPath)
  }

  const locales = ['ru', 'en']
  for (const locale of locales) {
    console.log(`🔍 Scanning apps directory for locale: ${locale}`)
    scanAppsDirectory(locale)
  }

  console.log(`✅ Loaded ${apps.length} apps from documentation apps directories`)
  return apps
}

loadDocsAppsData().then((loadedData) => {
  data.push(...loadedData)
  console.log(`[docs-apps.data] Initialized with ${data.length} apps`)
})

export default defineLoader({
  watch: ['./docs/**/apps/**/*.md'],
  load: loadDocsAppsData
})
