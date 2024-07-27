---
appstreamFlatpak: com.clarahobbs.chessclock
nameRepo: chessclock
gallery:
  title: Галерея
  type: slider
  items:
    - src: /chessclock/sc-1.png
    - src: /chessclock/sc-2.png
    - src: /chessclock/sc-3.png
aggregation:
  flatpak: com.clarahobbs.chessclock
appstream:
  id: com.clarahobbs.chessclock
  name: Шахматные часы
  icon: /chessclock/logo.svg
  summary: Партии в шахматы на время
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
    homepage: https://apps.gnome.org/Chessclock
    bugtracker: https://gitlab.gnome.org/World/chess-clock/-/issues
---

# Шахматные часы

Шахматные часы - это простое приложение для контроля времени в шахматных партиях за доской. Предназначено для мобильного использования, игроки выбирают настройки контроля времени, необходимые для их игры, затем игрок черными нажимает на свои часы, чтобы запустить таймер игрока белыми. После каждого хода игрок нажимает на часы, чтобы запустить таймер противника, и так до тех пор, пока игра не будет завершена или пока одни из часов не достигнут нуля.

<AGWGallery />

<!--@include: @apps/_parts/install/content-flatpak.md-->
