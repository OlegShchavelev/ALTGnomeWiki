---
aggregation:
  flatpak:
    id: io.github.Figma_Linux.figma_linux
    build: unofficial
  snap:
     id: figma-linux
     build: unofficial
  epm:
    play:
      id: figma
      build: unofficial
appstream:
  id: io.github.Figma_Linux.figma_linux
  name: Figma
  icon: /figma/figma-logo.svg
  summary: An unofficial version of Figma for Linux built on Electron.
  metadata_license:
    name: GNU GPLv2
    link: https://github.com/Figma-Linux/figma-linux/blob/master/LICENSE
  developer:
    name: Figma Linux Community
  url:
    homepage: https://github.com/Figma-Linux/figma-linux
    bugtracker: https://github.com/Figma-Linux/figma-linux/issues
---

# Figma

Figma is an unofficial version of Figma for Linux, built on Electron.

![Figma](/figma/figma-1.png)

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @en/apps/.parts/install/content-snap.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->

### Installation from GitHub repository

## RPM package

Download the `.rpm` package from the [`figma-linux` application releases page on Github](https://github.com/Figma-Linux/figma-linux/releases), then install via terminal:

::: code-group

```shell[apt-get]
su -
cd ~/Downloads
apt-get update
apt-get install figma-linux-*.x86_64.rpm
```

```shell[epm]
сd ~/Downloads
epm -i figma-linux-*.x86_64.rpm
```

:::


## AppImage

Download the `.AppImage` package from the releases page, then open it via terminal:

```shell
su -
cd ~/Downloads
chmod +x figma-linux-*.AppImage
./figma-linux-*.AppImage -i
```
