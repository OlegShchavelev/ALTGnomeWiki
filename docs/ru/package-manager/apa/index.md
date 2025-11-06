# APA

ALT Packages Assistant – это инструмент для управления пакетами в семействе операционных систем ALT Linux. Он предоставляет удобный интерфейс для выполнения различных операций с пакетами.

### Фичи

- Поиск пакета при помощи нечёткого поиска, если пакет не был найден при установке
- Удобная работа с тасками в репозиториях
- ALT Packages Assistant объединяет функциональность нескольких стандартных утилит ALT Linux, предоставляя единый удобный интерфейс.

## Установка из репозитория

**APA** можно установить используя терминал:

```shell
su -
apt-get update
apt-get install apa
```

## Обновление информации о репозиториях

Данную операцию пользователь производит при первичном запуске системы или при обновление списка подключённых репозиториев:

```shell
su -
apa update
```

После выполнения команды, утилита `apt` обновит свой кеш новой информацией.

::: details Нажмите для отображения кода

```shell
[root@alt-gnome ~]# apa update
Получено: 1 http://ftp.altlinux.org Sisyphus/x86_64 release [4233B]
Получено: 2 http://ftp.altlinux.org Sisyphus/x86_64-i586 release [1680B]
Получено: 3 http://ftp.altlinux.org Sisyphus/noarch release [2854B]
Получено 8767B за 0s (13,5kB/s).
Найдено http://ftp.altlinux.org Sisyphus/x86_64/classic pkglist
Найдено http://ftp.altlinux.org Sisyphus/x86_64/classic release
Найдено http://ftp.altlinux.org Sisyphus/x86_64-i586/classic pkglist
Найдено http://ftp.altlinux.org Sisyphus/x86_64-i586/classic release
Найдено http://ftp.altlinux.org Sisyphus/noarch/classic pkglist
Найдено http://ftp.altlinux.org Sisyphus/noarch/classic release
Чтение списков пакетов... Завершено
Построение дерева зависимостей... Завершено
```

:::

## Обновить систему

Чтобы обновить систему до актуального состояния, используйте следующую команду:

```shell
su -
apa update
apa upgrade
```

## Поиск пакетов

Для поиска пакета в репозитории по названию или описанию:

```shell
apa search telegram
```

::: details Нажмите для отображения кода

```shell
➜  ~ apa search telegram
ayugram-desktop - Desktop Telegram client with good customization and Ghost mode
libtgvoip - VoIP library for Telegram clients
paper-plane - Chat over Telegram on a modern and elegant client
purple-telegram - Libpurple protocol plugin for Telegram support
tdlib - Cross-platform library for building Telegram clients
tdlib-purple - libpurple Telegram plugin using tdlib
telegram-bot-api - The Telegram Bot API provides an HTTP API for creating Telegram Bots.
telegram-desktop - Telegram Desktop messaging app
libtelegram-qt5 - Qt library for Telegram network
libtelegram-qt5-devel - Development headers and pkg-config for TelegramQt library
telepathy-morse - Morse is a Qt-based Telegram connection manager for the Telepathy framework.
i586-libtelegram-qt5 - Qt library for Telegram network
i586-libtelegram-qt5-devel - Development headers and pkg-config for TelegramQt library
i586-libtgvoip - VoIP library for Telegram clients
i586-purple-telegram - Libpurple protocol plugin for Telegram support
python3-module-Telethon - Pure Python 3 Telegram client library
python3-module-pyrogram - Elegant, modern and asynchronous Telegram MTProto API framework in Python for users and bots
python3-module-telebot - Python Telegram bot api
python3-module-telegram-bot - Python interface for the Telegram Bot API
telegram-send - Send messages and files over Telegram from the command-line
zabbix-in-telegram - Zabbix Notifications with graphs in Telegram
```

:::

Возможно использовать следующие опции:

| Опция                | Описание                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `-n`, `--names-only` | Поиск только по названиям пакетов, а не по длинным описаниям.                            |
| `-f`, `--full`       | Поиск только по названиям пакетов, а не по длинным описаниям.                            |
| `-i`, `--installed`  | Выполняет поиск среди установленных пакетов. Хорошо работает с параметром `--names-only` |

Выполняет поиск файлов среди пакетов в репозитории c использованием **ALT Repo API**:

