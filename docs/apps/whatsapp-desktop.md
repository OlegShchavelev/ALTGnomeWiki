---
title: WhatsApp for Linux
appstreamFlatpak: com.github.eneshecan.WhatsAppForLinux

metainfo:
    active: true
    thumb:
        src: https://dl.flathub.org/repo/screenshots/com.github.eneshecan.WhatsAppForLinux-stable/1248x702/com.github.eneshecan.WhatsAppForLinux-cc5532120b86a10fdc0f11fc0f1eeb08.png
        title: WhatsApp for Linux
    summary: Неоициальный клиент WhatsApp для Desktop
    developer: 
        name: Enes Hecan
    site:
        url: https://github.com/eneshecan/whatsapp-for-linux
        anchor: github.com
    licence:
        url: 
        anchor: GPL-3.0 license
    translate:
        url: 
        anchor: 
    issue: 
        url: https://github.com/eneshecan/whatsapp-for-linux/issues
        anchor: github.com
    flathub:
        url: https://flathub.org/ru/apps/com.github.eneshecan.WhatsAppForLinux
---

# WhatsApp for Linux

WhatsApp for Linux — неофициальный клиент WhatsApp для операционных систем Linux.

![wfL](https://dl.flathub.org/repo/screenshots/com.github.eneshecan.WhatsAppForLinux-stable/1248x702/com.github.eneshecan.WhatsAppForLinux-cc5532120b86a10fdc0f11fc0f1eeb08.png)

## Установка через терминал

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install whatsapp-for-linux
```
```shell[epm]
epm -i whatsapp-for-linux
```
:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **WhatsApp for Linux** одной командой:

```shell
flatpak install flathub com.github.eneshecan.WhatsAppForLinux
```
<!--@include: ./parts/install/software-flatpak.md-->