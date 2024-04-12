---
title: EasyEffects
appstreamRepo: com.github.wwmm.easyeffects
appstreamFlatpak: com.github.wwmm.easyeffects
aggregation: 
    sisyphus: easyeffects
    flatpak: com.github.wwmm.easyeffects
appstream:
    id: com.github.wwmm.easyeffects
    name: EasyEffects
    icon: /easyeffects/easyeffects-logo.svg
    summary: Приложение для настройки звуковых эффектов при использовании сервера PipeWire.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name:  Wellington Wallace 
        nickname: wwmm
        avatar: /easyeffects/easyeffects-avatar.png
    url: 
        homepage: https://github.com/wwmm/easyeffects
        bugtracker: https://github.com/wwmm/easyeffects/issues
        translate: https://hosted.weblate.org/engage/easyeffects/
        donation: https://github.com/sponsors/wwmm
---

# EasyEffects

EasyEffects — приложение для настройки звуковых эффектов при использовании сервера PipeWire. Имеется как возможность ручной настройки, так и импорта/экспорта готовых пресетов.

## Установка из репозитория

**EasyEffects** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install easyeffects
```
```shell[epm]
epm -i easyeffects
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **EasyEffects** одной командой:

```shell
flatpak install flathub com.github.wwmm.easyeffects
```

<!--@include: ./parts/install/software-flatpak.md-->