---
aggregation:
  epm:
    play:
      id: yandex-disk
      build: unofficial
appstream:
  name: Яндекс Диск
  icon: /yandex-disk/yandex-disk-logo.png
  summary: Облачный сервис компании Яндекс.
  keywords:
    - proprietary
  developer:
    name: Yandex
    avatar: /yandex-disk/yandex-disk-avatar.png
  metadata_license:
    name: Собственная
    link: https://yandex.ru/legal/disk_agreement/
  url:
    homepage: https://360.yandex.ru/disk/
---

# Яндекс Диск

Яндекс Диск — облачный сервис компании Яндекс, позволяющий пользователям хранить свои данные на серверах в «облаке» и передавать их другим пользователям в Интернете.

<!--@include: @apps/.parts/install/content-epm-play.md-->

## Настройка Яндекс Диск

Для корректной настройки Яндекс Диска воспользуйтесь терминалом, настройка Яндекс диска через **Индикатор Яндекс.Диск** работает некорректно.

```shell
yandex-disk setup
```

:::info
Ниже информация по отключению автозапуска Яндекс.Диска
:::

При снятии галочки "Запускать сервис Яндекс.Диск при запуске индикатора" в настройках индикатора, и возникновении ситуации когда при старте системы запускается индикатор и начинается синхронизация Яндекс.Диск, необходимо удалить следующий файл:

```shell
rm ~/.config/autostart/Yandex.Disk.desktop
```
