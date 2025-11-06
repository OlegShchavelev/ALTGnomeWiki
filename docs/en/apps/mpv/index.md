---
aggregation:
  sisyphus: mpv
  flatpak: io.mpv.Mpv
appstream:
  id: io.mpv.Mpv
  name: MPV
  icon: /mpv/mpv-logo.svg
  summary: Free lightweight cross-platform media player.
  metadata_license:
    name: GNU GPLv2
    link: https://choosealicense.com/licenses/gpl-2.0/
  developer:
    name: MPV Community
  url:
    homepage: https://mpv.io/
    bugtracker: https://github.com/mpv-player/mpv/issues
---

# MPV

MPV is a free, lightweight cross-platform media player. Supports many media formats and subtitles.

::: info
Для лучшей интеграции со средой GNOME можно воспользоваться альтернативным интерфейсом MPV — [Celluloid](/apps/celluloid/).
:::

![Draw attention to the window](/mpv/mpv.png)

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Problems with video slowdown

When watching some videos, especially 4K, the video stream may slow down, while the audio track plays without delay. There are two options to get out of this situation.

1. Using the `fast` profile: to do this, you need to run the utility in the terminal using the desired profile

```shell
mpv --profile=fast video.mp4
```

2. Using hardware decoding: to do this, in the settings file `mpv.conf` you need to specify the values ​​for the parameters `hwdec` and `vo`. Here are the recommended settings depending on the session

::: tabs
== Xorg

```
hwdec=vaapi
vo=gpu-next
```

== Wayland

```
hwdec=vaapi
vo=dmabuf-wayland
```

:::

## Problems with going to sleep when watching a video

There are two solutions to solve this problem:

1. Simpler and preferred solution

Install the extension for GNOME - [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-caffeine
```

```shell[epm]
epm -i gnome-shell-extension-caffeine
```

:::

Then you need to restart the session and remember to enable Caffeine

2. In a Xorg session, adding one option to `mpv.conf` should be enough

```
stop-screensaver
```

In a Wayland session it is more difficult, given that MPV does not fully support Wayland, the above option will not work.

The video needs to be launched taking into account `gnome-session-inhibit`

```shell
gnome-session-inhibit mpv video.mp4
```

To do this, you can either directly specify this when calling (as written above), or edit the `Exec` value in `/usr/share/applications/mpv.desktop`: before `mpv` specify `gnome-session-inhibit`

## Alternative

As an alternative, you can use a player with a graphical interface built on MPV - [Celluloid](/en/apps/celluloid/).
