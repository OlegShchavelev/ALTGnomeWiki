---
appstreamFlatpak: com.belmoussaoui.Authenticator
nameRepo: authenticator
gallery:
  title: Галерея
  type: slider
  items:
    - src: /authenticator/sc-1.png
    - src: /authenticator/sc-2.png
    - src: /authenticator/sc-3.png
    - src: /authenticator/sc-4.png
    - src: /authenticator/sc-5.png
aggregation:
  flatpak: com.belmoussaoui.Authenticator
  sisyphus: authenticator
appstream:
  id: com.belmoussaoui.Authenticator
  name: Аутентификатор
  icon: /authenticator/logo.svg
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
    homepage: https://apps.gnome.org/Authenticator
    bugtracker: https://gitlab.gnome.org/World/authenticator/-/issues
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
