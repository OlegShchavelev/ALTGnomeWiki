---
title: Blender
appstreamRepo: org.blender.Blender
appstreamFlatpak: org.blender.Blender
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

