# Страница Wiki

На [данной](/wiki/) странице используются такие подблоки Frontmatter переменных:

## 1. Раздел

Внутри данного блока располагаются подблоки категорий.

```yaml
aside: false
docs:
  categories:
    title: Быстрый старт
    items: # Подблоки категорий
```

## 2. Категория

Данный подблок описывает категорию, внутри него располагаются подблоки приложений.

```yaml
- title: # Название категории
  icon: #  Иконка категории
    dark: # Тёмная тема
    light: # Светлая тема
  apps: # Подблоки приложений
```

## 3. Приложение

Данный подблок описывает приложение.

```yaml
- name: # Название приложения
  link: # Путь до страницы приложения
```

## пример

```markdown
---
aside: false
docs:
  categories:
    title: Быстрый старт
    items:
      - title: Браузеры
        icon:
          dark: /global-light.svg
          light: /global-dark.svg
        apps:
          - name: Яндекс Браузер
            link: yandex-browser
          - name: Firefox
            link: firefox
      - title: Месенджеры
        icon:
          dark: /message-light.svg
          light: /message-dark.svg
        apps:
          - name: Telegram Desktop
            link: telegram
          - name: VK Мессенджер
            link: vk-messenger
---
```
