---
title: Viber
appstreamFlatpak: com.viber.Viber
aggregation:
    flatpak: com.viber.Viber
appstream:
    name: Viber
    icon: /viber/viber-logo.svg
    summary: Кроссплатформенное приложение для обмена сообщениями и звонков, насчитывающее миллиард пользователей по всему миру.
    keywords: 
        - proprietary
    developer: 
        name: Viber Media
    metadata_license: 
        name: Собсвтенная
        link: https://www.viber.com/app/uploads/ViberEULA82316.pdf
    url: 
        homepage: https://www.viber.com/
---



# Viber

Viber — кроссплатформенное приложение для обмена сообщениями и звонков, насчитывающее миллиард пользователей по всему миру.

<!--@include: ./parts/install/software-install.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Viber** одной командой:

```shell
epm play viber
```

## Установка с официального сайта

Cкачиваем пакет с официального сайта Viber:

```shell
cd ~/Загрузки
wget https://download.cdn.viber.com/desktop/Linux/viber.AppImage
```

Делаем исполняемым и запускаем

```shell
chmod +x viber.AppImage
./viber.AppImage
```

:::info
После первого запуска приложение Toolbox клонирует себя в директорию `~/.local/share/viber/`, поэтому загруженный файл можно удалить.
:::