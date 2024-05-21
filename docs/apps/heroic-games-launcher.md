---
aggregation:
    flatpak:
        id: com.heroicgameslauncher.hgl
        build: offical
    snap:
        id: heroic
        build: unoffical
appstream:
    name: Heroic Games Launcher
    icon: /heroic/heroic-logo.png
    summary: Бесплатный лаунчер с открытым исходным кодом для Epic, GOG и Amazon Prime Games
    metadata_license:
        name: GNU GPLv3
        link: https://heroicgameslauncher.com/cla
    developer:
        name: Heroic Games Launcher
        avatar: 
    url:
        homepage: https://heroicgameslauncher.com/
        bugtracker: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues
        donation: https://heroicgameslauncher.com/donate
gallery:
    title: Галерея
    type: slider
    items:
        - src: /heroic/heroic1.png
        - src: /heroic/heroic2.png
        - src: /heroic/heroic3.png
        - src: /heroic/heroic4.png
        - src: /heroic/heroic5.png
        - src: /heroic/heroic6.png
---

# Heroic Games Launcher

Heroic - это игровой лаунчер с открытым исходным кодом. Прямо сейчас он поддерживает запуск игр из Epic Games Store с использованием Legendary, GOG Games с использованием нашей пользовательской реализации с помощью gogdl и Amazon Games с использованием Nile.

<AGWGallery />

::: warning
Версия flatpak на момент создания статьи не работает
:::
<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-snap.md-->

## Установка версии Appimage

### Загрузка пакета

Переходим на [сайт программы](https://heroicgameslauncher.com/downloads) и нажимаем кнопку [[AppImage]]

### Установка пакета

Открываем терминал и выполняем

```shell
su -
cd /home/.../Downloads/ # Где "..." - имя вашего пользователя
epm install Heroic-2.14.1.AppImage
```

Соглашаемся на всех шагах и готово, приложение установлено.

