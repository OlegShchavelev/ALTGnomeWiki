---
aggregation:
  flatpak: org.gnome.gitlab.YaLTeR.VideoTrimmer
  sisyphus: gnome-video-trimmer
appstream:
  id: org.gnome.gitlab.YaLTeR.VideoTrimmer
  name: Video Trimmer
  icon: /gnome-video-trimmer/logo.svg
  summary: Quickly trim video files
  keywords:
    - circle
  metadata_license:
    name: GPL-3.0-or-later
    link: https://packages.altlinux.org/license/GPL-3.0-or-later
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  url:
    homepage: https://apps.gnome.org/VideoTrimmer
    bugtracker: https://gitlab.gnome.org/YaLTeR/video-trimmer/-/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /gnome-video-trimmer/sc-1.png
---

# Video Trimmer

Video Trimmer trims part of the video based on the start and end timestamp. The video is not re-encoded, so the whole procedure is very fast and does not lead to loss of video quality.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
