---
title: OBS Studio
appstreamRepo: com.obsproject.Studio
appstreamFlatpak: com.obsproject.Studio
aggregation: 
    sisyphus: obs-studio
    flatpak: com.obsproject.Studio
appstream:
    id: com.obsproject.Studio
    name: OBS Studio
    icon: /obs-studio/obs-studio-logo.svg
    summary: Бесплатная программа с открытым исходным кодом для записи видео и потокового вещания.
    metadata_license: 
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    developer: 
        name: OBS Project
    url: 
        homepage: https://obsproject.com/
        bugtracker: https://github.com/Rirusha/Cassette/issues
        translate: https://crowdin.com/project/obs-studio
        donation: https://opencollective.com/obsproject
---

# OBS Studio

OBS Studio — Бесплатная программа с открытым исходным кодом для записи видео и потокового вещания.

## Установка из репозитория 

**OBS Studio** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install obs-studio
```
```shell[epm]
epm -i obs-studio
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **OBS Studio** одной командой:

```shell
flatpak install flathub com.obsproject.Studio
```

<!--@include: ./parts/install/software-flatpak.md-->
