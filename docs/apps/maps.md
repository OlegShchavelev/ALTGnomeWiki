---
aggregation:
  flatpak: org.gnome.Maps
  sisyphus: gnome-maps
appstream:
  id: org.gnome.Maps
  name: Карты
  icon: /maps/Maps-logo.png
  summary: Поиск местоположений по всему миру
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GPL-3.0
    link: https://packages.altlinux.org/license/GPL-3.0-or-later
  url:
    homepage: https://apps.gnome.org/ru/Maps/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-maps/-/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /maps/sc-1.webp
    - src: /maps/sc-2.webp
    - src: /maps/sc-3.webp
---

# Карты

Приложение «Карты» позволяет получить быстрый доступ к картам по всему миру, находить места в городах, на улицах или указывать места для встречи с друзьями.

Карты используют базу данных OpenStreetMap, созданную сотнями тысяч людей по всеми миру.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
