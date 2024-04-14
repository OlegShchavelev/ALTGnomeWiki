---
title: Tuba  # Название приложения
nameRepo: tuba # Название приложения в репозитории sisyphus
nameSnap: Tuba  # Название приложения на Snapcraft
nameEpmPlay: # Название приложения для epm play
appstreamRepo: dev.geopjr.Tuba # appstream id приложения для sisyphus
appstreamFlatpak: dev.geopjr.Tuba # appstream id приложения для flatpak

aggregation:
    sisyphus: tuba
    flatpak: dev.geopjr.Tuba
    snap: tuba
appstream:
    id: dev.geopjr.Tuba
    name: Tuba
    icon: /tuba/tuba-logo.svg
    summary: Неофициальный клиент Mastodon
    developer: 
        name: Evan Paterakis
        nickname:  GeopJr
        avatar: /tuba/tuba-avatar.png
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://tuba.geopjr.dev/ 
        bugtracker: https://github.com/GeopJr/Tuba/issues 
        translate: https://hosted.weblate.org/engage/tuba/
        donation: https://github.com/sponsors/GeopJr
---

# Tuba
Tuba - неофциальный клиент для Mastodon, GoToSocial, Akkoma и других.

<!--@include: ./parts/install/software-install.md-->