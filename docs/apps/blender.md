---
title: Blender
appstreamRepo: org.blender.Blender
appstreamFlatpak: org.blender.Blender
aggregation:
    flatpak: org.blender.Blender
    sisyphus: blender
appstream:
    id: org.blender.Blender
    name: Blender
    icon: /blender/blender-logo.svg
    summary: 3D-моделирование, анимация, рендеринг и компоновка
    developer: 
        name: Blender Foundation
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://www.blender.org/
        bugtracker: https://developer.blender.org/
---

# Blender

Blender — бесплатный пакет для создания 3D с открытым исходным кодом. Он поддерживает весь 3D-конвейер - моделирование, такелаж, анимацию, симуляцию, рендеринг, композитинг, отслеживание движения и редактирование видео.

![Blender](/blender/blender-1.png)

## Установка из репозитория

**Blender** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install blender
```
```shell[epm]
epm -i blender
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Blender** одной командой:

```shell
flatpak install flathub org.blender.Blender
```

<!--@include: ./parts/install/software-flatpak.md-->

