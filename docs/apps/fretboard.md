---
title: Fretboard
appstreamFlatpak: dev.bragefuglseth.Fretboard
aggregation: 
    sisyphus: fretboard
    flatpak: dev.bragefuglseth.Fretboard
appstream:
    id: dev.bragefuglseth.Fretboard
    name: Fretboard
    icon: /fretboard/fretboard-logo.svg
    summary: Позволяет находить гитарные аккорды, вводя их названия или отображая их на интерактивном грифе гитары.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords: 
        - circle
        - adaptive
        - dontthemes
    developer: 
        name: Brage Fuglseth 
        nickname: bragefuglseth
        avatar: /fretboard/fretboard-avatar.png
    url: 
        homepage: https://apps.gnome.org/Fretboard/
        bugtracker: https://github.com/bragefuglseth/fretboard/issues
        translate: https://hosted.weblate.org/engage/fretboard/
---

# Fretboard

Fretboard — позволяет находить гитарные аккорды, вводя их названия или отображая их на интерактивном грифе гитары. Когда вы определили аккорд, вы можете поэкспериментировать с его изменением, посмотреть другие способы его воспроизведения или добавить его в закладки, чтобы сохранить на потом. Независимо от того, новичок вы или продвинутый гитарист, вы можете использовать Fretboard, чтобы практиковаться, изучать и осваивать свои любимые композиции.

## Установка из репозитория 

**Fretboard** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fretboard
```
```shell[epm]
epm -i fretboard
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Fretboard** одной командой:

```shell
flatpak install dev.bragefuglseth.Fretboard
```

<!--@include: ./parts/install/software-flatpak.md-->