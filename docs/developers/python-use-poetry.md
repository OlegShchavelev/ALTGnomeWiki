# Poetry

Poetry — инструмент управления зависимостями и сборкой проектов на Python. Он предоставляет удобный способ управления зависимостями, виртуальными окружениями и сборкой проектов.

## Установка с официального сайта

```shell
curl -sSL https://install.python-poetry.org | python3 -
```

## Установка с PyPi

```shell
python3 -m pip install poetry
```

## Использование poetry

### Создание нового проекта:

```shell
poetry new NAME
```

`NAME` — название проекта.

::: details Пример архитектуры 
```shell
new_project
├── new_project
│   └── __init__.py
├── pyproject.toml
├── README.md
└── tests
    └── __init__.py
```
:::

### Инициализация существующего проекта:

```shell
cd /path/to/project/
poetry init
```

### Указание зависимостей:

```shell
poetry add pylint
```

### Сборка пакета:

```shell
poetry build
```

### Публикация в PyPI:

```shell
poetry publish
```

## Использование виртуального окружения

### Создание/Активация окружения:

```shell
poetry shell
```

### Смена версии Python внутри проекта:

```shell
poetry env use python3.10
```

### Установка всех зависимостей:

```shell
poetry install
```

### Обновление зависимостей:

```shell
poetry update
```

## Конфигурация Poetry

### Вывод всех настроек:

```shell
poetry config --list
```

### Смена параметра:

```shell
poetry config OPTION VALUE
```

`OPTION` — параметр. \
`VALUE` — значение.

| Параметр                                 | Тип     | Описание                                                                    |
| :----------------------------------------|:--------|:--------------------------------------------------------------------------- |
| cache-dir                                | string  | Путь к каталогу кэша, используемому Poetry                                  |
| experimental.system-git-client           | boolean | Использовать серверную часть системного клиента git                         |
| installer.max-workers                    | int     | Максимальное количество рабочих при использовании параллельного установщика |
| installer.modern-installation            | boolean | Более современный и быстрый метод установки пакета                          |
| installer.no-binary                      | boolean | Не устанавливать бинарные зависимости                                       |
| installer.parallel                       | boolean | Параллельное выполнение при использовании нового установщика                |
| virtualenvs.create                       | boolean | Создание venv при его отсутствие                                            |
| virtualenvs.in-project                   | boolean | Создавать venv в каталоге проекта                                           |
| virtualenvs.options.always-copy          | boolean | Создавать файлы окружения вместо ссылок                                     |
| virtualenvs.options.no-pip               | boolean | Не устанавливать pip                                                        |
| virtualenvs.options.no-setuptools        | boolean | Не устанавливать setuptools                                                 |
| virtualenvs.options.system-site-packages | boolean | Использовать системные зависимости                                          |
| virtualenvs.path                         | string  | Каталог для хранения venv                                                   |
| virtualenvs.prefer-active-python         | boolean | Использовать текущий активированный Python для venv                         |
| virtualenvs.prompt                       | string  | Строка, которая будет отображаться при активации venv                       |
