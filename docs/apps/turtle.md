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

<AGWGallery />
<!--@include: @apps/_parts/install/content-flatpak.md-->

## Установить дополнение для Файлов (Nautilus)

Чтобы использовать дополнение, необходимо установить необходимые библиотеки для его корректной работы:

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install python3-module-pygit2 nautilus-python meld

```

```shell-vue[epm]
epm -i python3-module-pygit2 nautilus-python meld
```

:::

Склонируйте репозиторий приложения Turtle использую команду [git clone](/git)

```shell
git clone https://gitlab.gnome.org/philippun1/turtle.git .turtle
```

Установите дополнение используя установочный скрипт:

```shell
su -
cd /home/USER/.turtle
python3 install.py install --flatpak
```

::: warning
Замените переменную USER на ваше имя пользователя, например, в моём случае имя пользователя — oleg, а путь к директории:

```shell
cd /home/oleg/.turtle
```

:::

Чтобы начать работу с дополнением, вам нужно перезагрузить «Файлы». Для этого в терминале введите:

```shell
nautilus -q
```

## Обновить дополнение для Файлов (Nautilus)

Для обновления дополнения необходимо открыть папку, в которую вы клонировали дополнение `~/.turtle` с помощью `Git`, и синхронизировать её с удалённым репозиторием.

```shell
git pull
python3 install.py install --flatpak
```

После обновления дополнения Turtle необходимо перезагрузить «Файлы»:

```shell
nautilus -q
```
