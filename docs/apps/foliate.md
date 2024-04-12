---
title: Foliate
appstreamFlatpak: com.github.johnfactotum.Foliate
aggregation:
    flatpak: com.github.johnfactotum.Foliate
    sisyphus: flatseal
appstream:
    id: com.github.johnfactotum.Foliate
    name: Foliate
    icon: https://dl.flathub.org/media/com/github/johnfactotum.Foliate/087fe5098abbbeabc4939b629fc3e2be/icons/128x128/com.github.johnfactotum.Foliate.png
    summary: Стильная читалка электронных книг
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: John Factotum
    url: 
        homepage: https://github.com/johnfactotum/foliate/
        bugtracker: https://github.com/johnfactotum/foliate/issues/
---

# Foliate

Foliate — Стильная читалка электронных книг.

![wfL](https://dl.flathub.org/repo/screenshots/com.github.johnfactotum.Foliate-stable/1248x702/com.github.johnfactotum.Foliate-7ff807e57358053b92037e50c60f32a3.png)

Откройте для себя новую главу в чтении электронных книг с Foliate, современной программной для чтения электронных книг, разработанной специально для окружения GNOME. Погрузитесь в удобный интерфейс с гибкими функциями настройки, созданными специально по предпочтениям пользователей и позволяющими настроить все под себя. 

Foliate имеет следующие функции:

- Чтение файлов EPUB, Mobipocket, Kindle, FB2, CBZ и PDF
- Режим разбивки на страницы и режим прокрутки
- Настройка шрифта и межстрочного интервала
- Светлый, сепия, темный и инвертированный режимы
- Ползунок прогресса чтения с пометками глав
- Закладки и аннотации
- Поиск по книге
- Быстрый поиск по словарю

## Установка через терминал

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install foliate
```
```shell[epm]
epm -i foliate
```
:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Foliate** одной командой:

```shell
flatpak install flathub com.github.johnfactotum.Foliate
```
<!--@include: ./parts/install/software-flatpak.md-->