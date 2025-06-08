import AGWThemeRuLocale from './ru.yaml'
import AGWThemeEnLocale from './en.yaml'

import { Locale } from '../types/locales'

export const AGWThemeLocales: Record<string, Locale> = {
  'ru-RU': AGWThemeRuLocale,
  ru: AGWThemeRuLocale,
  en: AGWThemeEnLocale
}
