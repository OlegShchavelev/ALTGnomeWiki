---
title: EPM
aggregation:
  sisyphus: eepm
appstream:
  name: EPM
  icon: /epm/etersoft.png
  summary: Единая система управления пакетами.
  developer:
    name: Этерсофт
  metadata_license:
    name: GNU AGPLv3
    link: https://choosealicense.com/licenses/agpl-3.0/
  url:
    homepage: https://github.com/Etersoft/eepm
    bugtracker: https://github.com/Etersoft/eepm/issues
---

# Unified package management (epm) command

**EPM** is a package management command that has the same interface on all systems. With an interface similar to rpm, apt and urpm, it performs the necessary operations **on any platform**.

## Installation from repository

**EPM** can be installed using the terminal:

```shell
su -
apt-get update
apt-get install eepm
```

## Commands

| Command description                              |       EPM Command       |      Command for ALT Linux       |
| ------------------------------------------------ | :---------------------: | :------------------------------: |
| Installing a package by name on the system       |   `epm -i (package)`    |   `apt-get install (package)`    |
| Installing the package file on the system        | `epm -i (package file)` | `apt-get install (package file)` |
| Removing a package from the system               |   `epm -e (package)`    |    `apt-get remove (package)`    |
| Searching for a package in the repository        |     `epm -s (text)`     |    `apt-cache search (text)`     |
| Checking the presence of a package on the system |   `epm -q (package)`    | `rpm -qa (pipe) grep (package)`  |
| List of installed packages                       |        `epm -qa`        |            `rpm -qa`             |
| Search by names of installed packages            |    `epm -qp (word)`     |          `grep (word)`           |
| File affiliation with (installed) package        |     `epmqf (file)`      |         `rpm -qf (file)`         |
| List of files in (installed) package             |   `epm -ql (package)`   |       `rpm -ql (package)`        |
| Display package information                      |   `epm -ql (package)`   |    `apt-cache show (package)`    |
| Update distribution                              |      `epm upgrade`      |      `apt-get dist-upgrade`      |

### System information

To display information about the system, enter in the terminal:

```shell
epm print info
```

Example of system information output

```shell
distro_info v20230406 (EPM version 3.60.5-alt1) : Copyright © 2007-2023 Etersoft

                       Pretty name (--pretty): ALT Regular (20240112) (Sisyphus)
           (--distro-name / --distro-version): Sisyphus / 20240112 (orig. Sisyphus 20230819)
         Base distro name (-d) / version (-v): ALTLinux/Sisyphus
     Vendor distro name (-s) / Repo name (-r): alt / Sisyphus
                 Package manager/type (-g/-p): apt-rpm / rpm
            Base OS name (-o) / CPU arch (-a): linux x86_64
                 CPU norm register size  (-b): 64 bit
                          Virtualization (-i): (host system)
                        CPU Cores/MHz (-c/-z): 16 / 1393 MHz
                      System memory size (-m): 15412 MiB
                 Running service manager (-y): systemd
            Bug report URL (--bug-report-url): https://bugs.altlinux.org/
```

:::

## EPM Play utility

**EPM Play** is a tool that allows you to automatically install and remove packages using prepared scripts, without using third-party repositories.

```shell
epm play [options] [argument]
```

### Install the application

To install an application, use `epm play <app>`:

```shell
epm play telegram
```

:::info
To get the current list of applications, use the `epm play` command in the terminal or [visit the site](https://download.etersoft.ru/pub/download/epm-app-versions/epm-play-list.txt)
:::

To install an alternative version of the application:

```shell
epm play telegram = beta
```

To get a list of alternative versions possible for installation, use the `--product-alternatives` option:

```shell
epm play --product-alternatives telegram
```

### Delete application

To remove an application use `epm play --remove <app>`:

```shell
epm play --remove telegram
```

Возможно удалить приложение используя пакетный менеджер:

```shell
epm -e Telegram
```

### Update the application to the latest version

To update an application in EPM Play **use** the `--update` option and the application ID:

```shell
epm play --update telegram
```

To update the list of installed applications, use the `--update` option and the `all` argument:

```shell
epm play --update all
```

An alternative method for updating the application is to reinstall the application:

```shell
epm play telegram
```

### Working with the list of applications

Get a list of applications available for installation:

```shell
epm play
```

Get a list of installed applications:

```shell
epm play --list
```

:::warning
If the application identifiers match, the list will contain applications installed using the `apt-get` package manager
:::

Get a list of installed utilities:

```shell
epm play --list-scripts
```

:::info
Utilities are a group of installation scripts that automatically install or remove: drivers, development tools and other system applications of various types.
:::

Get a complete list of applications and utilities:

```shell
epm play --list-all
```

To get a list without application/utility descriptions, use the `--short` option, works with the following `[--list|--list-scripts|--list-all]` options:

```shell
epm play --short --list-all
```

Check if the application is installed using the `--installed` option and the application ID:

```shell
epm play --installed telegram
```

To get a list of alternative versions possible for installation, use the `--product-alternatives` option and the application identifier:

```shell
epm play --product-alternatives telegram
```

## EPM Repack utility

EPM Repack is a tool that allows you to convert (repack) packages from third-party manufacturers into the RPM standard of the ALT operating system family

| Package manager | Distribution                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `rpm`           | ASPLinux, SUSE (+ Enterprise Desktop/Server), Mandriva, ROSA, Mandrake, PCLinuxOS, Fedora, Red Hat (+ Enterprise), Scientific, CentOS |
| `deb`           | Debian, Ubuntu, Mint, Runtu, mcst                                                                                                     |
| `tgz`           | Slackware, MOPSLinux                                                                                                                  |
| `tbz`           | FreeBSD                                                                                                                               |
| `tbz2`          | Gentoo                                                                                                                                |
| `apk`           | Alpine                                                                                                                                |
| `pkg.gz`        | SunOS                                                                                                                                 |

Let's install the `deb` application using the epm repack utility:

```shell
epm repack tonfotos.deb
epm -i tonfotos-1.6.5-epm1.repacked.2.x86_64.rpm
```

An alternative input is:

```shell
epm -i tonfotos.deb
```

When installing a package, epm will automatically detect that the installed file is not a standard one and run the epm repack command, and after repacking the package, it will automatically install the repacked package.

:::info
First download the deb package [on the manufacturer’s official website](https://tonfotos.com). Go to the folder with the downloaded Tonfotos program, in my case:

```shell
cd Downloads
```

:::

## Installing applications using appinstall

To install and remove applications from the `epm play` directory using the graphical interface, we recommend using appinstall

**appinstall** can be installed using the terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install appinstall
```

```shell[epm]
epm -i appinstall
```

:::
