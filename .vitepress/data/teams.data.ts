import { defineLoader } from 'vitepress'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { AGWTheme } from '../theme/types'

declare const data: AGWTheme.TeamMember[]
export { data }

export default defineLoader({
  watch: ['./teams.data.yaml'],

  async load(): Promise<AGWTheme.TeamMember[]> {
    const yamlPath = path.resolve(__dirname, './teams.data.yaml')

    try {
      const fileContent = fs.readFileSync(yamlPath, 'utf-8')
      const parsedData = yaml.load(fileContent) as AGWTheme.TeamMember[]

      if (!Array.isArray(parsedData)) {
        console.warn('[teams.data] YAML file does not contain an array')
        return []
      }

      return parsedData
    } catch (error) {
      console.error('[teams.data] Failed to load:', error)
      return []
    }
  }
})
