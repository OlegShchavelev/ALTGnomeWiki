import { defineConfig } from 'vitepress'
import { telegram, gitflic } from './icons'
import * as seo from './../_data/seo'
import { normalize } from 'vitepress/dist/client/shared'
import kbd from 'markdown-it-kbd'

export const META_DESCRIPTION = 'Свободная WIKI по операционной системе ALT Regular Gnome'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  srcDir: './docs',
  title: seo.SITE_TITLE,
  titleTemplate: ':title' + seo.SITE_TITLE_SEPARATOR + seo.SITE_TITLE,
  description: META_DESCRIPTION,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
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
  sitemap: {
    hostname: 'https://alt-gnome.wiki'
  },
  themeConfig: {
    logo: { src: '/logo.png', width: 36, height: 36, alt:"ALT Gnome Wiki"},
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
      },
      { icon: 'github', link: 'https://github.com/OlegShchavelev/ALTRegularGnomeWiki' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Быстрый старт', link: '/quick-start' },
          {
            text: 'Установка и обновление программ',
            items: [
              { text: 'Blender', link: '/blender' },
              { text: 'Boxes', link: '/boxes'},
              { text: 'Chromium', link: '/chromium' },
              { text: 'Сartridges', link: '/cartridges' },
              { text: 'Codium', link: '/codium' },
              { text: 'Console', link: '/console' },
              { text: 'Drawing', link: '/drawing' },
              { text: 'Docker', link: '/docker' },
              { text: 'Eog', link: '/eog' },
              { text: 'Epm', link: '/epm' },
              { text: 'Evince', link: '/evince' },
              { text: 'Extensions', link: '/extensions' },
              { text: 'FFMPEG', link: '/ffmpeg' },
              { text: 'Figma', link: '/figma' },
              { text: 'Firefox', link: '/firefox' },
              { text: 'Flatpak', link: '/flatpak' },
              { text: 'Fragments', link: '/fragments' },
              { text: 'Git', link: '/git' },
              { text: 'GnomeSoftware', link: '/gnome-software' },
              { text: 'JetBrains', link: '/jetbrains'},
              { text: 'Libreoffice', link: '/libreoffice' },
              { text: 'Loupe', link: '/loupe' },
              { text: 'Мой офис', link: '/my-office' },
              { text: 'Neofetch', link: '/neofetch' },
              { text: 'Neovim', link: '/neovim' },
              { text: 'Nodejs', link: '/nodejs' },
              { text: 'Nvidia', link: '/nvidia' },
              { text: 'OBS Studio', link: '/obs-studio' },
              { text: 'Opera', link: '/opera' },
              { text: 'Steam', link: '/steam' },
              { text: 'Telegram', link: '/telegram' },
              { text: 'Thunderbird', link: 'thunderbird'},
              { text: 'Totem', link: '/totem' },
              { text: 'Transmission', link: '/transmission' },
              { text: 'Viber', link: '/viber' },
              { text: 'VLC', link: '/vlc' },
              { text: 'XLSCLIENTS', link: '/xlsclients' },
              { text: 'Xmind', link: '/xmind'},
              { text: 'Яндекс Браузер', link: '/yandex-browser' },
              { text: 'Zsh', link: '/zsh' },
    
            ],
            collapsed: true
          },
          {
            text: 'Использование рабочего окружения Gnome',
            items: [
              {
                text: 'Рабочий стол',
                items: [
                  { text: 'Запуск приложений', link: '/launching-applications' },
                  { text: 'Закрепить приложение в панели приложений', link: '/add-apps-panel-tasks.md' },
                  { text: 'Открытие окон по центру экрана', link: '/windows-in-the-center'},
                  { text: 'Автоматический запуск приложений', link: '/startup-applications'},
                  { text: 'Быстрое переключение между окнами', link: '/switching-apps'},
                  { text: 'Уведомления и список уведомлений', link: '/notifications'},
                  { text: 'Сочетание клавиш', link: '/keyboard-shortcuts'},
                  { text: 'Экран блокировки', link: '/lock-screen'}
                ],
                collapsed: true
              }, {
                text: 'Сети, Интернет и электронная почта',
                items: [
                  {
                    text: 'Безопасность',
                    items: [
                      { text: 'Нужна ли мне антивирусная программа', link: '/net-antivirus' },
                      { text: 'Нужно ли сканировать свою электронную почту на наличие вирусов', link: '/net-email-virus' }
                    ],
                    collapsed: true
                  },
                  {
                    text: "Веб-браузеры",
                    items: [
                      { text: 'Изменение используемого по умолчанию веб-браузера', link: '/net-browser' }
                    ],
                    collapsed: true
                  }
                ],
                collapsed: true
              }, {
                text: 'Настройки пользователя и системы',
                items: [
                  {
                  text: 'Клавиатура',
                  items: [
                    { text: 'Использование других раскладок клавиатуры', link: '/keyboard-layouts' },
                    { text: 'Сочетание клавиш', link: '/keyboard-shortcuts'},
                  ],  
                  collapsed: true
                  }
                ],
                collapsed: true
              }
            ],
            collapsed: true
          },
          {
            text: 'Расширения рабочего окружения GNOME',
            items: [
              { text: 'Open Weather', link: '/openweather' },
              { text: 'AppIndicator/KStatusNotifierItem', link: 'appindicator-kstatus-notifier-item'}
            ]
          },
          { text: 'Запись на DVD и USB Flash', link: '/getting-started' },

          { text: 'Алтай', link: '/altai' }
        ]
      }, 
      {
        text: 'Быстрые ссылки',
        items: [
          { text: 'APT', link: '/apt-get' },
          { text: 'Сизиф', link: '/sisyphus' },
          { text: 'EPM', link: '/epm' },
          { text: 'Flatpak', link: '/flatpak' }
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
    outline: {
      level: [2, 3],
    },
    notFound: {
      title: 'Страница не найдена',
      quote: 'Похоже, что вы перешли по неверной или устаревшей ссылке. Вы можете воспользоваться поиском.',
      linkText: 'Вернуться на главную'
    },
    footer: {
      message: 'Содержание доступно <a href="/licence.html>">по лицензии MIT</a?',
      copyright: '2023 ALT Regular Gnome Community, разработано на платформе VitePress 1.0.0-rc.25'
    }
  },
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее',
    },
    config(md) {
      md.use(kbd);
    }
  },
  transformPageData(pageData) {
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
      ['meta', { name: 'twitter:image', content: seo.SITE_HOST + image  }],
      )

      if (pageData.frontmatter.layout !== 'home') {
        pageData.frontmatter.head.push(
          ['link', { rel: 'canonical', href: `${url}.html` }],
        )
        pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ALT Regular Gnome. Последнее обновление ALT Gnome Wiki: ${new Date(pageData.lastUpdated).toLocaleString()}`
      } 
  }
})
