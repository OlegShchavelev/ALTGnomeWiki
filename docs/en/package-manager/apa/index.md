# APA

ALT Packages Assistant is a package management tool for the ALT Linux family of operating systems. It provides a user-friendly interface to perform various operations on packages.

### Features

- Search for a package using fuzzy search if the package was not found during installation
- Convenient work with tasks in repositories
- ALT Packages Assistant combines the functionality of several standard ALT Linux utilities, providing a single user-friendly interface.

## Installation from repository

**APA** can be installed in any familiar and convenient way:

```shell
su -
apt-get update
apt-get install apa
```

## Update information about repositories

The user performs this operation when starting the system for the first time or when updating the list of connected repositories:

```shell
su -
apa update
```

After executing the command, the `apt` utility will update its cache with new information.

::: details Click to display code

```shell
[root@alt-gnome ~]# apa update
Get:1 http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64 release [4233B]
Get:2 http://ftp.altlinux.org ALTLinux/Sisyphus/noarch release [1680B]
Get:3 http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64-i586 release [2854B]
Fetched 8767B in 0s (144kB/s)
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64/classic pkglist
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64/classic release
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/noarch/classic pkglist
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/noarch/classic release
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64-i586/classic pkglist
Hit http://ftp.altlinux.org ALTLinux/Sisyphus/x86_64-i586/classic release
Reading Package Lists... Done
Building Dependency Tree... Done
```

:::

## Update system

To update the system to the latest state, use the following command:

```shell
su -
apa update
apa upgrade
```

## Search for packages

To search for a package in the repository by name or description:

```shell
apa search telegram
```

::: details Click to display code

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

The following options can be used:

| Options              | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| `-n`, `--names-only` | Search only by package names, not long descriptions.                     |
| `-f`, `--full`       | Search only by package names, not long descriptions.                     |
| `-i`, `--installed`  | Searches among installed packages. Works well with `--names-only` option |

Searches for files among packages in the repository using the **ALT Repo API**:

```shell
apa search-file apt-get
```

::: details Click to display code

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

Show a list of installed packages:

```shell
apa list
```

The following options can be used:

| Option                     | Description                                                                |
| -------------------------- | -------------------------------------------------------------------------- |
| `-s`, `--sort`             | Sort the output alphabetically.                                            |
| `-as`, `--asort`           | Sorting is performed in the direction specified by the `--sort` parameter. |
| `-d`, `--with-date`        | Show packages sorted by installation date.                                 |
| `-r`, `--rpm`              | Show packages sorted by installation date.                                 |
| `-qf ?`, `--queryformat=?` | RPM information output format.                                             |

Show package information:

```shell
apa info telegram-desktop
```

::: details Click to display code

```shell
➜  ~ apa info telegram-desktop
Name        : telegram-desktop
Version     : 5.9.0
Release     : alt1
DistTag     : sisyphus+365110.2600.3.2
Architecture: x86_64
Install Date: Wed 18 Dec 2024 10:41:19
Group       : Networking/Instant messaging
Size        : 133076728
License     : GPLv3 with OpenSSL exception
Signature   : RSA/SHA512, Вт 17 дек 2024 00:26:23, Key ID ff979dedda2773bb
Source RPM  : telegram-desktop-5.9.0-alt1.src.rpm
Build Date  : Tue 17 Dec 2024 00:25:51
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

## Install package

To install the application, use:

```shell
su -
apa update
apa install tuba
```

You can specify an inaccurate package name; when you execute the command, the connected repositories will be searched and several installation options will be offered:

```shell
su -
apa update
apa install telegram
```

::: details Click to display code

```shell
[root@alt-gnome ~]# apa install telegram
Reading Package Lists... Done
Building Dependency Tree... Done
Package `telegram' is a virtual package provided by

Select a package to install:
	*1) telegram-desktop (Installed)
	 2) ayugram-desktop

[0 - exit; -1 - skip]
```

