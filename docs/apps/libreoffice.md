---
aggregation:
    sisyphus: LibreOffice-still
    flatpak: 
        id: org.libreoffice.LibreOffice
        build: offical
appstream:
    id: org.libreoffice.LibreOffice
    name: LibreOffice
    icon: /libreoffice/org.libreoffice.LibreOffice.desktop.png
    summary: Мощный офисный пакет LibreOffice
    metadata_license: 
        name: MPL-v2.0
        link: https://www.mozilla.org/en-US/MPL/2.0/
    developer: 
        name: The Document Foundation
    url:
        homepage: https://www.libreoffice.org/
        bugtracker:
            name: documentfoundation.org
            link: https://bugs.documentfoundation.org/
        donation: https://www.libreoffice.org/donate/
        translate: https://www.libreoffice.org/community/localization/
---



# LibreOffice

LibreOffice — мощный офисный пакет, полностью совместимый с 32/64-битными системами. Переведён более чем на 30 языков мира. Поддерживает большинство популярных операционных систем, включая GNU/Linux, Microsoft Windows и Mac OS X.

## Установка из репозитория

**LibreOffice** можно установить любым привычным и удобным способом:

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


<!--@include: @apps/_parts/install/content-flatpak.md-->

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