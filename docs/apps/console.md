---
aggregation:
    flatpak: org.gnome.Console
    sisyphus: gnome-console
appstream:
    id: org.gnome.Console
    name: Консоль
    icon: /console/console-logo.svg
    summary: Простой и удобный эмулятор терминала для рабочего стола GNOME.
    developer:
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    metadata_license:
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords:
        - core
        - adaptive
    url:
        homepage: https://apps.gnome.org/Console/
        bugtracker: https://gitlab.gnome.org/GNOME/console/-/issues
        translate: https://l10n.gnome.org/module/console/
        donation: https://www.gnome.org/donate/
gallery:
    title: Галерея
    type: slider
    items:
        - src: /console/console-1.png
        - src: /console/console-2.png
---

# Консоль

Консоль — простой и удобный эмулятор терминала для рабочего стола GNOME.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->

## Удаление GNOME Terminal

GNOME Terminal можно удалить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get remove gnome-terminal
```

```shell[epm]
epm -e gnome-terminal
```

:::

## Комбинации клавиш

### Приложение

| Комбинация клавиш            | Описание   |
| ---------------------------- | ---------- |
| [[Shift]] + [[Ctrl]] + [[N]] | Новое окно |

### Терминал

| Комбинация клавиш            | Описание   |
| ---------------------------- | ---------- |
| [[Shift]] + [[Ctrl]] + [[C]] | Копировать |
| [[Shift]] + [[Ctrl]] + [[V]] | Вставить   |
| [[Shift]] + [[Ctrl]] + [[F]] | Найти      |

## Вкладки

| Комбинация клавиш                             | Описание                     |
| --------------------------------------------- | ---------------------------- |
| [[Shift]] + [[Ctrl]] + [[T]]                  | Новая вкладка                |
| [[Shift]] + [[Ctrl]] + [[W]]                  | Закрыть вкладку              |
| [[Shift]] + [[Ctrl]] + [[O]]                  | Показать все вкладки         |
| [[Ctrl]] + [[Page Down]] / [[Ctrl]] + [[Tab]] | Следующая вкладка            |
| [[Ctrl]] + [[Page Up]] / [[Shift]] + [[Tab]]  | Предыдущая вкладка           |
| [[Shift]] + [[Ctrl]] + [[Page Down]]          | Переместить вкладку вправо   |
| [[Shift]] + [[Ctrl]] + [[Page Up]]            | Переместить вкладку влево    |
| [[Alt]] + [[1]] ... [[9]]                     | Переключиться на вкладку 1-9 |
| [[Alt]] + [[0]]                               | Переключиться на вкладку 10  |

## Запуск Console используя комбинацию клавиш

По умолчанию в ALT Regular Gnome не предусмотрена комбинация клавиш для открытия Консоли (Console), но вы можете назначить удобную комбинацию в настройках GNOME: `Настройки` -> `Просмотр и изменение комбинации клавиш` -> `Дополнительные комбинации клавиш`

В окне `Установить пользовательскую комбинацию клавиш`, вводим:

-   Имя: Консоль
-   Команда: kgx
-   Комбинация: [[Ctrl]] + [[Alt]] + [[T]]

![console_1](/console/console_1.gif)
