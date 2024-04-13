---
title: Krita
appstreamFlatpak: org.kde.krita
appstreamRepo: org.kde.krita
aggregation:
    sisyphus: krita
    flatpak: org.kde.krita
appstream:
    id: org.kde.krita
    name: Krita
    icon: /krita/krita-logo.svg
    summary: Творческая свобода для художников c Krita
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: Krita Foundation
    url:
        homepage: https://www.krita.org/
        bugtracker: https://docs.krita.org/en/untranslatable_pages/reporting_bugs.html
---

# Krita

Krita — свободный и открытый растровый графический редактор, программное обеспечение, входящее в состав KDE. Ранее распространялось как часть офисного пакета Calligra Suite, но впоследствии отделилось от проекта и стало развиваться самостоятельно.

## Установка из репозитория

**Krita** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install krita
```

```shell[epm]
epm -i krita
```
:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Krita** одной командой:

```shell
flatpak install flathub org.kde.krita
```
<!--@include: ./parts/install/software-flatpak.md-->
