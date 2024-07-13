---
title: XLSCLIENTS
appstreamRepo: alacarte.desktop
aggregation:
  sisyphus: xlsclients
appstream:
  name: XLSCLIENTS
  summary: Редактор меню для GNOME, использующий спецификацию меню freedesktop.org.
  developer:
    name: X.Org Foundation
    avatar: /xeyes/xeyes-avatar.png
  metadata_license:
    name: MIT License
    link: https://choosealicense.com/licenses/mit/
  url:
    homepage: https://gitlab.freedesktop.org/xorg/app/xlsclients
    bugtracker: https://gitlab.freedesktop.org/xorg/app/xlsclients/issues
---

# XLSCLIENTS

xlsclients — утилита для отображения информации о клиентских приложениях, запущенных в оконном интерфейсе X11.

## Установка из репозитория

**xlsclients** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install xlsclients
```

```shell[epm]
epm -i xlsclients
```

:::

## Использование утилиты XLSCLIENTS

Для вывода списка приложений запущенных в оконном интерфейсе X11 введите в терминале:

```shell
xlsclients
```

::: details Пример ответа xlsclients

```shell
[oleg@alt-gnome ~]$ xlsclients
alt-gnome  gsd-xsettings
alt-gnome  ibus-x11
alt-gnome  jetbrains-toolbox
alt-gnome  codium
alt-gnome  yandex-browser-stable
alt-gnome  anydesk
alt-gnome  mutter-x11-frames
alt-gnome  steam
```

:::
