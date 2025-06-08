---
aggregation:
  flatpak: app.drey.Biblioteca
  sisyphus: biblioteca
appstream:
  id: app.drey.Biblioteca
  name: Biblioteca
  icon: /biblioteca/logo.svg
  summary: Читать документацию GNOME офлайн
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
    homepage: https://apps.gnome.org/Biblioteca
    bugtracker: https://github.com/workbenchdev/Biblioteca/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /biblioteca/sc-1.png
---

# Biblioteca

Biblioteca позволяет просматривать и читать документацию GNOME. Среди прочего, Biblioteca поставляется с

- Оффлайн документация
- Просмотр веб-страниц
- Вкладки
- Поддержка темного режима
- Нечеткий поиск
- Мобильный/адаптивный
  <AGWGallery />

<!--@include: @ru/apps/.parts/install/content-repo.md-->
<!--@include: @ru/apps/.parts/install/content-flatpak.md-->
