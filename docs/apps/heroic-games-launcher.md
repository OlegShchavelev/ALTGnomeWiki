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

Heroic — игровой лаунчер с открытым исходным кодом. Прямо сейчас он поддерживает запуск игр из Epic Games Store с использованием Legendary, GOG Games с использованием нашей пользовательской реализации с помощью `gogdl` и Amazon Games с использованием `Nile`.

<AGWGallery />

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-snap.md-->

## Установка версии AppImage

-   Скачайте дистрибутив с [официального сайта](https://heroicgameslauncher.com/downloads) по кнопке `AppImage`

-   Откройте терминал и выполняем

```shell
su -
cd $HOME/Downloads/
epm install Heroic-2.14.1.AppImage
```

-   Следуйте инструкциям в установщике
-   Готово, приложение установлено.