:::

If the package contains the name of a virtual package, programs, then the program will prompt you to choose one of the options:

```shell
su -
apa update
apa install java
```

::: details Нажмите для отображения кода

```shell
[root@alt-gnome ~]# apa install java
Выберите пакет для для установки:
Reading Package Lists... Done
Building Dependency Tree... Done
Package `java' is a virtual package provided by

Select a package to install:
	*1) java-21-openjdk
	 2) java-17-openjdk
	 3) java-11-openjdk
	 4) java-1.8.0-openjdk

[0 - exit; -1 - skip]
```

:::

The following options can be used:

| Option                   | Description                                                                                                                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-h`, `--hide-progress`  | Do not display progress bar. Suitable for magazines.                                                                                                                                                     |
| `-q`, `--quiet`          | Show nothing except error messages.                                                                                                                                                                      |
| `-s`, `--simulate`       | Do nothing. Simulate actions.                                                                                                                                                                            |
| `-y`, `--yes`            | Answer 'Yes' to all requests and do not ask.                                                                                                                                                             |
| `-d`, `--download-only`  | For download only - DO NOT install or unpack archives.                                                                                                                                                   |
| `-i`, `--ignore-missing` | Ignore missing packages; If packages cannot be extracted or do not pass the integrity check after extraction (corrupt package files), these packages will be set aside and the result will be processed. |
| `-d`, `--download-only`  | For download only - DO NOT install or unpack archives.                                                                                                                                                   |
| `-i`, `--ignore-missing` | Ignore missing packages; If packages cannot be extracted or do not pass the integrity check after extraction (corrupt package files), these packages will be set aside and the result will be processed. |
| `-r`, `--reinstall`      | Reinstall packages.                                                                                                                                                                                      |

## Removing applications

The package is removed with the following command:

```shell
su -
apa remove telegram-desktop
```

The following options can be used:

| Option                     | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| `-y`, `--yes`              | Answer 'Yes' to all requests and do not ask.             |
| `-D`, `--with-dependecies` | When removing packages, remove dependencies if possible. |

## Manage repository lists

To manage the list of repositories, the APT configuration and the special `apt-repo` utility are used

Output of current repositories:

```shell
apa repo list
```

::: details Click to display code

```shell
➜  ~ apa repo list
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/x86_64-i586 classic
rpm [alt] http://ftp.altlinux.org/pub/distributions/ALTLinux Sisyphus/noarch classic
```

:::

## Managing tasks for the ALT repository

Search for a job by owner, branch, package name, and more:

```shell
apa task search --owner=rirusha --branch=sisyphus phosh
```

::: details Click to display code

```shell
➜  ~ apa task search --owner=oleg --branch=sisyphus contrast
Task 362072:
  Repo: sisyphus
  Owner: oleg
  State: DONE
  Has 1 subtasks
  Subtasks: contrast-0.0.11-alt1
```

:::

The following options can be used:

| Option               | Description                       |
| -------------------- | --------------------------------- |
| `-p`, `--by-package` | Find jobs by source package name. |
| `-o ?`, `--owner=?`  | The owner of the task.            |
| `-b ?`, `--branch=?` | Branch name.                      |
| `-s ?`, `--state=?`  | Job status.                       |

Show information about a task with the status of all subtasks:

```shell
apa task show 362072
```

::: details Click to display code

```shell
➜  ~ apa task show 362072
Task 362072:
  Repo: sisyphus
  Owner: oleg
  State: DONE
  Subtask: 200
    Package name: contrast
```

:::

Set tasks by number. You can specify the package names along with the number to automatically install the job:

```shell
apa task install 365300
```

Or install the job into the repository list:

```shell
apa add install 365300
```

## Operations with the kernel and system modules

In order to update the system kernel with all installed modules, you need to:

```shell
apa kernel upgrade
```

List of all kernels available in the connected repository:

```shell
apa kernel list
```
