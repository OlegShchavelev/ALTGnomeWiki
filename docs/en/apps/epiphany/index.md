---
aggregation:
  flatpak: org.gnome.Epiphany
  sisyphus: epiphany
appstream:
  id: org.gnome.Epiphany
  name: Web (Epiphany)
  icon: /epiphany/Epiphany-Logo.svg
  summary: Simple, clean and beautiful view of the Internet
  keywords:
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://apps.gnome.org/en/Epiphany/
    bugtracker: https://gitlab.gnome.org/GNOME/epiphany/-/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /epiphany/epiphany-1.png
    - src: /epiphany/epiphany-2.png
    - src: /epiphany/epiphany-3.png
    - src: /epiphany/epiphany-4.png
    - src: /epiphany/epiphany-5.png
    - src: /epiphany/epiphany-6.png
    - src: /epiphany/epiphany-7.png
    - src: /epiphany/epiphany-8.png
---

# Web (Epiphany)

A web browser for the GNOME desktop that provides tight desktop integration with a simple and intuitive interface that lets you focus on your web pages. If you're looking for a simple, lightweight, and beautiful web browser, you've found it.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Selecting the Yandex search engine

Go to Main Menu -> Options or using the key combination [[Ctrl]] + [[,]]. In the “Search engines” block, add the Yandex search engine by filling in the following fields:

- Name: Yandex
- Address: https://www.ya.ru/search?text=%s
- Key combination: `!y`

![Add Yandex search engine](/epiphany/epiphany-9.png)
