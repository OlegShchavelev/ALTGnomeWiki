---
title: GNOME Music
nameRepo: gnome-music
appstreamRepo: org.gnome.Music
appstreamFlatpak: org.gnome.Music
aggregation:
    flatpak: org.gnome.Music
    sisyphus: gnome-music
appstream:
    id: org.gnome.Music
    name: GNOME Music
    icon: /gnome-music/org.gnome.Music.desktop.png
    summary: Воспроизводите и упорядочивайте свою музыкальную коллекцию
    keywords: 
        - core
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    url: 
        homepage: https://apps.gnome.org/ru/Music/
        bugtracker: https://gitlab.gnome.org/GNOME/gnome-music/issues
---

# Музыка

GNOME Music — Лёгкий и приятный способ послушать вашу музыку. Ищите треки в вашей коллекции, пользуйтесь автоматическими списками воспроизведения или соберите свой свежий.

## Установка из репозитория

**GNOME Music** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-music
```
```shell[epm]
epm -i gnome-music
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **GNOME Music** одной командой:

```shell
flatpak install flathub org.gnome.Music
```

<!--@include: ./parts/install/software-flatpak.md-->
