import { type DefaultTheme } from 'vitepress'

export const nav: Record<string, Array<DefaultTheme.NavItem>> = {
  'ru-RU': [
    { text: 'Главная', link: '/' },
    { text: 'Документация', link: '/wiki' },
    { text: 'Приложения GNOME', link: '/apps-gnome' },
    { text: 'Для авторов', link: '/reference/' },
    {
      text: 'О проекте',
      items: [
        { text: 'О проекте', link: 'about' },
        { text: 'Участники', link: 'contributions' }
      ]
    }
  ]
}

export const sidebar: Record<string, DefaultTheme.Sidebar> = {
  'ru-RU': {
    '/': [
      {
        items: [
          { text: 'Быстрый старт', link: '/quick-start' },
          {
            text: 'Установка',
            link: '/download',
            items: [
              { text: 'Установка на Mac', link: '/macbook' },
              { text: 'Создание загрузочного диска ALT Regular Gnome', link: '/bootable-drive' },
              { text: 'Установка рядом с MacOS', link: '/install-on-macbook-with-opencore-parallel' }
            ],
            collapsed: true
          },
          {
            text: 'Установка и обновление программ',
            items: [
              { text: 'Alacarte', link: '/alacarte' },
              { text: 'Amberol', link: '/amberol' },
              { text: 'AniLibrix', link: '/anilibrix' },
              { text: 'AniLibrix Plus', link: '/anilibrix-plus' },
              { text: 'AnyDesk', link: '/anydesk' },
              { text: 'Arduino IDE', link: '/arduino-ide' },
              { text: 'AsusCtl', link: '/asusctl' },
              { text: 'Audacity', link: '/audacity' },
              { text: 'Ayugram', link: '/ayugram-desktop' },
              { text: 'Binary', link: '/binary' },
              { text: 'Blender', link: '/blender' },
              { text: 'Bottles', link: '/bottle' },
              { text: 'Boxes', link: '/boxes' },
              { text: 'Boxy SVG', link: '/boxy-svg' },
              { text: 'Brave Browser', link: '/brave' },
              { text: 'Сartridges', link: '/cartridges' },
              { text: 'Celluloid', link: '/celluloid' },
              { text: 'Chromium', link: '/chromium' },
              { text: 'Conky', link: '/conky' },
              { text: 'Desktop Files Creator', link: '/desktop-files-creator' },
              { text: 'Dialect', link: '/dialect' },
              { text: 'Discord', link: '/discord' },
              { text: 'Docker', link: '/docker' },
              { text: 'Dosage', link: '/dosage' },
              { text: 'Drawing', link: '/drawing' },
              { text: 'DroidCam', link: '/droidcam' },
              { text: 'EasyEffects', link: '/easyeffects' },
              { text: 'Eclipse IDE', link: '/eclipse-ide' },
              { text: 'Emulsion', link: '/emulsion' },
              { text: 'Evince', link: '/evince' },
              { text: 'Fastfetch', link: '/fastfetch' },
              { text: 'FFMPEG', link: '/ffmpeg' },
              { text: 'Figma', link: '/figma' },
              { text: 'Firefox', link: '/firefox' },
              { text: 'Flatseal', link: '/flatseal' },
              { text: 'Foliate', link: '/foliate' },
              { text: 'Folio', link: '/folio' },
              { text: 'Footage', link: '/footage' },
              { text: 'FOSSology', link: '/fossology-nomos' },
              { text: 'Fotema', link: '/fotema' },
              { text: 'Fragments', link: '/fragments' },
              { text: 'Fretboard', link: '/fretboard' },
              { text: 'Fish', link: '/fish' },
              { text: 'G4Music', link: '/g4music' },
              { text: 'Gaphor', link: '/gaphor' },
              { text: 'GDM Настройки', link: '/gdm-settings' },
              { text: 'Git', link: '/git' },
              { text: 'GitHub Desktop', link: '/github-desktop' },
              { text: 'Google Chrome', link: '/google-chrome' },
              { text: 'GPU Screen Recorder', link: '/gpu-screen-recorder' },
              { text: 'Gimp', link: '/gimp' },
              { text: 'Hardware Probe', link: '/hw-probe' },
              { text: 'Helvum', link: '/helvum' },
              { text: 'Heroic Games Launcher', link: '/heroic-games-launcher' },
              { text: 'IP Lookup', link: '/ip-lookup' },
              { text: 'Kooha', link: '/kooha' },
              { text: 'Krita', link: '/krita' },
              { text: 'Kega Fusion', link: '/kega-fusion' },
              { text: 'Lazarus', link: '/lazarus' },
              { text: 'LibreOffice', link: '/libreoffice' },
              { text: 'Loupe', link: '/loupe' },
              { text: 'Lunacy', link: '/lunacy' },
              { text: 'Lutris', link: '/lutris' },
              { text: 'LibreWolf', link: '/librewolf' },
              { text: 'Meridius', link: '/meridius' },
              { text: 'Microsoft Edge', link: '/microsoft-edge' },
              { text: 'Mission Center', link: '/mission-center' },
              { text: 'Мpich', link: '/mpich' },
              { text: 'МPV', link: '/mpv' },
              { text: 'Main-menu', link: '/main-menu' },
              { text: 'Mangojuice', link: '/mangojuice' },
              { text: 'Neofetch', link: '/neofetch' },
              { text: 'Neovim', link: '/neovim' },
              { text: 'Netsleuth', link: '/netsleuth' },
              { text: 'Nextcloud Desktop', link: '/nextcloud-desktop' },
              { text: 'Notepad', link: '/notepad' },
              { text: 'OBS Studio', link: '/obs-studio' },
              { text: 'Obsidian', link: '/obsidian' },
              { text: 'OnlyOffice', link: '/onlyoffice' },
              { text: 'OpenRazer', link: '/openrazer' },
              { text: 'Opera', link: '/opera' },
              { text: 'Orca', link: '/orca' },
              { text: 'Penpot Desktop', link: '/penpot-desktop' },
              { text: 'PortProton', link: '/port-proton' },
              { text: 'Postman', link: '/postman' },
              { text: 'PinApp', link: '/pin-app' },
              { text: 'Piper', link: '/piper' },
              { text: 'qBittorrent', link: '/q-bittorrent' },
              { text: 'Radio', link: '/radio' },
              { text: 'Reaper', link: '/reaper' },
              { text: 'RetroArch', link: '/retroarch' },
              { text: 'Rnote', link: '/rnote' },
              { text: 'Skype', link: '/skype' },
              { text: 'Speedtest CLI', link: '/speedtest-cli' },
              { text: 'Spotify', link: '/spotify' },
              { text: 'Steam', link: '/steam' },
              { text: 'Switcheroo', link: '/switcheroo' },
              { text: 'Synching', link: '/Synching' },
              { text: 'Taskwarrior', link: '/taskwarrior' },
              { text: 'Telegram', link: '/telegram' },
              { text: 'Thunderbird', link: '/thunderbird' },
              { text: 'Timeshift', link: '/timeshift' },
              { text: 'Toolbox', link: '/toolbox' },
              { text: 'Totem', link: '/totem' },
              { text: 'Transmission', link: '/transmission' },
              { text: 'Turtle', link: '/turtle' },
              { text: 'Ungoogled-chromium', link: '/ungoogled-chromium' },
              { text: 'Vesktop', link: '/vesktop' },
              { text: 'Viber', link: '/viber' },
              { text: 'Vivaldi', link: '/vivaldi' },
              { text: 'VLC', link: '/vlc' },
              { text: 'VSCode', link: '/vscode' },
              { text: 'VSCodium', link: '/vscodium' },
              { text: 'VK Мессенджер', link: '/vk-messenger' },
              { text: 'Warehouse', link: '/warehouse' },
              { text: 'WhatsApp', link: '/whatsapp-desktop' },
              { text: 'Wike', link: '/wike' },
              { text: 'WPS Office', link: '/wps-office' },
              { text: 'Waterfox', link: '/waterfox' },
              { text: 'Web Apps', link: '/web-apps' },
              { text: 'Xeyes', link: '/xeyes' },
              { text: 'XLSCLIENTS', link: '/xlsclients' },
              { text: 'Xmind', link: '/xmind' },
              { text: 'Zed', link: '/zed' },
              { text: 'ZeroTierOne', link: '/zerotier' },
              { text: 'Zoom', link: '/zoom' },
              { text: 'Zsh', link: '/zsh' },
              { text: 'Анализатор использования дисков', link: '/baobab' },
              { text: 'Апостроф', link: '/apostrophe' },
              { text: 'Аутентификатор', link: '/authenticator' },
              { text: 'Веб-браузер Epiphany', link: '/webfont-kit-generator' },
              { text: 'Видеотриммер', link: '/epiphany' },
              { text: 'Глаз GNOME', link: '/eog' },
              { text: 'Генератор набора веб-шрифтов', link: '/eog' },
              { text: 'Дела', link: '/errands' },
              { text: 'Диски', link: '/diskutility' },
              { text: 'Декодер', link: '/gnome-qr-decoder' },
              { text: 'Децибелы', link: '/decibels' },
              { text: 'Журналы', link: '/gnome-logs' },
              { text: 'Кассета', link: '/cassette' },
              { text: 'Календарь', link: '/gnome-calendar' },
              { text: 'Камера', link: '/snapshot' },
              { text: 'Карты', link: '/maps' },
              { text: 'Калькулятор', link: '/gnome-calculator' },
              { text: 'Консоль', link: '/console' },
              { text: 'Контакты', link: '/gnome-contacts' },
              { text: 'КуМир', link: '/kumir' },
              { text: 'Менеджер расширений', link: '/gnome-extension-manager' },
              { text: 'Мой офис', link: '/my-office' },
              { text: 'Музыка', link: '/gnome-music' },
              { text: 'МТС Линк', link: '/mts-link' },
              { text: 'Настройки', link: '/gnome-control-center' },
              { text: 'Пароли и ключи', link: '/seahorse' },
              { text: 'Погода', link: '/gnome-weather' },
              { text: 'Подключения', link: '/gnome-connections' },
              { text: 'Р7-Офис', link: '/r7-office' },
              { text: 'Pасширения', link: '/extensions-app' },
              { text: 'Ресурсы', link: '/resources' },
              { text: 'Сканер документов', link: '/simple-scan' },
              { text: 'Символы', link: '/gnome-characters' },
              { text: 'Системный монитор', link: '/gnome-system-monitor' },
              { text: 'Справка', link: '/yelp' },
              { text: 'Тест скорости', link: '/speedtest' },
              { text: 'Текстовый редактор', link: '/gnome-text-editor' },
              { text: 'Терминал', link: '/terminal' },
              { text: 'Туба', link: '/tuba' },
              { text: 'Файлы', link: '/nautilus' },
              { text: 'Часы', link: '/gnome-clocks' },
              { text: 'Центр мониторинга системы', link: '/system-monitoring-center' },
              { text: 'Центр Приложений', link: '/gnome-software' },
              { text: 'Экскурсия', link: '/gnome-tour' },
              { text: 'Яндекс Браузер', link: '/yandex-browser' },
              { text: 'Яндекс Диск', link: '/yandex-disk' }
            ],
            collapsed: true
          },
          {
            text: 'Использование рабочего окружения GNOME',
            items: [
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
                  {
                    text: 'Создание пустого файла в файловом менеджере',
                    link: '/add-empty-file-to-nautilus'
                  },
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
                      {
                        text: 'Нужно ли сканировать свою электронную почту на наличие вирусов',
                        link: '/net-email-virus'
                      }
                    ],
                    collapsed: true
                  },
                  {
                    text: 'Веб-браузеры',
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
                    items: [{ text: 'Управление громкостью', link: '/gnome-volume-control' }],
                    collapsed: true
                  },
                  {
                    text: 'Клавиатура',
                    items: [
                      { text: 'Использование других раскладок клавиатуры', link: '/keyboard-layouts' },
                      { text: 'Сочетание клавиш', link: '/keyboard-shortcuts' }
                    ],
                    collapsed: true
                  },
                  {
                    text: 'Тема',
                    items: [{ text: 'Общая тема для всех приложений', link: '/uniform-look' }],
                    collapsed: true
                  },
                  {
                    text: 'Монитор и экран',
                    items: [
                      { text: 'Изменение разрешения или ориентация экрана', link: '/look-resolution' },
                      { text: 'Подключение дополнительного монитора', link: '/display-dual-monitors' },
                      { text: 'Масштабирование экрана', link: '/scaling-the-screen' },
                      { text: 'Изменение внешнего вида рабочего стола', link: '/look-background' },
                      { text: 'Настройка яркости экрана', link: '/display-brightness' }
                    ],
                    collapsed: true
                  },
                  { text: 'Настройка терминала', link: '/terminal_ch' },
                  { text: 'Установка шрифтов', link: '/add-fonts' }
                ],
                collapsed: true
              }
            ],
            collapsed: true
          },
          {
            text: 'Расширения рабочего окружения GNOME',
            link: '/extensions',
            items: [
              { text: 'Add to Desktop', link: '/add-to-desktop' },
              { text: 'App menu is back', link: '/app-menu-is-back' },
              {
                text: 'AppIndicator and KStatusNotifierItem Support',
                link: '/appindicator-kstatus-notifier-item'
              },
              { text: 'Blur my Shell', link: '/blur-my-shell' },
              { text: 'Custom Accent Colors', link: '/custom-accent-colors' },
              { text: 'Dash to Dock', link: '/dash-to-dock' },
              { text: 'ddterm', link: '/ddterm' },
              { text: 'EasyEffects Preset Selector', link: '/easyeffects-preset-selector' },
              { text: 'Extension List', link: '/extension-list' },
              { text: 'Fullscreen Avoider', link: '/fullscreen-avoider' },
              { text: 'GSConnect', link: '/gsconnect' },
              { text: 'Gtk4 Desktop Icons NG', link: '/gtk4-desktop-icons' },
              { text: 'Just Perfection', link: '/just-perfection' },
              { text: 'Legacy (GTK3) Theme Scheme Auto Switcher', link: '/legacy-theme-auto-switcher' },
              { text: 'Nautilus Backspace', link: '/nautilus-backspace-back' },
              { text: 'OpenWeather Refined', link: '/openweather' },
              { text: 'OSD Volume Number', link: '/osd-volume-number' },
              { text: 'Status Area Horizontal Spacing', link: '/status-area-horizontal-spacing' },
              { text: 'UPower Battery', link: '/upower-battery' },
              { text: 'USBGuard', link: '/usbguard' }
            ],
            collapsed: true
          },
          {
            text: 'Решение проблем',
            items: [
              {
                text: 'Проблема со сбросом уровня звука по истечению времени',
                link: '/drop-soundlevel-after-cron-workaround'
              },
              { text: 'Проблема со звуком в передней панели', link: '/fix-front-panel-audio' },
              {
                text: 'Проблема с отображением пользователя на экрание приветствия GDM',
                link: '/hidden-user-in-userlist-workaround'
              },
              {
                text: 'Обновить названия стандартных папок в соответствутвии с локалью',
                link: '/change-the-language-of-the-home-user-folders-automatically'
              },
              { text: 'Использование клавиатур Дарк Проджект', link: '/dark-project-keyboard-on-linux' }
            ],
            collapsed: true
          },
          {
            text: 'Периферия и оборудование',
            link: '/hardware-compatibility',
            items: [
              { text: 'Аппаратная совместимость', link: '/hardware-compatibility' },
              { text: 'Драйверы NVIDIA', link: '/nvidia' },
              { text: 'Подключение USB-устройств', link: '/usb-devices' },
              { text: 'Подключение принтера', link: '/drivers-for-printer' },
              { text: 'Подключение сканера', link: '/drivers-for-scanner' },
              { text: 'Подключение DualShock', link: '/dualshock' }
            ],
            collapsed: true
          },
          {
            text: 'Разработка',
            items: [
              { text: 'Aurora SDK', link: '/aurora-sdk' },
              { text: 'Nodejs', link: '/nodejs' },
              { text: 'PHP', link: '/php' },
              { text: 'Podman', link: '/podman' },
              {
                text: 'Python',
                link: '/python',
                items: [{ text: 'Использование Poetry', link: 'python-use-poetry' }],
                collapsed: true
              },
              {
                text: 'Rust',
                link: '/rust',
                items: [{ text: 'Приложение на GTK4', link: 'rust-gtk4-applications' }],
                collapsed: true
              },
              {
                text: 'Vala',
                link: '/vala',
                items: [{ text: 'Приложение на GTK4', link: 'vala-gtk4-applications' }],
                collapsed: true
              }
            ],
            collapsed: true
          },
          {
            text: 'Cизиф',
            link: 'sisyphus',
            items: [
              {
                text: 'Etersoft-build-utils',
                link: '/etersoft-build-utils'
              },
              {
                text: 'Hasher',
                link: '/hasher'
              },
              {
                text: 'Spec',
                link: '/spec'
              },
              {
                text: 'Сборка в системе',
                link: '/build'
              },
              {
                text: 'Сборка RPM-пакетов',
                link: '/build-packages'
              },
              {
                text: 'Патчи',
                link: '/patches'
              }
            ]
          },
          {
            text: 'Игры',
            link: '/games',
            items: [
              { text: 'Изменение clearcpuid', link: '/clearcpuid' },
              { text: 'Mindustry', link: '/mindustry' },
              { text: 'Minecraft', link: '/minecraft' },
              { text: 'Sonic 3 A.I.R', link: '/sonic3-a.i.r' },
              { text: 'Sonic Robo Blast 2', link: '/sonic-robo-blast2' },
              { text: 'Space Station-14', link: '/space-station-14' }
            ],
            collapsed: true
          }
        ]
      },
      {
        text: 'Быстрые ссылки',
        items: [
          { text: 'APT', link: '/apt-get' },
          { text: 'Сизиф', link: '/sisyphus' },
          { text: 'Sudo', link: '/sudo' },
          { text: 'Ядро', link: '/kernel' },
          { text: 'EPM', link: '/epm' },
          { text: 'Flatpak', link: '/flatpak' },
          { text: 'Snaps', link: '/snap' },
          { text: 'Приложения для GNOME', link: '/apps-gnome' },
          { text: 'Samba', link: '/samba' }
        ]
      }
    ],
    '/reference/': [
      { text: 'Для авторов', link: '/reference/' },
      {
        text: 'Создание страниц',
        base: '/reference/pages/',
        items: [
          { text: 'Внесение изменений', link: '/alteration' },
          { text: 'Возможности Markdown', link: '/markdown-how-to' },
          { text: 'Возможности VitePress', link: '/vitepress' },
          { text: 'Общие правила', link: '/general-rules' }
        ],
        collapsed: false
      },
      {
        text: 'Структура',
        base: '/reference/structure/',
        items: [
          { text: 'Страница приложения', link: '/app' },
          { text: 'Страница Wiki', link: '/wiki_page' }
        ],
        collapsed: false
      },
      {
        text: 'Контроль качества',
        base: '/reference/tests/',
        items: [
          { text: 'Проверка текста на ошибки', link: '/speller' },
          { text: 'Проверка структуры статьи', link: '/remark' }
        ],
        collapsed: false
      }
    ]
  }
}
