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
  name: Аутентификатор
  icon: /gnome-qr-decoder/logo.svg
  summary: Создание двухфакторных кодов
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

# Аутентификатор

Простое приложение для генерации кодов двухфакторной аутентификации.

Возможности:

* Поддержка методов, основанных на Времени/Счетчиках/Steam
* Поддержка алгоритмов SHA-1/SHA-256/SHA-512
* Сканер QR-кодов использующий камеру или скриншот
* Блокировка приложения с помощью пароля
* Прекрасный пользовательский интерфейс
* Провайдер поиска GNOME Shell
* Резервное копирование/восстановление из/в известные приложения, такие как FreeOTP+, Aegis (зашифрованный/простой текст), andOTP, Google Authenticator

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
