---
aggregation:
  flatpak: org.gnome.Characters
  sisyphus: gnome-characters
appstream:
  id: gnome-characters
  name: Символы
  icon: /gnome-characters/logo.png
  summary: Приложение карты символов
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: BSD-3-Clause
    link: https://packages.altlinux.org/license/BSD-3-Clause
  url:
    homepage: https://apps.gnome.org/ru/Characters/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-characters/-/issues
gallery:
  title: Галерея Символов
  type: slider
  items:
    - src: /gnome-characters/sc-1.webp
    - src: /gnome-characters/sc-2.webp
    - src: /gnome-characters/sc-3.webp
---

# Символы

Символы — это простое приложение, для поиска и вставки необычных символов. Оно позволяет быстро находить нужный символ по ключевым словам.

Также можно просматривать символы по категориям, таким как знаки пунктуации, картинки и т.д.

<AGWGallery />

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->
