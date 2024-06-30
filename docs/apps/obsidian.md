---
aggregation:
    flatpak: md.obsidian.Obsidian
    epm:
        play:
            id: obsidian
            build: unoffical
appstream:
    id: md.obsidian.Obsidian
    name: Obsidian
    icon: /obsidian/obsidian-logo.png
    summary: Мощная база знаний, работает поверх локальной папки с обычными текстовыми файлами Markdown.
    keywords:
        - proprietary
    metadata_license:
        name: Собственная
        link: https://obsidian.md/license
    developer:
        name: Dynalist Inc.
    url:
        homepage: https://obsidian.md/
        bugtracker: https://github.com/flathub/md.obsidian.Obsidian/issues
        translate: https://github.com/obsidianmd/obsidian-translations
---

# Obsidian

Obsidian — персональная база знаний и программа для создания заметок, работающая с Markdown-файлами. Пользователи могут создавать внутренние ссылки на заметки и визуализировать эти связи в виде графа. Obsidian спроектирован так, чтобы помочь пользователю организовать и структурировать мысли и знания в гибком, нелинейном виде. Obsidian поддерживает CommonMark и GitHub Flavored Markdown (GFM), а также другие полезные функции: теги, математические выражения LaTeX, диаграммы mermaid, сноски, внутренние ссылки и встраивание заметок или внешних файлов. Obsidian имеет систему плагинов для расширения функционала.

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->

## Запуск Obsidian в оконном интерфейсе Wayland

Для запуска **Obsidian** через терминал, укажите следующие опции запуска:

::: code-group

```shell[flatpak]
flatpak run md.obsidian.Obsidian --ozone-platform-hint=auto
```

```shell[epm play]
obsidian --ozone-platform-hint=auto
```

:::

:::warning
При запуске [Flatpak-версии](/flatpak), убедитесь в возможности запуска с использованием графического протокола Wayland. Один из самых удобных вариантов проверки — программа [Flatseal](/flatseal)

![Включение графического протокола Wayland](/obsidian/obsidian-1.png)

По умолчанию запуск в оконном интерфейсе Wayland запрещён. Для запуска через него, включите следующие пункты:

-   Оконная система Wayland
-   Возврат к оконной системе X11

Альтернативной настройкой окружения является терминал:

```shell
flatpak override --user md.obsidian.Obsidian --socket=wayland --socket=fallback-x11
```

:::

Для запуска приложения в окружении GNOME и простоты настройки, рекомендуется установить приложение [PinApp](/pin-app), выберите приложение **Obsidian**, сделайте `Pin` и внесите следующие параметры в поле `Exec`:

::: code-group

```shell[flatpak]
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=obsidian.sh --file-forwarding md.obsidian.Obsidian @@u %U @@ // [!code --]
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=obsidian.sh --file-forwarding md.obsidian.Obsidian --ozone-platform-hint=auto @@u %U @@ // [!code ++]
```

```shell[epm play]
obsidian %U // [!code --]
obsidian --ozone-platform-hint=auto %U // [!code ++]
```

:::

## Аппаратное ускорение:

Чтобы избежать графических ошибок при запуске, [аппаратное ускорение нужно отключить](https://github.com/flathub/md.obsidian.Obsidian?tab=readme-ov-file#gpu-acceleration).

Для [Flatpak-версии](/flatpak) нужно добавить переменная со значением `--env=OBSIDIAN_DISABLE_GPU=1:`

```shell
flatpak override --user --env=OBSIDIAN_DISABLE_GPU=1 md.obsidian.Obsidian
```

Для epm-версии нужно добавить переменная со значением `OBSIDIAN_DISABLE_GPU=1`. Например, через `./bashrc`:

```shell
cat << _EOF_ >> ~/.bashrc
# Disable GPU for obsidian
export OBSIDIAN_DISABLE_GPU=1
_EOF_
```
