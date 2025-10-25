---
aggregation:
  flatpak: org.gnome.Logs
  sisyphus: gnome-logs
appstream:
  id: org.gnome.Logs
  name: Logs
  icon: /logs/org.gnome.Logs.svg
  summary: Просмотр подробной информации о событиях в системе
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
    homepage: https://apps.gnome.org/en/Logs/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-logs/-/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /logs/sc-1.png
    - src: /logs/sc-2.png
    - src: /logs/sc-3.png
---

# Logs

The Logs app shows events from the systemd log and organizes them into categories (hardware, software).

With the Logs app, you can search logs and view detailed information about events.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
