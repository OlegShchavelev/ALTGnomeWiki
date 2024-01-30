# Подключение DualShock 4

Для подключения геймпада-контроллера DualShock 4 нам потребуется собрать драйвер.

## Установка драйвера

### Зависимости

::: code-group

```shell[apt-get]
su -
apt-get install xdotool-devel
```

```shell[epm]
epmi xdotool-devel
```

:::

### Драйвер

::: info
Поскольку драйвер сохраняется как модуль ядра, данные действия нужно будет производить после каждого [обновления ядра](/kernel).
:::

```shell
git clone https://github.com/paolonit/ds4l.git
cd ds4l
make
```

## Запуск и использование

Для запуска драйвера следует ввести:

```shell
su -
make init
```

Для последующей остановки драйвера:
```shell
su -
make stop
```