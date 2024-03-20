---
title: G4Music
nameRepo: g4music
appstreamRepo: com.github.neithern.g4music
appstreamFlatpak: com.github.neithern.g4music
metainfo:
    thumb:
        src: /g4music/com.github.neithern.g4music.png
        title: G4Music
    summary: Элегантное воспроизведение вашей музыки
    site:
        url: https://gitlab.gnome.org/neithern/g4music
        anchor: gitlab.gnome.org
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    translate: 
        url: https://l10n.gnome.org/module/g4music
        anchor: l10n.gnome.org
    issue:
        url: https://gitlab.gnome.org/neithern/g4music/-/issues
        anchor: gitlab.gnome.org
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

