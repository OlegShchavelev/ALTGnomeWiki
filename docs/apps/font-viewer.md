---
title: Шрифты
appstreamRepo: org.gnome.font-viewer
appstreamFlatpak: org.gnome.font-viewer
metainfo:
    thumb:
        src: /font-viewer/org.gnome.font-viewer.png
        title: Шрифты
    summary: Просмотр шрифтов, доступных в системе
    site:
        url: https://apps.gnome.org/ru/FontViewer/
        anchor: apps.gnome.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue: 
        url: https://gitlab.gnome.org/GNOME/gnome-font-viewer/-/issues
        anchor: gitlab.gnome.org
    adaptive: true,
    gnomeCore: true
---

# Шрифты

Шрифты — показывает установленные в операционной ситстеме шрифты в виде миниатюр. Выбор миниатюры открывает подробный режим просмотра шрифта, как будет выглядеть шрифт при различных размерах.

Приложение «Шрифты» также поддерживает установку новых шрифтов из файлов формата .ttf и прочих форматов. Шрифты можно установить для текущего пользователя или для всех пользователей компьютера.

## Установка из репозитория

**Шрифты** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-font-viewer
```
```shell[epm]
epm -i gnome-font-viewer
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Шрифты** одной командой:

```shell
flatpak install flathub org.gnome.font-viewer
```

<!--@include: ./parts/install/software-flatpak.md-->