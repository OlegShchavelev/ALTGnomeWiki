---
appstreamFlatpak: io.github.mrvladus.List
nameRepo: errands
gallery:
    title: Галерея Errands
    type: slider
    items:
        - src: /errands/errands-1.png
        - src: /errands/errands-2.png
aggregation:
    flatpak: io.github.mrvladus.List
    sisyphus: errands
appstream:
    id: io.github.mrvladus.List
    name: Дела
    icon: /errands/errands-logo.svg
    summary: Управляйте своими задачами
    metadata_license:
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer:
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    url:
        homepage: https://apps.gnome.org/ru/List/
        translate: https://github.com/mrvladus/Errands/blob/main/TRANSLATIONS.md
        bugtracker: https://github.com/mrvladus/Errands/issues
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

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
