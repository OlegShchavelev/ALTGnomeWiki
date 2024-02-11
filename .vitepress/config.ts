import { defineConfig } from 'vitepress'
import { telegram, gitflic, vk } from './icons'
import * as seo from './../_data/seo'
import * as navbar from './../_data/navbar'
import { normalize } from './utils'
import kbd from 'markdown-it-kbd'
import taskLists from 'markdown-it-task-lists'
import { rewrites } from './paths'
import timeline from "vitepress-markdown-timeline";
import implicitFigures from 'markdown-it-implicit-figures'
import embed from 'markdown-it-html5-embed'

export const META_DESCRIPTION = 'Свободная WIKI по операционной системе ALT Regular Gnome'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-page-properties',
      ],
    },
  },
  title: seo.SITE_TITLE,
  titleTemplate: ':title' + seo.SITE_TITLE_SEPARATOR + seo.SITE_TITLE,
  description: META_DESCRIPTION,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#62a0ea' }],
    ['meta', { name: 'yandex-verification', content: '6ef3a36c3d09e43e' }],
    [
      'script',
      {},
      `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(95081395, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true,
           webvisor:true
      });`,
    ],
  ],
  lang: 'ru-RU',
  srcDir: './docs',
  sitemap: {
    hostname: 'https://alt-gnome.wiki'
  },
  themeConfig: {
    logo: { src: '/logo.png', width: 36, height: 36, alt: "ALT Gnome Wiki" },
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
          { text: 'Участники', link: '/contributions'}
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
      md.use(kbd);
      md.use(taskLists);
      md.use(timeline);
      md.use(implicitFigures, {
        figcaption: 'title',
        copyAttrs: '^class$'
      });
      md.use(embed, {
        html5embed: {
          useImageSyntax: true, // Enables video/audio embed with ![]() syntax (default)
        }
      });
    }
  },
  transformPageData: (pageData: normalize) => {
    const title = pageData.title + seo.SITE_TITLE_SEPARATOR + seo.SITE_TITLE
    const type = 'website'
    const locale = 'ru_RU'
    const url = seo.SITE_HOST + normalize(pageData.relativePath)
    const image = 'og-alt-wiki.jpg'

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['meta', { name: 'og:title', content: title }],
      ['meta', { name: 'og:type', content: type }],
      ['meta', { name: 'og:locale', content: locale }],
      ['meta', { name: 'og:url', content: `${url}.html` }],
      ['meta', { name: 'og:site_name', content: seo.SITE_TITLE }],
      ['meta', { name: 'og:image', content: seo.SITE_HOST + image }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:image', content: seo.SITE_HOST + image }],
    )

    if (pageData.frontmatter.layout !== 'home') {
      pageData.frontmatter.head.push(
        ['link', { rel: 'canonical', href: `${url}.html` }],
      )
      pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ALT Regular Gnome. Последнее обновление ALT Gnome Wiki: ${new Date(pageData.lastUpdated).toLocaleString()}`
    }
  }
})
