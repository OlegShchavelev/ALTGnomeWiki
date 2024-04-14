---
title: Transmission
appstreamRepo: com.transmissionbt.Transmission
appstreamFlatpak: com.transmissionbt.Transmission
aggregation:
    sisyphus: transmission
    flatpak: com.transmissionbt.Transmission
appstream:
    id: com.transmissionbt.Transmission
    name: Transmission
    icon: /transmission/transmission-logo.svg
    summary: Быстрый, простой и бесплатный клиент BitTorrent. 
    developer: 
        name: The Transmission Project
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://transmissionbt.com/
        bugtracker: https://github.com/transmission/transmission/issues
        translate: https://explore.transifex.com/transmissionbt/transmissionbt/
        donation: https://transmissionbt.com/donate
---

# Transmission

Transmission — быстрый, простой и бесплатный клиент BitTorrent. 

## Установка из репозитория 

**Transmission** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install transmission-gtk
```
```shell[epm]
epm -i transmission-gtk
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Transmission** одной командой:

```shell
flatpak flatpak install flathub com.transmissionbt.Transmission
```

<!--@include: ./parts/install/software-flatpak.md-->