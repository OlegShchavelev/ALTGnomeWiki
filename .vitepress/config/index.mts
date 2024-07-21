import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { ru } from './ru'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'Русский', ...ru }
  }
})
