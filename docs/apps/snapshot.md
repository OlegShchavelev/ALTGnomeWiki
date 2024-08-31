---
aggregation:
  flatpak: org.gnome.Snapshot
  sisyphus: snapshot
appstream:
  id: org.gnome.Snapshot
  name: Камера
  icon: /snapshot/Snapshot-logo.png
  summary: Снимайте фото и видео
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
    homepage: https://apps.gnome.org/ru/Snapshot/
    bugtracker: https://gitlab.gnome.org/GNOME/snapshot/-/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /snapshot/sc-1.webp
    - src: /snapshot/sc-2.webp
---

# Камера

Снимайте фото и видео на компьютер, планшет или телефон.

<AGWGallery />

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->
