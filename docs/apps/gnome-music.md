---
title: GNOME Music
nameRepo: gnome-music
appstreamRepo: org.gnome.Music
appstreamFlatpak: org.gnome.Music
metainfo:
    thumb:
        src: /gnome-music/org.gnome.Music.desktop.png
        title: Gnome Music
    summary: Воспроизводите и упорядочивайте свою музыкальную коллекцию
    site:
        url: https://apps.gnome.org/ru/Music/
        anchor: apps.gnome.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue:
        url: https://gitlab.gnome.org/GNOME/gnome-music/issues
        anchor: gitlab.gnome.org
    
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
