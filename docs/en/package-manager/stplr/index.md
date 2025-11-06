---
title: Stapler
aggregation:
  sisyphus: stplr
appstream:
  name: Stapler
  icon: /stplr/stplr-logo.svg
  summary: Независимая система сборки пакетов для Linux
  developer:
    name: Maxim Slipenko
    nickname: Maks1mS
    avatar: https://avatars.githubusercontent.com/u/36362599?&v=4
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://stplr.dev
    bugtracker: https://altlinux.space/stapler/stplr/issues
---

# Stapler

Stapler is a universal package building and management system for Linux that makes installing software easier and more convenient.

At the heart of each package is a [Staplerfile](https://stplr.dev/docs/dev/staplerfile), a text-based recipe similar to PKGBUILD in Arch Linux. The Staplerfile describes the sources, dependencies, and build steps. From the Staplerfile, Stapler automatically assembles a system package (.deb, .rpm, etc.), which is installed using standard distribution tools.

**Stapler** can be installed via terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install stplr

```

```shell[epm]
epm -i stplr
```

:::

## Basic commands

Add Stapler repository:

```shell
stplr repo add stapler-repo https://example.com/stapler-repo.git
```

Install package:

```shell
stplr install pkg
```

Remove package:

```shell
 stplr remove pkg
```

Build the package from the Stapler repository:

```shell
 stplr build -p pkg
```

Build package from Staplerfile:

```shell
 stplr build -s Staplerfile
```

## Aides

[Aides](https://aides.space) is an unofficial proprietary package repository for ALT Linux, powered by Stapler. It provides access to software not found in the official ALT repositories, offering users an expanded and experimental ecosystem of packages.

::: danger Attention!

1. Disclaimer! Aides is a community project that has not been reviewed, affiliated with, or supported by Basalt SPO LLC or the ALT Linux Team community.

2. Use packages and instructions only at your own risk. Packages are built locally, so check the build scripts.

:::

### Peculiarities

The Aides repository adheres to a number of rules aimed at increasing the predictability and security of packages:

- **Automatic checks.** Each package goes through an automated checks (CI) system, including linting and trial installation. This allows you to make sure that the recipe (_Staplerfile_) is formatted correctly and the package is installed without errors.

- **Source integrity control.** Each package contains hash sums of all source files. This ensures that the build is from trusted and unmodified sources.

- **Application isolation.** Many packages run through [Firejail](<https://wiki.archlinux.org/title/Firejail_(Russian)>), which provides an additional layer of protection and reduces the risks when using third-party software.
