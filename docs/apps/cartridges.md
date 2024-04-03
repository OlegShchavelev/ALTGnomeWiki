---
title: Картриджи
appstreamRepo: hu.kramo.Cartridges
appstreamFlatpak: hu.kramo.Cartridges
aggregation: 
    flatpak: hu.kramo.Cartridges
    sisyphus: cartridges
appstream:
    id: hu.kramo.Cartridges
    name: Картриджи
    icon: /cartridges/hu.kramo.Cartridges.png
    summary: Запускайте все свои игры
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords: 
        - adaptive
        - circle
    developer: 
        name: kramo
    url: 
        homepage: https://github.com/kra-mo/cartridges/
        bugtracker: https://github.com/kra-mo/cartridges/issues
        translate: https://hosted.weblate.org/engage/cartridges/
---

# Картриджи

Картриджи (Сartridges) — простое приложение для запуска ваших игр. Оно поддерживает импорт игр из Steam, Lutris, Heroic и других без необходимости входа в систему. Вы можете сортировать и скрывать игры или загружать обложки из SteamGridDB.

## Установка из репозитория

**Картриджи** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->


**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install cartridges
```
```shell[epm]
epm -i cartridges
```
:::


## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Картриджи** одной командой:

```shell
flatpak install flathub hu.kramo.Cartridges
```

<!--@include: ./parts/install/software-flatpak.md-->