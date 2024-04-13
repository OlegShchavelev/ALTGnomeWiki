---
title: Skype
appstreamFlatpak: com.skype.Client
aggregation:
    flatpak: com.skype.Client
appstream:
    id: com.skype.Client
    name: Skype
    icon: /skype/skype-logo.svg
    summary: Платформа для бесплатных видеозвонков, обмена сообщениями и файлами
    keywords: 
        - proprietary
        - restrictions
    developer: 
        name: Microsoft Corporation
        avatar: /skype/skype-avatar.svg
    metadata_license: 
        name: Собственная
        link: https://www.microsoft.com/en-us/servicesagreement/
    url: 
        homepage: https://www.skype.com/
---



# Skype

Skype — платформа для бесплатных видеозвонков, обмена сообщениями и файлами, которая позволяет пользователям общаться с друзьями и близкими в реальном времени на любых устройствах.

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **Skype** одной командой:

```shell
flatpak install flathub com.skype.Client
```

<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Skype** одной командой:

```shell
epm play skype
```
