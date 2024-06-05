---
aggregation:
    sisyphus: vlc
    flatpak:
        id: org.videolan.VLC
        build: unoffical
    snap:
        id: vlc
        build: offical
appstream:
    id: org.videolan.VLC
    name: VLC
    icon: /vlc/vlc-logo.svg
    summary: Бесплатный и свободный кросс-платформенный медиаплеер и медиаплатформа с открытым исходным кодом.
    developer:
        name: VideoLAN
        avatar: /vlc/vlc-avatar.png
    metadata_license:
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    url:
        homepage: https://www.videolan.org/vlc/
        bugtracker: https://code.videolan.org/videolan/vlc/issues
        donation: https://www.videolan.org/contribute.html
---

# VLC

VLC — бесплатный и свободный кросс-платформенный медиаплеер и медиаплатформа с открытым исходным кодом. VLC воспроизводит множество мультимедийных файлов, а также DVD, Audio CD, VCD и сетевые трансляции.

## Установка из репозитория

**VLC** можно установить любым привычным и удобным способом:

<!--@include: @apps/_parts/install/software-repo.md-->

::: warning
Мы не рекомендуем данный способ установки, так как в «Центр приложений» устанавливает пакет `vlc-mini`, в данном пакете содержится минимальный набор зависимостей. К примеру, после установки приложения не будет создан ярлык на экране «Приложений».
:::

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install vlc
```

```shell[epm]
epm -i vlc
```

:::

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-snap.md-->
