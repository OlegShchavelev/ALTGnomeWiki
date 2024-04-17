---
aggregation: 
    flatpak: 
        id: hu.kramo.Cartridges
        build: offical
    sisyphus: cartridges
appstream:
    id: hu.kramo.Cartridges
    name: Картриджи
    icon: /cartridges/cartridges-logo.svg
    summary: Запускайте все свои игры
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords: 
        - adaptive
        - circle
    developer: 
        name: kramo
        nickname: kra-mo
        avatar: /cartridges/cartridges-avatar.png
    url: 
        homepage: https://github.com/kra-mo/cartridges/
        bugtracker: https://github.com/kra-mo/cartridges/issues
        translate: https://hosted.weblate.org/engage/cartridges/
        donation: https://github.com/sponsors/kra-mo

gallery: 
    title: Галерея
    type: slider
    items: 
        - src: /cartridges/cartridges-1.png
        - src: /cartridges/cartridges-2.png
---

# Картриджи

Картриджи (Сartridges) — простое приложение для запуска ваших игр. Оно поддерживает импорт игр из Steam, Lutris, Heroic и других без необходимости входа в систему. Вы можете сортировать и скрывать игры или загружать обложки из SteamGridDB.

<AGWGallery />


<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->