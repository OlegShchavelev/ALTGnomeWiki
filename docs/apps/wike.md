---
title: Wike
nameRepo: wike
appstreamFlatpak: com.github.hugolabe.Wike
metainfo:
    thumb:
        src: /wike/com.github.hugolabe.Wike.png
        title: Wike
    summary: Воспроизводит музыку и ничего больше
    developer: 
        name: GNOME World
    site:
        url: https://hugolabe.github.io/Wike/
        anchor: hugolabe.github.io
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    translate: 
        url: https://poeditor.com/join/project?hash=kNgJu4MAum
        anchor: poeditor.com
    issue: 
        url: https://github.com/hugolabe/Wike/issues
        anchor: github.com
    adaptive: true,
    createTheme: true
    gnomeCircle: true
--- 

# Wike

Wike - программа для чтения Википедии для рабочего окружения GNOME. Предоставляет доступ ко всему содержимому этой онлайн-энциклопедии в собственном приложении с более простым и не отвлекающим от просмотра статей интерфейса.

## Установка из репозитория

**Wike** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install wike
```
```shell[epm]
epm -i wike
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Wike** одной командой:

```shell
flatpak install flathub org.pipewire.Helvum
```

<!--@include: ./parts/install/software-flatpak.md-->

## Язык поиска статей Википедии

По умолчанию Wike ищет на английском языке, для переключения языка необходимо:

- В боковом баре нажмите кнопку «Поиск»
- В баре поиска нажмите на интерфейс выбора языков, добавьте русских язык и выберите его по умолчанию

![Выбор языка](/wike/wike-1.png)