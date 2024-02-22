---
title: PinApp
nameRepo: PinApp
appstreamFlatpak: io.github.fabrialberio.pinapp
gallery: 
    title: Галлерея
    items: 
        - src: /pin-app/pin-app-3.png
        - src: /pin-app/pin-app-4.png
        - src: /pin-app/pin-app-5.png
        - src: /pin-app/pin-app-6.png
metainfo:
    thumb:
        src: /pin-app/io.github.fabrialberio.pinapp.svg
        title: Boxes
    summary: Позволяет менять Desktop Файлы
    developer:
        name: Fabrizio Alberio
    site:
        url: https://github.com/fabrialberio/PinApp
        anchor: github.com
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue:
        url: https://github.com/fabrialberio/PinApp/issues
        anchor: github.com
    gnomeCircle: false
    flathub:
        url: https://flathub.org/apps/io.github.fabrialberio.pinapp
---

# PinApp

PinApp позволяет закреплять изменёные приложения, возможности:

- Создавайте пользовательские ярлыки на веб-сайты
- Скрывайте приложения, которые вы не хотите видеть

<AGWGallery />

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **PinApp** одной командой:

```shell
flatpak install flathub io.github.fabrialberio.pinapp
```

<!--@include: ./parts/install/software-flatpak.md-->

## Управление классическими прилоложениями из Cизифа

При установке **PinApp** <Badge type="tip">Flatpak</Badge> , оно открывается в изолированной среде и не имеет доступ по-умолчанию к директории `/usr/share/applications`, для настройки воспользуемся [программой Flatseal](/flatseal). Выберите приложение **PinApp** и в разделе Filesistem, включим опции `--filesystem=host-os`

![pin-app-7](/pin-app/pin-app-7.png)

или с помощью менеджера пакета Flatpak, в терминале введем:

```shell
flatpak override --user io.github.fabrialberio.pinapp --filesystem=host-os
```