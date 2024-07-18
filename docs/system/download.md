---
sidebar: false
aside: false
archs1:
  x86-64:
    tested:
      - name: Репозиторий ALT
        url: http://nightly.altlinux.org/sisyphus/tested/regular-gnome-latest-x86_64.iso
      - name: Зеркало Яндекс
        url: https://mirror.yandex.ru/altlinux-nightly/tested/regular-gnome-latest-x86_64.iso
    current:
      - name: Репозиторий ALT
        url: http://nightly.altlinux.org/sisyphus/current/regular-gnome-latest-x86_64.iso
      - name: Зеркало Яндекс
        url: https://mirror.yandex.ru/altlinux-nightly/current/regular-gnome-latest-x86_64.iso
  aarch64:
    tested:
      - name: Репозиторий ALT
        url: http://nightly.altlinux.org/sisyphus/tested/regular-gnome-latest-aarch64.iso
    current:
      - name: Репозиторий ALT
        url: http://nightly.altlinux.org/sisyphus/current/regular-gnome-latest-aarch64.iso
archs2:
  tested:
    summary: Образ обновляется после проверки сопровождающим проекта, обновление образа зависит от объёма изменений и других факторов
    recommended: true
    archs:
      x86-64:
        - name: Репозиторий ALT
          url: http://nightly.altlinux.org/sisyphus/tested/regular-gnome-latest-x86_64.iso
        - name: Зеркало Яндекс
          url: https://mirror.yandex.ru/altlinux-nightly/tested/regular-gnome-latest-x86_64.iso
      aarch64:
        - name: Репозиторий ALT
          url: http://nightly.altlinux.org/sisyphus/tested/regular-gnome-latest-aarch64.iso
  current:
    summary: Обновляется без проверки сопровождающим проекта, автоматически инструментами Сизифа, обновление образа еженедельно (каждую среду)
    archs:
      x86-64:
        - name: Репозиторий ALT
          url: http://nightly.altlinux.org/sisyphus/current/regular-gnome-latest-x86_64.iso
        - name: Зеркало Яндекс
          url: https://mirror.yandex.ru/altlinux-nightly/current/regular-gnome-latest-x86_64.iso
      aarch64:
        - name: Репозиторий ALT
          url: http://nightly.altlinux.org/sisyphus/current/regular-gnome-latest-aarch64.iso
archs3:
  tested:
    summary: Образ обновляется после проверки сопровождающим проекта, обновление образа зависит от объёма изменений и других факторов
    recommended: true
    links:
      - anchor: x86-64 (Репозиторий ALT)
        id: http://nightly.altlinux.org/sisyphus/tested/regular-gnome-latest-x86_64.iso
      - anchor: x86-64 (Зеркало Яндекс)
        id: https://mirror.yandex.ru/altlinux-nightly/tested/regular-gnome-latest-x86_64.iso
      - anchor: aarch64 (Репозиторий ALT)
        id: http://nightly.altlinux.org/sisyphus/tested/regular-gnome-latest-aarch64.iso
  current:
    summary: Обновляется без проверки сопровождающим проекта, автоматически инструментами Сизифа, обновление образа еженедельно (каждую среду)
    links:
      - anchor: x86-64 (Репозиторий ALT)
        id: http://nightly.altlinux.org/sisyphus/current/regular-gnome-latest-x86_64.iso
      - anchor: x86-64 (Зеркало Яндекс)
        id: https://mirror.yandex.ru/altlinux-nightly/current/regular-gnome-latest-x86_64.iso
      - anchor: aarch64 (Репозиторий ALT)
        id: http://nightly.altlinux.org/sisyphus/current/regular-gnome-latest-aarch64.iso
---

# Скачать ALT Regular Gnome

:::warning
На текущий момент, у репозитория производителя отсутствуют сертификаты безопасности SSL (https соединение), это связанно с устройством информационного портала, возможное изменение статуса в 2024 году, после релиза бранча P11
:::

Доступны несколько наборов образов, специфичных для конкретных сред/архитектур. Для скачивания доступны две ветки:

- **tested** — образ обновляется после проверки сопровождающим проекта, обновление образа зависит от объёма изменений и других факторов;
- **current** — обновляется без проверки сопровождающим проекта, автоматически инструментами Сизифа, обновление образа еженедельно (каждую среду);

<DownloadList1 />

<hr />
<hr />

<DownloadList2 />

<hr />
<hr />

<DownloadList3 />

<hr />
<hr />

<DownloadListAmper/>

## Запись на DVD и USB Flash

[ALT Media Writer](https://www.altlinux.org/Запись_образов_на_DVD_и_USB_Flash)
