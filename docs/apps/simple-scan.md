---
title: Сканер документов
appstreamRepo: org.gnome.SimpleScan
appstreamFlatpak: org.gnome.SimpleScan
aggregation: 
    sisyphus: simple-scan
    flatpak: org.gnome.SimpleScan
appstream:
    id: org.gnome.SimpleScan
    name: Сканер документов
    icon: /simple-scan/simple-scan-logo.svg
    summary: Официальная утилита для рабочего окружения GNOME, которая позволяет вам захватывать изображения с помощью сканеров
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    url: 
        homepage: https://apps.gnome.org/SimpleScan/
        bugtracker: https://gitlab.gnome.org/GNOME/simple-scan/issues
---



# Сканер документов

Сканер документов — официальная утилита для рабочего окружения GNOME, которая позволяет вам захватывать изображения с
помощью сканеров, для которых установлены подходящие драйверы.

## Установка из репозитория

**Сканер документов** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install simple-scan
```
```shell[epm]
epm -i simple-scan
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Сканер документов** одной командой:

```shell
flatpak install flathub org.gnome.SimpleScan
```

<!--@include: ./parts/install/software-flatpak.md-->