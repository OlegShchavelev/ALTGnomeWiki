---
title: Obsidian
appstreamFlatpak: md.obsidian.Obsidian
---

# Obsidian

Obsidian — мощная база знаний, работает поверх локальной папки с обычными текстовыми файлами Markdown. В Obsidian создание соединений и последующее их выполнение не вызывает затруднений, и, установив соединения, вы можете изучить все свои знания в интерактивных графических представлений. Obsidian поддерживает CommonMark и GitHub Markdown (GFM), а также другие полезные функции ведения заметок, такие как теги, математические выражения LaTeX, диаграммы mermaid, сноски, внутренние ссылки и встраивание заметок Obsidian или внешних файлов. Obsidian также имеет систему плагинов с большим наборов плагинов для расширения своих возможностей.

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Obsidian** одной командой:

```shell
flatpak install flathub md.obsidian.Obsidian
```

<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Obsidian** одной командой:

```shell
epm play obsidian
```

## Запуск в Wayland режиме:
Для **Flatpak** версии, чтобы включить поддержку wayland нужно указать [переменную со значение --socket=wayland](https://github.com/flathub/md.obsidian.Obsidian?tab=readme-ov-file#wayland-support):
```shell
flatpak override --user --socket=wayland md.obsidian.Obsidian
```
Для временного включения поддержки wayland, запускаем **Flatpak** версию Obsidian c этой же переменной:
```shell
flatpak run --socket=wayland md.obsidian.Obsidian
```
:::info
Для большей информации о Flatpak версии **Obsidian**, и её дополнительных настройках, смотрите [официальную Github страницу проекта](https://github.com/flathub/md.obsidian.Obsidian)
:::

:::note
Для указания значений переменных в flatpak, вы можете использовать [Flatseal](./flatseal.md)
:::

## Аппаратное ускорение:
Чтобы избежать графических ошибок при запуске, [аппаратное ускорение нужно отключить](https://github.com/flathub/md.obsidian.Obsidian?tab=readme-ov-file#gpu-acceleration).

Для **Flatpak** версии добавляется переменная со значением --env=OBSIDIAN_DISABLE_GPU=1:
```shell
flatpak override --user --env=OBSIDIAN_DISABLE_GPU=1 md.obsidian.Obsidian
```
