---
aggregation:
  flatpak: de.philippun1.turtle
appstream:
  id: de.philippun1.turtle
  name: Turtle
  icon: /turtle/de.philippun1.turtle.svg
  summary: Управляйте своими репозиториями git
  developer:
    name: Philipp Unger
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://gitlab.gnome.org/philippun1/turtle
    bugtracker: https://gitlab.gnome.org/philippun1/turtle/-/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /turtle/turtle-1.png
    - src: /turtle/turtle-2.png
    - src: /turtle/turtle-3.png
    - src: /turtle/turtle-4.png
---

# Turtle

Управляйте своими репозиториями Git с помощью удобных диалоговых окон в Файлах. В данный момент доступны следующие команды Git:

- `commit`, `add`, `stage`, `unstage`, `revert`, `resolve`
- `pull`, `push`, `sync` (`pull` + `push`)
- `checkout`, `create` `branch`, `merge`
- `init`, `clone`
- `remotes`, `submodules`
- `log`, `diff`

## Установка из репозитория

Turtle можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install turtle nautilus-python
```

```shell[epm]
epm -i turtle nautilus-python
```

:::

<!--@include: @apps/.parts/install/content-flatpak.md-->
