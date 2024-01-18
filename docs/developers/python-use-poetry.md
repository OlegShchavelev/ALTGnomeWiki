# Poetry

Poetry — это инструмент управления зависимостями и сборкой проектов на Python. Он предоставляет удобный способ управления зависимостями, виртуальными окружениями и сборкой проектов.

## Установка с официального сайта

```shell
curl -sSL https://install.python-poetry.org | python3 -
```

## Использование poetry

Создание нового проекта:

```shell
poetry new NAME
```

`NAME` — название проекта.

Будет создан проект с примерно такой архитектурой

```shell
new_project
├── new_project
│   └── __init__.py
├── pyproject.toml
├── README.md
└── tests
    └── __init__.py
```

Инициализация существующего проекта:

```shell
cd /path/to/project/
poetry init
```

Указание зависимостей:

```shell
poetry add pylint
```

Сборка пакета:

```shell
poetry build
```

Публикация в PyPI:

```shell
poetry publish
```

## Использование виртуального окружения

Создание/Активация окружения:

```shell
poetry shell
```

Смена версии Python внутри проекта:

```shell
poetry env use python3.10
```

Установка всех зависимостей:

```shell
poetry install
```

Обновление зависимостей:

```shell
poetry update
```

## Конфигурация Poetry

Вывод всех настроек:

```shell
poetry config --list
```

Смена параметра:

```shell
poetry config OPTION VALUE
```

`OPTION` — параметр. \
`VALUE` — значение.

|  Параметр                               |  Описание                                                                   |
| :--------------------------------------:|:--------------------------------------------------------------------------: |
|cache-dir                                | Путь к каталогу кэша, используемому Poetry                                  |
|experimental.system-git-client           | Использовать серверную часть системного клиента git                         |
|installer.max-workers                    | Максимальное количество рабочих при использовании параллельного установщика |
|installer.modern-installation            | Более современный и быстрый метод установки пакета                          |
|installer.no-binary                      | Не устанавливать бинарные зависимости                                       |
|installer.parallel                       | Параллельное выполнение при использовании нового установщика                |
|virtualenvs.create                       | Создание venv при его отсутствие                                            |
|virtualenvs.in-project                   | Создавать venv в каталоге проекта                                           |
|virtualenvs.options.always-copy          | Создавать файлы окружения вместо ссылок                                     |
|virtualenvs.options.no-pip               | Не устанавливать pip                                                        |
|virtualenvs.options.no-setuptools        | Не устанавливать setuptools                                                 |
|virtualenvs.options.system-site-packages | Использовать системные зависимости                                          |
|virtualenvs.path                         | Каталог для хранения venv                                                   |
|virtualenvs.prefer-active-python         | Использовать текущий активированный Python для venv                         |
|virtualenvs.prompt                       | Строка, которая будет отображаться при активации venv                       |
