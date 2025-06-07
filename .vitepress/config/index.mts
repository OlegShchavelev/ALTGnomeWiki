import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { shared } from './shared'
import { ru } from './ru'
import { en } from './en'

export default defineConfigWithTheme<DefaultTheme.Config>({
  ...shared,
  locales: {
    root: { label: 'Русский', ...ru },
    en: { label: 'English', ...en }
  }
})
