# APT

Advanced packaging tool — программа для установки, обновления и удаления программных пакетов в операционных системах Debian и основанных на них, иногда также используется в дистрибутивах, основанных на Mandrake, например ALT Linux.

С помощью пакетного менеджера Вы можете:

- получить индексы
- обновить все установленные пакеты
- установить новые пакеты
- удалить установленные пакеты
- найти пакеты в репозитории

Все операции с пакетами проводятся в терминале при помощи пакетного менеджера. Для большинства команд пакетного менеджера нужны права суперпользователя. Хотя, для операции поиска, достаточно обычных прав пользователя.

В семействе операционных систем Альт используется <mark>порт-версия пакетного менеджера АРТ</mark>, который был модифицирован для работы с менеджером пакетов RPM. В базовой конфигурации пакетного менеджера APT обновление ядра отключено. Чтобы обновить ядро, нужно использовать терминальную команду `update-kernel`. Для управления списком репозиториев APT используется утилита `apt-repo`. Схема добавления репозиториев <mark>имеет свои отличительные особенности связи с поддержкой RPM-пакетов</mark>.

## Обновление информации о репозиториях

Данную операцию пользователь производит при первичном запуске системы или при обновление списка подключённых репозиториев:

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

## Обновить систему

Чтобы обновить систему до актуального состояния, используйте следующую команду:

```shell
su -
apt-get update
apt-get dist-upgrade
```

:::info
В операционных системах семейства Альт пакетный менеджер (APT) автоматически не обновляет ядро вместе с обновлением системы, поскольку обновление такого критичного компонента системы может привести к нежелательным последствиям.
:::

## Установка приложений

Установка пакета производится следующей командой:

```shell
su -
apt-get update
apt-get install firefox
```

Вы можете указать сразу несколько пакетов через пробел:

```shell
su -
apt-get update
apt-get install firefox chromium
```

:::info
Обратите внимание, когда устанавливаются несколько пакетов, действие нужно подтвердить нажатием клавиши Y
:::

## Удаление пакетов

Удаление пакета производится следующей командой:

```shell
su -
apt-get update
apt-get remove firefox
```

Для удаления двух и более пакетов необходимо написать их названия через пробел:

```shell
su -
apt-get update
apt-get remove firefox chromium
```

Удаление неиспользуемых пакетов:

```shell
su -
apt-get autoremove
```

:::danger
Данную команду нужно использовать с осторожностью, т.к. она может удалить нужные пакеты
:::

:::info
Если вы удалили по зависимости метапакет, при условии что он был установлен в процессе установки ALT Regular Gnome, то содержание метапакета не будет удалено командой autoremove
:::

Удалить пакет вместе с установленными вместе с зависимостями:

```shell
su -
apt-get remove -D пакет
```

## Поиск по выражению или части названия пакета

Для поиска пакета в репозитории по названию или описанию:

```shell
apt-cache search telegram
```

::: details Нажмите для отображения кода

```shell
cutegram - Cutegram is a telegram client by Aseman Land
libqtelegram-ae - Most powerfull telegram library that created using C++ and Qt.
libqtelegram-ae-devel - Development files for libqtelegram-ae
libtgvoip - VoIP library for Telegram clients
matterbridge - A simple chat bridge
nheko - Desktop client (QT) for the Matrix protocol
purple-telegram - Libpurple protocol plugin for Telegram support
tdlib - Cross-platform library for building Telegram clients
telegram-bot-api - The Telegram Bot API provides an HTTP API for creating Telegram Bots.
telegram-desktop - Telegram Desktop messaging app
libtelegram-qt5 - Qt library for Telegram network
libtelegram-qt5-devel - Development headers and pkg-config for TelegramQt library
telegramqml - Telegram API tools for QtQml and Qml
telepathy-morse - Morse is a Qt-based Telegram connection manager for the Telepathy framework.
tgsend - Simple Telegram bot sender
i586-libqtelegram-ae - Most powerfull telegram library that created using C++ and Qt.
i586-libqtelegram-ae-devel - Development files for libqtelegram-ae
i586-libtelegram-qt5 - Qt library for Telegram network
i586-libtelegram-qt5-devel - Development headers and pkg-config for TelegramQt library
i586-libtgvoip - VoIP library for Telegram clients
i586-purple-telegram - Libpurple protocol plugin for Telegram support
i586-telegramqml - Telegram API tools for QtQml and Qml
ansible - SSH-based configuration management, deployment, and task execution system
buildbot - Python-based continuous integration testing framework
hass-core - Home automation platform
python3-module-hass - Home automation platform
python3-module-Telethon - Pure Python 3 Telegram client library
python3-module-pyrogram - Elegant, modern and asynchronous Telegram MTProto API framework in Python for users and bots
python3-module-social-core - Python Social Auth - Core
python3-module-telebot - Python Telegram bot api
python3-module-telegram-bot - Python interface for the Telegram Bot API
python3-module-tqdm - A fast, extensible progress bar for Python and CLI
python3-module-salt - Management component for salt, a parallel remote execution system
python3-module-yt_dlp - Python 3 module for yt-dlp
zabbix-in-telegram - Zabbix Notifications with graphs in Telegram
```

:::

Для поиска только по названию пакета:

```shell
apt-cache search --names-only ^telegram
```

::: details Нажмите для отображения кода

```shell
telegram-bot-api - The Telegram Bot API provides an HTTP API for creating Telegram Bots.
telegram-desktop - Telegram Desktop messaging app
telegramqml - Telegram API tools for QtQml and Qml
```

:::

## Работа с репозиторием

apt-repo — утилита для управления списком репозиториев APT.

Вывод текущих репозиториев:

```shell
apt-repo
```

::: details Нажмите для отображения кода

```shell
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64-i586 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/noarch classic
```

:::

Чтобы добавить репозитории конкретной задачи, выполните следующую команду:

```shell
su -
apt-repo add 329850
```

<!--

Установка всех доступных пакетов (`*-devel`, `*-checkinstall`, `*-debuginfo`), связанных с задачей

```shell
su -
apt-repo test task 329850
```

-->

Удалить все задания из репозитория:

```shell
su -
apt-repo clean
apt-get update
```

Удалить задание по номеру:

```shell
su -
apt-repo rm task 329850
apt-get update
```
