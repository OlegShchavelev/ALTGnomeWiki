# Страница приложения 

Страница приложения состоит из нескольких блоков

## 1. Переменные

Используются такие подблоки [Frontmatter](../pages/vitepress#frontmatter) переменных:

### 1.1. Установка

```markdown
---
title:  # Название приложения
nameRepo:  # Название приложения в репозитории sisyphus
nameSnap:  # Название приложения на Snapcraft
nameEpmPlay:  # Название приложения для epm play
appstreamRepo:  # appstream id приложения для sisyphus
appstreamFlatpak:  # appstream id приложения для flatpak
---
```

### 1.2. Боковое меню

```markdown
---
metainfo:
    active:  # Показывать ли бар
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

## 3. Установка

Построение блоков установки автоматизировано, необходимо лишь заполнить Frontmatter переменные и подключить шаблон.

```markdown
<!--@include: ./parts/install/software-install.md-->
```

## Дополнительные блоки 

При необходимости вы можете добавить дополнительные блоки, например, 'Решение проблем'