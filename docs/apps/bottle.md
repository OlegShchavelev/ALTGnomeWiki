---
title: Bottles
appstreamRepo: com.usebottles.bottles
appstreamFlatpak: com.usebottles.bottles
metainfo:
    active: true
    thumb:
        src: /bottles/com.usebottles.bottles.png
        title: Bottles
    summary: Запуск программ Windows
    developer: 
        name: Bottles Contributors
    site:
        url: https://usebottles.com/
        anchor: usebottles.com
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GPL-3.0
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://github.com/bottlesdevs/Bottles/issues
        anchor: github.com/bottlesdevs
    createTheme: true
    flathub:
        url: https://flathub.org/apps/com.usebottles.bottles
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/bottles/
---

# Bottles

Bottles — приложение, которое позволяет вам легко управлять и использовать Windows приложения игры.

## Установка из репозитория

**Bottles** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->


**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install bottles
```
```shell[epm]
epm -i bottles
```

:::



## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Bottles** одной командой:

```shell
flatpak install flathub com.usebottles.bottles
```

<!--@include: ./parts/install/software-flatpak.md-->