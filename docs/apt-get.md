# APT

Advanced packaging tool — программа для установки, обновления и удаления программных пакетов в операционных системах Debian и основанных на них, иногда также используется в дистрибутивах, основанных на Mandrake, например ALT Linux.

С помощью пакетного менеджера Вы можете:

- получить индексы
- обновить все установленные пакеты
- установить новые пакеты
- удалить установленные пакеты
- найти пакеты в репозитории

 Все операции с пакетами с помощью пакетным менеджем проводятся в консольной строке. Для большинства команд пакетного менеджера нужны права суперпользователя. Хотя, для операции поиска, достаточно обычных прав пользователя.

## Обновление информации о репозиториях

Данную операция пользователь производит при первичном запуске системы или при обновление списка подключенных репозиториев:

```shell
su -
apt-get update
```

После выполнения команды, apt обновит свой кеш новой информацией.

::: details Нажмите для отображения кода
```shell
su -
apt-get update
Получено: 1 http://ftp.altlinux.org Sisyphus/x86_64 release [4238B]
Получено: 2 http://ftp.altlinux.org Sisyphus/x86_64-i586 release [1680B]
Получено: 3 http://ftp.altlinux.org Sisyphus/noarch release [2859B]
Получено 8777B за 0s (96,0kB/s).
Найдено http://ftp.altlinux.org Sisyphus/x86_64/classic pkglist
Найдено http://ftp.altlinux.org Sisyphus/x86_64/classic release
Найдено http://ftp.altlinux.org Sisyphus/x86_64-i586/classic pkglist
Найдено http://ftp.altlinux.org Sisyphus/x86_64-i586/classic release
Найдено http://ftp.altlinux.org Sisyphus/noarch/classic pkglist
Найдено http://ftp.altlinux.org Sisyphus/noarch/classic release
```
:::

## Установка приложений.

Установка пакета производится следующей командой:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install firefox 
```
```shell[epm]
epm -i firefox
```

:::

Вы можете указать сразу несколько или большое количество пакетов через пробел.

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install firefox chromium
```
```shell[epm]
epm -i firefox chromium
```

:::

:::info
Обратите внимание, когда устанавливается несколько пакетов, действие нужно подтвердить нажатием клавиши Y 
:::

## Удаление пакетов

Удалить пакета производится следующей командой:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get remove firefox
```
```shell[epm]
epm -e firefox
```
:::


Удалить два и более пакетов большое количество пакетов через пробел:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get remove firefox chromium
```
```shell[epm]
epm -e firefox chromium
```
:::

Удаление неиспользуемых пакетов:

```shell
su -
apt-get autoremove
```

:::danger
Данную команду нужно использовать с осторожностью, т.к. она может удалить нужные пакеты
:::

:::info
Если вы удалили по зависимости мета-пакет, при условии что он был устоновлен в процессе установки ALT Regular Gnome, то содержание мета-такета не будет удалено командой autoremove
:::

Удалить пакет вместе с установленными вместе с зависимостями:

```shell
su -
apt-get remove -D пакет
```



## Поиск по выражению или части названия пакета

Для поиска пакета в репозитории по названию или описанию:

::: code-group

```shell[apt-get]
apt-cache search 0ag
```
```shell[epm]
epm search 0ag
```
:::

Для поиска только по названию пакета:

```shell
apt-cache search --names-only ^bash
```

## Работа с репозиторием

apt-repo — утилита для управления списком репозиториев APT.

Вывод текущих репозиториев:

```shell
apt-repo
```

Чтобы добавить репозитории конкретной pflfxb, выполните следующую команду:

::: code-group

```shell[apt-get]
su
apt-repo add task 329850
```
```shell[epm]
epm install 329850
```
:::

:::info
Если вы используйте epm, программа установит или обновит пакет находящейся в задании. Если вы используйте apt-repo необходимо установить пакет.
```shell
su -
apt-get install 0ag
```
:::


Удалить все задания из репозитория:

```shell
su -
apt-repo clean
apt-get update
```

Удалить задание по номеру:

```shell
su -
apt-repo add task 329850
apt-get update
```

:::info
При установке через epm задание после его окончания, исключается из списка репозиторий автоматически.
:::