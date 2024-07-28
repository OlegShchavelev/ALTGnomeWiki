# Страница приложения

Страница приложения состоит из нескольких блоков

## 1. Переменные

Используются такие блоки метаданных [Frontmatter](/reference/pages/vitepress#frontmatter):

```markdown
---
aggregation:
  sisyphus: # название в репозитории
  flatpak:
    id:    # flatpak id
    build: # сборка official/unofficial
  snap:
    id:    # название на snapcraft
    build: # сборка official/unofficial
  epm:
    play:
      id:    # название в epm play
      build: # сборка official/unofficial
appstream:
  id:   # appstream id приложения
  name: # Название приложения
  icon: # путь к логотипу приложения
  summary: # краткое описание
  keywords: # список бейджей (подробнее ниже)
  metadata_license:
    name: # лицензия
    link: # ссылка на лицензию
  developer:
    name:     # имя разработчика
    nickname: # nickname разработчика
    avatar:   # ссылка или путь на аватар разработчика
  url:
    homepage:   # ссылка на страницу проекта
    bugtracker: # ссылка на багтрекер (например, github issue)
    translate:  # ссылка на помощь с переводом
    help:       # ссылка на гайд по использованию
    donation:   # ссылка на донаты
gallery:
  title: # заголовок галереи (рекомендуется, просто "Галерея")
  type:  # тип галереи slider/carousel (рекомендуется slider)
  items: # список фотографий (подробнее ниже)
analogues: # список аналогичных приложений (подробнее ниже)
  - title:       # название (необязательно)
    description: # описание (необязательно)
    link:        # ссылка
---
```

### Список бейджей

Можно добавить такие бейджи

```markdown
---
keywords:
  - core         # GNOME Core
  - circle       # GNOME Circle
  - dev          # GNOME Development
  - oobe         # Предустановлено
  - adaptive     # Адаптивное
  - proprietary  # Проприетарное
  - restrictions # Региональные ограничения
  - dontthemes   # Please don’t theme
---
```

### Список фотографий

Фотографии для галереи хранятся по пути `/docs/public/APP_NAME/`

**Пример для amberol**

```markdown
---
gallery:
  title: Галерея
  type: slider
  items:
    - src: /amberol/amberol-1.png
    - src: /amberol/amberol-2.png
    - src: /amberol/amberol-3.png
---
```


### Список похожих приложений

Можно использовать как внешние (https://alt-gnome.wiki/amberol), так и внутренние ссылки (/amberol)

```markdown
---
analogues:
  - title: Первое приложение
    description: Описание первого приложения
    link: /
  - title: Второе приложение
    link: /
  - description: Описание третьего приложения
    link: /
  - link: /
---
```

## 2. Название и описание

Замените `NAME` на название приложения и допишите описание.

```markdown
# NAME

NAME — ...
```

## 3. Галерея и похожие приложения

Для отображения виджета в нужном месте, необходимо вызвать компоненет.

```markdown-vue
Amberol воспроизводит музыку, и ничего больше.

<AGWAnalogues /> <!-- [!code focus] -->

<AGWGallery /> <!-- [!code focus] -->

<!--{{`@include: @apps/_parts/install/content-repo.md`}}-->
```

## 5. Установка

Блоки установки построятся автоматически, необходимо лишь заполнить Frontmatter переменные и подключить шаблоны.

::: tabs
== Репозиторий

```markdown-vue
<!--{{`@include: @apps/_parts/install/content-repo.md`}}-->
```

== Flatpak

```markdown-vue
<!--{{`@include: @apps/_parts/install/content-flatpak.md`}}-->
```

== Snap

```markdown-vue
<!--{{`@include: @apps/_parts/install/content-snap.md`}}-->
```

== EPM Play

```markdown-vue
<!--{{`@include: @apps/_parts/install/content-epm-play.md`}}-->
```

:::

## Дополнительные блоки

При необходимости вы можете добавить дополнительные блоки, например, 'Решение проблем'
