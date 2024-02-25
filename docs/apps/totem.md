---
title: Totem
appstreamRepo: org.gnome.Totem
appstreamFlatpak: org.gnome.Totem
---

# Видео

Видео (Totem) — официальная утилита для рабочего окружения GNOME. Видеопроигрыватель поддерживает список локальных видеофайлов и DVD с возможностью поиска, доступ к видео по сети (с помощью UPnP/DLNA), а также видео с веб-сайтов.

Приложение Видео включает в себя дополнительную функциональность: загрузчик субтитров, возможность замедления или ускорения проигрывания, создание галереи снимков экрана и запись DVD.

## Установка из репозитория

**Totem** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install totem
```
```shell[epm]
epm -i totem
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Видео** одной командой:

```shell
flatpak install flathub org.gnome.Totem
```

<!--@include: ./parts/install/software-flatpak.md-->