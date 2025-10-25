---
aggregation:
  flatpak: org.gnome.Weather
  sisyphus: gnome-weather
appstream:
  id: org.gnome.Weather
  name: Weather
  icon: /gnome-weather/logo.png
  summary: View weather conditions and forecast
  keywords:
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPL-2.0
    link: https://packages.altlinux.org/license/GPL-2.0-only
  url:
    homepage: https://apps.gnome.org/ru/Weather/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-weather/-/issues
gallery:
  title: Weather Gallery
  type: slider
  items:
    - src: /gnome-weather/sc-1.webp
    - src: /gnome-weather/sc-2.webp
---

# Weather

A small application that allows you to track the current weather conditions for your city or anywhere in the world.

It also provides access to detailed weather forecasts (up to 7 days) from various Internet services.

The app also optionally integrates with GNOME Shell, allowing you to see current conditions in cities that have recently been searched by simply typing the city name in Browse mode.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
