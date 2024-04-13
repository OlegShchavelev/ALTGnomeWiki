---
title: Nextcloud Desktop
nameRepo: nextcloud-client
appstreamRepo: com.nextcloud.desktopclient.nextcloud
appstreamFlatpak: com.nextcloud.desktopclient.nextcloud
aggregation:
    sisyphus: nextcloud-client
    flatpak: com.nextcloud.desktopclient.nextcloud
appstream:
    id: com.nextcloud.desktopclient.nextcloud
    name: Nextcloud Desktop
    icon: /nextcloud-client/nextcloud-client-logo.svg
    summary: Официальный клиент Nextcloud Desktop
    metadata_license:
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    developer:
        name: Nextcloud GmbH
        avatar: /nextcloud-client/nextcloud-client-avatar.svg
    url: 
        homepage: https://nextcloud.com/
        bugtracker: https://github.com/nextcloud/desktop/issues
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
