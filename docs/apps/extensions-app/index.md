---
aggregation:
  flatpak: org.gnome.Extensions
  sisyphus:
    id: gnome-extensions-app
    url: sisyphus/srpms/gnome-shell
appstream:
  id: org.gnome.Extensions
  name: Расширения
  icon: /gnome-shell-extensions/logo.png
  summary: Управление расширениями GNOME Shell
  keywords:
    - adaptive
    - core
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GPLv2+
    link: https://packages.altlinux.org/license/GPL-2.0-or-later
  url:
    homepage: https://apps.gnome.org/ru/Extensions/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-shell-extensions/-/issues
gallery:
  title: Галерея GNOME Extensions
  type: slider
  items:
    - src: /gnome-shell-extensions/sc-1.webp
    - src: /gnome-shell-extensions/sc-2.webp
    - src: /gnome-shell-extensions/sc-3.webp
---

# Расширения

GNOME Extensions занимается обновлением расширений, настройкой параметров расширений и удалением или отключением нежелательных расширений.

<AGWGallery />

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->
