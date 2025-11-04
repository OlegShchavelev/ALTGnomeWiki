---
aggregation:
  flatpak: org.gnome.Console
  sisyphus: gnome-console
appstream:
  id: org.gnome.Console
  name: Console
  icon: /console/console-logo.svg
  summary: A simple and convenient terminal emulator for the GNOME desktop.
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  keywords:
    - core
    - adaptive
  url:
    homepage: https://apps.gnome.org/Console/
    bugtracker: https://gitlab.gnome.org/GNOME/console/-/issues
    translate: https://l10n.gnome.org/module/console/
    donation: https://www.gnome.org/donate/
gallery:
  title: Gallery
  type: slider
  images:
    - src: /console/console-1.png
    - src: /console/console-2.png
---

# Console

Console (GNOME Terminal) is a simple and convenient terminal emulator for the GNOME desktop.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Shortcuts

### App

| Shortcut                     | Description |
| ---------------------------- | ----------- |
| [[Shift]] + [[Ctrl]] + [[N]] | New window  |

### Terminal

| Shortcut                     | Description |
| ---------------------------- | ----------- |
| [[Shift]] + [[Ctrl]] + [[C]] | Copy        |
| [[Shift]] + [[Ctrl]] + [[V]] | Paste       |
| [[Shift]] + [[Ctrl]] + [[F]] | Search      |

## Tabs

| Shortcut                                      | Description       |
| --------------------------------------------- | ----------------- |
| [[Shift]] + [[Ctrl]] + [[T]]                  | New tab           |
| [[Shift]] + [[Ctrl]] + [[W]]                  | Close tab         |
| [[Shift]] + [[Ctrl]] + [[O]]                  | Display all tabs  |
| [[Ctrl]] + [[Page Down]] / [[Ctrl]] + [[Tab]] | Next tab          |
| [[Ctrl]] + [[Page Up]] / [[Shift]] + [[Tab]]  | Previous tab      |
| [[Shift]] + [[Ctrl]] + [[Page Down]]          | Move tab to right |
| [[Shift]] + [[Ctrl]] + [[Page Up]]            | Move tab to left  |
| [[Alt]] + [[1]] ... [[9]]                     | Toggle to tab 1-9 |
| [[Alt]] + [[0]]                               | Toggle to tab 10  |

## Run with shortcut

By default, ALT Regular Gnome does not provide a key combination for opening the Console, but you can assign a convenient combination in the GNOME settings: `Settings` -> `View and change the key combination` -> `Additional key combinations`

In the Set Custom Keyboard Combination window, enter:

- Name: Console
- Team: kgx
- Combination: [[Ctrl]] + [[Alt]] + [[T]]

![console_1](/console/console_1.gif)
