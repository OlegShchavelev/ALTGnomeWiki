---
title: LibreOffice
appstreamRepo: org.libreoffice.LibreOffice
appstreamFlatpak: org.libreoffice.LibreOffice
---

# LibreOffice

LibreOffice — это мощный офисный пакет, полностью совместимый с 32/64-битными системами. Переведён более чем на 30 языков мира. Поддерживает большинство популярных операционных систем, включая GNU/Linux, Microsoft Windows и Mac OS X.

## Установка из репозитория

**LibreOffice** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice LibreOffice-gtk3
```
```shell[epm]
epm -i LibreOffice LibreOffice-gtk3
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **LibreOffice** одной командой:

```shell
flatpak install flathub org.libreoffice.LibreOffice
```

<!--@include: ./parts/install/software-flatpak.md-->
