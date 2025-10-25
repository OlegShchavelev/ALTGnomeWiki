---
aggregation:
  flatpak:
    id: com.anydesk.Anydesk
    build: unofficial
  epm:
    play:
      id: anydesk
      build: unofficial
  aides:
    id: anydesk
    build: unofficial
appstream:
  id: com.anydesk.Anydesk
  name: AnyDesk
  icon: /anydesk/anydesk-logo.svg
  summary: Remote connection to a computer with AnyDesk
  keywords:
    - proprietary
    - restrictions
  developer:
    name: AnyDesk Software GmbH
  metadata_license:
    name: Own
    link: https://anydesk.com/en/terms
  url:
    homepage: https://anydesk.com/
    bugtracker: https://github.com/flathub/com.anydesk.Anydesk/issues
---

# AnyDesk

AnyDesk is a remote access program that allows users to manage remote computers and servers. It provides a fast and stable connection, and also makes it possible to exchange files between devices. AnyDesk can be used for technical support, training, access to home computers and many other tasks related to remote management and system maintenance.

![AnyDesk](/anydesk/anydesk-1.png)

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/install/content-aides.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->

You can enable the AnyDesk service with the following command:

```shell
serv anydesk on
```

For correct operation, you must install the `libgtkglext` library. It is included in the AnyDesk installation script starting with version [eepm](/en/package-manager/epm/) `3.62.10`. If you have an earlier version of the package manager installed, you need to install the library separately:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install libgtkglext
```

```shell[epm]
epm -i libgtkglext
```

:::
