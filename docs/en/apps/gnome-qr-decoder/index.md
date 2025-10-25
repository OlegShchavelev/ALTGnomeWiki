---
aggregation:
  flatpak: com.belmoussaoui.Decoder
  sisyphus: gnome-qr-decoder
appstream:
  id: com.belmoussaoui.Decoder
  name: Decoder
  icon: /gnome-qr-decoder/logo.svg
  summary: Scanning and generating QR codes
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
    homepage: https://apps.gnome.org/Decoder
    bugtracker: https://gitlab.gnome.org/World/decoder/-/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /gnome-qr-decoder/sc-1.png
    - src: /gnome-qr-decoder/sc-2.png
    - src: /gnome-qr-decoder/sc-3.png
    - src: /gnome-qr-decoder/sc-4.png
    - src: /gnome-qr-decoder/sc-5.png
---

# Decoder

An unusual but simple scanner and QR code generator.

Functions:

- QR code generation
- Scan using camera
- Scan from screenshot
- Parse and display QR code content when possible

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
