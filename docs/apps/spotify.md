---
title: Spotify
appstreamFlatpak: com.spotify.Client
aggregation:
    flatpak: com.spotify.Client
appstream:
    id: com.spotify.Client
    name: Spotify
    icon: /spotify/spotify-logo.svg
    summary: Музыкальный стриминговый сервис.
    keywords: 
        - restrictions
        - proprietary
    developer: 
        name: Spotify Technology S.A.
    metadata_license: 
        name: Собственная
        link: https://www.spotify.com/legal
    url: 
        homepage: https://www.spotify.com/
        bugtracker: https://community.spotify.com/t5/Desktop-Linux/bd-p/desktop_linux
---



# Spotify

Spotify — стриминговый сервис, позволяющий легально прослушивать музыкальные композиции, аудиокниги и подкасты, не скачивая их на устройство.

## Установка с помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

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