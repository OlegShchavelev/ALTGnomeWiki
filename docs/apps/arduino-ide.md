---
title: Arduino IDE
appstreamFlatpak: cc.arduino.arduinoide
appstreamRepo: cc.arduino.arduinoide
metainfo:
    active: true
    thumb:
        src: /arduino-ide/cc.arduino.arduinoide.png
        title: Arduino IDE
    summary: Платформа для прототипирования электроники с открытым исходным кодом.
    developer: 
        name: Arduino LLC
    site:
        url: https://arduino.cc
        anchor: arduino.cc
    licence:
        url: https://choosealicense.com/licenses/lgpl-2.1/
        anchor: LGPL-2.1
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://github.com/arduino/Arduino/issues
        anchor: github.com/arduino
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/arduino/
    flathub:
        url: https://flathub.org/ru/apps/cc.arduino.arduinoide
---

# Arduino IDE

Arduino IDE — интегрированная среда разработки для Windows, MacOS и Linux, разработанная на Си и C ++, предназначенная для создания и загрузки программ на Arduino-совместимые платы, а также на платы других производителей.

## Установка из репозитория

**Arduino IDE** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install arduino
```

```shell[epm]
epm -i arduino
```
:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Arduino IDE** одной командой:

```shell
flatpak install flathub cc.arduino.arduinoide
```


## Издания Arduino IDE

**Arduino IDE v2** — вторая версия Arduino IDE предоставляет обновленный интерфейс, который облегчает работу с несколькими файлами. Встроенная система вкладок упрощает переключение между файлами и способствует более организованной разработке. Новая функция в Arduino IDE v2 – это встроенная отладка.
