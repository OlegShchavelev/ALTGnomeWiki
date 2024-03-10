---
title: Helvum
nameRepo: helvum
appstreamRepo: org.pipewire.Helvum
appstreamFlatpak: org.pipewire.Helvum
metainfo:
    thumb:
        src: /helvum/org.pipewire.Helvum.png
        title: Helvum
    summary: Патчбай для PipeWire
    site:
        url: https://gitlab.freedesktop.org/pipewire/helvum
        anchor: gitlab.freedesktop.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue:
        url: https://gitlab.freedesktop.org/pipewire/helvum/-/issues
        anchor: gitlab.freedesktop.org
    
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

