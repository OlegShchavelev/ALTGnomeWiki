---
aggregation:
  sisyphus: xeyes
appstream:
  name: Xeyes
  icon: /xeyes/xeyes-logo.png
  summary: Программа, которая отображает на экране два глаза, следящих за движениями курсора мыши
  developer:
    name: X.Org Foundation
    avatar: /xeyes/xeyes-avatar.png
  metadata_license:
    name: X11 License
    link: https://gitlab.freedesktop.org/xorg/app/xeyes/-/blob/master/COPYING
  url:
    homepage: https://gitlab.freedesktop.org/xorg/app/xeyes
    bugtracker: https://gitlab.freedesktop.org/xorg/app/xeyes/issues
---

# Xeyes

Xeyes — программа, которая отображает на экране два глаза, следящих за движениями курсора мыши, как если бы они наблюдали за ними.

Программу можно использовать как индикацию того, использует ли окно протокол Wayland:

- если при перемещении курсора в окне глаза **двигаются**, окно использует **X11**
- если глаза **не двигаются**, окно использует **Wayland**

![xeyes1.png](/xeyes/xeyes1.png)

## Установка из репозитория

**Установка через терминал**

**Xeyes** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install xeyes
```

```shell[epm]
epm -i xeyes
```

:::
