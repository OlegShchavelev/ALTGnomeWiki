# Страница приложения

Страница приложения состоит из нескольких блоков

## 1. Переменные

Используются такие подблоки [Frontmatter](../pages/vitepress#frontmatter) переменных:

### 1.1. Установка

```markdown
---
title:  # Название приложения
nameSnap:  # Название приложения на Snapcraft
appstreamRepo:  # appstream id приложения для sisyphus
appstreamFlatpak:  # appstream id приложения для flatpak
---
```

### 1.2. Боковое меню

```markdown
---
metainfo:
    thumb:
        src:  # Путь до иконки приложения
        title:   # Название приложения
    summary:  # Краткое описание
    developer:
        name:  # Имя разработчика / Название компании
        nickname:  # nickname разработчика
        avatar:  # URL до аватара разработчика / логотипа компании
    site:
        url:  # Ссылка на сайт приложения
        anchor:  # Домен сайта
    licence:
        url:  # Ссылка на лицензию
        anchor:  # Лицензия
    translate:
        url:  # Ссылка на помощь с переводом
        anchor:  # Домен сайта
    issue:
        url:  # Ссылка н асоздание issues
        anchor:  # Домен сайта
    adaptive:  # Является ли адаптивным
    gnomeCircle:  # Входит ли в gnomeCircle
    gnomeCore:  # Входит ли в gnomeCore
    createTheme:  # Не рекомендуется ли создавать темы ( Please don’t theme )
    proprietary:  # Является ли проприетарным
    sponsor:
        url:  # Ссылка на спонсорство
    sisyphus:
        url:  # Ссылка на пакет на packages.altlinux.org
    flathub:
        url:  # Ссылка на flathub
    snap:
        url:  # Ссылка на snapcraft
---
```

## 2. Название и описание

Замените `NAME` на название приложения и допишите описание.

```markdown
# NAME

NAME — ...
```

## 3. Установка из репозитория

::: info
Данный блок добавляется если приложение есть в репозитории Sisyphus.
:::

### 3.1.

Если можно установить только через терминал:

```markdown
**NAME** можно установить через терминал:
```

Если можно установить и через терминал и через центр приложений:

```markdown
**NAME** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->
```

### 3.2.

````markdown

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install NAME
```
```shell[epm]
epm -i NAME
```
:::

````

## 4. Установка c помощью Flatpak

::: info
Данный блок добавляется если приложение есть в репозитории Flathub.

Если приложение собрано не разработчиком, добавляется бейдж <Badge type="danger" text="Неофициальная сборка" />

```markdown
<Badge type="danger" text="Неофициальная сборка" />
```
:::

````markdown
При наличии пакета [Flatpak](/flatpak), можно установить **NAME** одной командой:

```shell
flatpak install flathub < appstream id flatpak приложения >
```

<!--@include: ./parts/install/software-flatpak.md-->
````

## 5. Установка с помощью Snaps

::: info
Данный блок добавляется если приложение есть в репозитории Snapcraft.

Если приложение собрано не разработчиком, добавляется бейдж <Badge type="danger" text="Неофициальная сборка" />

```markdown
<Badge type="danger" text="Неофициальная сборка" />
```
:::

````markdown
При наличии пакета [snapd](/snap), можно установить **NAME** одной командой:

```shell-vue
snap install NAME
```

<!--@include: ./software-snap.md-->
````

## 6. Установка c помощью epm play

::: info
Данный блок добавляется если для приложения есть скрипт установки epm play

Если скрипт добавлен не разработчиком приложения, добавляется бейдж <Badge type="danger" text="Неофициальная сборка" />

```markdown
<Badge type="danger" text="Неофициальная сборка" />
```
:::


````markdown
При наличии пакета [eepm](/epm), можно установить **NAME** одной командой:

```shell
epm play NAME
```
````

## Дополнительные блоки

При необходимости вы можете добавить дополнительные блоки, например, 'Решение проблем'
