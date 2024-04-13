---
title: Loupe
appstreamRepo: org.gnome.Loupe
appstreamFlatpak: org.gnome.Loupe
aggregation:
    sisyphus: loupe
    flatpak: org.gnome.Loupe
appstream:
    id: org.gnome.Loupe
    name: Loupe
    icon: /loupe/loupe-logo.svg
    summary: Стандартный просмотр изображений Gnome.
    keywords:
        - adaptive
    developer:
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url:
        homepage: https://apps.gnome.org/Loupe/
        bugtracker: https://gitlab.gnome.org/GNOME/loupe/issues
        translate: https://l10n.gnome.org/module/loupe/
---



# Loupe

Loupe — приложение для просмотра изображений, написанное на GTK 4, Libadwaita и Rust.

## Установка из репозитория
**Loupe** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install loupe
```
```shell[epm]
epm -i loupe
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Loupe** одной командой:

```shell
flatpak install flathub org.gnome.Loupe
```

<!--@include: ./parts/install/software-flatpak.md-->