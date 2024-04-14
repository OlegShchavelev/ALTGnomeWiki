---
title: Центр мониторинга системы
appstreamRepo: system-monitoring-center.desktop
aggregation:
    sisyphus: system-monitoring-center
    flatpak: io.github.hakandundar34coding.system-monitoring-center
appstream:
    id: system-monitoring-center.desktop
    name: Центр мониторинга системы
    icon: /system-monitoring-center/system-monitoring-center-logo.svg
    summary: Многофункциональный системный монитор для отслеживания использования системных ресурсов, процессов, пользователей, сервисов и другого. 
    developer: 
        name: Hakan Dündar
        nickname: hakandundar34coding
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://github.com/hakandundar34coding/system-monitoring-center
        bugtracker: https://github.com/hakandundar34coding/system-monitoring-center/issues
        translate: https://github.com/hakandundar34coding/system-monitoring-center/blob/master/docs/translations.md
---



# Центр мониторинга системы

Центр мониторинга системы — это многофункциональный системный монитор для отслеживания использования системных ресурсов, процессов, пользователей, сервисов и другого. Контролируйте использование своей операционной системы.

![system-monitoring-center](/system-monitoring-center/system-monitoring-center.png)


## Установка из репозитория 

**Центр мониторинга системы** можно установить любым привычным и удобным способом:


**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install system-monitoring-center
```
```shell[epm]
epm -i system-monitoring-center
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Центр мониторинга системы** одной командой:

```shell
flatpak install flathub io.github.hakandundar34coding.system-monitoring-center
```
