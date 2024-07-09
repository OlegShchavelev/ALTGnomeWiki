// https://vitepress.dev/guide/custom-theme

/* System */
import { h } from 'vue'
import { useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import * as config from '../config.json'

/* AGW */
import AGWTeamPage from './components/AGWTeamPage.vue'
import AGWHomeTeam from './components/AGWHomeTeam.vue'
import AGWHomeSponsors from './components/AGWHomeSponsors.vue'
import AGWDocsAsideMeta from './components/AGWDocsAsideMeta.vue'
import AGWCategories from './components/AGWDocsCategories.vue'
import AGWGallery from './components/AGWGallery.vue'
import AGWGnomeAppsList from './components/AGWGnomeApps/AGWGnomeAppsList.vue'

/* Metrics */
import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'

/* Nolebase ER */

import { 
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import { ERlocales, GitLocales, PPLocales, PPMarkdown } from '../../_data/lexicon.ts'


/* Nolebase PP */

import {
  NolebasePagePropertiesEditor,
  InjectionKey as NolebasePagePropertiesInjectionKey
} from '@nolebase/vitepress-plugin-page-properties/client'
import type { Options as NEROptions } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

/* Nolebase Gitlog */

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'

import { contributions } from '../../_data/team.ts'

import { data as gitOnline } from '../../_data/gitlog-loader.data.ts'


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
      'home-features-after': () => [h(AGWHomeTeam), h(AGWHomeSponsors)],
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AGWDocsAsideMeta)
    })
  },

  enhanceApp(ctx) {
    yandexMetrika(ctx, {
      counter: {
        id: config.yaMetrikaId,
        initParams: {
          webvisor: true
        }
      }
    }),
      ctx.app.component('AGWGallery', AGWGallery)
    ctx.app.component('AGWCategories', AGWCategories)
    ctx.app.component('contribution', AGWTeamPage)
    ctx.app.component('GnomeAppsList', AGWGnomeAppsList)
    ctx.app.component('NolebasePagePropertiesEditor', NolebasePagePropertiesEditor)
    ctx.app.provide(NolebasePagePropertiesInjectionKey, {
      locales: PPLocales,
      properties: PPMarkdown
    } as NEROptions)
    ctx.app.use(NolebaseEnhancedReadabilitiesPlugin, {locales: ERlocales} as Options)
    ctx.app.use(NolebaseGitChangelogPlugin, {
      locales: GitLocales,
      mapAuthors: gitOnline.length ? gitOnline : contributions
    })

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
