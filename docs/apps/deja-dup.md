---
appstreamFlatpak: org.gnome.DejaDup
nameRepo: deja-dup
gallery:
  title: Галерея
  type: slider
  items:
    - src: /deja-dup/sc-1.png
    - src: /deja-dup/sc-2.png
    - src: /deja-dup/sc-3.png
    - src: /deja-dup/sc-4.png
aggregation:
  flatpak: org.gnome.DejaDup
  sisyphus: deja-dup
appstream:
  id: org.gnome.DejaDup
  name: Резервные копии Déjà Dup
  icon: /deja-dup/logo.svg
  summary: Защитите себя от потери данных
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
    homepage: https://apps.gnome.org/DejaDup
    bugtracker: https://gitlab.gnome.org/World/deja-dup/-/issues
---

# Резервные копии Déjà Dup

Déjà Dup — это простое средство резервного копирования. Оно скрывает сложность правильного создания резервных копий (использование шифрования, хранение отдельно от компьютера, регулярность копирования) и использует duplicity в качестве внутреннего интерфейса.

* Поддержка локальных, дистанционных или облачных расположений резервных копий, таких как Google Drive
* Надежно шифрует и сжимает данные
* Поэтапное резервное копирование, позволяет вам выполнять восстановление из определённых резервных копий
* Планирование регулярного резервного копирования
* Интегрируется на должном уровне с рабочим столом GNOME

Déjà Dup сфокусирована на простоте использования восстановления персональных данных, в случае их потери. Если вам требуется полноценное резервное копирование системы или программа архивации, рассмотрите другие варианты программ резервного копирования.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
