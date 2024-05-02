---
aggregation:
    flatpak: org.freedesktop.Piper
    sisyphus: piper 
appstream:
    id: org.freedesktop.Piper
    name: Piper
    icon: /piper/org.freedesktop.Piper.png
    summary: Утилита настройки игровой мыши
    developer:
        name: libratbag
        avatar: https://avatars.githubusercontent.com/u/13972444?s=200&v=4
    metadata_license:
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    url:
        homepage: https://github.com/libratbag/piper
        bugtracker: https://github.com/libratbag/piper/issues
gallery: 
    title: Галлерея
    type: slider
    items: 
        - src: /piper/piper-1.png
        - src: /piper/piper-2.png
        - src: /piper/piper-3.png
        - src: /piper/piper-4.png
        - src: /piper/piper-5.png
---

# Piper

Piper — приложение GTK + для настройки игровых мышей. Piper — графический интерфейс к демону DBus ratbagd, список поддерживаемых устройств зависит от libratbag. Список всех известных устройств смотрите [в файлах устройств libratbag](https://github.com/libratbag/libratbag/tree/master/data/devices)

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->


