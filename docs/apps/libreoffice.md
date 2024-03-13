---
title: LibreOffice
nameRepo: LibreOffice
appstreamRepo: org.libreoffice.LibreOffice
appstreamFlatpak: org.libreoffice.LibreOffice
metainfo:
    thumb:
        src: /libreoffice/org.libreoffice.LibreOffice.desktop.png
        title: Boxes
    summary: Мощный офисный пакет LibreOffice
    developer: 
        name: LibreOffice
    site:
        url: https://www.libreoffice.org/discover/libreoffice/
        anchor: libreoffice.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue: 
        url: https://bugs.documentfoundation.org/
        anchor: documentfoundation.org
---

# LibreOffice

LibreOffice — мощный офисный пакет, полностью совместимый с 32/64-битными системами. Переведён более чем на 30 языков мира. Поддерживает большинство популярных операционных систем, включая GNU/Linux, Microsoft Windows и Mac OS X.

## Установка из репозитория

**LibreOffice** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

:::tabs
== Still
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice-still LibreOffice-still-gtk3
```
```shell[epm]
epm -i LibreOffice-still LibreOffice-still-gtk3
```
== Fresh 
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice LibreOffice-gtk3
```
```shell[epm]
epm -i LibreOffice LibreOffice-gtk3
```
:::


## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **LibreOffice** одной командой:

```shell
flatpak install flathub org.libreoffice.LibreOffice
```

<!--@include: ./parts/install/software-flatpak.md-->

## Шрифты в LibreOffice

В документации LibreOffice [перечисленные шрифты](https://wiki.documentfoundation.org/Fonts), идущие в комплекте с LibreOffice. В ALT Regular Gnome вам может понадобиться установить дополнительные пакеты, к примеру для использования «Times New Roman» от Microsoft, установите в терминале следующий пакет:

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-ms
```
```shell[epm]
epm -i fonts-ttf-ms
```
:::

В офисном пакете LibreOffice отсутствует шрифт, который вы используйте, [установите дополнительный шрифт](/add-fonts) и он появится в LibreOffice в списке шрифтов.