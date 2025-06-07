---
aggregation:
  flatpak: com.brave.Browser
  epm:
    play:
      id: brave
      build: unofficial
appstream:
  id: com.brave.Browser
  name: Brave Browser
  icon: /brave/brave-logo.svg
  summary: Веб-браузер от Brave
  metadata_license:
    name: MPLv2
    link: https://choosealicense.com/licenses/mpl-2.0/
  developer:
    name: Brave Software
  url:
    homepage: https://brave.com/
    bugtracker: https://github.com/brave/brave-browser/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /brave/brave-1.png
    - src: /brave/brave-2.png
---

# Brave

Brave — веб-браузер с открытым исходным кодом на основе веб-браузера [Chromium](/chromium) и движке Blink.

<AGWGallery />

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @apps/.parts/install/content-epm-play.md-->
