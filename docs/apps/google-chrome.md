---
title: Google Chrome
appstreamFlatpak: com.google.Chrome
metainfo:
    active: true
    thumb:
        src: /google-chrome/com.google.Chrome.png
        title: Кассета
    summary: Веб-браузер от Google
    site:
        url: https://www.google.com/chrome/
        anchor: google.com
    licence:
        url: https://choosealicense.com/licenses/cc0-1.0/
        anchor: CC0-1.0
    adaptive: false
    gnomeCore: false
    gnomeCircle: false
    proprietary: true
    flathub:
        url: https://flathub.org/ru/apps/com.google.Chrome
---

# Google Chrome

Google Chrome — Браузер, разрабатываемый компанией Google на основе свободного браузера Chromium и движка Blink. Первая стабильная версия вышла для операционных систем семейства Linux вышла в мае 2010 года.

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **Google Chrome** одной командой:

```shell
flatpak install flathub com.google.Chrome
```

<!--@include: ./parts/install/software-flatpak.md-->

:::warning
Для запуска приложения требуется возможность создания непривилегированных пользовательских пространств, что является потенциально не безопасно. Вы можете [изменить настройку ядра](flatpak.md#запуск-приложении)
:::

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
