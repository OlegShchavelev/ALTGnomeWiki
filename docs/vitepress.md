---
lastUpdated: false
---
# Возможности VitePress

::: info
VitePress использует [markdown-it](https://github.com/markdown-it/markdown-it) в качестве парсера который расширает возможности markdown.
Мы можем добавить существенно больше красоты и удобства.
:::

Полный, актуальный текст всех возможностей всегда можно посмотреть на <https://vitepress.dev/guide/markdown>.

Рассмотрим подробнее каждую из них.

## Заголовки-ссылки

Заголовки автоматически становятся ссылками-якорями вида `guide/vitepress#zagolovkissylki` .
Текст заголовка автоматически транслитерируется и обрезается до 25-ти символов (без обрезки слов).

### Произвольный анкор {#my-anchor}

Но вы можете назначить произвольный анкор любому из заголовков, используя конструкцию `{#my-anchor}`.

```markdown
## Обычный заголовок
### Произвольный анкор {#my-anchor}
```

## Таблицы

Генерируйте таблицы в стиле GitHub.

**Пример:**

```markdown
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**Вывод:**

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Эмоджи

**Пример:**

```markdown
:tada: :100:
```

**Вывод:**

:tada: :100:

[Список всех доступных эмоджи здесь](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json).

## Вывод оглавления в любом месте

Генерируется на основе заголовков.

**Пример:**

```
[[toc]]
```

**Вывод:**

[[toc]]

## Красивые уведомления

**Пример:**

```markdown
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Вывод:**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Уведомдения с произвольными заголовками

**Пример:**

````markdown
::: info Произвольный заголовок
This is an info box.
:::

::: danger Опасно
This is a dangerous warning.
:::

::: details Нажмите для отображения кода
```js
console.log('Привет, VitePress!');
```
:::
````

**Вывод:**

::: info Произвольный заголовок
This is an info box.
:::

::: danger Опасно
This is a dangerous warning.
:::

::: details Нажмите для отображения кода

```js
console.log('Привет, VitePress!');
```