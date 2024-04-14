---
title: WPS Office
appstreamRepo: com.wps.Office
appstreamFlatpak: com.wps.Office
aggregation:
    flatpak: com.wps.Office
appstream:
    id: com.wps.Office
    name: WPS Office
    icon: /wps-office/wps-office-logo.svg
    summary: Универсальный пакет Office приложений
    keywords: 
        - proprietary
    developer: 
        name: Kingsoft Corporation
        avatar: /wps-office/wps-office-avatar.png
    metadata_license: 
        name: Собственная
        link: https://www.wps.com/eula/
    url: 
        homepage: https://www.wps.com/office/linux/
        bugtracker: https://help.wps.com/
---

# WPS Office

WPS Office — офисный пакет, разрабатываемый Kingsoft Office Software. Продукт предоставляет, пожалуй, лучшую совместимость с файлами Microsoft Office.

WPS Office включает следующие приложения:
- Document
- Excel
- Presentation
- PDF

## Установка с помощью Flatpak <Badge type="danger" text="Неофициальная сборка" /> <Badge type="warning" text="Устаревшая версия" />

При наличии пакета [Flatpak](/flatpak), можно установить **WPS Office** одной командой:

```shell
flatpak install flathub com.wps.Office
```

<!--@include: ./parts/install/software-flatpak.md-->

## Установка с помощью epm play <Badge type="danger" text="Неофициальная сборка" /> <Badge type="warning" text="Временно сломано" />

При наличии пакета [eepm](/epm), можно установить **WPS Office** одной командой:

```shell
epm play wpsoffice
```

## Установка с официального сайта
Зайдите на [официальный сайт производителя](https://www.wps.com/).

Далее скачайте rpm пакет.

Перейдите в папку, куда загрузился пакет, и выполните:

```shell
su -
apt-get install имяпакета.rpm
```

### Устранение ошибок

При установке вы можете столкнуться с ошибкой:

```
file /etc/cron.d from install of wps-office-11.1.0.9719.XA-1.x86_64 conflicts with file from package vixie-cron-4.1.20060426-alt10.2.x86_64
file /etc/logrotate.d from install of wps-office-11.1.0.9719.XA-1.x86_64 conflicts with file from package logrotate-3.16.0-alt1.git35_6e8dfb8.x86_64
```

В таком случае можно установить пакет с игнорированием ошибок командой:

```shell
su -
rpm -Uvh --nodeps --force имяпакета.rpm
```