---
title: Celluloid
appstreamRepo: io.github.celluloid_player.Celluloid
appstreamFlatpak: io.github.celluloid_player.Celluloid
aggregation: 
    sisyphus: celluloid
    flatpak: io.github.celluloid_player.Celluloid
appstream:
    id: celluloid.desktop
    name: 
    icon: /celluloid/celluloid-logo.svg
    summary: Простой интерфейс GTK для MPV. Он призван быть простым в использовании при сохранении высокого уровня конфигурируемости.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: The Celluloid Developers
    url: 
        homepage: https://celluloid-player.github.io/
        bugtracker: https://github.com/celluloid-player/celluloid/issues
        translate: https://hosted.weblate.org/projects/celluloid/    
---

# Celluloid

Celluloid (ранее GNOME MPV) — простой интерфейс GTK для [mpv](/mpv). Он призван быть простым в использовании при сохранении высокого уровня конфигурируемости.

![celluloid1.png](/celluloid/celluloid1.png)

## Установка из репозитория

**Celluloid** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install celluloid
```
```shell[epm]
epm -i celluloid
```

:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Celluloid** одной командой:

```shell
flatpak install flathub io.github.celluloid_player.Celluloid
```

<!--@include: ./parts/install/software-flatpak.md-->