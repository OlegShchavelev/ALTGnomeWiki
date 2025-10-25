---
aggregation:
  flatpak: io.github.mrvladus.List
  sisyphus: errands
appstream:
  id: io.github.mrvladus.List
  name: Errands
  icon: /errands/errands-logo.svg
  summary: Manage your tasks
  keywords:
    - circle
    - adaptive
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  url:
    homepage: https://apps.gnome.org/en/List/
    translate: https://github.com/mrvladus/Errands/blob/main/TRANSLATIONS.md
    bugtracker: https://github.com/mrvladus/Errands/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /errands/errands-1.png
    - src: /errands/errands-2.png
---

# Errands

Errands is a simple task management app

Main functions:

- Supports multiple lists
- Add, delete, edit tasks and subtasks
- Mark tasks as completed
- Add colors to tasks
- Sync tasks with Nextcloud or other CalDAV providers
- Drag and Drop support
- Import .ics files

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
