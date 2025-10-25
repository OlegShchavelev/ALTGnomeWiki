---
aggregation:
  flatpak:
    id: it.mijorus.gearlever
    build: unofficial
  sisyphus: gearlever
appstream:
  id: it.mijorus.gearlever
  name: Gear Lever
  icon: /gear-lever/gear-lever.svg
  summary: AppImage Package Manager
  metadata_license:
    name: GNU GPLv3
    link: https://github.com/mijorus/gearlever/blob/master/COPYING
  developer:
    name: Lorenzo Paderi
    nickname: mijorus
  url:
    homepage: https://mijorus.it/projects/gearlever/
gallery:
  title: Gallery
  type: slider
  items:
    - src: /gear-lever/gear-lever-1.png
    - src: /gear-lever/gear-lever-2.png
    - src: /gear-lever/gear-lever-3.png
    - src: /gear-lever/gear-lever-4.png
---

# Gear Lever

Do you use AppImage format programs? But you don’t remember where you saved them and where they are now? You don't know how to update them? Are you uncomfortable launching them and don't know how to add them to the launcher or dock?

So, you need to pay attention to Gear Lever. This is the AppImage application manager (https://appimage.org/, https://appimage.github.io/).

Some features of Gear Lever:

- Integrate AppImage applications into the launch menu with one click, or launch them directly from the Gear Lever manager;
- Supports organizing your AppImage applications in one selected directory;
- Manages updates to your AppImage programs, and you can mark those that do not need to be updated;
- Automatically saves by executable file name those of your AppImage applications that have a command interface;
- Gear Lever provides a friendly and intuitive control interface;
- Controlled using Drag and Drop. Simply drag and drop your AppImages into the program window.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

::: warning IMPORTANT:

`--talk-name=org.freedesktop.Flatpak`

This permission is required to open applications and update the system menu when installing a new application.

If you manually disable this permission (for example, using Flatseal), Gear Lever will continue to work normally, except you won't be able to open apps directly.

No telemetry was observed during collection.
:::

::: tip TIP:
Works in Wayland and Xorg environment.
:::
