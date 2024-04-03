---
title: Disk Usage Analyzer
nameRepo: gnome-disk-usage
appstreamRepo: org.gnome.baobab
appstreamFlatpak: org.gnome.baobab
gallery: 
    title: Галерея Disk Usage Analyzer
    type: carousel
    items: 
        - src: /baobab/baobab-1.png
        - src: /baobab/baobab-2.png
        - src: /baobab/baobab-3.png
aggregation:
    flatpak: org.gnome.baobab
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

## Установка из репозитория

**Disk Usage Analyzer** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-disk-usage
```         
```shell[epm]
epm -i gnome-disk-usage
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Disk Usage Analyzer** одной командой:

```shell
flatpak install flathub org.gnome.baobab
```

<!--@include: ./parts/install/software-flatpak.md-->