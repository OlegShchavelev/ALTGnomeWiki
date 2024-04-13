---
title: Helvum
nameRepo: helvum
appstreamRepo: org.pipewire.Helvum
appstreamFlatpak: org.pipewire.Helvum
aggregation:
    sisyphus: helvum
    flatpak: org.pipewire.Helvum
appstream:
    id: org.pipewire.Helvum
    name: Helvum
    icon: /helvum/helvum-logo.svg
    summary: Патчбай для PipeWire
    developer:
        name: Tom Wagner
        nickname: ryuukyu
        avatar: /helvum/helvum-avatar.png
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url:
        homepage: https://gitlab.freedesktop.org/pipewire/helvum
        bugtracker: https://gitlab.freedesktop.org/pipewire/helvum/-/issues
---

# Helvum

Helvum — графический клиент управления PipeWire. Приложение позволяет создавать и удалять соединения между приложениями или устройствами, чтобы перенаправлять поток аудио, видео и MIDI-данных туда, где это необходимо.

## Установка из репозитория

**Helvum** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install helvum
```
```shell[epm]
epm -i helvum
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Helvum** одной командой:

```shell
flatpak install flathub org.pipewire.Helvum
```

<!--@include: ./parts/install/software-flatpak.md-->

