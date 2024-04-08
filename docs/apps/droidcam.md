---
title: DroidCam
appstreamRepo: droidcam.desktop
aggregation: 
    sisyphus: droidcam
appstream:
    id: droidcam.desktop
    name: DroidCam
    icon: /droidcam/droidcam-desktop.png
    summary: Приложение позволяющее превратить ваше мобильное устройство в веб-камеру для вашего компьютера.
    metadata_license: 
        name: BSD 3-Clause
        link: https://github.com/chromium/chromium/blob/main/LICENSE
    developer: 
        name: dev47apps
    url: 
        homepage: https://www.dev47apps.com/
        bugtracker: https://github.com/dev47apps/droidcam/issues/
---



# DroidCam

DroidCam — приложение позволяющее превратить ваше мобильное устройство в веб-камеру для вашего компьютера.

## Установка из репозитория

**DroidCam** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install droidcam
```         
```shell[epm]
epm -i droidcam
```
:::

<!--@include: ./parts/install/software-repo.md-->

## Настройка DroidCam

**DroidCam** для своей работы требует модуль ядра `v4l2loopback`, который можно установить так:

::: tip
Где *** - версия ядра `un-def` или `std-def`.

Узнать нужную версию можно в терминале - через команду `uname -r`.
:::

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install kernel-modules-v4l2loopback-***
```         
```shell[epm]
epm -i kernel-modules-v4l2loopback-***
```
:::

Далее нам необходимо включить установленный модуль, для этого отредактируем файл `/etc/modules-load.d/modules.conf`

```shell
su -
nano /etc/modules-load.d/modules.conf
```

В конце файла переходим на новую строку и добавляем туда `v4l2loopback`

![v4l2loopback_module](/droidcam/v4l2loopback.gif)

Выходим, нажимая `Ctrl + X`, и соглашаемся с изменениями.
После этого обязательно перезагружаем устройство.

Готово! **DroidCam** успешно настроен и готов к работе.