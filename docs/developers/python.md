# Python

Python — интерпретируемый высокоуровневый язык программирования общего назначения, поддерживающий широкий спектр применения и парадигм программирования.

## Установка зависимостей

**Python** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gcc-c++ zlib-devel libssl-devel libsqlite3-devel libffi-devel
exit
```
```shell[epm]
epm -i gcc-c++ zlib-devel libssl-devel libsqlite3-devel libffi-devel
```
:::

## Установка из исходного кода

### Устанавливаем и разархивируем исходный код с официального сайта:

```shell
cd ~/Загрузки
wget https://www.python.org/ftp/python/VERSION/Python-VERSION.tgz
tar zxvf Python-VERSION.tgz
```

`VERSION` — необходимая версия Python.

| Стабильные версии |
| :---------------: |
|      3.12.2       |
|      3.11.8       |
|      3.10.13      |
|      3.9.18       |

### Собираем Python:

```shell
su -
cd /home/USER/Загрузки/Python-VERSION
./configure --prefix=DIR --enable-optimizations
make
make install
make clean
rm -rf /home/USER/Загрузки/Python-VERSION
exit
```

`USER` — имя вашего пользователя. \
`VERSION` — необходимая версия Python. \
`--prefix` — устанавливает директорию для сборки, можно убрать.



:::info
При сборке Python в собственную директорию, необходимо добавить её в переменную PATH.
:::

### Устанавливаем pip:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install pip
exit
```
```shell[epm]
epm -i pip
```
:::

## Использование venv

### Переходим в папку проекта:

```shell
cd /path/to/project/
```

### Создаём окружение и обновляем pip:

```shell
python3.10 -m venv venv
source venv/bin/activate
pip install -U pip
```