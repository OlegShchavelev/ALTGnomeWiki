---
title: Dialect
appstreamRepo: app.drey.Dialect
appstreamFlatpak: app.drey.Dialect
aggregation: 
    sisyphus: dialect
    flatpak: app.drey.Dialect
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
---



# Dialect

Dialect — простое приложение для перевода, для полноты перевода используются веб-сервисы, предоставляя вам некоторые дополнительные возможности: выбор провайдера переводчика, прослушать перевод.

## Установка из репозитория 

**Dialect** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install dialect
```
```shell[epm]
epm -i dialect
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Dialect** одной командой:

```shell
flatpak install flathub app.drey.Dialect
```

<!--@include: ./parts/install/software-flatpak.md-->

## Перевод в поиске GNOME на экране обзора

Перейдите в раздел «Настройки» и актировать следующие настройки:

- Перевод в реальном времени
- Показать в поиске рабочего стола

![dialect](/dialect/dialect-1.jpg)