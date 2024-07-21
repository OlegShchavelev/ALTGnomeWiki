import { LanguageInput } from 'shiki'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const valaTML = require('./vala.json')

const vala = {
  ...valaTML,
  aliases: ['vala']
}

export default [vala] as LanguageInput[]
