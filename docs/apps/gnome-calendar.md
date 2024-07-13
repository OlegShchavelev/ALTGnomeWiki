---
gallery:
  title: Галерея
  type: slider
  items:
    - src: /gnome-calendar/sc-1.webp
    - src: /gnome-calendar/sc-2.webp
    - src: /gnome-calendar/sc-3.webp
aggregation:
  flatpak:
    id: org.gnome.Calendar
    build: official
  sisyphus: gnome-calendar
appstream:
  id: org.gnome.Calendar
  name: Календарь
  icon: /gnome-calendar/Calendar-logo.png
  summary: Простой и удобный инструмент для планирования и отслеживания расписания.
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GPLv2+
    link: https://packages.altlinux.org/license/GPL-2.0-or-later
  url:
    homepage: https://apps.gnome.org/ru/Calendar/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-calendar/-/issues
---

# Календарь

Календарь GNOME - это элегантный инструмент, помогающий планировать и составлять расписание на ближайшие дни и недели, независимо от того, чем заняты ваши месяцы - встречами и совещаниями, общественными мероприятиями, поездками или другими жизненными обязательствами.

Удобное создание и управление неограниченным количеством календарей и событий с помощью Календаря GNOME с бесконечной прокруткой в виде месяца, расписания на неделю и списка расписаний.

Интегрируя новейшие технологии GNOME и лучшие практики проектирования, Календарь GNOME построен на базе зрелого сервера данных Evolution для управления большим количеством событий и интеграции с другими приложениями. Вы можете добавлять календари из различных онлайн-планировщиков (таких как NextCloud, Календарь Google и CalDAV / WebDAV-серверы), что позволяет синхронизировать события на различных устройствах и платформах. Календарь GNOME также поддерживает локальный и автономный календарный учет, что позволяет использовать его в любом месте и в любое время во время путешествий (или после краха цивилизации)
<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
