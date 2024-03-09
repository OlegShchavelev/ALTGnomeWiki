---
title: Microsoft Edge
appstreamFlatpak: com.microsoft.Edge
metainfo:
    thumb:
        src: /microsoft-edge/com.microsoft.Edge.png
        title: Microsoft Edge
    summary: Веб-браузер от Microsoft
    developer: 
        name: Microsoft
    site:
        url: https://www.microsoft.com/ru-ru/edge
        anchor: microsoft.com
    licence:
        url: https://choosealicense.com/licenses/cc0-1.0/
        anchor: CC0-1.0
    proprietary: true
---

# Microsoft Edge

Браузер от Microsoft, выпущенный в 2015 году, замена Internet Explorer, основан на Chromium.

## Установка с помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **Microsoft Edge** одной командой:

```shell
flatpak install flathub com.brave.Browser
```
<!--@include: ./parts/install/software-flatpak.md-->

<!--@include: ./parts/warns/unpriveleged-spases.md -->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Microsoft Edge** одной командой:

```shell
epm play edge
```