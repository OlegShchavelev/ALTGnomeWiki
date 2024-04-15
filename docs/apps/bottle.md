---
title: Bottles
appstreamRepo: com.usebottles.bottles
appstreamFlatpak: com.usebottles.bottles
aggregation:
    flatpak: com.usebottles.bottles
    sisyphus: bottles
appstream:
    id: com.usebottles.bottles
    name: Bottles
    icon: /bottles/bottles-logo.svg
    summary: Запуск программ Windows
    developer: 
        name: Bottles Contributors
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords: 
        - dontthemes
    url: 
        homepage: https://usebottles.com/
        bugtracker: https://github.com/bottlesdevs/Bottles/issues
        translate: https://hosted.weblate.org/engage/bottles/
        help: https://docs.usebottles.com/
---

# Bottles

Bottles — приложение, которое позволяет вам легко управлять и использовать Windows приложения игры.

![Bottles](/bottles/bottles-1.png)

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