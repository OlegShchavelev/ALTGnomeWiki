---
aggregation:
  sisyphus: dialect
  flatpak: app.drey.Dialect
appstream:
  id: app.drey.Dialect
  name: Dialect
  icon: /dialect/dialect-logo.svg
  summary: A simple translation app with various add-ons to improve the process.
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  keywords:
    - donttheme
    - adaptive
    - circle
  developer:
    name: The Dialect Authors
  url:
    homepage: https://github.com/dialect-app/dialect
    bugtracker:
      name: github.com
      link: https://github.com/dialect-app/dialect/issues
    translate: https://hosted.weblate.org/engage/dialect/
    donation: https://opencollective.com/dialect
gallery:
  title: Gallery
  type: slider
  images:
    - src: /dialect/dialect-1.png
    - src: /dialect/dialect-3.png
    - src: /dialect/dialect-2.png
---

# Dialect

Dialect is a simple application for translation using web services, providing some additional features: choosing a translation provider, it is possible to listen to the translation.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Перевод в поиске GNOME на экране Обзора

Go to the `Settings` section and activate the `Real-time translation` and `Show in desktop search` settings

![dialect](/dialect/dialect-1.jpg)
