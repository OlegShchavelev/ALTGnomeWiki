---
title: Audacity
appstreamFlatpak: org.audacityteam.Audacity
appstreamRepo: org.audacityteam.Audacity
metainfo:
    active: true
    thumb:
        src: /audacity/org.audacityteam.Audacity.png
        title: Audacity
    summary: Записывайте и редактируйте аудиофайлы.
    developer: 
        name: Muse Group
        avatar: 
    site:
        url: http://www.audacityteam.org/
        anchor: audacityteam.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GPL-3.0
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://github.com/audacity/audacity/issues
        anchor: github.com
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/audacity/
    flathub:
        url: https://flathub.org/ru/apps/org.audacityteam.Audacity
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