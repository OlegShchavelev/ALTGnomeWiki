---
aggregation:
  flatpak: org.gnome.Extensions
  sisyphus:
    id: gnome-extensions-app
    url: sisyphus/srpms/gnome-shell
appstream:
  id: org.gnome.Extensions
  name: Extensions
  icon: /gnome-shell-extensions/logo.png
  summary: Managing GNOME Shell extensions
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
    homepage: https://apps.gnome.org/en/Extensions/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-shell-extensions/-/issues
gallery:
  title: Gallery GNOME Extensions
  type: slider
  items:
    - src: /gnome-shell-extensions/sc-1.webp
    - src: /gnome-shell-extensions/sc-2.webp
    - src: /gnome-shell-extensions/sc-3.webp
---

# Extensions

GNOME Extensions handles updating extensions, configuring extension settings, and removing or disabling unwanted extensions.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
