---
title: Brave Browser
appstreamFlatpak: com.brave.Browser
aggregation: 
    flatpak: com.brave.Browser
appstream:
    id: com.brave.Browser
    name: Brave Browser
    icon: /brave/brave-logo.svg
    summary: Веб-браузер от Brave
    metadata_license: 
        name: MPL-2.0 licence
        link: https://choosealicense.com/licenses/mpl-2.0/
    developer: 
        name: Brave Software
    url: 
        homepage: https://brave.com/
        bugtracker: https://github.com/brave/brave-browser/issues
---

# Brave Browser

Brave Browser — веб-браузер со свободным и открытым исходным кодом на основе веб-браузера Chromium на движке Blink.

![Brave](/brave/brave-1.png)

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Brave Browser** одной командой:

```shell
flatpak install flathub com.brave.Browser
```
<!--@include: ./parts/install/software-flatpak.md-->

<!--@include: ./parts/warns/unpriveleged-spases.md -->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Brave Browser** одной командой:

```shell
epm play brave
```