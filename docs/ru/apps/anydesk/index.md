---
aggregation:
  flatpak:
    id: com.anydesk.Anydesk
    build: unofficial
  epm:
    play:
      id: anydesk
      build: unofficial
  aides:
    id: anydesk
    build: unofficial
appstream:
  id: com.anydesk.Anydesk
  name: AnyDesk
  icon: /anydesk/anydesk-logo.svg
  summary: Удалённое подключение к компьютеру с AnyDesk
  keywords:
    - proprietary
    - restrictions
  developer:
    name: AnyDesk Software GmbH
  metadata_license:
    name: Собственная
    link: https://anydesk.com/ru/terms
  url:
    homepage: https://anydesk.com/
    bugtracker: https://github.com/flathub/com.anydesk.Anydesk/issues
---

# AnyDesk

AnyDesk — программа удалённого доступа, которая позволяет пользователям управлять удалёнными компьютерами и серверами. Она обеспечивает быстрое и стабильное соединение, а также даёт возможность обмена файлами между устройствами. AnyDesk может использоваться для технической поддержки, обучения, доступа к домашним компьютерам и многих других задач, связанных с удалённым управлением и обслуживанием систем.

![AnyDesk](/anydesk/anydesk-1.png)

<!--@include: @ru/apps/.parts/install/content-flatpak.md-->

<!--@include: @ru/apps/.parts/install/content-aides.md-->

<!--@include: @ru/apps/.parts/install/content-epm-play.md-->

Включить сервис AnyDesk можно следующей командой:

```shell
serv anydesk on
```

Для корректной работы необходимо установить библиотеку `libgtkglext`. Она входит в установочный сценарий AnyDesk начиная с версии [eepm](/package-manager/epm/) `3.62.10`. Если установлена более ранняя версия пакетного менеджера, нужно установить библиотеку отдельно:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install libgtkglext
```

```shell[epm]
epm -i libgtkglext
```

:::
