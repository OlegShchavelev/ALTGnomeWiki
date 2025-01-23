---
tags:
  - Устройства/Геймпады
  - DualShock
createdAt: 02-29-2024
progress: 70
---

# Подключение геймпадов семейства DualShock

## DualShock 3

### Подготовка

Для подключения геймпада-контроллера DualShock 3 нужно отключить параметр ClassicBondedOnly

::: warning
Данная функция включена по умолчанию для обеспечения безопасности сопряжения HID устройств [(CVE-2023-45866)](https://security-tracker.debian.org/tracker/CVE-2023-45866), но геймпад не поддерживает работу с шифрованием. Для совместимости её нужно отключить.
:::

Для отключения данной функции необходимо в файле `/etc/bluetooth/input.conf` в разделе `[General]` добавить `ClassicBondedOnly=false`:

```shell
sudo sed "s/\[General\]/\0\nClassicBondedOnly=false/" -i /etc/bluetooth/input.conf
```

Далее необходимо перезапустить сервис Bluetooth для применения настроек

```shell
systemctl restart bluetooth
```

### Подключение

Далее для первого сопряжения геймпада необходимо выполнить следующие действия:

1. Открыть терминал и ввести:

```shell
bluetoothctl
```

2. Нажать кнопку `PS` на геймпаде и найти в консоли строку

```
[NEW] Device XX:XX:XX:XX:XX:XX PLAYSTATION(R)3 Controller
#Где `XX:XX:XX:XX:XX:XX` - MAC-адрес нашего геймпада
```

3. Выполнить команды

```
trust XX:XX:XX:XX:XX:XX
pair XX:XX:XX:XX:XX:XX
```

Готово, DualShock 3 подключён. В дальнейшем будет достаточно включить Bluetooth и нажать кнопку [[PS]].

## DualShock 4

Для подключения геймпада-контроллера DualShock 4 нам потребуется установить драйвера.

### Установка драйвера

#### Установка из репозитория

Драйвер можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get install ds4drv
```

```shell[epm]
epm -i ds4drv
```

:::

### Подключение

Для того, чтобы геймпад автоматически подключался, запустите демон `ds4drv`

```shell
systemctl enable --now ds4drv
```

Далее введите геймпад в состояние поиска, зажав одновременно [[Share]] и [[PS]] (по середине, с логотипом PlayStation)

Когда светодиод геймпада будет светиться синим, это будет означать, что контролер успешно подключён

### Устранение ошибок

#### Установка для реплик DualShock 4

Для китайских реплик **DualShock 4** необходимо будет собрать модуль ядра `hid-sony-fix-dkms`.

::: info

Данный DKMS модуль поддерживается исключительно его разработчиком на Github, в случае поломки сборки на новых версиях ядра просим оставлять issue на Github разработчика, а не баг в багзилле

:::

#### Установка зависимостей

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install dkms git update-kernel
```

```shell[epm]
epm -i dkms git update-kernel
```

:::


### Установка заголовочных файлов ядра для сборки модуля

```shell
su -
update-kernel -H
reboot
```

#### Установка модуля

```shell
su -
git clone https://github.com/ozz-is-here/hid-sony-fix-dkms.git /usr/src/hid-sony-fix-dkms-0.1
dkms install -m hid-sony-fix-dkms -v 0.1
reboot
```

### Удаление модуля

```shell
su -
dkms remove -m hid-sony-fix-dkms -v 0.1
rm -rf /usr/src/hid-sony-fix-dkms-0.1
```
