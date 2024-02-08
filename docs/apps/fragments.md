---
title: Fragments
appstreamRepo: de.haeckerfelix.Fragments
appstreamFlatpak: de.haeckerfelix.Fragments
---

# Fragments

Fragments — простой в использовании BitTorrent-клиент. Он может использоваться для передачи файлов по протоколу BitTorrent, таких как видео, музыка или установочные образы для дистрибутивов Linux.

## Установка из репозитория 

**Fragments** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fragments
```
```shell[epm]
epm -i fragments
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Fragments** одной командой:

```shell
flatpak install flathub de.haeckerfelix.Fragments
```

<!--@include: ./parts/install/software-flatpak.md-->