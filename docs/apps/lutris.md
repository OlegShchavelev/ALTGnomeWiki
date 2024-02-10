---
title: Lutris
appstreamFlatpak: net.lutris.Lutris

metainfo:
    active: true
    thumb:
        src: /lutris/net.lutris.Lutris.png
        title: Lutris
    summary: Играй в игры с Lutris
    developer: 
        name: Lutris Team
    site:
        url: https://lutris.net/
        anchor: lutris.net
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GPL-3.0
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://github.com/lutris/lutris/issues
        anchor: github.com
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/lutris/
    flathub:
        url: https://flathub.org/apps/net.lutris.Lutris

        
---

# Lutris

Lutris — платформа с помощью которой можно запускать и играть в игры на компютерах с операционной системой Linux.

## Установка из репозитория

**Lutris** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install lutris
```
```shell[epm]
epm -i lutris
```
:::


## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Lutris** одной командой:

```shell
flatpak install flathub net.lutris.Lutris
```
<!--@include: ./parts/install/software-flatpak.md-->
