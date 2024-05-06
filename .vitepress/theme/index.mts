// https://vitepress.dev/guide/custom-theme

/* System */
import { h } from 'vue'
import { useRoute, useData } from 'vitepress';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

/* AGW */
import AGWHomeContents from './components/AGWHomeContents.vue'
import AGWDocsAsideMeta from './components/AGWDocsAsideMeta.vue'
import AGWCategories from './components/AGWDocsCategories.vue'
import AGWGallery from './components/AGWGallery.vue'
import AGWContribution from './components/AGWContribution.vue'


/* Metrics */
import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'


/* Nolebase features*/

import {
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { locales } from '../../_data/enhanced-readabilities'

import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'

import {
  gitLocales,
  gitMapContributors
} from '../../_data/gitlog'

import {
  NolebasePagePropertiesEditor,
  InjectionKey as NolebasePagePropertiesInjectionKey
} from '@nolebase/vitepress-plugin-page-properties/client'

import {
  pagePropertiesLocales,
  pagePropertiesMD
} from '../../_data/page-properties'


/* Stylesheets */
import 'uno.css'
import './styles/style.css'
import './styles/custom.css'
import './viewerjs/dist/viewer.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(AGWHomeContents),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AGWDocsAsideMeta),
    })
  },

  enhanceApp(ctx) {

    yandexMetrika(ctx, {
      counter: {
        id: 95081395, initParams: {
          webvisor: true
        }
      },
    }),
    
    ctx.app.component('AGWGallery', AGWGallery)
    ctx.app.component('AGWCategories', AGWCategories)
    ctx.app.component('contribution', AGWContribution)
    ctx.app.component('NolebasePagePropertiesEditor', NolebasePagePropertiesEditor)
    ctx.app.provide(NolebaseEnhancedReadabilitiesPlugin, { locales })
    ctx.app.provide(NolebasePagePropertiesInjectionKey, { locales: pagePropertiesLocales, properties:pagePropertiesMD })
    ctx.app.use(NolebaseGitChangelogPlugin, {locales: gitLocales, mapContributors: gitMapContributors})

    enhanceAppWithTabs(ctx.app)
  },
  setup() {
    // Get route
    const route = useRoute();
    // Using
    imageViewer(route, '.vp-doc img:not(.gallery)', {
      title: true,
      toolbar: {
        zoomIn: 4,
        zoomOut: 4,
        oneToOne: 4,
        reset: 4,
        prev: false,
        next: false
      }
    });
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
    });
  }
} satisfies Theme
