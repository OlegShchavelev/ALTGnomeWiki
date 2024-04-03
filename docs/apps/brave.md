---
title: Brave Browser
appstreamFlatpak: com.brave.Browser
aggregation: 
    flatpak: com.brave.Browser
appstream:
    id: com.brave.Browser
    name: Brave Browser
    icon: /brave/com.brave.Browser.png
    summary: Веб-браузер от Brave
    metadata_license: 
        name: CC0-1.0
        link: https://choosealicense.com/licenses/cc0-1.0/
    keywords: 
        - proprietary
    developer: 
        name: Brave Software
    url: 
        homepage: https://brave.com/
---

# Brawe Browser

Brawe Browser — веб-браузер со свободным и открытым исходным кодом на основе веб-браузера Chromium на движке Blink.

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Brawe Browser** одной командой:

```shell
flatpak install flathub com.brave.Browser
```
<!--@include: ./parts/install/software-flatpak.md-->

<!--@include: ./parts/warns/unpriveleged-spases.md -->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Brawe Browser** одной командой:

```shell
epm play brave
```