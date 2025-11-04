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
  summary: Web browser from Brave
  metadata_license:
    name: MPLv2
    link: https://choosealicense.com/licenses/mpl-2.0/
  developer:
    name: Brave Software
  url:
    homepage: https://brave.com/
    bugtracker: https://github.com/brave/brave-browser/issues
gallery:
  title: Gallery
  type: slider
  images:
    - src: /brave/brave-1.png
    - src: /brave/brave-2.png
---

# Brave

Brave is an open source web browser based on the [Chromium](/apps/chromium/) web browser and the Blink engine.

<Gallery />

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->
