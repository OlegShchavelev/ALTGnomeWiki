import fs from 'node:fs'

export default {
  load() {
    try {
      return JSON.parse(fs.readFileSync('./_data/fullteam.json', 'utf-8'))
    } catch {
      return {}
    }
  }
}
