---
title: Kooha
appstreamRepo: io.github.seadve.Kooha
appstreamFlatpak: io.github.seadve.Kooha
aggregation:
    sisyphus: kooha
    flatpak: io.github.seadve.Kooha
appstream:
    id: io.github.seadve.Kooha
    name: Kooha
    icon: /kooha/kooha-logo.svg
    summary: Простой экранный рекордер с минимальным интерфейсом. Вы можете просто нажать кнопку записи без необходимости настраивать кучу настроек.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer:
        name: Dave Patrick 
        nickname: SeaDve
        avatar: /kooha/kooha-avatar.png
    url:
        homepage: https://github.com/SeaDve/Kooha
        bugtracker: https://github.com/SeaDve/Kooha/issues
        donation: https://github.com/sponsors/SeaDve
---



# Kooha

Kooha — простой экранный рекордер с минимальным интерфейсом. Вы можете просто нажать кнопку записи без необходимости настраивать кучу настроек.

## Установка из репозитория

**Kooha** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install kooha
```
```shell[epm]
epm -i kooha
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Kooha** одной командой:

```shell
flatpak install flathub io.github.seadve.Kooha
```

<!--@include: ./parts/install/software-flatpak.md-->