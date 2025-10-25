---
lastUpdated: false
ExampleVar: Hello World!
---

# Возможности VitePress

::: info
VitePress использует [markdown-it](https://github.com/markdown-it/markdown-it) в качестве парсера который расширяет возможности markdown.
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

## Ссылки

**Пример:**

```markdown
[ссылка на внутреннюю страницу](/package-manager/flatpak/)

[ссылка на внешнюю страницу](https://alt-gnome.wiki)
```

**Вывод:**

[ссылка на внутреннюю страницу](/package-manager/flatpak/)

[ссылка на внешнюю страницу](https://alt-gnome.wiki)

## Frontmatter

[YAML frontmatter](https://jekyllrb.com/docs/front-matter/) доступен из коробки.

```yaml
---
title: YAML frontmatter
platform: VitePress
---
```

Эти переменные доступны в остальной часть страницы.

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

[Список всех доступных эмоджи здесь](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs).

## Вывод оглавления в любом месте

Генерируется на основе заголовков.

**Пример:**

```markdown
[[toc]]
```

**Вывод:**

[[toc]]

## Медиа-контент

**Пример:**

```markdown
![логотип](/logo.png)
```

**Вывод:**

![логотип](/logo.png)

## Блоки кода

**Пример:**

````markdown
```js
console.log('Hello World!')
```
````

**Вывод:**

```js
console.log('Hello World!')
```

## Блоки кода c парсингом Vue JS

**Пример:**

````markdown
```js-vue
console.log('{{ $frontmatter.ExampleVar }}');
```
````

**Вывод:**

```js-vue
console.log('{{ $frontmatter.ExampleVar }}');
```

## Блоки кода с табами

**Пример:**

````markdown
::: code-group

```python[python]
print("Hello World!")
```

```rust[rust]
fn main() {
    println!("Hello World!");
}
```

:::
````

**Вывод:**

::: code-group

```python[python]
print("Hello World!")
```

```rust[rust]
fn main() {
    println!("Hello World!");
}
```

:::

## Контент с табами

**Пример:**

````markdown
::: tabs
== python
Код `Hello World!` на Python.

```python
print("Hello World!")
```

== rust
Код `Hello World!` на Rust.

```rust
fn main() {
    println!("Hello World!");
}
```

:::
````

**Вывод:**

::: tabs
== python
Код `Hello World!` на Python.

```python
print("Hello World!")
```

== rust
Код `Hello World!` на Rust.

```rust
fn main() {
    println!("Hello World!");
}
```

:::

## Красивые уведомления

**Пример:**

```markdown
::: info
Это информационный блок.
:::

::: tip
Это совет.
:::

::: warning
это предупреждение об ошибке.
:::

::: danger
Это предупреждение об опасности
:::

::: details
Это блок сведений.
:::
```

**Вывод:**

::: info
Это информационный блок.
:::

::: tip
Это совет.
:::

::: warning
это предупреждение об ошибке.
:::

::: danger
Это предупреждение об опасности.
:::

::: details
Это блок сведений.
:::

## Уведомления с произвольными заголовками

**Пример:**

````markdown
::: info Произвольный заголовок
Это информационный блок с произвольным заголовков.
:::

::: danger Опасно
Это предупреждение об опасности.
:::

::: details Нажмите для отображения кода

```js
console.log('Привет, VitePress!')
```

:::
````

**Вывод:**

::: info Произвольный заголовок
Это информационный блок с произвольным заголовков.
:::

::: danger Опасно
Это предупреждение об опасности.
:::

::: details Нажмите для отображения кода

```js
console.log('Привет, VitePress!')
```

:::

## Анимированное выделение текста

**Пример:**

```markdown
<mark>Это сообщение несёт глубокий посыл!</mark>
```

**Вывод:**

<mark>Это сообщение несёт глубокий посыл!</mark>
