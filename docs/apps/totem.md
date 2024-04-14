---
title: Видео
appstreamRepo: org.gnome.Totem
appstreamFlatpak: org.gnome.Totem
aggregation:
    sisyphus: totem
    flatpak: org.gnome.Totem
appstream:
    id: org.gnome.Totem
    name: Видео
    icon: /totem/totem-logo.svg
    summary: Видеопроигрыватель поддерживает список локальных видеофайлов и DVD с возможностью поиска и доступ к видео по сети.
    keywords: 
        - adaptive
        - core
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    metadata_license: 
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    url: 
        homepage: https://apps.gnome.org/Totem/
        bugtracker: https://gitlab.gnome.org/GNOME/totem/issues
        translate: https://l10n.gnome.org/module/totem/
        donation: https://www.gnome.org/donate/
---


# Видео

Видео (Totem) — официальная утилита для рабочего окружения GNOME. Видеопроигрыватель поддерживает список локальных видеофайлов и DVD с возможностью поиска, доступ к видео по сети (с помощью UPnP/DLNA), а также видео с веб-сайтов.

Приложение Видео включает в себя дополнительную функциональность: загрузчик субтитров, возможность замедления или ускорения проигрывания, создание галереи снимков экрана и запись DVD.

## Установка из репозитория

**Totem** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install totem
```
```shell[epm]
epm -i totem
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Видео** одной командой:

```shell
flatpak install flathub org.gnome.Totem
```

<!--@include: ./parts/install/software-flatpak.md-->