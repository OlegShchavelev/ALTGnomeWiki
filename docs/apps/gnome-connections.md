---
gallery:
  title: Галерея Подключения
  type: slider
  items:
    - src: /gnome-connections/sc-1.webp
    - src: /gnome-connections/sc-2.webp
    - src: /gnome-connections/sc-3.webp
    - src: /gnome-connections/sc-4.webp
aggregation:
  flatpak:
    id: org.gnome.Connections
    build: official
  sisyphus: gnome-connections
appstream:
  id: org.gnome.Connections
  name: Подключения
  icon: /gnome-connections/logo.png
  summary: Просмотр и использование других рабочих столов
  keywords:
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPL-3.0
    link: https://packages.altlinux.org/license/GPL-3.0-only
  url:
    homepage: https://apps.gnome.org/ru/Connections/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-connections/-/issues
---

# Подключения
Подключения позволяют подключаться к другим рабочим столам и использовать их. Это может быть отличным способом доступа к содержимому или программному обеспечению на другой операционной системе рабочего стола. Это также может быть использовано как способ оказания поддержки пользователям, которым может понадобиться помощь.

Можно подключаться к различным операционным системам, включая настольные компьютеры Linux и Windows. Можно также подключаться к виртуальным машинам.

Подключения использует широко поддерживаемые протоколы VNC и RDP, и один из них должен быть включен на рабочем столе, к которому вы хотите подключиться.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
