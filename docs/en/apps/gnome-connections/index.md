---
aggregation:
  flatpak: org.gnome.Connections
  sisyphus: gnome-connections
appstream:
  id: org.gnome.Connections
  name: Connections
  icon: /gnome-connections/logo.png
  summary: View and use other desktops
  keywords:
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPL-3.0
    link: https://packages.altlinux.org/license/GPL-3.0-only
  url:
    homepage: https://apps.gnome.org/en/Connections/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-connections/-/issues
gallery:
  title: Connections Gallery
  type: slider
  items:
    - src: /gnome-connections/sc-1.webp
    - src: /gnome-connections/sc-2.webp
    - src: /gnome-connections/sc-3.webp
    - src: /gnome-connections/sc-4.webp
---

# Connections

Connections allow you to connect to and use other desktops. This can be a great way to access content or software on a different desktop operating system. This can also be used as a way to provide support to users who may need assistance.

You can connect to a variety of operating systems, including Linux and Windows desktops. You can also connect to virtual machines.

The connection uses the widely supported VNC and RDP protocols, and one of them must be enabled on the desktop you want to connect to.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
