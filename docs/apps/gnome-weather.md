---
aggregation:
  flatpak: org.gnome.Weather
  sisyphus: gnome-weather
appstream:
  id: org.gnome.Weather
  name: Погода
  icon: /gnome-weather/logo.png
  summary: Просмотр погодных условий и прогноза
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
  title: Галерея Погоды
  type: slider
  items:
    - src: /gnome-weather/sc-1.webp
    - src: /gnome-weather/sc-2.webp
---

# Погода

Небольшое приложение, которое позволяет отслеживать текущее состояние погоды для вашего города или любой точки мира.

Оно также предоставляет доступ к подробному прогнозу погоды (до 7 дней) от различных Интернет-служб.

Приложение также опционально интегрируется с GNOME Shell, позволяя вам видеть текущие условия в городах, в которых недавно проводился поиск, просто набрав название города в Обзорном режиме.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
