---
aggregation:
  sisyphus: droidcam
appstream:
  id: droidcam.desktop
  name: DroidCam
  icon: /droidcam/droidcam-logo.svg
  summary: An application that allows you to turn your mobile device into a webcam for your computer.
  metadata_license:
    name: BSD 3-Clause
    link: https://github.com/chromium/chromium/blob/main/LICENSE
  developer:
    name: dev47apps
    avatar: /droidcam/droidcam-avatar.png
  url:
    homepage: https://www.dev47apps.com/
    bugtracker: https://github.com/dev47apps/droidcam/issues/
---

# DroidCam

DroidCam is an application that allows you to turn your mobile device into a computer webcam.

![Droidcam](/droidcam/droidcam-1.png)

<!--@include: @en/apps/.parts/install/content-repo.md-->

## Setting up DroidCam

For DroidCam to work, the `v4l2loopback` kernel module is required, which can be installed through the terminal or the System Control Center (SCC/Alterator) and must be activated, since after installing the package it is not enabled automatically.

### Installing a kernel module

#### 1. Through the System Control Center

To install the module via NCC you must:

1. Go to the "Kernel update" section
2. Click the [[Update kernel]] button
3. Check the box next to `v4l2loopback`
4. Click the [[Install modules]] button

![alterator-v4l2loopback](/droidcam/alterator-v4l2loopback.gif)

#### 2. Through the Terminal

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install kernel-modules-v4l2loopback-6.12
```

```shell[epm]
epm -i kernel-modules-v4l2loopback-6.12
```

:::

### Enabling a kernel module

Unfortunately, after simply installing the module, nothing will work, because... The module is not activated automatically. You need to enable it to download. To do this, you need to edit the file `/etc/modules-load.d/modules.conf`.

The easiest way to do this is through the terminal:

```shell
su -
nano /etc/modules-load.d/modules.conf
```

At the end of the file, go to a new line and add `v4l2loopback`

![v4l2loopback_module](/droidcam/v4l2loopback.gif)

You can exit Nano by pressing `Ctrl + X` and agreeing to save the changes. After this, be sure to restart your device.

Ready! DroidCam has been successfully configured and is ready to use.
