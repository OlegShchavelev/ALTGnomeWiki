---
aggregation:
  sisyphus: qbittorrent
  flatpak: org.qbittorrent.qBittorrent
appstream:
  id: org.qbittorrent.qBittorrent
  name: qBittorrent
  icon: /q-bittorrent/q-bittorrent-logo.svg
  summary: Свободный кроссплатформенный клиент файлообменной сети BitTorrent.
  developer:
    name: qBittorrent Community
  metadata_license:
    name: GNU GPLv3 + OpenSSL
    link: https://github.com/qbittorrent/qBittorrent/blob/master/COPYING
  url:
    homepage: https://www.qbittorrent.org/
    bugtracker: https://github.com/qbittorrent/qBittorrent/issues
    translate: https://github.com/qbittorrent/qBittorrent/wiki/How-to-translate-qBittorrent
---

# qBittorrent

qBittorrent — свободный кроссплатформенный клиент файлообменной сети BitTorrent. Клиент написан на языке C++, основан на библиотеке libtorrent-rasterbar, графический интерфейс написан на Qt.

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->

## Изменение периода сохранения данных

Данный период отвечает за частоту сохранения данных на диск.
При перезагрузке или в сбое питания электричества загруженные данные могут пропасть совсем или частично.
Так же данный параметр важен если в раздаче участвуют люди с низким порогом скорости или они часто отсутствуют.

Раньше при установке программы выставлялся период в 3 минуты, сейчас же данный параметр изменили на 60 минут, но никто не мешает вам указать собственный.

:::warning
Будьте аккуратны, на старых HDD слишком малый период может вызвать лаги из-за частого обращения к диску.
:::

Изменить данный параметр можно так:

1. Выбрать вкладку "Инструменты"
2. Нажать кнопку [[Настройки]]
3. Перейти в пункт "Расширенные"
4. Изменить значение "Период сохранения данных возобновления"
5. Нажать [[Применить]] и желательно перезайти в клиент.
