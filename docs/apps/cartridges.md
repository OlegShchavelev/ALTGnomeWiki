---
title: Картриджи
appstreamRepo: hu.kramo.Cartridges
appstreamFlatpak: hu.kramo.Cartridges
metainfo:
    active: true
    thumb:
        src: /cartridges/hu.kramo.Cartridges.png
        title: Картриджи
    summary: Запускайте все свои игры
    developer: 
        name: kramo
        avatar: https://avatars.githubusercontent.com/u/93832451?v=4
    site:
        url: https://github.com/kra-mo/cartridges/
        anchor: github.com
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    translate:
        url: https://hosted.weblate.org/engage/cartridges/
        anchor: hosted.weblate.org
    issue: 
        url: https://github.com/kra-mo/cartridges/issues
        anchor: github.com
    adaptive: true
    gnomeCircle: true
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/cartridges/
    flathub:
        url: https://flathub.org/ru/apps/hu.kramo.Cartridges
---

# Картриджи

Картриджи (Сartridges) — это простое приложение для запуска ваших игр. Оно поддерживает импорт игр из Steam, Lutris, Heroic и других без необходимости входа в систему. Вы можете сортировать и скрывать игры или загружать обложки из SteamGridDB.

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