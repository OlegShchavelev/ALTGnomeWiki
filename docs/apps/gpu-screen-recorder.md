---
aggregation:
    flatpak:
        id: com.dec05eba.gpu_screen_recorder
        build: official
    sisyphus: gpu-screen-recorder
appstream:
    id: com.dec05eba.gpu_screen_recorder
    name: GPU Screen Recorder
    icon: /gpu-screen-recorder/gpu-screen-recorder-logo.png
    summary: Самый быстрый экранный рекордер для Linux
    metadata_license:
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer:
        name: dec05eba
    url:
        homepage: https://git.dec05eba.com/gpu-screen-recorder/about/
        bugtracker: https://github.com/dec05eba/gpu-screen-recorder-issues/issues
---

# GPU Screen Recorder

GPU Screen Recorder — программа для записи экрана. При записи оказывает минимальное влияние на производительность системы, поскольку записывает монитор только с помощью графического процессора, аналогично ShadowPlay в Windows. Это самый быстрый инструмент для записи экрана в Linux. Экранный рекордер работает как в оконном интерфейсе X11, так и в Wayland.

![GPU Screen Recorder](/gpu-screen-recorder/gpu-screen-recorder-1.png)

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
