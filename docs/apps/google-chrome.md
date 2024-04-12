---
title: Google Chrome
appstreamFlatpak: com.google.Chrome
aggregation:
    flatpak: com.google.Chrome
appstream:
    id: com.google.Chrome
    name: Google Chrome
    icon: /google-chrome/com.google.Chrome.png
    summary: Веб-браузер от Google
    keywords: 
        - proprietary
    metadata_license: 
        name: CC0-1.0
        link: https://choosealicense.com/licenses/cc0-1.0/
    developer: 
        name: Google
    url: 
        homepage: https://www.google.com/chrome/
        bugtracker: https://gitlab.gnome.org/GNOME/gnome-music/issues
---

# Google Chrome

Google Chrome — Браузер, разрабатываемый компанией Google на основе свободного браузера Chromium и движка Blink. Первая стабильная версия вышла для операционных систем семейства Linux вышла в мае 2010 года.

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **Google Chrome** одной командой:

```shell
flatpak install flathub com.google.Chrome
```

<!--@include: ./parts/install/software-flatpak.md-->

<!--@include: ./parts/warns/unpriveleged-spases.md -->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Google Chrome** одной командой:

```shell
epm play chrome
```

## Запуск Яндекс Браузер в оконном интерфейсе Wayland

По умолчанию Google Chrome запускается в оконном интерфейсе X11, для запуска в оконном интерфейсе Wayland:

1. Введите в Умную строку адрес `chrome://flags/`
2. Введите в строку поиска флаг `#ozone-platform-hint`
3. Включите опцию `Preferred Ozone platform` значение `auto`
4. Перезапустите Google Chrome и проверьте результат

```shell
google-chrome --ozone-platform-hint=auto
```

:::info
Мы рекомендуем использовать оконный режим Wayland для графических устройств NVIDIA, использующие закрытые драйвера NVIDIA и сессию Wayland
:::
