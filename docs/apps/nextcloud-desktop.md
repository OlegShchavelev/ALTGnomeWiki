---
aggregation:
    sisyphus: nextcloud-client
    flatpak:
        id: com.nextcloud.desktopclient.nextcloud
        build: official
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

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
