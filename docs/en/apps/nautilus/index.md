---
aggregation:
  sisyphus: nautilus
appstream:
  id: org.gnome.Nautilus
  name: Files
  icon: /nautilus/logo.svg
  summary: File management.
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GPL-3.0
    link: https://packages.altlinux.org/license/GPL-3.0-only
  url:
    homepage: https://apps.gnome.org/ru/Nautilus/
    bugtracker: https://gitlab.gnome.org/GNOME/nautilus/-/issues
gallery:
  title: Gallery
  type: slider
  images:
    - src: /nautilus/sc-1.png
    - src: /nautilus/sc-2.png
    - src: /nautilus/sc-3.png
---

# Файлы

Files is the default file manager for the GNOME desktop, also known as the "Nautilus" application. Provides an easy way to manage files and navigate the file system.

Nautilus supports all the basic functions of file managers. With Nautilus, you can manage files and folders, search for files and folders both locally and across a network, read and write data to removable devices, run scripts, and run applications. Nautilus offers three viewing modes: icon grid, icon list, and tree view. Nautilus functionality can be extended using modules and scripts.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->

## Known issues

### Module for GNOME Terminal `gnome-terminal`

Install additional packages to expand the capabilities of the Nautilus file manager. To do this, enter the following command in the terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install nautilus-open-any-terminal
```

```shell[epm]
epm -i nautilus-open-any-terminal
```

:::

After installing the `nautilus-open-any-terminal` package, restart the Files application (Nautilus):

```shell
nautilus -q
```
