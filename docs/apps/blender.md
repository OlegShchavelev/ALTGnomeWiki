---
title: Blender
appstreamRepo: org.blender.Blender
appstreamFlatpak: org.blender.Blender
metainfo:
    active: true
    thumb:
        src: /blender/org.blender.Blender.png
        title: Blender
    summary: 3D-моделирование, анимация, рендеринг и компоновка
    developer: 
        name: Blender Foundation
    site:
        url: https://www.blender.org/
        anchor: blender.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GPL-3.0
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://developer.blender.org/
        anchor: developer.blender.org
    flathub:
        url: https://flathub.org/apps/org.blender.Blender
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/blender/

---

# Blender

Blender — бесплатный пакет для создания 3D с открытым исходным кодом. Он поддерживает весь 3D-конвейер - моделирование, такелаж, анимацию, симуляцию, рендеринг, композитинг, отслеживание движения и редактирование видео.

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

