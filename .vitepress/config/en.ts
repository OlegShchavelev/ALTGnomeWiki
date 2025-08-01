import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'

export const en = defineConfigWithTheme<DefaultTheme.Config>({
  lang: 'en',
  themeConfig: {
    editLink: {
      pattern: 'https://altlinux.space/alt-gnome/wiki/src/branch/transfer/docs/:path'
    }
  }
})
