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
metainfo:
    thumb:
        src: /baobab/org.gnome.baobab.png
        title: Disk Usage Analyzer
    summary: Проверьте размеры папок и доступное дисковое пространство
    site:
        url: https://apps.gnome.org/ru/Baobab/
        anchor: apps.gnome.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue:
        url: https://gitlab.gnome.org/GNOME/baobab/-/issues
        anchor: gitlab.gnome.org
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