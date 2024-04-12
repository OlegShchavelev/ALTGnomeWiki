---
title: G4Music
nameRepo: g4music
appstreamRepo: com.github.neithern.g4music
appstreamFlatpak: com.github.neithern.g4music
aggregation:
    flatpak: com.github.neithern.g4music
    sisyphus: g4music
appstream:
    id: com.github.neithern.g4music
    name: G4Music
    icon: /g4music/com.github.neithern.g4music.png
    summary: Элегантное воспроизведение вашей музыки
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    url: 
        homepage: https://gitlab.gnome.org/neithern/g4music
        translate: https://l10n.gnome.org/module/g4music
        bugtracker: https://gitlab.gnome.org/neithern/g4music/-/issues
---

# G4Music

G4Music — это быстрый и легкий музыкальный проигрыватель, написанный на GTK4, с красивым и адаптивным пользовательским интерфейсом, ориентированный на высокую производительность для большой музыкальной коллекции.

## Установка из репозитория

**G4Music** можно установить через терминал:

<!--@include: ./parts/install/software-repo.md-->

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install g4music
```
```shell[epm]
epm -i g4music
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **G4Music** одной командой:

```shell
flatpak install flathub com.github.neithern.g4music
```

<!--@include: ./parts/install/software-flatpak.md-->

