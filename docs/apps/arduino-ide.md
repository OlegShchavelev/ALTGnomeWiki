---
title: Arduino IDE
appstreamFlatpak: cc.arduino.arduinoide
appstreamRepo: cc.arduino.arduinoide
aggregation:
    flatpak: cc.arduino.arduinoide
    sisyphus: arduino
appstream:
    id: cc.arduino.arduinoide
    name: Arduino IDE
    icon: /arduino-ide/cc.arduino.arduinoide.png
    summary: Удалённое подключение к компьютеру с AnyDesk
    developer: 
        name: Arduino LLC
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://arduino.cc/
        bugtracker: https://github.com/arduino/Arduino/issues/
        translate: https://github.com/arduino/Arduino/tree/master/arduino-core/src/processing/app/i18n/
        help: https://www.arduino.cc/en/Guide/
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
