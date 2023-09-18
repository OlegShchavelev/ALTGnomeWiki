import { defineConfig } from 'vitepress'
import { telegram } from './icons'
import { addPlugins } from './theme/plugins/markdown'

export const META_DESCRIPTION = 'Свободная WIKI по операционной системе ALT Regular Gnome'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ALTRegularGnomeWiki/',
  srcDir: './docs',
  title: 'ALT Community',
  description: META_DESCRIPTION,
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
      {
        text: 'Пролог',
        items: [
          { text: 'О проекте', link: '/about' },
          { text: 'Возможности VitePress', link: '/vitepress' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: {
          svg: telegram
        },
        link: 'https://t.me/alt_gnome'
      }
    ],
    sidebar: [
      {
        text: 'Популярное',
        items: [
          { text: 'Быстрый старт', link: '/quick-start' },
          {
            text: 'Установка и обновление программ',
            items: [
              { text: 'Blender', link: '/blender' },
              { text: 'Chromium', link: '/chromium' },
              { text: 'Codium', link: '/codium' },
              { text: 'Console', link: '/console' },
              { text: 'Eog', link: '/eog' },
              { text: 'Epm', link: '/epm' },
              { text: 'Evince', link: '/evince' },
              { text: 'Extensions', link: '/extensions' },
              { text: 'Figma', link: '/figma' },
              { text: 'Firefox', link: '/firefox' },
              { text: 'Flatpak', link: '/flatpak' },
              { text: 'Fragments', link: '/fragments' },
              { text: 'Git', link: '/git' },
              { text: 'GnomeSoftware', link: '/gnome-software' },
              { text: 'JetBrains', link: '/jetbrains'},
              { text: 'Libreoffice', link: '/libreoffice' },
              { text: 'Loupe', link: '/loupe' },
              { text: 'Neofetch', link: '/neofetch' },
              { text: 'Nodejs', link: '/nodejs' },
              { text: 'Nvidia', link: '/nvidia' },
              { text: 'Opera', link: '/opera' },
              { text: 'Steam', link: '/steam' },
              { text: 'Telegram', link: '/telegram' },
              { text: 'Thunderbird', link: 'thunderbird'},
              { text: 'Transmission', link: '/transmission' },
              { text: 'Viber', link: '/viber' },
              { text: 'YandexBrowser', link: '/yandex-browser' }
            ],
            collapsed: true
          },
          { text: 'Запись на DVD и USB Flash', link: '/getting-started' },

          { text: 'Алтай', link: '/altai' }
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
      message:
        'Данный сервис является Open-Source проектом и его поддержка и развитие зависит от пожертвований.',
      linkText: 'Поддержать проект!'
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    outlineTitle: 'Оглавление',
    footer: {
      copyright: 'Copyright © 2023 ALT Regular Gnome Community'
    }
  },
  markdown: {
    config(md) {
      addPlugins(md)
    }
  }
})
