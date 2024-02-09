---
title: GDM Settings
appstreamFlatpak: io.github.realmazharhussain.GdmSettings
---

# GDM Настройки

GDM Settings — приложение настроек для рабочего окружения GNOME, экран входа / блокировки экрана. Написано на Python и использует LibAdwaita для графического интерфейса.

## Установка из репозитория 

**GDM Settings** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gdm-settings
```
```shell[epm]
epm -i gdm-settings
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **GDM Settings** одной командой:

```shell
flatpak install flathub io.github.realmazharhussain.GdmSettings
```

<!--@include: ./parts/install/software-flatpak.md-->