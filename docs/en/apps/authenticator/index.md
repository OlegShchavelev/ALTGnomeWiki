---
aggregation:
  flatpak: com.belmoussaoui.Authenticator
  sisyphus: authenticator
appstream:
  id: com.belmoussaoui.Authenticator
  name: Authenticator
  icon: /authenticator/logo.svg
  summary: Creating two-factor codes
  keywords:
    - circle
    - adaptive
  metadata_license:
    name: GPL-3.0-or-later
    link: https://packages.altlinux.org/license/GPL-3.0-or-later
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  url:
    homepage: https://apps.gnome.org/Authenticator
    bugtracker: https://gitlab.gnome.org/World/authenticator/-/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /authenticator/sc-1.png
    - src: /authenticator/sc-2.png
    - src: /authenticator/sc-3.png
    - src: /authenticator/sc-4.png
    - src: /authenticator/sc-5.png
---

# Authenticator

A simple application for generating two-factor authentication codes.

Possibilities:

- Support for Time/Counters/Steam based methods
- Support for SHA-1/SHA-256/SHA-512 algorithms
- QR code scanner using camera or screenshot
- Lock the application with a password
- Beautiful user interface
- GNOME Shell Search Provider
- Backup/Restore from/to famous apps like FreeOTP+, Aegis (encrypted/plain text), andOTP, Google Authenticator

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
