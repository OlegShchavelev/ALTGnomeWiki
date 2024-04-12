---
title: Глаз GNOME
appstreamRepo: org.gnome.eog
appstreamFlatpak: org.gnome.eog
aggregation: 
    sisyphus: eog
    flatpak: org.gnome.eog
appstream:
    id: org.gnome.eog
    name: Глаз Gnome
    icon: /eog/eog-logo.svg
    summary: Официальная утилита для рабочего окружения GNOME, которая поддерживает множество форматов, позволяя просматривать как отдельные изображения, так и коллекции.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    url: 
        homepage: https://wiki.gnome.org/Apps/EyeOfGnome
        bugtracker: https://gitlab.gnome.org/GNOME/eog/-/issues
        translate: https://l10n.gnome.org/module/eog/
        donation: https://www.gnome.org/donate/
---



# Глаз GNOME (eog)

::: warning
Приложение eog считается устаревшим, исключено из GNOME Core, актуальное приложение [Loupe](/loupe).
:::

Глаз GNOME (eog) — официальная утилита для рабочего окружения GNOME, которая поддерживает множество форматов, позволяя просматривать как отдельные изображения, так и коллекции.

Глаз GNOME также позволяет просматривать изображения в полноэкранном режиме слайд-шоу или установить изображение в качестве фона рабочего стола. Приложение считывает теги камеры для автоматического поворота изображений в правильную портретную или альбомную ориентацию.

## Установка из репозитория

**Глаз GNOME** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install eog
```
```shell[epm]
epm -i eog
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Глаз GNOME** одной командой:

```shell
flatpak install flathub org.gnome.eog
```

<!--@include: ./parts/install/software-flatpak.md-->