---
gallery:
  title: Галерея Logs
  type: slider
  items:
    - src: /logs/sc-1.png
    - src: /logs/sc-2.png
    - src: /logs/sc-3.png
aggregation:
  flatpak:
    id: org.gnome.Logs
    build: official
  sisyphus: gnome-logs
appstream:
  id: org.gnome.Logs
  name: Журнал
  icon: /logs/org.gnome.Logs.svg
  summary: Просмотр подробной информации о событиях в системе
  keywords:
    - core
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://apps.gnome.org/ru/Logs/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-logs/-/issues
---

# Журнал

Приложение «Журнал» показывает события из журнала systemd и упорядочивает их по категориям (аппаратные, программные).

С помощью приложения «Журнал» вы можете выполнять поиск по журналам и просматривать подробную информацию о событиях.
<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
