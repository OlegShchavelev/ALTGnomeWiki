---
title: AnyDesk
appstreamFlatpak: com.anydesk.Anydesk
appstreamRepo: com.anydesk.Anydesk
aggregation:
    flatpak: com.anydesk.Anydesk
appstream:
    id: com.anydesk.Anydesk
    name: AnyDesk
    icon: /anydesk/anydesk-logo.svg
    summary: Удалённое подключение к компьютеру с AnyDesk
    keywords: 
        - proprietary
        - restrictions
    developer: 
        name: AnyDesk Software GmbH
    metadata_license: 
        name: Собственная
        link: https://anydesk.com/ru/terms
    url: 
        homepage: https://anydesk.com/
        bugtracker: https://github.com/flathub/com.anydesk.Anydesk/issues
---


# AnyDesk

AnyDesk — программа удалённого доступа, которая позволяет пользователям получать доступ и управлять удалёнными компьютерами и серверами. Она обеспечивает быстрое и стабильное соединение, а также даёт возможность обмена файлами между устройствами. AnyDesk может использоваться для технической поддержки, обучения, доступа к домашним компьютерам и многих других задач, связанных с удалённым управлением и обслуживанием систем.

![AnyDesk](/anydesk/anydesk-1.png)

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
