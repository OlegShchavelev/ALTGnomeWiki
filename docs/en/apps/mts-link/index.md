---
aggregation:
  epm:
    play:
      id: mts-link
      build: unofficial
appstream:
  name: MTS Link
  icon: /mts-link/mts-link-logo.svg
  summary: MTS Link application for Linux
  keywords:
    - proprietary
  developer:
    name: PJSC "Mobile TeleSystems"
    avatar: /mts-link/mts-link-avatar.svg
  metadata_license:
    name: Proprietary
    link: https://mts-link.ru/legal/license-agreement.pdf
  url:
    homepage: https://mts-link.ru/application/
gallery:
  title: Gallery
  type: slider
  images:
    - src: /mts-link/mts-link-1.png
    - src: /mts-link/mts-link-2.png
    - src: /mts-link/mts-link-3.png
---

# MTS Link

MTS Link is an ecosystem of services for business communications and collaboration.

<Gallery />

<!--@include: @en/apps/.parts/install/content-epm-play.md-->

## Installation from the official website

### Download package

Go to [official website](https://mts-link.ru/application/) and download the distribution using the `Download for Linux` button -> `Download in AppImage format`

![Download](/mts-link/mts-link-4.gif)

### Package installation

- open a terminal and execute

```shell
su -
cd $HOME/Downloads
epm install mts-link-desktop.AppImage
```

![Installation](/mts-link/mts-link-5.gif)

- Go through all the steps in the installer
- Done, the application is installed.

## Known issues

### Full screen sharing does not work in a Wayland session

This problem is seen in many other applications. This is due to the fact that the application authors have not yet adapted them for the Wayland session.
