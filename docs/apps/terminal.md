---
aggregation:
    sisyphus: gnome-terminal
appstream:
    id: org.gnome.Terminal.desktop
    name: Терминал
    icon: /terminal/hicolor_apps_scalable_org.gnome.Terminal.svg
    summary: Используйте командную строку.
    developer:
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    metadata_license:
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    keywords:
        - oobe
    url:
        homepage: https://gitlab.gnome.org/GNOME/gnome-terminal
        bugtracker: https://gitlab.gnome.org/GNOME/gnome-terminal/-/issues
gallery:
    title: Галерея
    type: slider
    items:
        - src: /terminal/terminal-1.png
        - src: /terminal/terminal-2.png
        - src: /terminal/terminal-3.png
---

# Терминал

Терминал эмулятор терминала, который позволяет получить доступ к среде UNIX shell. Вы можете использовать его для запуска программ, которые доступны в вашей системе.

Терминал поддерживает несколько профилей и вкладок, а также реализует различные сочетания клавиш, что делает удобным для использования.

<AGWGallery />
<!--@include: @apps/_parts/install/content-repo.md-->

## Дополнение для Файлов (Nautilus)

Чтобы облегчить навигацию в программе «Файлы» и иметь возможность открывать файлы и папки  «Терминале» через контекстное меню, необходимо установить дополнительный пакет:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install nautilus-open-any-terminal
```

```shell[epm]
epm install nautilus-open-any-terminal
```
:::
