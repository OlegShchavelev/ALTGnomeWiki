---
title: Stapler
aggregation:
  sisyphus: stplr
appstream:
  name: Stapler
  icon: /stplr/stplr-logo.svg
  summary: Независимая система сборки пакетов для Linux
  developer:
    name: Maxim Slipenko
    nickname: Maks1mS
    avatar: https://avatars.githubusercontent.com/u/36362599?&v=4
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://stplr.dev
    bugtracker: https://altlinux.space/stapler/stplr/issues
---

# Stapler

Stapler — это универсальная система сборки и управления пакетами для Linux, которая делает установку программ проще и удобнее.

В основе каждого пакета лежит [Staplerfile](https://stplr.dev/docs/dev/staplerfile) — текстовый рецепт, похожий на PKGBUILD в Arch Linux. В Staplerfile описываются исходники, зависимости и шаги сборки. Из Staplerfile Stapler автоматически собирает системный пакет (.deb, .rpm и др.), который устанавливается стандартными средствами дистрибутива.

**Stapler** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install stplr

```

```shell[epm]
epm -i stplr
```

:::

## Основные команды

Добавить Stapler-репозиторий:

```shell
stplr repo add stapler-repo https://example.com/stapler-repo.git
```

Установить пакет:

```shell
stplr install pkg
```

Удалить пакет:

```shell
 stplr remove pkg
```

Собрать пакет из Stapler-репозитория:

```shell
 stplr build -p pkg
```

Собрать пакет из Staplerfile:

```shell
 stplr build -s Staplerfile
```

## Aides

[Aides](https://aides.space) — это неофициальный проприетарный репозиторий пакетов для ALT Linux, работающий на базе Stapler. Он предоставляет доступ к программному обеспечению, которое отсутствует в официальных репозиториях ALT, предлагая пользователям расширенную и экспериментальную экосистему пакетов.

::: danger Внимание!

1. Дисклеймер! Aides — это проект сообщества, который не был проверен, не аффилирован и не поддерживается ООО «Базальт СПО» и сообществом ALT Linux Team.

2. Используйте пакеты и инструкции только на свой страх и риск. Сборка пакетов происходит локально, поэтому проверяйте сборочные скрипты.

:::

### Особенности

Репозиторий Aides придерживается ряда правил, направленных на повышение предсказуемости и безопасности пакетов:

* **Автоматические проверки.** Каждый пакет проходит через систему автоматических проверок (CI), включающую линтинг и пробную установку. Это позволяет убедиться, что рецепт (*Staplerfile*) оформлен корректно и пакет устанавливается без ошибок.

* **Контроль целостности исходников.** Каждый пакет содержит хэш-суммы всех исходных файлов. Это гарантирует, что сборка выполняется из проверенных и неизменённых источников.

* **Изоляция приложений.** Многие пакеты запускаются через [Firejail](https://wiki.archlinux.org/title/Firejail_(Русский)), что обеспечивает дополнительный уровень защиты и снижает риски при использовании стороннего программного обеспечения.