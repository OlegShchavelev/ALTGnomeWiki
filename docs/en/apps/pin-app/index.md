---
aggregation:
  flatpak:
    id: io.github.fabrialberio.pinapp
    build: unofficial
appstream:
  id: io.github.fabrialberio.pinapp
  name: PinApp
  icon: /pin-app/pin-app-logo.svg
  summary: Allows you to change Desktop files
  developer:
    name: Fabrizio Alberio
    nickname: fabrialberio
    avatar: /pin-app/pin-app-avatar.png
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://github.com/fabrialberio/PinApp
    bugtracker: https://github.com/fabrialberio/PinApp/issues
gallery:
  title: Gallery
  type: slider
  images:
    - src: /pin-app/pin-app-3.png
    - src: /pin-app/pin-app-4.png
    - src: /pin-app/pin-app-5.png
    - src: /pin-app/pin-app-6.png
---

# PinApp

PinApp allows you to pin modified applications, features:

- Create custom shortcuts to websites
- Hide apps you don't want to see

<Gallery />

<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Managing classic applications from Sisyphus

When installing **PinApp** <Badge type="tip">Flatpak</Badge>, it opens in an isolated environment and does not have access to the directory by default `/usr/share/applications`. To configure it, we will use [Flatseal program](/en/apps/flatseal/). Select the **PinApp** application and in the Filesystem section, enable the options `--filesystem=host-os`

![pin-app-7](/pin-app/pin-app-7.png)

or using the Flatpak package manager, in the terminal we enter:

```shell
flatpak override --user io.github.fabrialberio.pinapp --filesystem=host-os
```
