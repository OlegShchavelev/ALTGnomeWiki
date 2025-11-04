---
aggregation:
  flatpak: org.gnome.DejaDup
  sisyphus: deja-dup
appstream:
  id: org.gnome.DejaDup
  name: Déjà Dup Backups
  icon: /deja-dup/logo.svg
  summary: Protect yourself from data loss
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
    homepage: https://apps.gnome.org/DejaDup
    bugtracker: https://gitlab.gnome.org/World/deja-dup/-/issues
gallery:
  title: Gallery
  type: slider
  images:
    - src: /deja-dup/sc-1.png
    - src: /deja-dup/sc-2.png
    - src: /deja-dup/sc-3.png
    - src: /deja-dup/sc-4.png
---

# Déjà Dup Backups

Déjà Dup is a simple backup tool. It hides the complexity of doing backups correctly (using encryption, storing away from your computer, copying regularly) and uses duplicity as a back-end interface.

- Supports local, remote or cloud backup locations such as Google Drive
- Securely encrypts and compresses data
- Staged backup, allows you to restore from specific backups
- Schedule regular backups
- Integrates well with the GNOME desktop

Déjà Dup focuses on the ease of use of recovering personal data in the event of loss. If you require a full system backup or archiving program, consider other backup program options.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
