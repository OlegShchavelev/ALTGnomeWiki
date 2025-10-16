# Страница приложения

Страница приложения состоит из нескольких блоков

## 1. Переменные

Используются такие блоки метаданных Frontmatter:

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
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

::: tip :sunrise_over_mountains: Так же можно сформировать несколько галерей :art:

Подробнее об этом в блоке [`Галерея и похожие приложения`](#_3-галерея-и-похожие-приложения)

::: details **Пример для mindustry**
```markdown
---
gallery:
  - title: Галерея
    type: slider
    items:
      - src: /mindustry/mindustry-menu.png
      - src: /mindustry/mindustry-serpulo-1.png
      - src: /mindustry/mindustry-serpulo-2.png
      - src: /mindustry/mindustry-serpulo-3.png
      - src: /mindustry/mindustry-erekir-1.png
      - src: /mindustry/mindustry-erekir-2.png
      - src: /mindustry/mindustry-erekir-3.png
  - type: slider
    items:
      - src: /mindustry/mindustry-gier-1.png
      - src: /mindustry/mindustry-gier-2.png
  - type: slider
    items:
      - src: /mindustry/mindustry-notva-1.png
      - src: /mindustry/mindustry-notva-2.png
  - type: slider
    items:
      - src: /mindustry/mindustry-verilus-1.png
      - src: /mindustry/mindustry-verilus-2.png
---
```
:::


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

<AGWAnalogues /> <!--[!code focus]-->

<AGWGallery />   <!--[!code focus]-->

<!--{{`@include: @ru/apps/.parts/install/content-repo.md`}}-->
```

::: tip :pushpin: Использование нескольких галерей :pencil2:

Если у вас создано несколько галерей - то для вызова нужно добавить ключ `id` к вызову с указанием номера галереи.

<mark>**(Отсчет идет с нуля, для нулевого можно не указывать)**</mark>

```markdown-vue
Mindustry — Песочница в жанре tower-defense. Создавайте сложные цепочки поставок из конвейеров, чтобы загружать...

<AGWGallery />   <!--[!code focus]-->

### Gier
Первые астероиды.
Для включения, введите в консоль игры следующую команду:

\`\`\`
Planets.gier.alwaysUnlocked = true
\`\`\`

<AGWGallery id=1 /> <!--[!code focus]-->

```

:::

## 5. Установка

Блоки установки построятся автоматически, необходимо лишь заполнить Frontmatter переменные и подключить шаблоны.

::: tabs
== Репозиторий

```markdown-vue
<!--{{`@include: @ru/apps/.parts/install/content-repo.md`}}-->
```

== Flatpak

```markdown-vue
<!--{{`@include: @ru/apps/.parts/install/content-flatpak.md`}}-->
```

== Snap

```markdown-vue
<!--{{`@include: @ru/apps/.parts/install/content-snap.md`}}-->
```

== EPM Play

```markdown-vue
<!--{{`@include: @ru/apps/.parts/install/content-epm-play.md`}}-->
```

:::

## Дополнительные блоки

При необходимости вы можете добавить дополнительные блоки, например, 'Решение проблем'