```shell
apa search-file apt-get
```

::: details Нажмите для отображения кода

```shell
apa search-file apt-get
man-pages-ru-extra:
  /usr/share/man/ru/man8/apt-get.8.xz
python3-module-prompt_toolkit-docs:
  /usr/share/doc/python3-module-prompt_toolkit-docs-3.0.48/html/_images/apt-get.png
  /usr/share/doc/python3-module-prompt_toolkit-docs-3.0.48/examples/progress-bar/styled-apt-get-install.py
python3-module-prompt_toolkit-pickles:
  /usr/lib/python3/site-packages/prompt_toolkit/pickle/_images/apt-get.png
apt:
  /usr/bin/apt-get
  /usr/lib/apt/apt-get
  /usr/share/man/man8/apt-get.8.xz
apt-tests:
  /usr/share/apt/tests/test-apt-get-changelog-simple
bash-completion:
  /usr/share/bash-completion/completions/slapt-get
  /usr/share/bash-completion/completions/apt-get
fish:
  /usr/share/fish/completions/apt-get.fish
```

:::

Показать список установленных пакетов:

```shell
apa list
```

Возможно использовать следующие опции:

| Опция                      | Описание                                                  |
| -------------------------- | --------------------------------------------------------- |
| `-s`, `--sort`             | Отсортируйте выходные данные в алфавитном порядке.        |
| `-as`, `--asort`           | Сортировка выполняется в направлении, параметру '--sort'. |
| `-d`, `--with-date`        | Показать пакеты, отсортированные по дате установки.       |
| `-r`, `--rpm`              | Показать пакеты, отсортированные по дате установки.       |
| `-qf ?`, `--queryformat=?` | Формат вывода информации RPM.                             |

Показать информацию о пакете:

```shell
apa info telegram-desktop
```

::: details Нажмите для отображения кода

```shell
➜  ~ apa info telegram-desktop
Name        : telegram-desktop
Version     : 5.9.0
Release     : alt1
DistTag     : sisyphus+365110.2600.3.2
Architecture: x86_64
Install Date: Ср 18 дек 2024 10:41:19
Group       : Networking/Instant messaging
Size        : 133076728
License     : GPLv3 with OpenSSL exception
Signature   : RSA/SHA512, Вт 17 дек 2024 00:26:23, Key ID ff979dedda2773bb
Source RPM  : telegram-desktop-5.9.0-alt1.src.rpm
Build Date  : Вт 17 дек 2024 00:25:51
Build Host  : rider-sisyphus.hasher.altlinux.org
Relocations : (not relocatable)
Packager    : Vitaly Lipatov <lav@altlinux.org>
Vendor      : ALT Linux Team
URL         : https://telegram.org/
Summary     : Telegram Desktop messaging app
Description :
Telegram is a messaging app with a focus on speed and security, it's super-fast, simple and free.
You can use Telegram on all your devices at the same time - your messages
sync seamlessly across any number of your phones, tablets or computers.

With Telegram, you can send messages, photos, videos and files of any type (doc, zip, mp3, etc),
as well as create groups for up to 1000 people or channels for broadcasting to unlimited audiences.
You can write to your phone contacts and find people by their usernames.
As a result, Telegram is like SMS and email combined - and can take care of all your personal
or business messaging needs.
```

:::

## Установить пакет

Для установки приложения, используйте:

```shell
su -
apa update
apa install tuba
```

Вы можете указать не точное название пакета, при выполнении команды произойдет поиск по подключённым репозиториям и предложено несколько вариантов установки:

```shell
su -
apa update
apa install telegram
```

::: details Нажмите для отображения кода

```shell
[root@alt-gnome ~]# apa install telegram
Чтение списков пакетов... Завершено
Построение дерева зависимостей... Завершено
Виртуальный пакет `telegram' предоставляется многими пакетами

Выберите пакет для для установки:
	*1) telegram-desktop (Установлено)
	 2) ayugram-desktop

