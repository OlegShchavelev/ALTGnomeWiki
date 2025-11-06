---
aggregation:
  flatpak:
    id: com.google.Chrome
    build: unofficial
  epm:
    play:
      id: chrome
      build: unofficial
appstream:
  id: com.google.Chrome
  name: Google Chrome
  icon: /google-chrome/google-chrome-logo.svg
  summary: Web browser from Google
  keywords:
    - proprietary
  metadata_license:
    name: Proprietary
    link: https://chromeenterprise.google/terms/chrome-service-license-agreement/in/
  developer:
    name: Google
    avatar: /google-chrome/google-chrome-avatar.png
  url:
    homepage: https://www.google.com/chrome/
---

# Google Chrome

Google Chrome is a browser developed by Google based on the free browser [Chromium](/ru/apps/chromium/) and the Blink engine. The first stable version was released for Linux operating systems in May 2010.

![google-chrome](/google-chrome/google-chrome-1.png)

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->

## Running Google Chrome in Wayland window interface

By default, Google Chrome runs in the X11 windowed interface, to run in the Wayland windowed interface:

1. Enter the address `chrome://flags/` into the Smart bar
2. Enter the `#ozone-platform-hint` flag into the search bar
3. Enable the `Preferred Ozone platform` option to `auto`
4. Restart Google Chrome and check the result

```shell
google-chrome --ozone-platform-hint=auto
```

:::info
We recommend using Wayland windowed mode for NVIDIA graphics devices using proprietary NVIDIA drivers and a Wayland session
:::
