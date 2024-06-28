---
aggregation:
    sisyphus: firefox
    flatpak:
        id: org.mozilla.firefox
        build: offical
    snap:
        id: firefox
        build: offical
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
gallery:
    title: Галерея
    type: slider
    items:
        - src: /firefox/firefox-1.png
        - src: /firefox/firefox-2.png
        - src: /firefox/firefox-3.png
---

# Firefox

Firefox — популярный графический веб-браузер с открытым исходным кодом, разрабатываемый Mozilla.

<AGWGallery />

## Издания и каналы обновления Firefox

Firefox Extended Support Release — версия с длительным сроком поддержки для комплексной безопасности и защиты данных.

Release — стандартный канал со стабильными обновлениями.

Nightly — канал, обновляемый каждые 12 часов и включающий самые свежие обновления для тестировщиков.

Beta — промежуточный канал между Nightly и Release

Developer Edition (ранее — Aurora) — по сути, ничем не отличается от Beta, кроме названия и флагов сборки.

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/warns/unprivileged-spaces.md-->
<!--@include: @apps/_parts/install/content-snap.md-->

## Firefox GNOME theme

Для установки **Firefox GNOME theme** необходимо [установить Firefox](/firefox#firefox) и запустить хотя бы раз для формирования конфигурационных файлов.

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

![Firefox GNOME theme](/firefox/firefox-4.png)

Для обновление темы необходимо ввести следующие команды:

```shell
cd ~/.mozilla/firefox-gnome-theme/
git pull
./scripts/auto-install.sh -f ~/.mozilla/firefox/
```

### Включение дополнительных функций

Дополнительные функции можно включить, создав новые пары ключ-значение в `about:config`

1. Перейти на `about:config` страницу
2. Введите ключ опции
3. Установите её в качестве boolean и нажмите на кнопку Добавить `+`
4. Перезапустите Firefox

### Скрыть отдельную вкладку `gnomeTheme.hideSingleTab`

Рекомендуем убрать кнопку `Новая вкладка` с панели вкладок, иначе она будет скрыта, когда откроется только одна вкладка. Вы можете изменить порядок панелей инструментов, щёлкнув правой кнопкой мыши на любой панели инструментов и выбрав `Настроить панель инструментов`

### Поменять положение кнопки закрытия вкладки `gnomeTheme.swapTabClose`

По умолчанию кнопки закрытия вкладок располагаются в соответствии с положением стандартной темы браузера. Активация этой настройки соответствует внешнему виду вкладок в Epiphany.

### Системные иконки `gnomeTheme.systemIcons`

Используйте набор иконок из Epiphany.
