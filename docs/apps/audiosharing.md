---
aggregation:
  flatpak: de.haeckerfelix.AudioSharing
  sisyphus: audiosharing
appstream:
  id: de.haeckerfelix.AudioSharing
  name: Audio Sharing
  icon: /audiosharing/logo.svg
  summary: Делитесь аудио с вашего компьютера
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
    homepage: https://apps.gnome.org/AudioSharing
    bugtracker: https://gitlab.gnome.org/World/AudioSharing/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /audiosharing/sc-1.png
---

# Audio Sharing

С помощью Audio Sharing вы можете поделиться потоком аудио на компьютере в виде потока RTSP. Затем этот поток может быть воспроизведен другими устройствами, например, с помощью VLC.

Передавая аудио в виде сетевого потока, вы также можете использовать для его приёма обычные устройства, которые не предназначены для использования в качестве потребителей аудио (например, смартфоны). Существует аудиоинтерфейсы, которые не совместимы с настольными компьютерами (например, потому что в компьютере не установлен модуль Bluetooth). С помощью этого приложения звук с компьютера можно воспроизвести на смартфоне, который затем подключается к Bluetooth-аксессуару.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
