---
title: Postman
appstreamFlatpak: com.getpostman.Postman
metainfo:
    active: true
    thumb:
        src: /postman/com.getpostman.Postman.png
        title: Postman
    summary: Платформа для тестирования ваших собственных API
    developer: 
        name: Postman Inc.
    site:
        url: https://www.postman.com/
        anchor: postman.com
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: CC0-1.0
    proprietary: true
    translate:
        url: 
        anchor: hosted.weblate.org
    flathub:
        url: https://flathub.org/ru/apps/com.getpostman.Postman
---

# Postman

Postman — сервис для создания, тестирования, документирования, публикации и обслуживания API. Он позволяет создавать коллекции запросов к любому API, применять к ним разные окружения, настраивать мок-серверы, писать автотесты на JavaScript, анализировать и визуализировать результаты запросов.

## Установка с помощью EPM

::: info
Актуально с версии **EPM 3.60.11**
:::

Для установки **Postman** с помощью EPM введите в терминале команду

```shell
epm play postman
```

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Postman** одной командой:

```shell
flatpak install flathub com.getpostman.Postman
```
<!--@include: ./parts/install/software-flatpak.md-->

## Установка вручную

Для ручной установки скачайте пакет **Postman** для Linux нажав на [скачать](https://www.postman.com/downloads/), либо скопируйте в свой браузер ссылку
```
https://www.postman.com/downloads/
```
После чего распакуйте пакет в домашнюю папку, либо другое удобное Вам место

``` shell
tar xf ИМЯ -C $HOME/
```
где ИМЯ - скаченный пакет *.tar.gz

После чего создаем ярлык

```
/usr/share/applications/postman.desktop
```

следующего содержания

```
[Desktop Entry]
Version=1.0
Name=Postman
Comment=Postman
Exec=/home/ИМЯ ПОЛЬЗОВАТЕЛЯ/Postman/Postman
Icon=/home/ИМЯ ПОЛЬЗОВАТЕЛЯ/Postman/app/icons/icon_128x128.png
Terminal=false
Type=Application
Categories=Development;
StartupNotify=true
```