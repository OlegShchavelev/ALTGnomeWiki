---
aggregation:
  flatpak: de.haeckerfelix.AudioSharing
  sisyphus: audiosharing
appstream:
  id: de.haeckerfelix.AudioSharing
  name: Audio Sharing
  icon: /audiosharing/logo.svg
  summary: Share audio from your computer
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
    homepage: https://apps.gnome.org/AudioSharing
    bugtracker: https://gitlab.gnome.org/World/AudioSharing/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /audiosharing/sc-1.png
---

# Audio Sharing

With Audio Sharing, you can share an audio stream on your computer as an RTSP stream. This stream can then be played by other devices, for example using VLC.

By transmitting audio as a network stream, you can also use ordinary devices that are not intended to be used as audio consumers (for example, smartphones) to receive it. There are audio interfaces that are not compatible with desktop computers (for example, because the computer does not have Bluetooth installed). With this application, audio from your computer can be played on your smartphone, which is then connected to a Bluetooth accessory.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
