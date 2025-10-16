// https://vitepress.dev/guide/custom-theme

/* System */
import { h, watch, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import { useData, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Fancybox } from '@fancyapps/ui'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

/* Plugins options */
import { nolebasePageProperties, yandexMetrikaOptions } from '../config/plugins/index.ts'

/* AGW */
import AGWTeam from '@theme/components/AGWTeam.vue'
import AGWTeams from '@theme/components/AGWTeams.vue'
import AGWHomeTeams from '@theme/components/AGWHomeTeams.vue'
import AGWHomeSponsors from '@theme/components/AGWHomeSponsors.vue'
import AGWDocsAsideMeta from '@theme/components/AGWDocsAsideMeta.vue'
import AGWCategories from '@theme/components/AGWDocsCategories.vue'
import AGWGallery from '@theme/components/AGWGallery.vue'
import AGWLinkBlock from '@theme/components/AGWLinkBlock.vue'
import AGWAnalogues from '@theme/components/AGWAnalogues.vue'
import AGWApp from '@theme/components/AGWApp.vue'
import AGWHomeApps from '@theme/components/AGWHomeApps.vue'
import AGWDownload from '@theme/components/AGWDownload.vue'
import AGWDocsFooterBefore from '@theme/components/AGWDocFooterBefore.vue'

/* Metrics */
import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'

/* Nolebase ER */

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

/* Nolebase PP */

import {
  NolebasePagePropertiesEditor,
  InjectionKey as NolebasePagePropertiesInjectionKey
} from '@nolebase/vitepress-plugin-page-properties/client'
import type { Options as NEROptions } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

/* Nolebase Gitlog */

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'

import { useI18n } from './plugins/i18n'

/* Stylesheets */
import 'uno.css'
import './assets/styles/style.css'
import './assets/styles/theme.css'
import './assets/styles/custom.css'
import './assets/styles/icons.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { CompletionInfoFlags } from 'typescript'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AGWDocsAsideMeta),
      'home-features-after': () => [h(AGWHomeTeams), h(AGWHomeApps), h(AGWHomeSponsors)],
      'doc-footer-before': () => h(AGWDocsFooterBefore)
    })
  },

  enhanceApp({ app, router, siteData }) {
    app.component('Gallery', AGWGallery)
    app.component('Teams', AGWTeams)
    app.component('AGWLinkBlock', AGWLinkBlock)
    app.component('AGWAnalogues', AGWAnalogues)
    app.component('AGWCategories', AGWCategories)
    app.component('team', AGWTeam)
    app.component('app', AGWApp)
    app.component('download', AGWDownload)
    app.component('NolebasePagePropertiesEditor', NolebasePagePropertiesEditor)
    app.provide(NolebasePagePropertiesInjectionKey, nolebasePageProperties as NEROptions)
    app.use(NolebaseEnhancedReadabilitiesPlugin)
    app.use(NolebaseGitChangelogPlugin)
    app.use(useI18n)
    yandexMetrika(router, yandexMetrikaOptions.metrica)
    enhanceAppWithTabs(app)
    if (!import.meta.env.SSR) {
      Fancybox.bind('[data-fancybox]', {
        Hash: false
      })
    }
  },
  setup() {
    const { lang } = useData()
    watch(
      lang,
      (val) => {
        useI18n.global.locale.value = val
      },
      { immediate: true }
    )
  }
} satisfies Theme
