import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { packages } from '../../package-lock.json'
import { vitepressSearchOptions } from './plugins'
import type { AGWTheme } from '../theme/types/index'

export const nav = (): DefaultTheme.NavItem[] => [
  { text: 'Documention', link: '/en/wiki/' },
  // { text: 'GNOME Apps', link: '/en/apps-gnome/' },
  {
    text: 'About project',
    items: [
      { text: 'About project', link: '/en/project/about/' },
      // { text: 'How to contribute', link: '/en/project/how-to-contribute/' },
      { text: 'Contributors', link: '/en/project/contributions/' }
    ]
  }
]

export const sidebar = (): DefaultTheme.SidebarItem[] => [
  {
    items: [
      // { text: 'Quick start', link: 'quick-start/' },
      // {
      //   text: 'GNOME in ALT',
      //   base: '/en/images/',
      //   items: [
      //     { text: 'ALT Regular Gnome', link: 'alt-regular-gnome/' },
      //     { text: 'ALT Starterkit Gnome', link: 'alt-starterkit-gnome/' },
      //     { text: 'ALT Workstation', link: 'alt-workstation/' }
      //   ],
      //   collapsed: true
      // },
      // {
      //   text: 'Installation',
      //   base: '/en/installations/',
      //   items: [
      //     { text: 'Install at Mac', link: 'macbook/' },
      //     { text: 'Create bootable drive ALT Regular Gnome', link: 'bootable-drive/' },
      //     { text: 'Installation guide', link: 'ordinary-install/' },
      //     { text: 'Installing next to macOS', link: 'install-on-macbook-with-opencore-parallel/' }
      //   ],
      //   collapsed: true
      // },
      // {
      //   text: 'Security',
      //   link: 'main/security/'
      // },
      {
        text: 'Installing and updating programs',
        base: '/en/apps/',
        items: [
          { text: 'Add-water', link: 'add-water/' },
          { text: 'Alacarte', link: 'alacarte/' },
          { text: 'Amberol', link: 'amberol/' },
          { text: 'AniLibrix', link: 'anilibrix/' },
          { text: 'AniLibrix Plus', link: 'anilibrix-plus/' },
          { text: 'AnyDesk', link: 'anydesk/' },
          { text: 'Arduino IDE', link: 'arduino-ide/' },
          { text: 'AsusCtl', link: 'asusctl/' },
          { text: 'Audacity', link: 'audacity/' },
          { text: 'Ayugram', link: 'ayugram-desktop/' },
          { text: 'Binary', link: 'binary/' },
          { text: 'Blender', link: 'blender/' },
          { text: 'Bottles', link: 'bottle/' },
          { text: 'Boxes', link: 'boxes/' },
          { text: 'Boxy SVG', link: 'boxy-svg/' },
          { text: 'Brave Browser', link: 'brave/' },
          { text: 'Сartridges', link: 'cartridges/' },
          { text: 'Celluloid', link: 'celluloid/' },
          { text: 'Chromium', link: 'chromium/' },
          { text: 'Conky', link: 'conky/' },
          { text: 'Cozy', link: 'cozy/' },
          { text: 'Desktop Files Creator', link: 'desktop-files-creator/' },
          { text: 'Dialect', link: 'dialect/' },
          { text: 'Discord', link: 'discord/' },
          { text: 'Docker', link: 'docker/' },
          { text: 'Dosage', link: 'dosage/' },
          { text: 'Drawing', link: 'drawing/' },
          { text: 'DroidCam', link: 'droidcam/' },
          { text: 'EasyEffects', link: 'easyeffects/' },
          { text: 'Eclipse IDE', link: 'eclipse-ide/' },
          { text: 'Emulsion', link: 'emulsion/' },
          { text: 'Enter-tex', link: 'enter-tex/' },
          { text: 'Evince', link: 'evince/' },
          { text: 'Fastfetch', link: 'fastfetch/' },
          { text: 'FFmpeg', link: 'ffmpeg/' },
          { text: 'Figma', link: 'figma/' },
          { text: 'Firefox', link: 'firefox/' },
          { text: 'Flatseal', link: 'flatseal/' },
          { text: 'Foliate', link: 'foliate/' },
          { text: 'Folio', link: 'folio/' },
          { text: 'Footage', link: 'footage/' },
          { text: 'FOSSology', link: 'fossology-nomos/' },
          { text: 'Fotema', link: 'fotema/' },
          { text: 'Fragments', link: 'fragments/' },
          { text: 'Fretboard', link: 'fretboard/' },
          { text: 'Fish', link: 'fish/' },
          { text: 'G4Music', link: 'g4music/' },
          { text: 'Gaphor', link: 'gaphor/' },
          { text: 'GDM Настройки', link: 'gdm-settings/' },
          { text: 'Gear Lever', link: 'gear-lever/' },
          { text: 'Git', link: 'git/' },
          { text: 'GitHub Desktop', link: 'github-desktop/' },
          { text: 'Google Chrome', link: 'google-chrome/' },
          { text: 'GPU Screen Recorder', link: 'gpu-screen-recorder/' },
          { text: 'Gradia', link: 'gradia/' },
          { text: 'Gimp', link: 'gimp/' },
          { text: 'Hardware Probe', link: 'hw-probe/' },
          { text: 'Helvum', link: 'helvum/' },
          { text: 'Heroic Games Launcher', link: 'heroic-games-launcher/' },
          { text: 'IP Lookup', link: 'ip-lookup/' },
          { text: 'Kooha', link: 'kooha/' },
          { text: 'Krita', link: 'krita/' },
          { text: 'Kega Fusion', link: 'kega-fusion/' },
          { text: 'Lazarus', link: 'lazarus/' },
          { text: 'Lenspect', link: 'lenspect/' },
          { text: 'LibreOffice', link: 'libreoffice/' },
          { text: 'Loupe', link: 'loupe/' },
          { text: 'Lunacy', link: 'lunacy/' },
          { text: 'Linux Theme Store', link: 'linux-theme-store/' },
          { text: 'Lutris', link: 'lutris/' },
          { text: 'LibreWolf', link: 'librewolf/' },
          { text: 'Meridius', link: 'meridius/' },
          { text: 'Microsoft Edge', link: 'microsoft-edge/' },
          { text: 'Mission Center', link: 'mission-center/' },
          { text: 'Мpich', link: 'mpich/' },
          { text: 'МPV', link: 'mpv/' },
          { text: 'Main-menu', link: 'main-menu/' },
          { text: 'Mangojuice', link: 'mangojuice/' },
          { text: 'Neofetch', link: 'neofetch/' },
          { text: 'Neovim', link: 'neovim/' },
          { text: 'Netsleuth', link: 'netsleuth/' },
          { text: 'Nextcloud Desktop', link: 'nextcloud-desktop/' },
          { text: 'Notepad', link: 'notepad/' },
          { text: 'OBS Studio', link: 'obs-studio/' },
          { text: 'Obsidian', link: 'obsidian/' },
          { text: 'OnlyOffice', link: 'onlyoffice/' },
          { text: 'OpenRazer', link: 'openrazer/' },
          { text: 'Opera', link: 'opera/' },
          { text: 'Orca', link: 'orca/' },
          { text: 'Penpot Desktop', link: 'penpot-desktop/' },
          { text: 'PortProton', link: 'port-proton/' },
          { text: 'Postman', link: 'postman/' },
          { text: 'PinApp', link: 'pin-app/' },
          { text: 'Piper', link: 'piper/' },
          { text: 'PyRadio', link: 'pyradio/' },
          { text: 'qBittorrent', link: 'q-bittorrent/' },
          { text: 'Radio', link: 'radio/' },
          { text: 'Reaper', link: 'reaper/' },
          { text: 'RetroArch', link: 'retroarch/' },
          { text: 'Rnote', link: 'rnote/' },
          { text: 'Skype', link: 'skype/' },
          { text: 'Speedtest CLI', link: 'speedtest-cli/' },
          { text: 'Spotify', link: 'spotify/' },
          { text: 'Steam', link: 'steam/' },
          { text: 'Switcheroo', link: 'switcheroo/' },
          { text: 'Synching', link: 'Synching/' },
          { text: 'Taskwarrior', link: 'taskwarrior/' },
          { text: 'Telegram', link: 'telegram/' },
          // { text: 'Thunderbird', link: 'thunderbird/' },
          // { text: 'Timeshift', link: 'timeshift/' },
          // { text: 'Toolbox', link: 'toolbox/' },
          // { text: 'Totem', link: 'totem/' },
          // { text: 'Transmission', link: 'transmission/' },
          // { text: 'Tuner', link: 'tuner/' },
          // { text: 'Turtle', link: 'turtle/' },
          // { text: 'Ungoogled-chromium', link: 'ungoogled-chromium/' },
          // { text: 'Vesktop', link: 'vesktop/' },
          // { text: 'Viber', link: 'viber/' },
          // { text: 'Vivaldi', link: 'vivaldi/' },
          // { text: 'VLC', link: 'vlc/' },
          // { text: 'VSCode', link: 'vscode/' },
          // { text: 'VSCodium', link: 'vscodium/' },
          // { text: 'VK Messenger', link: 'vk-messenger/' },
          // { text: 'Warehouse', link: 'warehouse/' },
          // { text: 'WhatsApp', link: 'whatsapp-desktop/' },
          // { text: 'Wike', link: 'wike/' },
          // { text: 'WPS Office', link: 'wps-office/' },
          // { text: 'Waterfox', link: 'waterfox/' },
          // { text: 'Web Apps', link: 'web-apps/' },
          // { text: 'Xeyes', link: 'xeyes/' },
          // { text: 'XLSCLIENTS', link: 'xlsclients/' },
          // { text: 'Xmind', link: 'xmind/' },
          // { text: 'Zed', link: 'zed/' },
          // { text: 'ZeroTierOne', link: 'zerotier/' },
          // { text: 'Zoom', link: 'zoom/' },
          // { text: 'Zsh', link: 'zsh/' },
          { text: 'Disk Usage Analyzer', link: 'baobab/' },
          { text: 'Apostrophe', link: 'apostrophe/' },
          { text: 'Authenticator', link: 'authenticator/' },
          { text: 'Web', link: 'epiphany/' },
          { text: 'GNOME Video Trimmer', link: 'gnome-video-trimmer/' },
          { text: 'Eye of GNOME', link: 'eog/' },
          // { text: 'WebfontKit Bundler', link: 'webfont-kit-generator/' },
          { text: 'Errands', link: 'errands/' },
          { text: 'Disks', link: 'diskutility/' },
          { text: 'Decoder', link: 'gnome-qr-decoder/' },
          { text: 'Decibels', link: 'decibels/' },
          { text: 'Logs', link: 'gnome-logs/' },
          { text: 'Cassette', link: 'cassette/' },
          { text: 'Calendar', link: 'gnome-calendar/' },
          // { text: 'Camera', link: 'snapshot/' },
          { text: 'Maps', link: 'maps/' },
          { text: 'Calculator', link: 'gnome-calculator/' },
          { text: 'Console', link: 'console/' },
          { text: 'Contacts', link: 'gnome-contacts/' },
          { text: 'KuMir', link: 'kumir/' },
          { text: 'Extenstion Manager', link: 'gnome-extension-manager/' },
          { text: 'MyOffice', link: 'my-office/' },
          { text: 'Music', link: 'gnome-music/' },
          { text: 'MTS Link', link: 'mts-link/' },
          { text: 'Settings', link: 'gnome-control-center/' },
          // { text: 'Seahorse', link: 'seahorse/' },
          { text: 'Weather', link: 'gnome-weather/' },
          { text: 'Connections', link: 'gnome-connections/' },
          // { text: 'R7 Office', link: 'r7-office/' },
          { text: 'Extensions', link: 'extensions-app/' },
          // { text: 'Resources', link: 'resources/' },
          // { text: 'Document Scanner', link: 'simple-scan/' },
          { text: 'Characters', link: 'gnome-characters/' },
          { text: 'Sysmte Monitor', link: 'gnome-system-monitor/' },
          // { text: 'Help', link: 'yelp/' },
          // { text: 'Speedtest', link: 'speedtest/' },
          { text: 'Text Editor', link: 'gnome-text-editor/' },
          // { text: 'Terminal', link: 'terminal/' },
          // { text: 'Tuba', link: 'tuba/' },
          // { text: 'Files', link: 'nautilus/' },
          { text: 'Clocks', link: 'gnome-clocks/' },
          // { text: 'System Monitoring Center', link: 'system-monitoring-center/' },
          { text: 'Software', link: 'gnome-software/' },
          { text: 'Tour', link: 'gnome-tour/' }
          // { text: 'Yandex Browser', link: 'yandex-browser/' },
          // { text: 'Yandex Disk', link: 'yandex-disk/' }
        ],
        collapsed: true
      },
      {
        text: 'Using GNOME desktop environment',
        base: '/en/using-gnome/',
        items: [
          // {
          //   text: 'Workspaces',
          //   base: '/en/using-gnome/workspaces/',
          //   items: [
          //     { text: 'Launching applications', link: 'launching-applications/' },
          //     { text: 'Pin apps to Dash', link: 'pin-apps-to-dash/' },
          //     { text: 'Center new windows', link: 'center-new-windows/' },
          //     { text: 'Startup applications', link: 'startup-applications/' },
          //     { text: 'Fast switching between windows', link: 'switching-apps/' },
          //     { text: 'Notifications and notification list', link: 'notifications/' },
          //     { text: 'Remote Desktop', link: 'gnome-remote-desktop/' },
          //     {
          //       text: 'Creating an empty file in the file manager',
          //       link: 'add-empty-file-to-nautilus/'
          //     },
          //     { text: 'Lock screen', link: 'lock-screen/' }
          //   ],
          //   collapsed: true
          // },
          // {
          //   text: 'Networks, Internet and email',
          //   base: '/en/using-gnome/net/',
          //   items: [
          //     {
          //       text: 'Secure',
          //       base: '/en/using-gnome/net/secure/',
          //       items: [
          //         { text: 'Do I need an antivirus program?', link: 'net-antivirus/' },
          //         {
          //           text: 'Do I need to scan my email for viruses',
          //           link: 'net-email-virus/'
          //         }
          //       ],
          //       collapsed: true
          //     },
          //     {
          //       text: 'Browsers',
          //       base: '/en/using-gnome/net/browsers/',
          //       items: [{ text: 'Changing the default web browser', link: 'net-browser/' }],
          //       collapsed: true
          //     }
          //   ],
          //   collapsed: true
          // },
          {
            text: 'User and System Settings',
            base: '/en/using-gnome/settings/',
            items: [
              // {
              //   text: 'Audio',
              //   base: '/en/using-gnome/settings/audio/',
              //   items: [{ text: 'Volume control', link: 'gnome-volume-control/' }],
              //   collapsed: true
              // },
              // {
              //   text: 'Keyboard',
              //   base: '/en/using-gnome/settings/keyboard/',
              //   items: [
              //     { text: 'Using other keyboard layouts', link: 'keyboard-layouts/' },
              //     { text: 'Keyboard Shortcuts', link: 'keyboard-shortcuts/' }
              //   ],
              //   collapsed: true
              // },
              // {
              //   text: 'Themes',
              //   base: '/en/using-gnome/settings/themes/',
              //   items: [{ text: 'A common theme for all applications', link: 'uniform-look/' }],
              //   collapsed: true
              // },
              // {
              //   text: 'Monitor and screen',
              //   base: '/en/using-gnome/settings/displays/',
              //   items: [
              //     { text: 'Changing the resolution or orientation of the screen', link: 'look-resolution/' },
              //     { text: 'Connecting an additional monitor', link: 'display-dual-monitors/' },
              //     { text: 'Scaling the screen', link: 'scaling-the-screen/' },
              //     { text: 'Changing the appearance of the desktop', link: 'look-background/' },
              //     { text: 'Adjusting the screen brightness', link: 'display-brightness/' }
              //   ],
              //   collapsed: true
              // },
              // { text: 'Terminal setting up', link: 'terminal_ch/' },
              { text: 'Add Fonts', link: 'add-fonts/' }
            ],
            collapsed: true
          }
        ],
        collapsed: true
      }
      // {
      //   text: 'Extensions for for GNOME desktop environment',
      //   base: '/en/extensions/',
      //   items: [
      //     { text: 'Add to Desktop', link: 'add-to-desktop/' },
      //     { text: 'App menu is back', link: 'app-menu-is-back/' },
      //     {
      //       text: 'AppIndicator and KStatusNotifierItem Support',
      //       link: 'appindicator-kstatus-notifier-item/'
      //     },
      //     { text: 'Blur my Shell', link: 'blur-my-shell/' },
      //     { text: 'Custom Accent Colors', link: 'custom-accent-colors/' },
      //     { text: 'Dash to Dock', link: 'dash-to-dock/' },
      //     { text: 'ddterm', link: 'ddterm/' },
      //     { text: 'EasyEffects Preset Selector', link: 'easyeffects-preset-selector/' },
      //     { text: 'Extension List', link: 'extension-list/' },
      //     { text: 'Fullscreen Avoider', link: 'fullscreen-avoider/' },
      //     { text: 'GSConnect', link: 'gsconnect/' },
      //     { text: 'Gtk4 Desktop Icons NG', link: 'gtk4-desktop-icons/' },
      //     { text: 'Just Perfection', link: 'just-perfection/' },
      //     { text: 'Legacy (GTK3) Theme Scheme Auto Switcher', link: 'legacy-theme-auto-switcher/' },
      //     { text: 'Nautilus Backspace', link: 'nautilus-backspace-back/' },
      //     { text: 'OpenWeather Refined', link: 'openweather/' },
      //     { text: 'OSD Volume Number', link: 'osd-volume-number/' },
      //     { text: 'Status Area Horizontal Spacing', link: 'status-area-horizontal-spacing/' },
      //     { text: 'UPower Battery', link: 'upower-battery/' },
      //     { text: 'USBGuard', link: 'usbguard/' }
      //   ],
      //   collapsed: true
      // },
      // {
      //   text: 'Problem solving',
      //   base: '/en/tips/',
      //   items: [
      //     {
      //       text: 'The problem with resetting the sound level after the time has elapsed',
      //       link: 'drop-soundlevel-after-cron-workaround/'
      //     },
      //     { text: 'The problem with the sound in the front panel', link: 'fix-front-panel-audio/' },
      //     {
      //       text: 'Проблема с отображением пользователя на экрание приветствия GDM',
      //       link: 'hidden-user-in-userlist-workaround/'
      //     },
      //     {
      //       text: 'Update the names of standard folders according to the locale',
      //       link: 'change-the-language-of-the-home-user-folders-automatically/'
      //     },
      //     { text: 'Using Dark Project Keyboards', link: 'dark-project-keyboard-on-linux/' }
      //   ],
      //   collapsed: true
      // },
      // {
      //   text: 'Peripherals and equipment',
      //   base: '/en/equipment/',
      //   items: [
      //     { text: 'Hardware compatibility', link: 'hardware-compatibility/' },
      //     { text: 'NVIDIA Drivers', link: 'nvidia/' },
      //     { text: 'Connecting USB devices', link: 'usb-devices/' },
      //     { text: 'Connecting the printer', link: 'drivers-for-printer/' },
      //     { text: 'Connecting the scanner', link: 'drivers-for-scanner/' },
      //     { text: 'Connecting DualShock', link: 'dualshock/' }
      //   ],
      //   collapsed: true
      // },
      // {
      //   text: 'Developing',
      //   base: '/en/developers/',
      //   items: [
      //     { text: 'Aurora SDK', link: 'aurora-sdk/' },
      //     { text: 'Nodejs', link: 'nodejs/' },
      //     { text: 'PHP', link: 'php/' },
      //     { text: 'Podman', link: 'podman/' },
      //     {
      //       text: 'Python',
      //       base: '/en/developers/python/',
      //       items: [{ text: 'Poetry Usage', link: 'python-use-poetry/' }],
      //       collapsed: true
      //     },
      //     {
      //       text: 'Rust',
      //       base: '/en/developers/rust/',
      //       items: [{ text: 'GTK4 Application', link: 'rust-gtk4-applications/' }],
      //       collapsed: true
      //     },
      //     {
      //       text: 'Vala',
      //       base: '/en/developers/vala/',
      //       items: [{ text: 'GTK4 Application', link: 'vala-gtk4-applications/' }],
      //       collapsed: true
      //     }
      //   ],
      //   collapsed: true
      // },
      // {
      //   text: 'Sisyphus',
      //   base: '/en/builds/',
      //   link: 'sisyphus/',
      //   items: [
      //     {
      //       text: 'Etersoft-build-utils',
      //       link: 'etersoft-build-utils/'
      //     },
      //     {
      //       text: 'Hasher',
      //       link: 'hasher/'
      //     },
      //     {
      //       text: 'Spec',
      //       link: 'spec/'
      //     },
      //     {
      //       text: 'Build in system',
      //       link: 'build/'
      //     },
      //     {
      //       text: 'Build RPM-packages',
      //       link: 'build-packages/'
      //     },
      //     {
      //       text: 'Patches',
      //       link: 'patches/'
      //     }
      //   ]
      // },
      // {
      //   text: 'Games',
      //   base: '/en/games/',
      //   items: [
      //     { text: 'Изменение clearcpuid', link: 'clearcpuid/' },
      //     { text: 'Mindustry', link: 'mindustry/' },
      //     { text: 'Minecraft', link: 'minecraft/' },
      //     { text: 'Sonic 3 A.I.R', link: 'sonic3-a.i.r/' },
      //     { text: 'Sonic Robo Blast 2', link: 'sonic-robo-blast2/' },
      //     { text: 'Space Station-14', link: 'space-station-14/' }
      //   ],
      //   collapsed: true
      // }
    ]
  },
  {
    text: 'Quick links',
    base: '/en/package-manager/',
    items: [
      { text: 'APA', link: 'apa/' },
      { text: 'APT', link: 'apt-get/' },
      // { text: 'Сизиф', link: 'systems/sisyphus/' },
      // { text: 'Sudo', link: 'systems/sudo/' },
      // { text: 'Ядро', link: 'systems/kernel/' },
      { text: 'EPM', link: 'epm/' },
      { text: 'Flatpak', link: 'flatpak/' },
      { text: 'Snaps', link: 'snap/' },
      { text: 'Stapler', link: 'stplr/' }
    ]
  }
]

