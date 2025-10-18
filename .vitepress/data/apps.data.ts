import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { AppData, App } from '../theme/types'

function loadAppsData(): AppData {
  const baseDir = process.cwd()

  const locales = ['ru', 'en']
  let apps: App[] = []
  let loadedLocale = 'ru'

  for (const locale of locales) {
    const yamlPath = path.resolve(baseDir, `docs/${locale}/apps-gnome/apps.yaml`)

    if (fs.existsSync(yamlPath)) {
      try {
        const fileContent = fs.readFileSync(yamlPath, 'utf-8')
        const parsedData = yaml.load(fileContent) as App[]

        if (!Array.isArray(parsedData)) {
          console.warn(`[apps.data] YAML file for ${locale} does not contain an array`)
          continue
        }

        apps = parsedData
        loadedLocale = locale
        console.log(`✅ [apps.data] Loaded ${apps.length} apps for locale: ${locale}`)
        break
      } catch (error) {
        console.error(`❌ [apps.data] Failed to load apps for ${locale}:`, error)
      }
    } else {
      console.log(`🔍 [apps.data] File not found: ${yamlPath}`)
    }
  }

  if (apps.length === 0) {
    console.warn('⚠️ [apps.data] No apps found for any locale')
  }

  return {
    apps,
    locale: loadedLocale,
    loadedAt: new Date().toISOString()
  }
}

export const data: AppData = loadAppsData()

import { defineLoader } from 'vitepress'
export default defineLoader({
  watch: ['./docs/**/apps-gnome/apps.yaml'],
  load: () => Promise.resolve(data)
})
