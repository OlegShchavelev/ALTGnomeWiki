---
gallery: 
    title: Галерея Disk Usage Analyzer
    type: slider
    items: 
        - src: /baobab/baobab-1.png
        - src: /baobab/baobab-2.png
        - src: /baobab/baobab-3.png
aggregation:
    flatpak: 
        id: org.gnome.baobab
        build: offical
    sisyphus: gnome-disk-usage
appstream:
    id: org.gnome.baobab
    name: Анализатор использования дисков
    icon: /baobab/org.gnome.baobab.png
    summary: Проверьте размеры папок и доступное дисковое пространство
    keywords:
        - core
        - adaptive
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    url: 
        homepage: https://apps.gnome.org/ru/Baobab/
        bugtracker: https://gitlab.gnome.org/GNOME/baobab/-/issues
---

# Анализатор использования дисков

Анализатор использования дисков может сканировать отдельные папки, устройства хранения и сетевые учётные записи. Обеспечивает графическое представление и представление в виде дерева, показывающее размер каждой папки, что позволяет легко определить, где теряется дисковое пространство.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->