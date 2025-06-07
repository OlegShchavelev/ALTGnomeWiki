# Appstream CLI

Appstream CLI — утилита доступа к пулу программных компонентов, а также для прямой работы с метаданными AppStream, включая проверку на соответствие спецификации.

## Установка из репозитория

Appstream CLI входит состав пакета `appstream`, который можно установить через терминал:

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

## Использование утилиты Appstream CLI

Полный список команд Appstream CLI:

```
appstreamcli --help
```

### Получить метаданные в Appstream CLI

Поиск метаданных, команда `search`:

```shell
appstreamcli search Yandex Browser
```

::: details Результаты Appstream CLI по запросу

```shell
Идентификатор: yandex-browser.desktop [desktop-application]
Имя: Yandex Browser
Сводка: The web browser from Yandex
Пакет: yandex-browser-stable
Домашняя станица: http://browser.yandex.ru/
Значок: yandex-browser.png
---
Идентификатор: ru.yandex.Browser [desktop-application]
Имя: Yandex Browser
Сводка: The web browser from Yandex
Пакет: flatpak:app/ru.yandex.Browser/x86_64/stable
Домашняя станица: https://browser.yandex.ru
Значок: ru.yandex.Browser.png
---
Идентификатор: io.kapsa.drive [desktop-application]
Имя: S3Drive
Сводка: Convert S3, SFTP, WebDAV or Rclone back-end into your encrypted storage
Пакет: flatpak:app/io.kapsa.drive/x86_64/stable
Домашняя станица: https://s3drive.app
Значок: io.kapsa.drive.png
```

:::

Или можно указать ID в команде `get`:

```shell
appstreamcli get yandex-browser.desktop
```

::: details Метаданные Appstream CLI по ID приложения

```shell
Идентификатор: yandex-browser.desktop [desktop-application]
Имя: Yandex Browser
Сводка: The web browser from Yandex
Пакет: yandex-browser-stable
Домашняя станица: http://browser.yandex.ru/
Значок: yandex-browser.png
```

:::
