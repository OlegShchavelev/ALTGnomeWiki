---
title: qBittorrent
appstreamRepo: org.qbittorrent.qBittorrent
appstreamFlatpak: org.qbittorrent.qBittorrent
---

# qBittorrent

qBittorrent — свободный кроссплатформенный клиент файлообменной сети BitTorrent. Клиент написан на языке C++, основан на библиотеке libtorrent-rasterbar, графический интерфейс написан на Qt.

## Установка из репозитория

**qBittorrent** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install qBittorrent
```
```shell[epm]
epm -i qBittorrent
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **qBittorrent** одной командой:

```shell
flatpak install flathub org.qbittorrent.qBittorrent
```

<!--@include: ./parts/install/software-flatpak.md-->

::: tip
Можно изменить параметр «Период сохранения данных возобновления» Он находится в qBittorrent по пути Сервис-Настройки-Расширенные-Период сохранения данных возобновления
Данный параметр отвечает за частоту сохранения данных на диск.
Дело в том что при перезагрузке или в сбое питания электричества загруженные данные могут пропасть совсем или частично.
Раньше при установки программы выставлялось 3 минуты но сейчас же данный параметр изменили на 60 минут. (Можете поэксперементировать с данным пунктом, но будьте аккуратны на старых HDD может вызвать лаги)
Данный параметр важен если в раздаче участвуют люди с низким порогом скорости или они часто отсутствуют.
:::
