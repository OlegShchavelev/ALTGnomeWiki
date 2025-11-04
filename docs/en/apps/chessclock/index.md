---
aggregation:
  flatpak: com.clarahobbs.chessclock
appstream:
  id: com.clarahobbs.chessclock
  name: Chess Clock
  icon: /chessclock/logo.svg
  summary: Timed chess games
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
gallery:
  title: Gallery
  type: slider
  images:
    - src: /chessclock/sc-1.png
    - src: /chessclock/sc-2.png
    - src: /chessclock/sc-3.png
---

# Chess Clock

Chess Clock is a simple application for monitoring the time in chess games at the board. Designed for mobile use, players select the time control settings needed for their game, then the black player presses their watch to start the white player's timer. After each turn, the player clicks on the clock to start the opponent's timer, and so on until the game is over or until one of the clocks reaches zero.

<Gallery />

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
