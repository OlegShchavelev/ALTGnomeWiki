---
title: Microsoft Edge
appstreamFlatpak: com.microsoft.Edge
aggregation:
    flatpak: com.microsoft.Edge
appstream:
    id: com.microsoft.Edge
    name: Microsoft Edge
    icon: /microsoft-edge/microsoft-edge-logo.svg
    summary: Веб-браузер от Microsoft
    metadata_license: 
        name: CC0-1.0
        link: https://choosealicense.com/licenses/cc0-1.0/
    keywords:
        - proprietary
        - restrictions
    developer:
        name: Microsoft Corporation
        avatar: /microsoft-edge/microsoft-edge-avatar.svg
    url:
        homepage: https://microsoft.com/edge
        bugtracker: https://github.com/MicrosoftEdge/Status/issues
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