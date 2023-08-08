import { defineConfig } from 'vitepress'
import { telegram } from './icons'
import { addPlugins } from './theme/plugins/markdown'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ALTRegularGnomeWiki/',
  srcDir: './docs',
  title: "ALT Community",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo.png',
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/wiki' },
      { text: 'Пролог',
      items: [
        { text: 'О проекте', link: '/about' },
        { text: 'Возможности VitePress', link: '/vitepress' }
      ]}
    ],
    socialLinks: [
      { icon:  {
        svg: telegram
      }, 
      link: 'https://t.me/alt_gnome' 
      }
    ],
    sidebar: [
      {
        text: 'Популярное',
        items: [
          { text: 'Установка и обновление программ', link: '/introduction' },
          { text: 'Запись на DVD и USB Flash', link: '/getting-started' },
        ]
      }
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
    sponsor: {
      message: 'Данный сервис является Open-Source проектом и его поддержка и развитие зависит от пожертвований.',
      linkText: 'Поддержать проект!',
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
    outlineTitle: 'Оглавление',
    footer: {
      copyright: 'Copyright © 2023 ALT Regular Gnome Community'
    }
  },
  markdown: {
    config(md) {
      addPlugins(md)
    },
  }
})