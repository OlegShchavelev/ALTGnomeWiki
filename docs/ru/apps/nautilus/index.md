---
aggregation:
  sisyphus: nautilus
appstream:
  id: org.gnome.Nautilus
  name: Файлы
  icon: /nautilus/logo.svg
  summary: Управление файлами.
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GPL-3.0
    link: https://packages.altlinux.org/license/GPL-3.0-only
  url:
    homepage: https://apps.gnome.org/ru/Nautilus/
    bugtracker: https://gitlab.gnome.org/GNOME/nautilus/-/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /nautilus/sc-1.png
    - src: /nautilus/sc-2.png
    - src: /nautilus/sc-3.png
---

# Файлы

Файлы — файловый менеджер по умолчанию для рабочего стола GNOME, также известный как приложение «Nautilus». Предоставляет простой способ для управления файлами и навигации по файловой системе.

Nautilus поддерживает все базовые функции файловых менеджеров. С помощью Nautilus можно управлять файлами и папками, выполнять поиск файлов и папок как локально, так и по сети, читать и записывать данные на съёмные устройства, выполнять сценарии и запускать приложения. Nautilus предлагает три режима просмотра: сетка из значков, список из значков и древовидный список. Функциональность Nautilus можно расширять с помощью модулей и сценариев.
<AGWGallery />

<!--@include: @apps/.parts/install/content-repo.md-->

## Известные проблемы

### Модуль для GNOME Терминал `gnome-terminal`

Установите дополнительные пакеты, чтобы расширить возможности файлового менеджера Nautilus. Для этого введите следующую команду в терминале:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install nautilus-open-any-terminal
```

```shell[epm]
epm -i nautilus-open-any-terminal
```

:::

После установки пакета `nautilus-open-any-terminal` перезагрузите приложение Файлы (Nautilus):

```shell
nautilus -q
```
