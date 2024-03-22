---
title: Nextcloud Desktop

metainfo:
    active: true
    thumb:
        src: https://avatars.githubusercontent.com/u/19211038?s=200&v=4
        title: Nextcloud Desktop
    summary: приложение Nextcloud Desktop
    developer: 
        name: Nextcloud GmbH
    site:
        url: https://nextcloud.com
        anchor: nextcloud.com
    licence:
        url: 
        anchor: GPL-2.0
    translate:
        url: 
        anchor: 
    issue: 
        url: https://github.com/nextcloud/desktop/issues
        anchor: github.com
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/nextcloud-client/
     flathub:
        url: https://flathub.org/apps/com.nextcloud.desktopclient.nextcloud
        
---

# Nextcloud Desktop

Nextcloud Desktop — клиент для клиент-серверного хранилища данных. Nextcloud можно установить как на коммерческом хостинге, так и на собственном сервере. По доступной функциональности похож на Google Workspace.  

## Установка из репозитория

**nextcloud Desktop** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install nextcloud-client
```
```shell[epm]
epm -i nextcloud-client
```
:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Audacity** одной командой:

```shell
flatpak install flathub com.nextcloud.desktopclient.nextcloud
```

<!--@include: ./parts/install/software-flatpak.md-->