export const sidebarHowToContribute = (): DefaultTheme.SidebarItem[] => [
  // { text: 'For authors', link: '/' },
  // {
  //   text: 'Page creating',
  //   base: '/project/how-to-contribute/pages/',
  //   items: [
  //     { text: 'Making changes', link: 'alteration/' },
  //     { text: 'Markdown Features', link: 'markdown-how-to/' },
  //     { text: 'VitePress Features', link: 'vitepress/' },
  //     { text: 'General rules', link: 'general-rules/' }
  //   ],
  //   collapsed: false
  // },
  // {
  //   text: 'Structure',
  //   base: '/project/how-to-contribute/structure/',
  //   items: [
  //     { text: 'App page', link: 'app/' },
  //     { text: 'Wiki page', link: 'wiki_page/' }
  //   ],
  //   collapsed: false
  // },
  // {
  //   text: 'Quality control',
  //   base: '/project/how-to-contribute/tests/',
  //   items: [
  //     { text: 'Checking the text for errors', link: 'speller/' },
  //     { text: 'Checking the structure of the article', link: 'remark/' }
  //   ],
  //   collapsed: false
  // }
]

export const en = defineConfigWithTheme<AGWTheme.Config>({
  lang: 'en-US',
  description: 'Open Wiki about ALT Regular Gnome Operating system',
  themeConfig: {
    search: {
      provider: 'local',
      options: vitepressSearchOptions
    },
    nav: nav(),
    sidebar: {
      '/': { base: '/en/', items: sidebar() }
      // '/en/project/how-to-contribute/': {
      //   base: '/en/project/how-to-contribute/',
      //   items: sidebarHowToContribute()
      // }
    },
    editLink: {
      pattern: 'https://altlinux.space/alt-gnome/wiki/src/branch/transfer/docs/en/:path',
      text: 'Suggest changes on this page'
    },
    lastUpdated: {
      text: 'Last update'
    },
    returnToTopLabel: 'Up',
    sidebarMenuLabel: 'Menu',
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    darkModeSwitchLabel: 'Theme',
    outlineTitle: 'Title',
    notFound: {
      title: 'Page not found',
      quote: 'It looks like you clicked on an incorrect or outdated link. You can use the search.',
      linkText: 'Go back to the main page'
    },
    footer: {
      message:
        'Published under the GPL-3.0+ license. The content is available under the CC BY-SA 4.0 license, unless otherwise specified.',
      copyright: `
              2023-${new Date().getFullYear()} Developed by members of the ALT Gnome Wiki on the platform <a href="//vitepress.dev/">VitePress ${packages['node_modules/vitepress'].version}</a> with the support of ALT Gnome</a>
            `,
      docFooter: {
        message:
          'The contents of this page are available under a license <a href=":licence_link">:licence_name</a>'
      },
      licence: {
        content: {
          name: 'CC BY-SA 4.0',
          link: 'https://spdx.org/licenses/CC-BY-SA-4.0.html'
        }
      }
    }
  }
})
