---
aggregation:
  sisyphus: cassette
  flatpak: io.github.Rirusha.Cassette
appstream:
  id: io.github.Rirusha.Cassette
  name: Cassette
  icon: /cassette/cassette-logo.svg
  summary: Unofficial Yandex Music client
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  keywords:
    - donttheme
  developer:
    name: Vladimir Romanov
    nickname: Rirusha
    avatar: https://avatars.githubusercontent.com/u/95986183?v=4
  url:
    homepage: https://github.com/Rirusha/Cassette
    bugtracker: https://github.com/Rirusha/Cassette/issues
    translate: https://l10n.gnome.org/module/cassette/
    donation: https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460/
gallery:
  title: Gallery
  type: slider
  items:
    - src: /cassette/cassette-1.png
    - src: /cassette/cassette-2.png
---

# Cassette

Cassette is an unofficial client of the Yandex Music service.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Nightly version

::: warning
This version is built and updated with every change in the code, so it may be unstable.
:::

Add the `gnome-nightly` repository and install the GNOME Platform:

```shell
flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo
flatpak install gnome-nightly org.gnome.Platform//master
```

Add the Nightly repository and install the application:

```shell
flatpak remote-add --if-not-exists cassette-nightly https://rirusha.github.io/Cassette/index.flatpakrepo
flatpak install cassette-nightly io.github.Rirusha.Cassette-Devel
```

## Authorization

Authorization available by:

- login and password;
- login and code from the Ya.Klyuch application;
- QR code;

## Update plan

::: timeline 0.3
Optimization of the client and the application as a whole. Changing the logic of track list widgets. Adding view widgets for albums and artists.
:::
::: timeline 0.4
Search by service
:::
::: timeline 0.5
Podcasts and books
:::

All planned features can be [viewed in the backlog](https://github.com/users/Rirusha/projects/2)

## How to help Cassette

- Create [Issue](https://github.com/Rirusha/Cassette/issues) with a problem or suggestion for improvement;
- Make a [Pull Request](https://github.com/Rirusha/Cassette/pulls) with a fix or adding functionality;
- [Поддержать рублём](https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460). Просьба указывать в «Сообщении получателю» свой ник, иначе автор проекта не сможет добавить вас в соответствующий блок окна `About` (система Тинькофф, к сожалению, не указывает имя отправителя);
- [Support with rubles](https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460). Please indicate your nickname in the “Message to the recipient”, otherwise the author of the project will not be able to add you to the corresponding block of the `About` window (the Tinkoff system, unfortunately, does not indicate the name of the sender);
- Write a review in [App Center](/apps/gnome-software/) about the Cassette.

## Problem Solving

### The authorization interface is not displayed

::: info
Users with an NVIDIA graphics adapter (unknown device range) and closed drivers do not see the Yandex ID authorization interface.
:::

![An example of a problem with displaying the interface during authorization](/cassette/cassette-3.png)

If you have [Flatpak version](/package-manager/flatpak/), then run in the terminal:

```shell
WEBKIT_DISABLE_COMPOSITING_MODE=1 flatpak run io.github.Rirusha.Cassette
```

Or create a line in the environment variables block via [Flatseal](/apps/flatseal/) and restart the application.

If you have a version from the repository, run:

```shell
WEBKIT_DISABLE_COMPOSITING_MODE=1 cassette
```

### Endless loading when logging into [Flatpak version](/package-manager/flatpak/) of the application

If during authorization the loading icon appears and then nothing happens, but when you launch the application through the terminal, it displays the following:

```shell
(cassette:2): Gtk-WARNING **: 20:29:26.210: Locale not supported by C library.
	Using the fallback 'C' locale.

(cassette:2): Gtk-WARNING **: 20:29:26.598: AdwViewSwitcher 0x55bf67d9d910 (viewswitcher) reported min height -6, but sizes must be >= 0
flatpak-spawn: Invalid byte sequence in conversion input
Try "flatpak-spawn --help" for more information.
```

Add the `LC_ALL` environment variable. You can do this through the terminal:

```shell
flatpak override --env=LC_ALL="en_US.UTF-8" --user io.github.Rirusha.Cassette
```

Or create a line in the environment variables block via [Flatseal](/apps/flatseal/) and restart the application.
