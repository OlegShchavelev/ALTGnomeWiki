---
title: Amberol
appstreamRepo: io.bassi.Amberol
appstreamFlatpak: io.bassi.Amberol
metainfo:
    active: true
    thumb:
        src: /amberol/io.bassi.Amberol.png
        title: Boxes
    summary: Воспроизводит музыку и ничего больше
    developer: 
        name: GNOME World
    site:
        url: https://gitlab.gnome.org/World/amberol
        anchor: gitlab.gnome.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue: 
        url: https://gitlab.gnome.org/World/amberol/-/issues
        anchor: gitlab.gnome.org
    adaptive: true,
    gnomeCircle: true
    flathub:
        url: https://flathub.org/apps/io.bassi.Amberol
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/amberol/
---

# Amberol

Amberol — простой музыкальный проигрыватель. Разработчики стремятся сделать проигрователь более компактным, ненавязчивым и простым. 

Философия Amberol:

- не управляет вашей музыкальной коллекцией; 
- не позволяет вам управлять списками воспроизведения, интеллектуальными или иными способами; 
- не позволяет вам редактировать метаданные для ваших песен

Amberol воспроизводит музыку, и ничего больше.

## Установка из репозитория

**Amberol** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install amberol
```
```shell[epm]
epm -i amberol
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Amberol** одной командой:

```shell
flatpak install flathub io.bassi.Amberol
```

<!--@include: ./parts/install/software-flatpak.md-->

## Установка с помощью Snaps

При наличии пакета [snapd](/snap), можно установить **Amberol** одной командой:

```shell
snap install amberol
```