---
title: Audacity
appstreamFlatpak: org.audacityteam.Audacity
appstreamRepo: org.audacityteam.Audacity
aggregation:
    flatpak: org.audacityteam.Audacity
    sisyphus: gnome-disk-usage
appstream:
    id: org.audacityteam.Audacity
    name: Audacity
    icon: /audacity/org.audacityteam.Audacity.png
    summary: Записывайте и редактируйте аудиофайлы с Audacity
    developer: 
        name: Muse Group
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: http://www.audacityteam.org/
        bugtracker: https://github.com/audacity/audacity/issues/
        help: https://support.audacityteam.org/
        translate: https://support.audacityteam.org/community/contributing/translating/
---

# Audacity

Audacity — свободный многоплатформенный аудиоредактор звуковых файлов, ориентированный на работу с несколькими дорожками.

## Установка из репозитория

**Audacity** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install audacity
```

```shell[epm]
epm -i audacity
```
:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Audacity** одной командой:

```shell
flatpak install flathub org.audacityteam.Audacity
```

<!--@include: ./parts/install/software-flatpak.md-->
