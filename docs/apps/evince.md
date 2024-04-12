---
title: Evince
appstreamRepo: org.gnome.Evince
appstreamFlatpak: org.gnome.Evince
aggregation: 
    sisyphus: evince
    flatpak: org.gnome.Evince
appstream:
    id: org.gnome.Evince
    name: Evince
    icon: /evince/evince-logo.svg
    summary: Просмотрщик документов, позволяющий отображать как многостраничные, так и одностраничные форматы документов, такие как PDF и Postscript
    metadata_license: 
        name: GNU GPLv2
        link: https://gitlab.gnome.org/GNOME/evince/-/blob/main/COPYING
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    url: 
        homepage: https://apps.gnome.org/Evince
        bugtracker: https://gitlab.gnome.org/GNOME/evince/-/issues
        translate: https://l10n.gnome.org/module/evince/
        donation: https://www.gnome.org/donate/
---



# Просмотр документов

Просмотр документов (Evince) — официальная утилита для рабочего окружения GNOME, которая поддерживает документы в следующих форматах: PDF, PS, EPS, XPS, DjVu, TIFF, DVI (с SyncTeX) и Comic Book Archive (CBR, CBT, CBZ, CB7).

## Установка из репозитория

**Evince** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install evince
```
```shell[epm]
epm -i evince
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Evince** одной командой:

```shell
flatpak install flathub org.gnome.Evince
```

<!--@include: ./parts/install/software-flatpak.md-->