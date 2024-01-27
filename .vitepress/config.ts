import { defineConfig } from 'vitepress'
import { telegram, gitflic, vk } from './icons'
import * as seo from './../_data/seo'
import { normalize } from 'vitepress/dist/client/shared'
import type MarkdownIt from 'markdown-it'
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
    nav: nav(),
    sidebar: {
      '/': sidebarDocs()
    },
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
      copyright: '2024 ALT Gnome Wiki, разработано на платформе <a href="//vitepress.dev/">VitePress 1.0.0-rc.40</a>'
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

function nav() {
  return [
    { text: 'Главная', link: '/' },
    { text: 'Документация', link: 'wiki' },
    {
      text: 'Пролог',
      items: [
        { text: 'О проекте', link: 'about' },
        { text: 'Возможности VitePress', link: 'main/vitepress' },
        { text: 'Внесение изменений', link: 'main/alteration' }
      ]
    }
  ]
}

function sidebarDocs() {
  return [
    { text: 'Быстрый старт', link: '/quick-start' },
    {
      text: 'Установка',
      base: '/download/',
      link: '/',
      items: [
        { text: 'Установка на Mac', link: '/macbook' },
        { text: 'Установка рядом с MacOS', link: '/install-on-macbook-with-opencore-parallel' }
      ],
      collapsed: true
    },
    {
      text: 'Установка и обновление программ',
      base: '/apps/',
      items: [
        { text: 'AnyDesk', link: '/anydesk' },
        { text: 'AsusCtl', link: '/asusctl' },
        { text: 'Blender', link: '/blender' },
        { text: 'Bottle', link: '/bottle' },
        { text: 'Boxes', link: '/boxes' },
        { text: 'Сartridges', link: '/cartridges' },
        { text: 'Cassette (Яндекс Музыка)', link: '/cassette' },
        { text: 'Chromium', link: '/chromium' },
        { text: 'Codium', link: '/codium' },
        { text: 'Console', link: '/console' },
        { text: 'Dialect', link: '/dialect' },
        { text: 'Discord', link: '/discord' },
        { text: 'Drawing', link: '/drawing' },
        { text: 'Docker', link: '/docker' },
        { text: 'Eog', link: '/eog' },
        { text: 'Evince', link: '/evince' },
        { text: 'FFMPEG', link: '/ffmpeg' },
        { text: 'Figma', link: '/figma' },
        { text: 'Firefox', link: '/firefox' },
        { text: 'Flatseal', link: '/flatseal' },
        { text: 'Fragments', link: '/fragments' },
        { text: 'Git', link: '/git' },
        { text: 'GitHub Desktop', link: '/github-desktop' },
        { text: 'GnomeSoftware', link: '/gnome-software' },
        { text: 'Kooha', link: '/kooha' },
        { text: 'Libreoffice', link: '/libreoffice' },
        { text: 'Loupe', link: '/loupe' },
        { text: 'Lunacy', link: '/lunacy' },
        { text: 'Mission Center', link: '/mission-center' },
        { text: 'Мой офис', link: '/my-office' },
        { text: 'Мpich', link: '/mpich' },
        { text: 'Neofetch', link: '/neofetch' },
        { text: 'Neovim', link: '/neovim' },
        { text: 'OBS Studio', link: '/obs-studio' },
        { text: 'OnlyOffice', link: '/onlyoffice' },
        { text: 'Opera', link: '/opera' },
        { text: 'Penpot Desktop', link: '/penpot-desktop' },
        { text: 'Р7-Офис', link: 'r7-office' },
        { text: 'Сканер документов', link: '/simple-scan' },
        { text: 'Skype', link: '/skype' },
        { text: 'Steam', link: '/steam' },
        { text: 'Telegram', link: '/telegram' },
        { text: 'Thunderbird', link: 'thunderbird' },
        { text: 'Toolbox', link: '/toolbox' },
        { text: 'Totem', link: '/totem' },
        { text: 'Transmission', link: '/transmission' },
        { text: 'Viber', link: '/viber' },
        { text: 'VLC', link: '/vlc' },
        { text: 'VK Мессенджер', link: '/vk-messenger' },
        { text: 'XLSCLIENTS', link: '/xlsclients' },
        { text: 'Xmind', link: '/xmind' },
        { text: 'Яндекс Браузер', link: '/yandex-browser' },
        { text: 'Zoom', link: '/zoom' },
        { text: 'Zsh', link: '/zsh' },
      ],
      collapsed: true
    },
    {
      text: 'Использование рабочего окружения Gnome',
      base: '/gnome/',
      items: [
        {
          text: 'Расширения',
          base: '/gnome/extensions/',
          link: '/',
          items: [
            { text: 'Open Weather', link: '/openweather' },
            { text: 'AppIndicator/KStatusNotifierItem', link: 'appindicator-kstatus-notifier-item' },
            { text: 'Extension List', link: '/extension-list' },
            { text: 'U Power', link: '/u-power' }
          ],
          collapsed: true
        },
        {
          text: 'Рабочий стол',
          items: [
            { text: 'Запуск приложений', link: '/launching-applications' },
            { text: 'Закрепить приложение в панели приложений', link: '/add-apps-panel-tasks' },
            { text: 'Открытие окон по центру экрана', link: '/windows-in-the-center' },
            { text: 'Автоматический запуск приложений', link: '/startup-applications' },
            { text: 'Быстрое переключение между окнами', link: '/switching-apps' },
            { text: 'Уведомления и список уведомлений', link: '/notifications' },
            { text: 'Удаленный рабочий стол', link: '/gnome-remote-desktop' },
            { text: 'Экран блокировки', link: '/lock-screen' }
          ],
          collapsed: true
        },
        {
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
        },
        {
          text: 'Настройки пользователя и системы',
          items: [
            {
              text: 'Звук',
              items: [
                { text: 'Управление громкостью', link: '/gnome-volume-control' }
              ],
              collapsed: true
            },
            {
              text: 'Клавиатура',
              items: [
                { text: 'Использование других раскладок клавиатуры', link: '/keyboard-layouts' },
                { text: 'Сочетание клавиш', link: '/keyboard-shortcuts' },
              ],
              collapsed: true
            },
            {
              text: 'Монитор и экран',
              items: [
                { text: 'Изменение разрешения или ориентация экрана', link: '/look-resolution' },
                { text: 'Подключение дополнительного монитора', link: '/display-dual-monitors' },
                { text: 'Масштабирование экрана', link: '/scaling-the-screen' },
                { text: 'Изменение внешнего вида рабочего стола', link: '/look-background' }
              ],
              collapsed: true
            }
          ],
          collapsed: true
        },
        { text: 'Приложения', link: '/apps'}
      ],
      collapsed: true
    },
    {
      text: 'Решение проблем',
      base: '/tips/',
      items: [
        { text: 'Проблема со сбросом уровня звука по истечению времени', link: '/drop-soundlevel-after-cron-workaround' },
        { text: 'Проблема с отображением пользователя на экрание приветствия GDM', link: '/hidden-user-in-userlist-workaround' },
        { text: 'Обновить названия стандартных папок в соответствутвии с локалью', link: '/change-the-language-of-the-home-user-folders-automatically' }
      ],
      collapsed: true
    },
    {
      text: 'Периферия и оборудование',
      base: '/equipment/',
      items: [
        { text: 'Драйверы NVIDIA', link: '/nvidia' },
        { text: 'Подключение USB устройств', link: '/usb-devices' },
        { text: 'Подключение сканера', link: '/drivers-for-scanner' }
      ],
      collapsed: true
    },
    {
      text: 'Разработка',
      base: '/developers/',
      items: [
        {
          text: 'Python',
          base: '/developers/python/',
          link: '/',
          items: [
            { text: 'Использование Poetry', link: 'use-poetry' }
          ],
          collapsed: true
        },
        {
          text: 'Rust',
          base: '/developers/rust/',
          link: '/',
          items: [
            { text: 'приложение на GTK4', link: 'gtk4-applications' }
          ],
          collapsed: true
        },
        { text: 'Aurora SDK', link: '/aurora-sdk' },
        { text: 'Nodejs', link: '/nodejs' },
        { text: 'Podman', link: '/podman' },
      ],
      collapsed: true
    },
    {
      text: 'Быстрые ссылки',
      base: '/system/',
      items: [
        { text: 'APT', link: '/apt-get' },
        { text: 'Сизиф', link: '/sisyphus' },
        { text: 'Ядро', link: '/kernel' },
        { text: 'EPM', link: '/epm' },
        { text: 'Flatpak', link: '/flatpak' }
      ],
      collapsed: true
    }
  ]
}