---
title: EPM
aggregation:
  sisyphus: eepm
appstream:
  name: EPM
  icon: /epm/etersoft.png
  summary: Единая система управления пакетами.
  developer:
    name: Этерсофт
  metadata_license:
    name: GNU AGPLv3
    link: https://choosealicense.com/licenses/agpl-3.0/
  url:
    homepage: https://github.com/Etersoft/eepm
    bugtracker: https://github.com/Etersoft/eepm/issues
---

# Единая команда управления пакетами (epm)

**EPM** — имеющая одинаковый интерфейс на всех системах команда управления пакетами. При интерфейсе, похожем на rpm, apt и urpm, выполняет необходимые операции **на любой платформе**.

## Установка из репозитория

**EPM** можно установить используя терминал:

```shell
su -
apt-get update
apt-get install eepm
```

## Команды

| Описание операции                              |       Команда EPM       |        Команда ALT Linux         |
| ---------------------------------------------- | :---------------------: | :------------------------------: |
| Установка пакета по названию в систему         |   `epm -i (package)`    |   `apt-get install (package)`    |
| Установка файла пакета в систему               | `epm -i (package file)` | `apt-get install (package file)` |
| Удаление пакета из системы                     |   `epm -e (package)`    |    `apt-get remove (package)`    |
| Поиск пакета в репозитории                     |     `epm -s (text)`     |    `apt-cache search (text)`     |
| Проверка наличия пакета в системе              |   `epm -q (package)`    | `rpm -qa (pipe) grep (package)`  |
| Список установленных пакетов                   |        `epm -qa`        |            `rpm -qa`             |
| Поиск по названиям установленных пакетов       |    `epm -qp (word)`     |          `grep (word)`           |
| Принадлежность файла к (установленному) пакету |     `epmqf (file)`      |         `rpm -qf (file)`         |
| Список файлов в (установленном) пакете         |   `epm -ql (package)`   |       `rpm -ql (package)`        |
| Вывести информацию о пакете                    |   `epm -ql (package)`   |    `apt-cache show (package)`    |
| Обновить дистрибутив                           |      `epm upgrade`      |      `apt-get dist-upgrade`      |

### Информация о системе

Для вывода информации о системе, введите в терминале:

```shell
epm print info
```

::: details Пример вывода информация о системе

```shell
distro_info v20230406 (EPM version 3.60.5-alt1) : Copyright © 2007-2023 Etersoft

                       Pretty name (--pretty): ALT Regular (20240112) (Sisyphus)
           (--distro-name / --distro-version): Sisyphus / 20240112 (orig. Sisyphus 20230819)
         Base distro name (-d) / version (-v): ALTLinux/Sisyphus
     Vendor distro name (-s) / Repo name (-r): alt / Sisyphus
                 Package manager/type (-g/-p): apt-rpm / rpm
            Base OS name (-o) / CPU arch (-a): linux x86_64
                 CPU norm register size  (-b): 64 bit
                          Virtualization (-i): (host system)
                        CPU Cores/MHz (-c/-z): 16 / 1393 MHz
                      System memory size (-m): 15412 MiB
                 Running service manager (-y): systemd
            Bug report URL (--bug-report-url): https://bugs.altlinux.org/
```

:::

## Утилита EPM Play

**EPM Play** — инструмент, позволяющий автоматически устанавливать и удалять пакеты, используя заготовленные сценарии, при этом не используя сторонние репозитории.

```
epm play [options] [argument]
```

### Установить приложение

Для установки приложения, используйте `epm play <app>`:

```shell
epm play telegram
```

:::info
Чтобы получить актуальный список приложений, воспользуйтесь командой `epm play` в терминале или [посетите сайт](https://download.etersoft.ru/pub/download/epm-app-versions/epm-play-list.txt)
:::

Для установки альтернативной версии приложения:

```shell
epm play telegram = beta
```

Получить список альтернативных версий возможный для установки, используйте опцию `--product-alternatives`:

```shell
epm play --product-alternatives telegram
```

### Удалить приложение

Для удаления приложения используйте `epm play --remove <app>`:

```shell
epm play --remove telegram
```

Возможно удалить приложение используя пакетный менеджер:

```shell[epm]
epm -e Telegram
```

### Обновить приложение до последней версии

Для обновления приложения в EPM Play **используйте** опцию `--update` и идентификатор приложения:

```shell
epm play --update telegram
```

Для обновления списка установленных приложений, используйте опцию `--update` и аргумент `all`:

```shell
epm play --update all
```

Альтернативном методом обновления приложения, является повторная установка приложения:

```shell
epm play telegram
```

### Работа со списком приложений

Получить список доступных к установке приложений:

```shell
epm play
```

Получить список установленных приложений:

```shell
epm play --list
```

:::warning
При совпадении идентификаторов приложений, в списке будут присутствовать приложения установленные с помощью пакетного менеджера `apt-get`
:::

Получить список установленных утилит:

```shell
epm play --list-scripts
```

:::info
Утилиты — группа установочных сценариев, которая автоматически устанавливает или удаляет: драйвера, инструменты для разработки и другие системные приложения различных типов.
:::

Получить полный список приложений и утилит:

```shell
epm play --list-all
```

Чтобы получить список без описаний приложений/утилит, используйте опцию `--short`, работает со следующими опциями `[--list|--list-scripts|--list-all]`:

```shell
epm play --short --list-all
```

Проверить, установлено ли приложение используйте опцию `--installed` и и идентификатор приложения:

```shell
epm play --installed telegram
```

Получить список альтернативных версий возможный для установки, используйте опцию `--product-alternatives` и идентификатор приложения:

```shell
epm play --product-alternatives telegram
```

## Утилита EPM Repack

EPM Repack — инструмент позволяющий конвертировать (переупаковать) пакеты от сторонних производителей в стандарт RPM семейства операционных систем АЛЬТ

| Менеджер пакетов | Дистрибутив                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `rpm`            | ASPLinux, SUSE (+ Enterprise Desktop/Server), Mandriva, ROSA, Mandrake, PCLinuxOS, Fedora, Red Hat (+ Enterprise), Scientific, CentOS |
| `deb`            | Debian, Ubuntu, Mint, Runtu, mcst                                                                                                     |
| `tgz`            | Slackware, MOPSLinux                                                                                                                  |
| `tbz`            | FreeBSD                                                                                                                               |
| `tbz2`           | Gentoo                                                                                                                                |
| `apk`            | Alpine                                                                                                                                |
| `pkg.gz`         | SunOS                                                                                                                                 |

Установим `deb`-приложение используя утилиту epm repack:

```shell
epm repack tonfotos.deb
epm -i tonfotos-1.6.5-epm1.repacked.2.x86_64.rpm
```

Альтернативном вводом является:

```shell
epm -i tonfotos.deb
```

При установке пакета, epm автоматически определит, что установленный файл не является стандартным, и запустит команду epm repack, а после переупаковки пакета, автоматически установит переупакованный пакет.

:::info
Предварительно скачайте deb-пакет [на официальном сайте производителя](https://tonfotos.com). Перейдите в папку со скаченной программой Tonfotos, в моем случае:

```shell
cd Загрузки
```

:::

## Установка приложений с помощью appinstall

Для установки и удаления приложений из каталога `epm play` используя графический интерфейс, рекомендуем использовать appinstall

**appinstall** можно установить используя терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install appinstall
```

```shell[epm]
epm -i appinstall
```

:::
