---
aggregation:
  sisyphus: gnome-software
appstream:
  id: org.gnome.Software.desktop
  name: GNOME Software
  icon: /gnome-software/gnome-software-logo.svg
  summary: The official application management utility for the GNOME desktop environment
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPLv2
    link: https://choosealicense.com/licenses/gpl-2.0/
  url:
    homepage: https://apps.gnome.org/Software/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-software/issues
---

# GNOME Software

GNOME Software is the official utility for the GNOME desktop environment, which allows you to find and install new applications and system extensions, as well as remove existing ones.

The GNOME Software provides recommended and popular apps with descriptions and several screenshots of them. You can find apps by browsing by category or using the search function. The Application Center also allows you to update the system using deferred updates.

## Installation from repository

**Application Center** can be installed via the terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-software
```

```shell[epm]
epm -i gnome-software
```

:::

## How to disable the administrator (root user) authentication request when deleting applications

You need to remove the `polkit-rule-admin-root` package via the terminal:

::: code-group

```shell[apt-get]
su -
apt-get remove polkit-rule-admin-root
```

```shell[epm]
epm -e polkit-rule-admin-root
```

:::

::: info
`polkit-rule-admin-root` - rule for dialing `polkit` authentication using root password
:::
