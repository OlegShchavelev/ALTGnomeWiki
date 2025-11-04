---
aggregation:
  flatpak: com.heroicgameslauncher.hgl
  snap:
    id: heroic
    build: unofficial
appstream:
  name: Heroic Games Launcher
  icon: /heroic/heroic-logo.png
  summary: Free and open source launcher for Epic, GOG and Amazon Prime Games
  metadata_license:
    name: GNU GPLv3
    link: https://heroicgameslauncher.com/cla
  developer:
    name: Heroic Games Launcher
  url:
    homepage: https://heroicgameslauncher.com/
    bugtracker: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues
    donation: https://heroicgameslauncher.com/donate
gallery:
  title: Gallery
  type: slider
  images:
    - src: /heroic/heroic1.png
    - src: /heroic/heroic2.png
    - src: /heroic/heroic3.png
    - src: /heroic/heroic4.png
    - src: /heroic/heroic5.png
    - src: /heroic/heroic6.png
---

# Heroic Games Launcher

Heroic is an open source game launcher. Right now it supports running games from the Epic Games Store using Legendary, GOG Games using our custom implementation using `gogdl`, and Amazon Games using `Nile`.

<Gallery />

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/install/content-snap.md-->

## Installing the AppImage version

- Download the distribution from the [official website](https://heroicgameslauncher.com/downloads) using the `AppImage` button

- Open a terminal and execute

```shell
su -
cd $HOME/Downloads/
epm install Heroic-2.14.1.AppImage
```

- Follow the instructions in the installer
- Done, the application is installed.
