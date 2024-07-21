---
aggregation:
  sisyphus: fish
appstream:
  id: fish.desktop
  name: Fish
  icon: /fish/fish.png
  summary: Умная и удобная оболочка для операционных систем на базе ядра Linux
  developer:
    name: The user-friendly shell
  metadata_license:
    name: GNU GPLv2
    link: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
  url:
    homepage: https://fishshell.com/
    bugtracker: https://github.com/fish-shell/fish-shell/issues
---

# Fish

Fish — Умная и удобная оболочка для операционных систем на базе ядра Linux

<!--@include: @apps/_parts/install/content-repo.md-->

## Установка Fish оболочкой по умолчанию для вашего пользователя

```shell
su -
usermod USER -s /usr/bin/fish
```

`USER` — имя вашего пользователя.

## Настройка Fish для root пользователя

```shell
su -
usermod root -s /usr/bin/fish
```
