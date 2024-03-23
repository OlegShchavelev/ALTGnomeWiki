/* System */
import { defineConfig } from 'vitepress'
import { telegram, gitflic, vk } from './icons'
import * as navbar from './../_data/navigations'
import { normalize } from './utils'
import { rewrites } from './paths'
import * as config from './config.json'
export const META_DESCRIPTION = config.meta_description

/* Markdown */
import VitepressMarkdownTimeline from "vitepress-markdown-timeline";
import markdownItKbd from 'markdown-it-kbd'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItImplicitFigures from 'markdown-it-implicit-figures'
import markdownItEmbed from 'markdown-it-html5-embed'
import markdownItConditionalRender from 'markdown-it-conditional-render'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs' 


/* GitLog */ 
import UnoCSS from 'unocss/vite'
import { 
  GitChangelog,
  GitChangelogMarkdownSection 
} from '@nolebase/vitepress-plugin-git-changelog/vite'


export default defineConfig({
  vite: {
    plugins: [
      UnoCSS(),
      GitChangelog({
        maxGitLogCount: config.git_maxlog,
        repoURL: () => config.git_repo,
        rewritePaths: config.git_rewrite_path,
      }),
      GitChangelogMarkdownSection({
        getChangelogTitle: (_, __, { helpers }): string => {
          return config.git_locale.git_history_title
        },
        getContributorsTitle: (_, __, { helpers }): string => {
          return config.git_locale.git_author_title
        },
        excludes: [],
        exclude: (_, { helpers }): boolean => {
          for (var page of config.git_exclude){
            if (helpers.idEndsWith(page))
              return true
          }
          return false
        },
        sections: config.git_display,
      }),
    ],
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-page-properties',
      ],
    },
  },
  title: config.title,
  titleTemplate: ':title' + config.head.titleSeponator + config.title,
  description: META_DESCRIPTION,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: config.head.themeColor }],
    ['meta', { name: 'yandex-verification', content: config.yandex_mrtrica }]
  ],
  lang: config.lang,
  srcDir: './docs',
  sitemap: {
    hostname: config.host
  },
  themeConfig: {
    logo: { src: '/logo.png', width: 36, height: 36, alt: config.title },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Нет результатов по запросу',
                resetButtonTitle: 'Сбросить',
                footer: {
                  selectText: 'для выбора',
                  navigateText: 'для навигации',
                  closeText: 'закрыть'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: 'wiki' },
      { text: 'Для авторов', link: '/reference/' },
      {
        text: 'О проекте', items: [
          { text: 'О проекте', link: '/about' },
          { text: 'Участники', link: '/contributions' }
        ]
      },
    ],
    sidebar: { '/': navbar.docs, '/reference/': navbar.reference },
    socialLinks: [
      {
        icon: {
          svg: telegram
        },
        link: 'https://t.me/alt_gnome'
      },
      {
        icon: {
          svg: vk
        },
        link: 'https://vk.com/alt_gnome'
      },
      { icon: 'github', link: 'https://github.com/OlegShchavelev/ALTRegularGnomeWiki' }
    ],
    editLink: {
      pattern: 'https://github.com/OlegShchavelev/ALTRegularGnomeWiki/edit/main/docs/:path',
      text: 'Предложить изменения на этой странице'
    },
    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    darkModeSwitchLabel: 'Тема',
    outlineTitle: 'Оглавление',
    outline: {
      level: [2, 3],
    },
    notFound: {
      title: 'Страница не найдена',
      quote: 'Похоже, что вы перешли по неверной или устаревшей ссылке. Вы можете воспользоваться поиском.',
      linkText: 'Вернуться на главную'
    },
    footer: {
      message: 'Содержание доступно <a href="/licence.html">по лицензии MIT</a>',
      copyright: '2024 ALT Gnome Wiki, разработано на платформе <a href="//vitepress.dev/">VitePress 1.0.0-rc.42</a>'
    }
  },
  rewrites: rewrites,
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее',
    },
    config: (md) => {
      md.use(markdownItKbd);
      md.use(markdownItTaskLists);
      md.use(VitepressMarkdownTimeline);
      md.use(markdownItImplicitFigures, {
        figcaption: 'title',
        copyAttrs: '^class$'
      });
      md.use(markdownItEmbed, {
        html5embed: {
          useImageSyntax: true, // Enables video/audio embed with ![]() syntax (default)
        }
      });
      md.use(markdownItConditionalRender);
      md.use(tabsMarkdownPlugin);
    }
  },
  transformPageData: (pageData: normalize) => {
    const title = pageData.title + config.head.titleSeponator + config.title
    const type = config.head.type
    const locale = config.lang
    const url = config.host + normalize(pageData.relativePath)
    const image = config.head.ogImage

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['meta', { name: 'og:title', content: title }],
      ['meta', { name: 'og:type', content: type }],
      ['meta', { name: 'og:locale', content: locale }],
      ['meta', { name: 'og:url', content: `${url}.html` }],
      ['meta', { name: 'og:site_name', content: config.title }],
      ['meta', { name: 'og:image', content: config.host + image }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:image', content: config.host + image }],
    )

    if (pageData.frontmatter.layout !== 'home') {
      pageData.frontmatter.head.push(
        ['link', { rel: 'canonical', href: `${url}.html` }],
      )
      pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ALT Regular Gnome. Последнее обновление ALT Gnome Wiki: ${new Date(pageData.lastUpdated).toLocaleString(config.lang)}`
    }
  }
})
