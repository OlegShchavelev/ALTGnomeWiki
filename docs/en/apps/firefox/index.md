---
aggregation:
  sisyphus: firefox
  flatpak: org.mozilla.firefox
  snap: firefox
appstream:
  id: org.mozilla.firefox
  name: Firefox
  icon: /firefox/firefox-logo.svg
  summary: A popular open source graphical web browser developed by Mozilla.
  metadata_license:
    name: MPLv2
    link: https://choosealicense.com/licenses/mpl-2.0/
  developer:
    name: Mozilla Foundation
    avatar: /firefox/firefox-avatar.png
  url:
    homepage: https://www.mozilla.org/en-US/firefox/
    bugtracker: https://bugzilla.mozilla.org/home
    translate: https://pontoon.mozilla.org/
    donation: https://foundation.mozilla.org/en/?form=donate
gallery:
  title: Gallery
  type: slider
  images:
    - src: /firefox/firefox-1.png
    - src: /firefox/firefox-2.png
    - src: /firefox/firefox-3.png
---

# Firefox

Firefox is a popular open source graphical web browser developed by Mozilla.

<Gallery />

## Firefox editions and update channels

Firefox Extended Support Release - long-term support version for comprehensive security and data protection.

Release is a standard channel with stable updates.

Nightly is a channel updated every 12 hours with the latest updates for testers.

Beta - intermediate channel between Nightly and Release

Developer Edition (formerly Aurora) is essentially no different from Beta, except for the name and build flags.

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @en/apps/.parts/install/content-snap.md-->

## Firefox GNOME theme

To install **Firefox GNOME theme** you need to [install Firefox](/en/apps/firefox/#firefox) and run it at least once to generate configuration files.

:::info
You can install the theme automatically using [add-water app](/en/apps/add-water/)
:::

:::danger
Please note that this theme may contain features that are not supported by the main version of Firefox. If you encounter a problem using this theme, first try reporting it to the theme's author or checking if it works in standard Firefox.

If you distribute software, we strongly recommend that you do not enable these changes by default for your users. It is important that they are clearly informed that they are using a modified version of the Firefox user interface.
:::

Clone the script and install:

```shell
git clone https://github.com/rafaelmardojai/firefox-gnome-theme.git ~/.mozilla/firefox-gnome-theme/
cd ~/.mozilla/firefox-gnome-theme/
```

Run the installation script `auto-install.sh`:

::: code-group

```shell[Sisyphus]
./scripts/auto-install.sh -f ~/.mozilla/firefox/
```

```shell[Flatpak]
./scripts/auto-install.sh -f ~/.var/app/org.mozilla.firefox/.mozilla/firefox
```

```shell[Snap]
./scripts/auto-install.sh -f ~/snap/firefox/common/.mozilla/firefox
```

:::

![Firefox GNOME theme](/firefox/firefox-4.png)

Run the installation script `auto-install.sh`:

```shell
cd ~/.mozilla/firefox-gnome-theme/
git pull
./scripts/auto-install.sh -f ~/.mozilla/firefox/
```

### Enabling additional features

Additional features can be enabled by creating new key-value pairs in `about:config`

1. Go to `about:config` page
2. Enter option key
3. Set it as boolean and click on the Add `+` button
4. Restart Firefox

### Hide single tab `gnomeTheme.hideSingleTab`

We recommend removing the New Tab button from the tab bar, otherwise it will be hidden when only one tab is open. You can change the order of the toolbars by right-clicking on any toolbar and selecting `Customize Toolbar`

### Change the position of the tab close button `gnomeTheme.swapTabClose`

By default, tab close buttons are positioned according to the default browser theme. Enabling this setting matches the appearance of tabs in Epiphany.

### System icons `gnomeTheme.systemIcons`

Use the icon set from Epiphany.
