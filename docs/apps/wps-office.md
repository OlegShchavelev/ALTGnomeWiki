---
title: WPS Office
appstreamRepo: com.wps.Office
appstreamFlatpak: com.wps.Office

metainfo:
    active: true
    thumb:
        src: /wps-office/wps-office-free-all-in-one-office-suite.d880717.png
        title: WPS Office
    summary: Универсальный пакет Office приложений
    site:
        url: https://www.wps.com/ru-RU/
        anchor: wps.com
    issue: 
        url: https://help.wps.com/
        anchor: help.wps.com
    adaptive: false
    gnomeCore: false
    gnomeCircle: false
    proprietary: true
    flathub:
        url: https://flathub.org/ru/apps/com.wps.Office
---

# WPS Office

WPS Office — это офисный пакет, разрабатываемый Kingsoft Office Software. Продукт предоставляет, пожалуй, лучшую совместимость с файлами Microsoft Office.

Имеет 3 модуля:
- Document
- Excel
- Presentation

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

:::warning 
На 06.02.2024 года, установка WPS Office инструментами epm play временно не доступен

```shell
 # alien --generate --to-rpm ../wps-office-11.1.0.11711.XA-1.x86_64.rpm
Warning: Skipping conversion of scripts in package wps-office: postinst postrm preinst prerm
Warning: Use the --scripts parameter to include the scripts.
Unpacking of '../wps-office-11.1.0.11711.XA-1.x86_64.rpm' failed at /usr/share/perl5/Alien/Package/Rpm.pm line 168.
ERROR:   (you can discuss the epm 3.60.5-alt1 problem in Telegram: https://t.me/useepm)
ERROR: There was some error during install the application.  (you can discuss the epm 3.60.5-alt1 problem in Telegram: https://t.me/useepm)
```
:::

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