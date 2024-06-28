---
aggregation:
    sisyphus: asusctl
appstream:
    id: asusctl.desktop
    name: AsusCtl
    icon: /asusctl/asusctl-logo.png
    summary: Утилита для управления многими аспектами различных ноутбуков ASUS.
    metadata_license:
        name: MPL-2.0
        link: https://www.mozilla.org/en-US/MPL/2.0/
    developer:
        name: Asus Linux Community
    url:
        homepage: https://asus-linux.org/
        bugtracker: https://gitlab.com/asus-linux/asusctl/-/issues
---

# AsusCtl

AsusCtl — утилита для управления ноутбуками ASUS с системами на базе ядра GNU/Linux: установка пользовательского предела заряда, изменение системных профилей питания, настройка пользовательских кривых вращения вентилятора, управление подсветкой клавиатуры. Утилиту можно также использовать с ноутбуками других производителей, но с ограничениями.

## Установка из репозитория

Пакет `asusctl` можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install asusctl
```

```shell[epm]
epm -i asusctl
```

:::

:::info
После установки необходимо перезагрузить компьютер для запуска сервисов `asustl`
:::

## Отображение поддерживаемые параметры

Отображения всех опций, поддерживаемых ноутбуком:

```shell
asusctl -s
```

## Ограничение заряда

Установка лимита заряда батареи:

```shell
asusctl -c 80
```

:::info
Для ноутбука, который часто отключается от сети, подходит предел зарядки в 80%. 60% — хорошее значение для ноутбука, который большую часть времени остаётся включённым в сеть
:::

## Подсветка клавиатуры

Команды для переключения режимов работы светодиодов:

Следующий режим:

```shell
asusctl led-mode -n
```

Предыдущий режим:

```shell
asusctl led-mode -p
```

Использовать одно из возможных значений (`off`, `low`, `med`, `high`):

```shell
asusctl -k off
```
