---
title: Chromium
appstreamFlatpak: org.chromium.Chromium
appstreamRepo: org.chromium.Chromium
aggregation: 
    flatpak: org.chromium.Chromium
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
---

# Chromium

Chromium — проект браузера с открытым исходным кодом, целью которого является создание более безопасного, быстрого и стабильного способа работы в Интернете для всех пользователей.

## Установка из репозитория

**Flatseal** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install chromium
```
```shell[epm]
epm -i chromium
```

:::

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **Chromium** одной командой:

```shell
flatpak install flathub org.chromium.Chromium
```

<!--@include: ./parts/install/software-flatpak.md-->
<!--@include: ./parts/warns/unpriveleged-spases.md -->

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

## Сбой графики при открытии Яндекс Браузера.

После обновления операционной системы Chromium происходит сбой графики

Удалите пользовательскую конфигурацию у пользователя:

```shell
rm -rfv .config/chromium/
```

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/chromium/Default/GPUCache
```