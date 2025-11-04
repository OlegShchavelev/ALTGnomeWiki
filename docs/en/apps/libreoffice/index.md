---
aggregation:
  sisyphus: LibreOffice-still
  flatpak: org.libreoffice.LibreOffice
appstream:
  id: org.libreoffice.LibreOffice
  name: LibreOffice
  icon: /libreoffice/libreoffice-logo.png
  summary: Powerful office suite LibreOffice
  metadata_license:
    name: MPL-v2.0
    link: https://www.mozilla.org/en-US/MPL/2.0/
  developer:
    name: The Document Foundation
  url:
    homepage: https://www.libreoffice.org/
    bugtracker:
      name: documentfoundation.org
      link: https://bugs.documentfoundation.org/
    donation: https://www.libreoffice.org/donate/
    translate: https://www.libreoffice.org/community/localization/
---

# LibreOffice

LibreOffice is a powerful office suite, fully compatible with 32 and 64 bit systems. Translated into more than 30 languages. Supports most popular operating systems, including Windows, macOS and systems based on the GNU/Linux kernel.

## Installation from repository

There are two versions of **LibreOffice** in the Sisyphus repository, namely:

- **LibreOffice** - stable version with advanced innovations (Fresh version)
- **LibreOffice (Still version)** - stable version that has undergone extensive testing

You can install any version of **LibreOffice** in any familiar and convenient way:

**Installation via terminal**

:::tabs
== Still
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice-still
```

```shell[epm]
epm -i LibreOffice-still
```

== Fresh
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice
```

```shell[epm]
epm -i LibreOffice
```

:::

:::info
For improved integration with GNOME, you can use the `LibreOffice-gtk3` and `LibreOffice-still-gtk3` packages respectively.

However, it is worth considering that with the **Dark style** of GNOME design, the interface of the office suite may not be readable.

The packages are installed in the same way as LibreOffice itself.
:::

::: warning
If you get the error `The user interface language cannot be determined`, install the localization package according to the instructions in the [Localization](#localization) section
:::

<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Localization

To add localization, you must install the package corresponding to the version of LibreOffice. Example with Russian localization:

:::tabs
== Still
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice-still-langpack-ru
```

```shell[epm]
epm -i LibreOffice-still-langpack-ru
```

== Fresh
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice-langpack-ru
```

```shell[epm]
epm -i LibreOffice-langpack-ru
```

:::

## Шрифты

[The LibreOffice documentation](https://wiki.documentfoundation.org/Fonts) lists the fonts included out of the box. In ALT Regular Gnome you may need to install additional packages, for example to use `Times New Roman` from Microsoft, run the following command:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-ms
```

```shell[epm]
epm -i fonts-ttf-ms
```

:::

If LibreOffice doesn't have the font you're using, [install an additional font](/en/using-gnome/settings/add-fonts/) and it will appear in the list.
