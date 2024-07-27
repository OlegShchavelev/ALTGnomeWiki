---
appstreamFlatpak: org.gnome.design.Emblem
nameRepo: emblem
gallery:
  title: Галерея
  type: slider
  items:
    - src: /emblem/sc-1.png
aggregation:
  flatpak: org.gnome.design.Emblem
  sisyphus: emblem
appstream:
  id: org.gnome.design.Emblem
  name: Эмблема
  icon: /emblem/logo.svg
  summary: Создание аватаров проекта
  keywords:
    - circle
  metadata_license:
    name: GPL-3.0-or-later
    link: https://packages.altlinux.org/license/GPL-3.0-or-later
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  url:
    homepage: https://apps.gnome.org/Emblem
    bugtracker: https://gitlab.gnome.org/World/design/emblem/issues
---

# Эмблема

Создавайте аватары проектов для своих комнат Matrix и git forge из символического значка.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
