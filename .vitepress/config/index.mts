import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { shared } from './shared'
import { ru } from './ru'
import { en } from './en'
import type { AGWTheme } from '../theme/types/index'

export default defineConfigWithTheme<AGWTheme.Config>({
  ...shared,
  locales: {
    root: { label: 'Русский', ...ru },
    en: { label: 'English', ...en }
  }
})
