---
aggregation:
  sisyphus: droidcam
appstream:
  id: droidcam.desktop
  name: DroidCam
  icon: /droidcam/droidcam-logo.svg
  summary: Приложение позволяющее превратить ваше мобильное устройство в веб-камеру для вашего компьютера.
  metadata_license:
    name: BSD 3-Clause
    link: https://github.com/chromium/chromium/blob/main/LICENSE
  developer:
    name: dev47apps
    avatar: /droidcam/droidcam-avatar.png
  url:
    homepage: https://www.dev47apps.com/
    bugtracker: https://github.com/dev47apps/droidcam/issues/
---

# DroidCam

DroidCam — приложение, позволяющее превратить ваше мобильное устройство в веб-камеру компьютера.

![Droidcam](/droidcam/droidcam-1.png)

<!--@include: @apps/_parts/install/content-repo.md-->

## Настройка DroidCam

DroidCam для требует модуль ядра `v4l2loopback`, который можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install kernel-modules-v4l2loopback-***
```

```shell[epm]
epm -i kernel-modules-v4l2loopback-***
```

:::

`***` - версия ядра `un-def` или `std-def`. Узнать нужную версию через терминал

```shell
uname -r`.
```

Необходимо включить установленный модуль. Для этого нужно отредактируйте файл `/etc/modules-load.d/modules.conf`

```shell
su -
nano /etc/modules-load.d/modules.conf
```

В конце файла перейдите на новую строку и добавьте `v4l2loopback`

![v4l2loopback_module](/droidcam/v4l2loopback.gif)

Выйти из Nano можно нажав `Ctrl + X` и согласившись с сохранением изменений. После этого обязательно перезагрузите устройство.

Готово! DroidCam успешно настроен и готов к работе.
