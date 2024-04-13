---
title: Postman
appstreamFlatpak: com.getpostman.Postman
aggregation:
    flatpak: com.getpostman.Postman
appstream:
    id: com.getpostman.Postman
    name: Postman
    icon: /postman/postman-logo.png
    summary: Платформа для тестирования ваших собственных API
    keywords:
        - proprietary
    developer:
        name: Postman Inc.
    metadata_license:
        name: Собственная
        link: https://www.postman.com/legal/terms/
    url:
        homepage: https://www.postman.com/
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