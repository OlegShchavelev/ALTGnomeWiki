---
title: Tuba  # Название приложения
nameRepo: tuba # Название приложения в репозитории sisyphus
nameSnap: Tuba  # Название приложения на Snapcraft
nameEpmPlay: # Название приложения для epm play
appstreamRepo: dev.geopjr.Tuba # appstream id приложения для sisyphus
appstreamFlatpak: dev.geopjr.Tuba # appstream id приложения для flatpak

metainfo:
    active: true  # Показывать ли бар
    thumb:
        src: /tuba/dev.geopjr.Tuba.png # Путь до иконки приложения
        title: Tuba  # Название приложения
    summary: Неофициальный клиент Mastodon # Краткое описание
    developer: 
        name: Evan  # Имя разработчика / Название компании
        nickname: geojr  # nickname разработчика
        avatar:  # URL до аватара разработчика / логотипа компании
    site:
        url: https://tuba.geopjr.dev/ # Ссылка на сайт приложения 
        anchor: tuba.geopjr.dev # Домен сайта
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/ # Ссылка на лицензию
        anchor: GPL-3.0 # Лицензия
    translate:
        url: https://hosted.weblate.org/engage/tuba/  # Ссылка на помощь с переводом
        anchor: hosted.weblate.org # Домен сайта
    issue: 
        url: https://github.com/GeopJr/Tuba/issues # Ссылка на создание issues
        anchor: github.com  # Домен сайта
    adaptive:  # Является ли адаптивным
    gnomeCircle:  # Входит ли в gnomeCircle
    gnomeCore:  # Входит ли в gnomeCore
    createTheme:  # Не рекомендуется ли создавать темы ( Please don’t theme ) 
    proprietary:  # Является ли проприетарным 
    sponsor: 
        url:  # Ссылка на спонсорство
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/tuba/ # Ссылка на пакет на packages.altlinux.org
    flathub:
        url: https://flathub.org/apps/dev.geopjr.Tuba # Ссылка на flathub
    snap:
        url: https://snapcraft.io/tuba  # Ссылка на snapcraft
---

# Tuba
Tuba - неофциальный клиент для Mastodon, GoToSocial, Akkoma и других.

<!--@include: ./parts/install/software-install.md-->