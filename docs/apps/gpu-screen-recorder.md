---
title: GPU Screen Recorder
nameRepo: gpu-screen-recorder
appstreamRepo: com.dec05eba.gpu_screen_recorder
appstreamFlatpak: com.dec05eba.gpu_screen_recorder
metainfo:
    thumb:
        src: /gpu-screen-recorder/com.dec05eba.gpu_screen_recorder.png
        title: GPU Screen Recorder
    summary: Самый быстрый экранный рекордер для Linux
    site:
        url: https://git.dec05eba.com/gpu-screen-recorder/about/
        anchor: git.dec05eba.com
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue:
        url: https://git.dec05eba.com/?p=about
        anchor: git.dec05eba.com
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

 