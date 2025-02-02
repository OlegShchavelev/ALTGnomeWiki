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

::: warning
Увы программа не будет работать на ядре выше `6.6` из за отсутствия модуля ядра `v4l2loopback`. Для восстановления работы придется перейти на ядро `6.6` по инструкции из пункта [«Переключить ветку ядра»](#переключить-ветку-ядра)

Узнать текущую версию ядра:

```shell
uname -r
```

Данная информация актуальна, если [тут](https://packages.altlinux.org/ru/search/?q=kernel-modules-v4l2loopback&branch=sisyphus) на момент прочтения не появится модуль нужной версии.
:::

<!--@include: @apps/.parts/install/content-repo.md-->

## Настройка DroidCam

Для работы DroidCam требуется модуль ядра `v4l2loopback`, который можно установить через терминал или "Центр Управления системой" (ЦУС/Alterator) и требуется активировать, так как после установки пакета он не включается автоматически.

### Установка модуля ядра

#### 1. Через Центр управления системой

Для установки модуля через ЦУС необходимо:

1. Перейти в раздел "Обновление ядра"
2. Нажать кнопку [[Обновить ядро]]
3. Поставить галку напротив `v4l2loopback`
4. Нажать кнопку [[Установить модули]]

![alterator-v4l2loopback](/droidcam/alterator-v4l2loopback.gif)

#### 2. Через терминал

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install kernel-modules-v4l2loopback-6.6
```

```shell[epm]
epm -i kernel-modules-v4l2loopback-6.6
```

:::

### Включение модуля ядра

К сожалению, после простой установки модуля ничего не заработает, т.к. модуль не активируется автоматически. Требуется включить его загрузку. Для этого необходимо отредактировать файл `/etc/modules-load.d/modules.conf`.

Проще всего это будет сделать через терминал:

```shell
su -
nano /etc/modules-load.d/modules.conf
```

В конце файла перейдите на новую строку и добавьте `v4l2loopback`

![v4l2loopback_module](/droidcam/v4l2loopback.gif)

Выйти из Nano можно нажав `Ctrl + X` и согласившись с сохранением изменений. После этого обязательно перезагрузите устройство.

Готово! DroidCam успешно настроен и готов к работе.
