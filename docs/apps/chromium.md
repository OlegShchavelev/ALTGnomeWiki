---
title: Chromium
appstreamFlatpak: org.chromium.Chromium
appstreamRepo: org.chromium.Chromium
aggregation: 
    flatpak: 
        id: org.chromium.Chromium
        build: unoffical
    sisyphus: chromium
appstream:
    id: org.chromium.Chromium
    name: Chromium
    icon: /chromium/chromium-logo.svg
    summary: Веб-браузер от Chromium Project
    metadata_license: 
        name: BSD 3-Clause
        link: https://github.com/chromium/chromium/blob/main/LICENSE
    developer: 
        name: The Chromium Authors
    url: 
        homepage: https://www.chromium.org/Home
gallery: 
    title: Галерея
    type: slider
    items: 
        - src: /chromium/chromium-1.png
        - src: /chromium/chromium-2.png
---

# Chromium

Chromium — проект браузера с открытым исходным кодом, целью которого является создание более безопасного, быстрого и стабильного способа работы в Интернете для всех пользователей.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/warns/unpriveleged-spases.md -->

## Отображение шрифта Emoji при просмотре веб-страниц в браузере Chromium

Необходимо установить дополнительные шрифты:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```
```shell[epm]
epm -i fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```

:::

## Сбой графики при открытии Chromium.

После обновления операционной системы в Chromium происходит сбой графики

Удалите пользовательскую конфигурацию у пользователя:

```shell
rm -rfv .config/chromium/
```

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/chromium/Default/GPUCache
```