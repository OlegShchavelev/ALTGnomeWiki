---
title: Loupe
appsMetaWidgets:
    active: true
    thumb:
        src: /loupe/loupe-1.png
        title: Loupe
    introtext: Просмотр изображений
    site:
        url: https://gitlab.gnome.org/GNOME/loupe/
        anchor: gitlab.gnome.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    translate:
        url: https://l10n.gnome.org/module/loupe/
        anchor: l10n.gnome.org
    issue: 
        url: https://gitlab.gnome.org/GNOME/loupe/issues
        anchor: gitlab.gnome.org
    adaptive: true
    gnomeCore: true
    gnomeCircle: false
    proprietary: false
    sponsor: 
        url:
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/loupe/
    flathub:
        url: https://flathub.org/ru/apps/org.gnome.Loupe
---

# Loupe

Loupe — это приложение для просмотра изображений, написанное на GTK 4, Libadwaita и Rust.

## Установка из репозитория
**Loupe** можно установить любым привычным и удобным способом

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