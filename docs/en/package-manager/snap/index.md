# Snaps

Snaps is a system for creating, distributing and running sandboxed applications on Linux.

## Installation from repository

**Snaps** can be installed via terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install snapd

```

```shell[epm]
epm -i snapd
```

:::

After installation, you need to enable the systemd module, which manages the main snap communication connector:

```shell
su -
systemctl enable --now snapd
```

To enable classic snap support, enter the following, you need to create a symbolic link:

```shell
su -
ln -s /var/lib/snapd/snap /snap
```

Log out and log back in, or restart the system to ensure that the snap paths are updated correctly.

## Installation using EPM

::: info
Current from version **EPM 3.61.4**
:::

To install **Snap** using EPM, enter the command in the terminal

```shell
epm play snap
```

If you want to enable support for classic snap packages, enter the command in the terminal

```shell
epm play snap=classic
```

## Using SNAPS

Basic commands needed to install, run, and manage Snap apps. For a complete list of **Snaps** commands, run `snap --help`

### Search for applications

To search for an application/environment in Snaps, use the find command:

```shell
snap find telegram
```

::: details `snap search telegram` result

```
Name                 Version             Publisher               Notes  Summary
telegram-desktop     4.14.15             telegram-desktop\u2713       -      Fast. Secure. Powerful.
telegram-cli         1.3.1               marius-quabeck          -      Command-line interface for Telegram. Uses the readline interface.
telegram-testbart    1.7.7               snap-retiring           -      A cloud-based messaging app with a focus on security and speed.
telega               0.7.1               alexmurray\u272a             -      Full featured unofficial client for Telegram in GNU Emacs.
superperms           13.3                lucyllewy\u272a              -      Search for minimal Super Permutations
```

:::

You can find out more detailed information about the supplied package:

```shell
snap info chromium
```

::: details the result of running a command to display detailed information about the chromium package

```
[oleg@alt-gnome ~]$ snap info chromium
name:      chromium
summary:   Chromium web browser, open-source version of Chrome
publisher: Canonical\u2713
store-url: https://snapcraft.io/chromium
contact:   https://bugs.launchpad.net/ubuntu/+source/chromium-browser/+bugs?field.tag=snap
license:   unset
description: |
  An open-source browser project that aims to build a safer, faster, and more
  stable way for all Internet users to experience the web.
commands:
  - chromium.chromedriver
  - chromium
snap-id:      XKEcBqPM06H1Z7zGOdG5fbICuf8NWK5R
tracking:     latest/stable
refresh-date: today at 03:01 MSK
channels:
  latest/stable:    121.0.6167.160 2024-02-09 (2749) 167MB -
  latest/candidate: 121.0.6167.160 2024-02-07 (2749) 167MB -
  latest/beta:      122.0.6261.29  2024-02-08 (2754) 167MB -
  latest/edge:      123.0.6286.0   2024-02-09 (2755) 167MB -
installed:          121.0.6167.160            (2749) 167MB -
```

:::

### Installing applications

To install snaps, run:

```shell
snap install chromium
```

To confirm the operation and privileges, enter the administrator password.

::: details result of executing the chromium installation command

```
chromium 121.0.6167.160 from Canonical\u2713 installed
```

:::

To install a package from a specific channel, use the appropriate option, such as `--stable`, `--candidate`, `--beta` or `--edge`:

```shell
snap install chromium --edge
```

### Deleting an application

To remove an app in Snaps **use** the `remove` command and the app ID:

```shell
snap remove chromium
```

::: details result of executing the chromium removal command

```
chromium removed
```

:::

### Troubleshooting

To get information about connected interfaces, enter:

```shell
snap connections chromium
```

::: details result of executing the connections command for the chromium program

```
[oleg@alt-gnome ~]$ snap connections chromium
Interface                 Plug                                    Slot                            Notes
audio-playback            chromium:audio-playback                 :audio-playback                 -
audio-record              chromium:audio-record                   :audio-record                   -
bluez                     chromium:bluez                          :bluez                          -
browser-support           chromium:browser-sandbox                :browser-support                -
camera                    chromium:camera                         :camera                         -
content                   chromium:foo-install-cups               -                               -
content[gnome-42-2204]    chromium:gnome-42-2204                  gnome-42-2204:gnome-42-2204     -
content[gtk-3-themes]     chromium:gtk-3-themes                   gtk-common-themes:gtk-3-themes  -
content[icon-themes]      chromium:icon-themes                    gtk-common-themes:icon-themes   -
content[sound-themes]     chromium:sound-themes                   gtk-common-themes:sound-themes  -
cups                      chromium:cups                           cups:cups                       -
desktop                   chromium:desktop                        :desktop                        -
desktop-legacy            chromium:desktop-legacy                 :desktop-legacy                 -
gsettings                 chromium:gsettings                      :gsettings                      -
hardware-observe          chromium:hardware-observe               :hardware-observe               -
home                      chromium:home                           :home                           -
joystick                  chromium:joystick                       :joystick                       -
mount-observe             chromium:mount-observe                  -                               -
mpris                     -                                       chromium:mpris                  -
network                   chromium:network                        :network                        -
network-bind              chromium:network-bind                   :network-bind                   -
network-manager           chromium:network-manager                -                               -
opengl                    chromium:opengl                         :opengl                         -
password-manager-service  chromium:password-manager-service       -                               -
personal-files            chromium:chromium-config                :personal-files                 -
personal-files            chromium:dot-local-share-applications   :personal-files                 -
personal-files            chromium:dot-local-share-icons          :personal-files                 -
raw-usb                   chromium:raw-usb                        -                               -
removable-media           chromium:removable-media                :removable-media                -
screen-inhibit-control    chromium:screen-inhibit-control         :screen-inhibit-control         -
system-files              chromium:etc-chromium-browser-policies  :system-files                   -
system-packages-doc       chromium:system-packages-doc            :system-packages-doc            -
u2f-devices               chromium:u2f-devices                    :u2f-devices                    -
unity7                    chromium:unity7                         :unity7                         -
upower-observe            chromium:upower-observe                 :upower-observe                 -
wayland                   chromium:wayland                        :wayland                        -
x11                       chromium:x11                            :x11                            -

```

::::

To see what changes have been made to your snaps installation over time, you can view the logs:

```shell
snap changes
```

::: details result of executing the changes command

```
[oleg@alt-gnome ~]$ snap changes
ID   Status  Spawn               Ready               Summary
1    Done    today at 01:13 MSK  today at 01:13 MSK  Initialize system state
2    Done    today at 01:17 MSK  today at 01:19 MSK  Install "firefox" snap
3    Done    today at 01:17 MSK  today at 01:17 MSK  Initialize device
4    Done    today at 01:21 MSK  today at 01:23 MSK  Install "figma-linux" snap
5    Done    today at 01:34 MSK  today at 01:35 MSK  Install "brave" snap
6    Done    today at 02:29 MSK  today at 02:30 MSK  Install "icq-im" snap
7    Done    today at 02:35 MSK  today at 02:36 MSK  Remove "icq-im" snap
8    Done    today at 02:36 MSK  today at 02:36 MSK  Install "icq-im" snap
9    Done    today at 03:00 MSK  today at 03:01 MSK  Install "chromium" snap
10   Done    today at 03:13 MSK  today at 03:13 MSK  Remove "chromium" snap

```

:::
