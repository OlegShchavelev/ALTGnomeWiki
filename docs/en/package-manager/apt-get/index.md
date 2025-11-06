# APT

Advanced packaging tool is a program for installing, updating and uninstalling software packages on Debian and Debian-based operating systems, sometimes also used in Mandrake-based distributions such as ALT Linux.

With the package manager you can:

- get indexes
- update all installed packages
- install new packages
- remove installed packages
- find packages in the repository

All operations with packages are carried out in the terminal using a package manager. Most package manager commands require superuser rights. Although, for the search operation, normal user rights are sufficient.

The Alt family of operating systems uses a <mark>port version of the ART package manager</mark>, which has been modified to work with the RPM package manager. In the basic configuration of the APT package manager, kernel updates are disabled. To update the kernel, you need to use the `update-kernel` terminal command. To manage the list of APT repositories, use the `apt-repo` utility. The scheme for adding repositories <mark>has its own distinctive features of connection with support for RPM packages</mark>.

## Update information about repositories

The user performs this operation when starting the system for the first time or when updating the list of connected repositories:

```shell
su -
apt-get update
```

After executing the command, apt will update its cache with the new information.

::: details Click to display code

```shell
su -
apt-get update
Get:1 http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64 release [4238B]
Get:2 http://ftp.altlinux.org ALTLinux/Sisyphus/noarch release [1680B]
Get:3 http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64-i586 release [2859B]
Fetched 8777B in 1s (4554B/s)
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64/classic pkglist
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64/classic release
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/noarch/classic pkglist
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/noarch/classic release
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64-i586/classic pkglist
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64-i586/classic release
```

:::

## Update system

To update the system to the latest state, use the following command:

```shell
su -
apt-get update
apt-get dist-upgrade
```

:::info
On ALT operating systems, the package manager (APT) does not automatically update the kernel along with a system update, since updating such a critical system component may lead to undesirable consequences.
:::

## Installing applications

The package is installed with the following command:

```shell
su -
apt-get update
apt-get install firefox
```

You can specify several packages at once separated by a space:

```shell
su -
apt-get update
apt-get install firefox chromium
```

:::info
Please note that when multiple packages are installed, the action must be confirmed by pressing the Y key
:::

## Removing packages

The package is removed with the following command:

```shell
su -
apt-get update
apt-get remove firefox
```

To remove two or more packages, you must write their names separated by a space:

```shell
su -
apt-get update
apt-get remove firefox chromium
```

Removing unused packages:

```shell
su -
apt-get autoremove
```

:::danger
This command must be used with caution because... it can remove the necessary packages
:::

:::info
If you have removed a metapackage as a dependency, provided it was installed during the ALT Regular Gnome installation process, then the contents of the metapackage will not be removed by the autoremove command
:::

Remove the package along with the installed dependencies:

```shell
su -
apt-get remove -D пакет
```

## Search by expression or part of the package name

To search for a package in the repository by name or description:

```shell
apt-cache search telegram
```

::: details Click to display code

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

To search by package name only:

```shell
apt-cache search --names-only ^telegram
```

::: details Click to display code

```shell
telegram-bot-api - The Telegram Bot API provides an HTTP API for creating Telegram Bots.
telegram-desktop - Telegram Desktop messaging app
telegramqml - Telegram API tools for QtQml and Qml
```

:::

## Working with the repository

apt-repo is a utility for managing a list of APT repositories.

Output of current repositories:

```shell
apt-repo
```

::: details Click to display code

```shell
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64-i586 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/noarch classic
```

:::

To add repositories for a specific task, run the following command:

```shell
su -
apt-repo add 329850
```

<!--

Installing all available packages (`*-devel`, `*-checkinstall`, `*-debuginfo`) associated with the task

```shell
su -
apt-repo test task 329850
```

-->

Delete all tasks from the repository:

```shell
su -
apt-repo clean
apt-get update
```

Delete task by number:

```shell
su -
apt-repo rm task 329850
apt-get update
```
