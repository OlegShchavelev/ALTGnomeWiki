---
title: Шрифты
appstreamRepo: org.gnome.font-viewer
appstreamFlatpak: org.gnome.font-viewer
aggregation:
    flatpak: org.gnome.font-viewer
    sisyphus: gnome-font-viewer
appstream:
    id: org.gnome.font-viewer
    name: Шрифты
    icon: /font-viewer/org.gnome.font-viewer.png
    summary: Просмотр шрифтов, доступных в системе
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords: 
        - core
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    url: 
        homepage: https://apps.gnome.org/ru/FontViewer/
        bugtracker: https://gitlab.gnome.org/GNOME/gnome-font-viewer/-/issues/
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