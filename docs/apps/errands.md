---
title: Errands
appstreamRepo: io.github.mrvladus.List
appstreamFlatpak: io.github.mrvladus.List
nameRepo: errands
gallery: 
    title: Галерея Errands
    type: slider
    items: 
        - src: /errands/errands-1.png
        - src: /errands/errands-2.png
metainfo:
    thumb:
        src: /errands/io.github.mrvladus.List.png
        title: Evince
    summary: Управляйте своими задачами
    site:
        url: https://apps.gnome.org/ru/List/
        anchor: apps.gnome.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    translate:
        url: https://github.com/mrvladus/Errands/blob/main/TRANSLATIONS.md
        anchor: github.com
    issue:
        url: https://github.com/mrvladus/Errands/issues
        anchor: github.com
---

# Дела

Список задач для тех, кто предпочитает простоту.

Главные функции:

- Поддержка нескольких списков
- Добавляйте, удаляйте, редактируйте задачи и подзадачи
- Помечайте задачи как выполненные
- Добавляйте цвета к задачам
- Синхронизируйте задачи с Nextcloud или другими CalDAV провайдерами
- Поддержка Drag and Drop
- Импорт .ics файлов

<AGWGallery />

## Установка из репозитория

**Errands** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install errands
```
```shell[epm]
epm -i errands
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Errands** одной командой:

```shell
flatpak install flathub io.github.mrvladus.List
```

<!--@include: ./parts/install/software-flatpak.md-->