// https://vitepress.dev/guide/custom-theme

/* System */
import { h } from 'vue'
import { useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

/* Plugins options */
import {
  nolebasePageProperties,
  yandexMetrikaOptions
} from '../config/plugins/index.ts'

/* AGW */
import AGWTeamPage from '@theme/components/AGWTeamPage.vue'
import AGWHomeTeam from '@theme/components/AGWHomeTeam.vue'
import AGWHomeSponsors from '@theme/components/AGWHomeSponsors.vue'
import AGWDocsAsideMeta from '@theme/components/AGWDocsAsideMeta.vue'
import AGWCategories from '@theme/components/AGWDocsCategories.vue'
import AGWGallery from '@theme/components/AGWGallery.vue'
import AGWLinkBlock from '@theme/components/AGWLinkBlock.vue'
import AGWAnalogues from '@theme/components/AGWAnalogues.vue'
import AGWGnomeAppsList from '@theme/components/AGWGnomeApps/AGWGnomeAppsList.vue'

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

/* Stylesheets */
import 'uno.css'
import './styles/style.css'
import './styles/custom.css'
import './viewerjs/dist/viewer.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AGWDocsAsideMeta)
    })
  },

  enhanceApp(ctx) {
    yandexMetrika(ctx, yandexMetrikaOptions.metrica)
    ctx.app.component('AGWGallery', AGWGallery)
    ctx.app.component('AGWHomeTeam', AGWHomeTeam)
    ctx.app.component('AGWHomeSponsors', AGWHomeSponsors)
    ctx.app.component('AGWLinkBlock', AGWLinkBlock)
    ctx.app.component('AGWAnalogues', AGWAnalogues)
    ctx.app.component('AGWCategories', AGWCategories)
    ctx.app.component('contribution', AGWTeamPage)
    ctx.app.component('GnomeAppsList', AGWGnomeAppsList)
    ctx.app.component('NolebasePagePropertiesEditor', NolebasePagePropertiesEditor)
    ctx.app.provide(NolebasePagePropertiesInjectionKey, nolebasePageProperties as NEROptions)
    ctx.app.use(NolebaseEnhancedReadabilitiesPlugin)
    ctx.app.use(NolebaseGitChangelogPlugin)

    enhanceAppWithTabs(ctx.app)
  },
  setup() {
    // Get route
    const route = useRoute()
    // Using
    imageViewer(route, '.vp-doc img:not(.gallery, .VPImage)', {
      title: true,
      toolbar: {
        zoomIn: 4,
        zoomOut: 4,
        oneToOne: 4,
        reset: 4,
        prev: false,
        next: false
      }
    })
    imageViewer(route, '.galleries', {
      title: true,
      toolbar: {
        zoomIn: 4,
        zoomOut: 4,
        oneToOne: true,
        reset: true,
        prev: true,
        next: true
      }
    })
  }
} satisfies Theme
