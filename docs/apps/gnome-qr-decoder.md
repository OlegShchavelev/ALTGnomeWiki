---
appstreamFlatpak: com.belmoussaoui.Decoder
nameRepo: gnome-qr-decoder
gallery:
  title: Галерея
  type: slider
  items:
    - src: /gnome-qr-decoder/sc-1.png
    - src: /gnome-qr-decoder/sc-2.png
    - src: /gnome-qr-decoder/sc-3.png
    - src: /gnome-qr-decoder/sc-4.png
    - src: /gnome-qr-decoder/sc-5.png
aggregation:
  flatpak: com.belmoussaoui.Decoder
  sisyphus: gnome-qr-decoder
appstream:
  id: com.belmoussaoui.Decoder
  name: Декодер
  icon: /gnome-qr-decoder/logo.svg
  summary: Сканирование и генерация QR-кодов
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
    homepage: https://apps.gnome.org/Decoder
    bugtracker: https://gitlab.gnome.org/World/decoder/-/issues
---

# Декодер

Необычный, но простой сканер и генератор QR-кодов.

Функции:

* Генерация QR-кода
* Сканирование с помощью камеры
* Сканирование со снимка экрана
* Разбор и отображение содержимого QR-кода, когда это возможно

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
