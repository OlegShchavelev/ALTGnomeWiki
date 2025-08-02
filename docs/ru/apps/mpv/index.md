---
aggregation:
  sisyphus: mpv
  flatpak: io.mpv.Mpv
appstream:
  id: io.mpv.Mpv
  name: MPV
  icon: /mpv/mpv-logo.svg
  summary: Свободный легковесный кроссплатформенный медиаплеер.
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

MPV — свободный легковесный кроссплатформенный медиаплеер. Поддерживает множество форматов медиа и субтитров.

::: info
Для лучшей интеграции со средой GNOME можно воспользоваться альтернативным интерфейсом MPV — [Celluloid](/apps/celluloid/).
:::

![Draw attention to the window](/mpv/mpv.png)

<!--@include: @ru/apps/.parts/install/content-repo.md-->
<!--@include: @ru/apps/.parts/install/content-flatpak.md-->

## Проблемы с замедлением видео

При просмотре некоторых видео, особенно 4К, возможно замедление видеопотока, при этом звуковая дорожка идёт без опозданий. Для выхода из этой ситуации существует два варианта.

1. Использование профиля `fast`: для этого в терминале необходимо запустить утилиту с использованием нужного профиля

```shell
mpv --profile=fast video.mp4
```

2. Использование аппаратного декодирования: для этого в файле настроек `mpv.conf` необходимо прописать значения параметрам `hwdec` и `vo`. Вот рекомендованные настройки в зависимости от сессии

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

## Проблемы с уходом в спящий режим при просмотре видео

Для решения этой проблемы существует два решения:

1. Более простое и предпочитаемое решение

Устанавливаем расширение для GNOME - [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)

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

Затем нужно перезапустить сессию и не забыть включить Caffeine

2. В сессии Xorg должно быть достаточно добавления одной опции в `mpv.conf`

```
stop-screensaver
```

В сессии Wayland сложнее, учитывая что MPV не совсем поддерживает Wayland, то вышеописанная опция работать не будет.

Видео нужно запускать с учётом `gnome-session-inhibit`

```shell
gnome-session-inhibit mpv video.mp4
```

Для этого можно или прямо указывать это при вызове (как написано выше), или отредактировать значение `Exec` в `/usr/share/applications/mpv.desktop`: перед `mpv` укажите `gnome-session-inhibit`

## Альтернатива

В качестве альтернативы, можно воспользоваться плеером с графическим интерфейсом построенным на MPV — [Celluloid](/apps/celluloid/).