[0 - выход; -1 - пропустить]
```

:::

Если пакет содержит название виртуального пакета, программ то программа предложит выбрать один из вариантов:

```shell
su -
apa update
apa install java
```

::: details Нажмите для отображения кода

```shell
[root@alt-gnome ~]# apa install java
Чтение списков пакетов... Завершено
Построение дерева зависимостей... Завершено
Виртуальный пакет `java' предоставляется многими пакетами

Выберите пакет для для установки:
	*1) java-21-openjdk
	 2) java-17-openjdk
	 3) java-11-openjdk
	 4) java-1.8.0-openjdk

[0 - выход; -1 - пропустить]

```

:::

Возможно использовать следующие опции:

| Опция                    | Описание                                                                                                                                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-h`, `--hide-progress`  | Не отображать индикатор выполнения. Подходит для журналов.                                                                                                                                                     |
| `-q`, `--quiet`          | Не показывать ничего кроме сообщений об ошибках                                                                                                                                                                |
| `-s`, `--simulate`       | Ничего не делать. Сымитировать действия.                                                                                                                                                                       |
| `-y`, `--yes`            | Ответить 'Да' на все запросы и не спрашивать.                                                                                                                                                                  |
| `-d`, `--download-only`  | Только для скачивания — НЕ устанавливать или распаковывать архивы.                                                                                                                                             |
| `-i`, `--ignore-missing` | Игнорируйте отсутствующие пакеты; Если пакеты не могут быть извлечены или не прошли проверку целостности после извлечения (повреждённые файлы пакетов), эти пакеты будут отложены и будет обработан результат. |
| `-d`, `--download-only`  | Только для скачивания — НЕ устанавливать или распаковывать архивы.                                                                                                                                             |
| `-i`, `--ignore-missing` | Игнорируйте отсутствующие пакеты; Если пакеты не могут быть извлечены или не прошли проверку целостности после извлечения (повреждённые файлы пакетов), эти пакеты будут отложены и будет обработан результат. |
| `-r`, `--reinstall`      | Переустановить пакеты.                                                                                                                                                                                         |

## Удаление приложений

Удаление пакета производится следующей командой:

```shell
su -
apa remove telegram-desktop
```

Возможно использовать следующие опции:

| Опция                      | Описание                                                 |
| -------------------------- | -------------------------------------------------------- |
| `-y`, `--yes`              | Ответить 'Да' на все запросы и не спрашивать.            |
| `-D`, `--with-dependecies` | При удалении пакетов, по возможности удалить зависимости |

## Управление списками репозиториев

Для управления списком репозиториев применяется конфигурация APT и специальная утилита `apt-repo`

Вывод текущих репозиториев:

```shell
apa repo list
```

::: details Нажмите для отображения кода

```shell
➜  ~ apa repo list
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64-i586 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/noarch classic
```

:::

## Управление заданиями репозитория «Альт»

Поиск задания по владельцу, ветке, имени пакета и другому:

```shell
apa task search --owner=rirusha --branch=sisyphus phosh
```

::: details Нажмите для отображения кода

```shell
➜  ~ apa task search --owner=oleg --branch=sisyphus contrast
Задание 362072:
  Репозиторий: sisyphus
  Владелец: oleg
  Состояние: DONE
  Имеет 1 подзаданий
  Подзадания: contrast-0.0.11-alt1
```

:::

Возможно использовать следующие опции:

| Опция                | Описание                                    |
| -------------------- | ------------------------------------------- |
| `-p`, `--by-package` | Найти задания по названию исходного пакета. |
| `-o ?`, `--owner=?`  | Владелец задания.                           |
| `-b ?`, `--branch=?` | Имя ветки.                                  |
| `-s ?`, `--state=?`  | Состояние задания.                          |

Показать информацию о задание с состоянием всех подзаданий:

```shell
apa task show 362072
```

::: details Нажмите для отображения кода

````shell
➜  ~ apa task show 362072
Задание 362072:
  Репозиторий: sisyphus
  Владелец: oleg
  Состояние: DONE
  Подзадание: 200
    Имя пакета: contrast

:::

Устанавливайте задания по номеру. Вы можете указать названия пакетов вместе с номером для автоматической установки задания:

```shell
apa task install 365300
````

Или установите задание в список репозитория:

```shell
apa add install 365300
```

## Операции с ядром и модулями системы

Для того что-бы обновить ядро системы со всеми установленными модулями необходимо:

```shell
apa kernel upgrade
```

Список всех ядер доступных в подключенном репозитории:

```shell
apa kernel list
```
