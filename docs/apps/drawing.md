---
title: Drawing
appstreamRepo: com.github.maoschanz.drawing
appstreamFlatpak:  com.github.maoschanz.drawing
aggregation:
    sisyphus: drawing
    flatpak: com.github.maoschanz.drawing
appstream:
    id: com.github.maoschanz.drawing
    name: Drawing
    icon: /drawing/drawing-logo.svg
    summary: простой редактор изображений, похожий на Microsoft Paint.
    developer: 
        name: Romain F. T.
        nickname: maoschanz
        avatar: /drawing/drawing-author.png
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://maoschanz.github.io/drawing/
        bugtracker: https://github.com/maoschanz/drawing/issues
        donation: https://www.paypal.com/paypalme/maoschannz
---



# Drawing

Drawing — базовый редактор изображений, который может изменять размер, обрезать или поворачивать изображение, применять простые фильтры, вставлять текст или подвергать цензуре, а также манипулировать выбранной частью изображения (вырезать, копировать, вставить, перетащить и т. д.).

И, конечно же, вы можете рисовать! Используя такие инструменты, как карандаш, прямая линия, инструмент кривая, множество фигур, несколько кистей, а также их различные цвета и опции.

## Установка из репозитория

**Drawing** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install drawing
```
```shell[epm]
epm -i drawing
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Drawing** одной командой:

```shell
flatpak install flathub com.github.maoschanz.drawing
```

<!--@include: ./parts/install/software-flatpak.md-->
