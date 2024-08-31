---
aggregation:
  snap:
    id: rnote
    build: unofficial
  flatpak: com.github.flxzt.rnote
appstream:
  id: com.github.flxzt.rnote
  name: Rnote
  icon: /rnote/rnote-logo.svg
  summary: Делайте наброски и рукописные заметки
  developer:
    name: Felix Zwettler
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://rnote.flxzt.net/
    bugtracker: https://github.com/flxzt/rnote/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /rnote/rnote-1.png
    - src: /rnote/rnote-2.png
---

# Rnote

Rnote - приложение для векторной графики с открытым исходным кодом, предназначенное для создания эскизов, рукописных заметок и аннотирования документов и изображений. Предназначено для студентов, преподавателей и тех, у кого есть планшеты для рисования, и предоставляет такие функции, как импорт и экспорт изображений в формате Pdf, бесконечный холст и адаптивный пользовательский интерфейс для больших и маленьких экранов.

Написано на Rust и GTK4.

<AGWGallery />

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/install/content-snap.md-->
