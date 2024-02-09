---
title: AnyDesk
appstreamFlatpak: com.anydesk.Anydesk
appstreamRepo: com.anydesk.Anydesk
metainfo:
    active: true
    thumb:
        src: /anydesk/com.anydesk.Anydesk.png
        title: AnyDesk
    summary: Удалённое подключение к компьютеру с AnyDesk
    developer: 
        name: AnyDesk Software GmbH
    site:
        url: https://anydesk.com/
        anchor: anydesk.com
    licence:
        url: https://choosealicense.com/licenses/cc0-1.0/
        anchor: CC0-1.0
    translate:
        url: 
        anchor: hosted.weblate.org
    issue: 
        url: https://github.com/flathub/com.anydesk.Anydesk/issues
        anchor: github.com/anydesk
    proprietary: true
    flathub:
        url: https://flathub.org/apps/com.anydesk.Anydesk
---


# AnyDesk

AnyDesk — программа удалённого доступа, которая позволяет пользователям получать доступ и управлять удалёнными компьютерами и серверами. Она обеспечивает быстрое и стабильное соединение, а также даёт возможность обмена файлами между устройствами. AnyDesk может использоваться для технической поддержки, обучения, доступа к домашним компьютерам и многих других задач, связанных с удалённым управлением и обслуживанием систем.

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **AnyDesk** одной командой:

```shell
flatpak install flathub com.anydesk.Anydesk
```
<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **AnyDesk** одной командой:

```shell
epm play anydesk
serv anydesk on
```
Для корректной работы необходимо установить дополнительную библиотеку `libgtkglext`:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install libgtkglext
```
```shell[epm]
epm -i libgtkglext
```
:::
