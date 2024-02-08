---
title: VSCodium
appstreamFlatpak: com.vscodium.codium
---

# VSCodium

VSCodium — управляемый сообществом, свободно лицензированный двоичный дистрибутив Microsoft editor VS Code.

## Установка из репозитория

**VSCodium** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install codium
```
```shell[epm]
epm -i codium
```
:::

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **VSCodium** одной командой:

```shell
flatpak install flathub com.vscodium.codium
```

<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **VSCodium** одной командой:

```shell
epm play codium
```

## Запуск VSCodium в оконном интерфейсе Wayland

Запустить **VSCodium** через терминал указав дополнительные опции запуска:

```shell
codium --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform=wayland

```

## VSCodium не запускается или запускается с ошибками.

После обновления операционной системы Сodium, не запускается или запускается не корректно:

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/VSCodium/GPUCache
```

## Установка расширений

Для установки и просмотра плагинов выберите пункт Расширения на панели слева или нажмите сочетание клавиш `Ctrl`+ `Shift`+ `X`.
Введите название плагина в строке поиска, выберите дополнение и нажмите установить.
Каждое расширение в списке включает краткое описание, имя издателя, количество загрузок и пятизвездочный рейтинг.

![codium_1](/codium/codium_1.gif)