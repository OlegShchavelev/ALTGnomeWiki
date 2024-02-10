---
title: Krita
appstreamFlatpak: org.kde.krita
appstreamRepo: org.kde.krita
metainfo:
    active: true
    thumb:
        src: /krita/org.kde.krita.png
        title: Krita
    summary: Творческая свобода для художников c Krita
    developer: 
        name: Krita Foundation
    site:
        url: https://www.krita.org/
        anchor: krita.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GPL-3.0
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://docs.krita.org/en/untranslatable_pages/reporting_bugs.html
        anchor: docs.krita.org
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/krita/
    flathub:
        url: https://flathub.org/ru/apps/org.kde.krita
---

# Krita

Krita — Свободный и открытый растровый графический редактор, программное обеспечение, входящее в состав KDE. Ранее распространялось как часть офисного пакета Calligra Suite, но впоследствии отделилось от проекта и стало развиваться самостоятельно.

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