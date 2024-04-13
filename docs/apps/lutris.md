---
title: Lutris
appstreamFlatpak: net.lutris.Lutris
aggregation:
    sisyphus: lutris
    flatpak: net.lutris.Lutris
appstream:
    id: net.lutris.Lutris
    name: Lutris
    icon: /lutris/lutris-logo.svg
    summary: Играй в игры с Lutris.
    developer:
        name: Lutris Community
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url:
        homepage: https://lutris.net/
        bugtracker: https://github.com/lutris/lutris/issues
        translate: https://github.com/lutris/lutris/tree/master/po
        donation: https://lutris.net/donate  
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
