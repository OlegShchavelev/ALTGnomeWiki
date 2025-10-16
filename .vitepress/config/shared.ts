/* System */
import { defineConfigWithTheme } from 'vitepress'
import type { AGWTheme } from '../theme/types/index'
import { fileURLToPath, URL } from 'node:url'
import { normalize } from '../support/utils'

/* Tools */

import vueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from 'rollup-plugin-visualizer'

/* Markdown */
import { createContainerPlugin } from '@alt-gnome/markdown-it-custom-containers'
import VitepressMarkdownTimeline from 'vitepress-markdown-timeline'
import markdownItKbd from 'markdown-it-kbd'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItImplicitFigures from 'markdown-it-implicit-figures'
import markdownItEmbed from 'markdown-it-html5-embed'
import markdownItConditionalRender from 'markdown-it-conditional-render'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import linkBlock from '../theme/composables/linkBlock'
import markdownItFancybox from '../theme/plugins/markdownItFancybox'

/* GitLog */
import UnoCSS from 'unocss/vite'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

/* PagePropierties */
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from '@nolebase/vitepress-plugin-page-properties/vite'

import { alignmentContainers, headTransformer, nolebaseGitChangelogOptions } from './plugins'

import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import Yaml from '@rollup/plugin-yaml'

export const shared = defineConfigWithTheme<AGWTheme.Config>({
  title: 'ALT Gnome Wiki',
  titleTemplate: ':title — ALT Gnome Wiki',
  base: '',
  srcDir: './docs',
  cleanUrls: true,
  rewrites: {
    'ru/:rest*': ':rest*'
  },
  sitemap: {
    hostname: 'https://alt-gnome.wiki/'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#62a0ea' }],
    ['meta', { name: 'yandex-verification', content: '6ef3a36c3d09e43e' }]
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [
      vueDevTools(),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        filename: './.tools/chunk_analyse/stats.html'
      }) as PluginOption,
      UnoCSS(),
      Yaml(),
      GitChangelog(nolebaseGitChangelogOptions.plugin),
      GitChangelogMarkdownSection(nolebaseGitChangelogOptions.pluginSections),
      PageProperties(),
      PagePropertiesMarkdownSection({
        excludes: [],
        exclude: (_, { helpers }): boolean => {
          for (let page of ['index.md', 'wiki.md', 'contributions.md', 'about.md', 'games.md']) {
            if (helpers.idEndsWith(page)) return true
          }
          return false
        }
      }),
      vueI18n({
        ssr: true
      })
    ],
    optimizeDeps: {
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client']
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-page-properties',
        '@fancyapps/ui'
      ]
    },
    resolve: {
      alias: [
        {
          find: '@vitepress/theme',
          replacement: fileURLToPath(
            new URL('../node_modules/vitepress/dist/client/theme-default', import.meta.url)
          )
        },
        {
          find: /^.*\/VPTeamMembersItem\.vue$/,
          replacement: fileURLToPath(new URL('../theme/components/AGWTeamMembersItem.vue', import.meta.url))
        }
      ]
    },
    server: {
      proxy: {
        // Прокси для nightly.altlinux.org
        '/api/proxy/altlinux': {
          target: 'https://nightly.altlinux.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/proxy\/altlinux/, '')
        },
        // Прокси для download.basealt.ru
        '/api/proxy/basealt': {
          target: 'https://download.basealt.ru',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/proxy\/basealt/, '')
        }
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: { src: '/logo.png', width: 36, height: 36, alt: 'ALT Gnome Wiki' },
    socialLinks: [
      {
        icon: 'telegram',
        link: 'https://t.me/alt_gnome'
      },
      {
        icon: 'mastodon',
        link: 'https://mastodon.ml/@alt_gnome/'
      },
      {
        icon: 'vk',
        link: 'https://vk.com/alt_gnome'
      },
      {
        icon: 'altlinux-space',
        link: 'https://altlinux.space/alt-gnome/wiki'
      }
    ],
    outline: {
      level: [2, 3]
    },
    meta: {
      keywords: {
        core: 'info',
        circle: 'success',
        adaptive: 'tip',
        proprietary: 'danger',
        restrictions: 'danger',
        oobe: 'warning',
        donttheme: 'success-1'
      },
      actions: {
        sisyphus: {
          theme: 'sisyphus',
          target: '_blank',
          baseUrl: '//packages.altlinux.org/ru/sisyphus/srpms/'
        },
        flatpak: {
          theme: 'flatpak',
          target: '_blank',
          baseUrl: '//flathub.org/ru/apps/'
        },
        snap: {
          theme: 'snap',
          target: '_blank',
          baseUrl: '//snapcraft.io/'
        },
        extension: {
          theme: 'extension',
          target: '_blank',
          baseUrl: '//extensions.gnome.org/'
        },
        more: {
          theme: 'more',
          target: '_blank'
        }
      }
    }
  },
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее'
    },
    config: (md) => {
      md.use(createContainerPlugin, {
        containers: alignmentContainers
      })
      md.use(markdownItKbd)
      md.use(markdownItTaskLists)
      md.use(VitepressMarkdownTimeline)
      md.use(markdownItImplicitFigures, {
        figcaption: 'title',
        copyAttrs: '^class$'
      })
      md.use(markdownItEmbed, {
        html5embed: {
          useImageSyntax: true // Enables video/audio embed with ![]() syntax (default)
        }
      })
      md.use(markdownItConditionalRender)
      md.use(tabsMarkdownPlugin)
      md.use(markdownItFancybox)
      md.use(linkBlock)
    }
  },
  lastUpdated: true,
  transformPageData: (pageData) => {
    if (pageData.filePath.split('/')[0] in Object.keys(headTransformer)) {
      pageData.frontmatter.head ??= []
      headTransformer[pageData.filePath.split('/')[0]].frontmatterHead(pageData, normalize)
      headTransformer[pageData.filePath.split('/')[0]].notHomeFrontmatter(pageData, normalize)
    } else {
      pageData.frontmatter.head ??= []
      headTransformer['root'].frontmatterHead(pageData, normalize)
      headTransformer['root'].notHomeFrontmatter(pageData, normalize)
    }
  }
})
