---
title: Spotify
appstreamFlatpak: com.spotify.Client
metainfo:
    active: true
    thumb:
        src: /spotify/com.spotify.Client.png
        title: Spotify
    summary: Музыкальный стриминговый сервис.
    developer: 
        name: Spotify Technology S.A.
        avatar: https://avatars.githubusercontent.com/u/251374?s=200&v=4
    site:
        url: https://www.spotify.com/
        anchor: spotify.com
    licence:
        url: https://choosealicense.com/licenses/cc0-1.0/
        anchor: CC0-1.0
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://community.spotify.com/t5/Desktop-Linux/bd-p/desktop_linux
        anchor: community.spotify.com
    restrictions: true
    proprietary: true
    sisyphus:
        url: 
    flathub:
        url: https://flathub.org/ru/apps/com.spotify.Client
---



# Spotify

Spotify — стриминговый сервис, позволяющий легально прослушивать музыкальные композиции, аудиокниги и подкасты, не скачивая их на устройство.

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Spotify** одной командой:

```shell
flatpak install flathub com.spotify.Client
```
<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Spotify** одной командой:

```shell
epm play spotify
```