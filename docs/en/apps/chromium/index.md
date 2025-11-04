---
aggregation:
  flatpak:
    id: org.chromium.Chromium
    build: unofficial
  sisyphus: chromium
appstream:
  id: org.chromium.Chromium
  name: Chromium
  icon: /chromium/chromium-logo.svg
  summary: Web browser from Chromium Project
  metadata_license:
    name: BSD 3-Clause
    link: https://github.com/chromium/chromium/blob/main/LICENSE
  developer:
    name: The Chromium Authors
  url:
    homepage: https://www.chromium.org/Home
gallery:
  title: Gallery
  type: slider
  images:
    - src: /chromium/chromium-1.png
    - src: /chromium/chromium-2.png
---

# Chromium

Chromium is an open source browser project that aims to create a safer, faster, and more stable web experience for all users.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/warns/unprivileged-spaces.md-->

## Display Emoji font when browsing web pages in Chromium browser

Additional fonts need to be installed:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```

```shell[epm]
epm -i fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```

:::

## Graphics crash when opening Chromium.

Graphics crashes in Chromium after operating system update

Remove the user configuration from the user:

```shell
rm -rfv .config/chromium/
```

When updating the driver, sometimes it is enough to clear the cache files with graphics processing or graphics display:

```shell
rm -rfv .config/chromium/Default/GPUCache
```
