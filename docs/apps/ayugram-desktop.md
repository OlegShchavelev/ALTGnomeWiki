---
aggregation:
    sisyphus: ayugram-desktop
appstream:
    id: org.audacityteam.Audacity
    name: ayugram-desktop
    icon: /ayugram-desktop/AyuGram.png
    summary: Телеграм клиент с хорошей кастомизацией
    metadata_license:
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer:
        name: Radolyn Labs
    url:
        homepage: https://github.com/AyuGram/AyuGramDesktop?tab=readme-ov-file
---
# Ayugram

Ayugram — кроссплатформенный кастомный клиент [Telegram](/telegram) с открытым исходным кодом. Распространяется под свободной лицензией GPL 3.0

## Установка из репозитория

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install ayugram-desktop
```
```shell[epm]
epm -i ayugram-desktop
```
:::

## Фишки Ayugram

### Отключение похожих каналов

По умолчанию в Ayugram отключается раздел "Похожие каналы"

![Пример Функции](/ayugram-desktop/Пример.png)

### Отключение задержки уведомлений

Задержка уведомлений — это встроенная функция [Telegram](/telegram), которая задерживает уведомления в сеансе текущего клиента, если вы находитесь в сети с другого

### Выбор иконки приложения

Вы можете изменить иконку приложения как на Android. На скриншоте изображены иконки, которые можно установить

![Значки, которые можете установить](/ayugram-desktop/Пример2.png)

### Скрытие папки "Все чаты"

По названию понятно, что данная функция скрывает папку "Все чаты"

### Режим призрака

В этом режиме некоторые действия действия не будут видны другим пользователям.

![Действия, которые не будут видны другим пользователям](/ayugram-desktop/Пример3.png)

## Где же включить все эти функции?

Эти функции находятся в разделе "Настройки Ayugram" в боковой панели, около ника пользователя. Также в боковую панель добавляется "Режим призрака"

![Настройки Ayugram](/ayugram-desktop/Пример4.png)
