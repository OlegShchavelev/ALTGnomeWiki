---
title: Nextcloud Desktop
nameRepo: nextcloud-client
appstreamFlatpak: com.nextcloud.desktopclient.nextcloud
metainfo:
    active: true
    thumb:
        src: https://avatars.githubusercontent.com/u/19211038?s=48&v=4
        title: Nextcloud Desktop
    summary: Официальный клиент Nextcloud Desktop
    developer: 
        name: Nextcloud GmbH
    site:
        url: https://nextcloud.com
        anchor: nextcloud.com
    licence:
        url: 
        anchor: GPL-2.0 
    issue: 
        url: https://github.com/nextcloud/desktop/issues
        anchor: github.com
        
---

# Nextcloud Desktop

Nextcloud Desktop — клиент для клиент-серверного хранилища данных. Nextcloud можно установить как на коммерческом хостинге, так и на собственном сервере. По доступной функциональности похож на Google Workspace.  

## Установка из репозитория

**Nextcloud Desktop** можно установить любым привычным и удобным способом:

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

При наличии пакета [Flatpak](/flatpak), можно установить **Nextcloud Desktop** одной командой:

```shell
flatpak install flathub com.nextcloud.desktopclient.nextcloud
```

<!--@include: ./parts/install/software-flatpak.md-->
