---
aggregation: 
    sisyphus: dialect
    flatpak: 
        id: app.drey.Dialect
        build: offical
appstream:
    id: app.drey.Dialect
    name: Dialect
    icon: /dialect/dialect-logo.svg
    summary: Простое приложение для перевода с различными дополнениями для улучшения процесса.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords: 
        - dontthemes
        - adaptive
        - circle
    developer: 
        name: The Dialect Authors
    url: 
        homepage: https://github.com/dialect-app/dialect
        bugtracker: 
            name: github.com
            link: https://github.com/dialect-app/dialect/issues
        translate: https://hosted.weblate.org/engage/dialect/
        donation: https://opencollective.com/dialect
gallery: 
    title: Галерея
    type: slider
    items: 
        - src: /dialect/dialect-1.png
        - src: /dialect/dialect-3.png
        - src: /dialect/dialect-2.png
---


# Dialect

Dialect — простое приложение для перевода, для полноты перевода используются веб-сервисы, предоставляя вам некоторые дополнительные возможности: выбор провайдера переводчика, прослушать перевод.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->

## Перевод в поиске GNOME на экране обзора

Перейдите в раздел «Настройки» и актировать следующие настройки:

- Перевод в реальном времени
- Показать в поиске рабочего стола

![dialect](/dialect/dialect-1.jpg)