---
title: Сканер документов
appstreamRepo: org.gnome.SimpleScan
appstreamFlatpak: org.gnome.SimpleScan
---

# Сканер документов

Сканер документов — это официальная утилита для рабочего стола GNOME, которая позволяет вам захватывать изображения с
помощью сканеров, для которых установлены подходящие драйверы.

## Установка из репозитория

**Сканер документов** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install simple-scan
```
```shell[epm]
epm -i simple-scan
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Сканер документов** одной командой:

```shell
flatpak install flathub org.gnome.SimpleScan
```

<!--@include: ./parts/install/software-flatpak.md-->