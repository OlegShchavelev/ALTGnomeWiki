---
aggregation:
    sisyphus: LibreOffice-still
    flatpak:
        id: org.libreoffice.LibreOffice
        build: official
appstream:
    id: org.libreoffice.LibreOffice
    name: LibreOffice
    icon: /libreoffice/libreoffice-logo.png
    summary: Мощный офисный пакет LibreOffice
    metadata_license:
        name: MPL-v2.0
        link: https://www.mozilla.org/en-US/MPL/2.0/
    developer:
        name: The Document Foundation
    url:
        homepage: https://www.libreoffice.org/
        bugtracker:
            name: documentfoundation.org
            link: https://bugs.documentfoundation.org/
        donation: https://www.libreoffice.org/donate/
        translate: https://www.libreoffice.org/community/localization/
---

# LibreOffice

LibreOffice — мощный офисный пакет, полностью совместимый с 32-64-битными системами. Переведён более чем на 30 языков. Поддерживает большинство популярных операционных систем, включая Windows, macOS и системы, основанные на ядре GNU/Linux,.

## Установка из репозитория

В репозитории Сизиф есть две версии **LibreOffice**, а именно:

-   **LibreOffice** — стабильная версия с передовыми нововведениями (Fresh-версия)
-   **LibreOffice (Still version)** — стабильная версия, прошедшая длительное тестирование

Установить любую из версий **LibreOffice** можно любым привычным и удобным способом:

**Установка через терминал**

:::tabs
== Still
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice-still
```

```shell[epm]
epm -i LibreOffice-still
```

== Fresh
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice
```

```shell[epm]
epm -i LibreOffice
```

:::

:::info
Для улучшенной интеграции с GNOME, можно использовать пакеты `LibreOffice-gtk3` и `LibreOffice-still-gtk3` соответственно.

Однако стоит учитывать, что при **Тёмном стиле** оформления Gnome, возможно не читаемость интерфейса офисного пакета

устанавливаются пакеты также как и сам Libreoffice
:::

<!--@include: @apps/_parts/install/content-flatpak.md-->

## Шрифты в LibreOffice

[В документации LibreOffice](https://wiki.documentfoundation.org/Fonts) перечисленны шрифты, идущие в комплекте из коробки. В ALT Regular Gnome вам может понадобиться установить дополнительные пакеты, к примеру для использования `Times New Roman` от Microsoft, установите в терминале следующий пакет:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-ms
```

```shell[epm]
epm -i fonts-ttf-ms
```

:::

Если в LibreOffice отсутствует шрифт, который вы используйте, [установите дополнительный шрифт](/add-fonts) и он появится в списке.
