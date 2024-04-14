---
title: Firefox
appstreamRepo: org.mozilla.firefox
aggregation: 
    sisyphus: firefox
    flatpak: org.mozilla.firefox
appstream:
    id: org.mozilla.firefox
    name: Firefox
    icon: /firefox/firefox-logo.svg
    summary: Популярный графический веб-браузер с открытым исходным кодом, разрабатываемый Mozilla.
    metadata_license: 
        name: MPL-2.0 licence
        link: https://choosealicense.com/licenses/mpl-2.0/
    developer: 
        name: Mozilla Foundation
        avatar: /firefox/firefox-avatar.png
    url: 
        homepage: https://www.mozilla.org/en-US/firefox/
        bugtracker: https://bugzilla.mozilla.org/home
        translate: https://pontoon.mozilla.org/
        donation: https://foundation.mozilla.org/en/?form=donate
---



# Firefox

Firefox — популярный графический веб-браузер с открытым исходным кодом, разрабатываемый Mozilla.

## Установка из репозитория 

**Firefox** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install firefox
```
```shell[epm]
epm -i firefox
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Firefox** одной командой:

```shell
flatpak install flathub org.mozilla.firefox
```

<!--@include: ./parts/install/software-flatpak.md-->
<!--@include: ./parts/warns/unpriveleged-spases.md -->

## Установка с помощью Snaps

При наличии [snap](/snap) пакета, можно установить **Firefox** одной командой:

```shell
snap install firefox
```

## Firefox GNOME theme

Для установки **Firefox GNOME theme** необходимо [устровить Firefox](/firefox#firefox) и запустить для формирования конфигурационных файлов.   

Склонируйте скрипт и установите:

```shell
git clone https://github.com/rafaelmardojai/firefox-gnome-theme.git ~/.mozilla/firefox-gnome-theme/
cd ~/.mozilla/firefox-gnome-theme/
```

Запустите установочный скрипт `auto-install.sh`:

::: code-group

```shell[Cизиф]
./scripts/auto-install.sh -f ~/.mozilla/firefox/
```

```shell[Flatpak]
./scripts/auto-install.sh -f ~/.var/app/org.mozilla.firefox/.mozilla/firefox
```

```shell[Snap]
./scripts/auto-install.sh -f ~/snap/firefox/common/.mozilla/firefox
```

:::

![Firefox GNOME theme](/firefox/firefox-1.png)

### Включение дополнительных функций

Дополнительные функции можно включить, создав новые boolean настройки в `about:config`

1. Перейти на `about:config` страницу
2. Введите ключ опции
3. Установите ее в качестве boolean и нажмите на кнопку Добавить `+`
4. Перезапустите Firefox

### Скрыть отдельную вкладку `gnomeTheme.hideSingleTab`

Рекомендуем убрать кнопку «Новая вкладка» с панели вкладок, иначе она будет скрыта, когда откроется только одна вкладка. Вы можете изменить порядок панелей инструментов, щелкнув правой кнопкой мыши на любой панели инструментов и выбрав «Настроить панель инструментов ...»

## Издания Firefox

**Firefox Extended Support Release** — версия с длительным сроком поддержки для комплексной безопасности и защиты данных.

**Firefox Beta** — нестабильная платформа для тестирования и разработки. По умолчанию Бета отправляет данные в Mozilla, а иногда и нашим партнерам, чтобы помочь нам справиться с проблемами и попробовать идеи

**Firefox Developer Edition** — нестабильная платформа для тестирования и разработки. По умолчанию Developer Edition отправляет данные в Mozilla, а иногда и нашим партнерам, чтобы помочь нам справиться с проблемами и попробовать идеи.

**Firefox Nightly** — нестабильная платформа для тестирования и разработки. По умолчанию Nightly отправляет данные в Mozilla, а иногда и нашим партнерам, чтобы помочь нам справиться с проблемами и попробовать идеи.