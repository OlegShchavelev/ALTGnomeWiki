# Appstream CLI

Appstream CLI is a utility for accessing a pool of software components, as well as for direct work with AppStream metadata, including checking for compliance with the specification.

## Installation from repository

The Appstream CLI is part of the `appstream` package, which can be installed via the terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install appstream
```

```shell[epm]
epm -i appstream
```

:::

## Using the Appstream CLI Utility

Full list of Appstream CLI commands:

```
appstreamcli --help
```

### Get metadata in Appstream CLI

Metadata search, `search` command:

```shell
appstreamcli search Yandex Browser
```

::: details Appstream CLI results on request

```shell
Identifier: yandex-browser.desktop [desktop-application]
Name: Yandex Browser
Summary: The web browser from Yandex
Package: yandex-browser-stable
Homepage: http://browser.yandex.ru/
Icon: yandex-browser.png
---
Identifier: yandex-browser-alt-education.desktop [desktop-application]
Name: Yandex Browser Education Customization
Summary: Yandex Browser addon for Alt Education
Package: yandex-browser-alt-education
Homepage: http://browser.yandex.ru/
---
Identifier: ru.yandex.Browser [desktop-application]
Name: Yandex Browser
Summary: Web browser from Yandex
Bundle: flatpak:app/ru.yandex.Browser/x86_64/stable
Homepage: https://browser.yandex.ru
Icon: ru.yandex.Browser.png
```

:::

Or you can specify the ID in the `get` command:

```shell
appstreamcli get yandex-browser.desktop
```

::: details Appstream CLI metadata by application ID

```shell
Identifier: yandex-browser.desktop [desktop-application]
Name: Yandex Browser
Summary: The web browser from Yandex
Package: yandex-browser-stable
Homepage: http://browser.yandex.ru/
Icon: yandex-browser.png
```

:::
