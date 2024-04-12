---
title: GPU Screen Recorder
nameRepo: gpu-screen-recorder
appstreamRepo: com.dec05eba.gpu_screen_recorder
appstreamFlatpak: com.dec05eba.gpu_screen_recorder
aggregation:
    flatpak: com.dec05eba.gpu_screen_recorder
    sisyphus: gpu-screen-recorder
appstream:
    id: com.dec05eba.gpu_screen_recorder
    name: GPU Screen Recorder
    icon: /gpu-screen-recorder/com.dec05eba.gpu_screen_recorder.png
    summary: Самый быстрый экранный рекордер для Linux
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: Google
    url: 
        homepage: https://git.dec05eba.com/gpu-screen-recorder/about/
        bugtracker: https://git.dec05eba.com/?p=about
---

# GPU Screen Recorder

 GPU Screen Recorder — программа для записи экрана, при записи экрана оказывает минимальное влияние на производительность системы, поскольку записывает монитор только с помощью графического процессора, аналогично shadowplay в Windows. Это самый быстрый инструмент для записи экрана в Linux. Экранный рекордер работает как в оконном интерфейсе X11, так и в Wayland.

 ## Установка из репозитория

**GPU Screen Recorder** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gpu-screen-recorder
```
```shell[epm]
epm -i gpu-screen-recorder
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **GPU Screen Recorder** одной командой:

```shell
flatpak install flathub com.dec05eba.gpu_screen_recorder
```

<!--@include: ./parts/install/software-flatpak.md-->

 