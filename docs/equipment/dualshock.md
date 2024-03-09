# Подключение геймпадов семейства DualShock

## DualShock 3

### Подготовка

Для подключения геймпада-контроллера DualShock 3 нам потребуется отключить параметр ClassicBondedOnly

::: warning
Данная функция включена по умолчанию для обеспечения безопасности сопряжения HID устройств [(CVE-2023-45866)](https://security-tracker.debian.org/tracker/CVE-2023-45866), но наш геймпад не поддерживает работу с шифрованием. Для совместимости ее придется отключить.
:::

Для отключения данной функции нам потребуется создать файл `input.conf` в директории `/etc/bluetooth/`

```shell
sudo nano /etc/bluetooth/input.conf
```

Далее добавить в него данное содержимое, нажать `ctrl+x` для выхода и `Y` для сохранения изменений

```nano
[General]
ClassicBondedOnly=false
```

Дальше перезагрузим сервис bluetooth для применения настроек

```shell
systemctl restart bluetooth
```

### Подключение

Далее для первого сопряжения геймпада нам потребуется выполнить следующие действия:

1. Открыть терминал и ввести 
```bluetoothctl```

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

Готово, DualShock 3 подключен. В дальнейшем будет достаточно включить bluetooth и нажать кнопку `PS`.

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

### Устранение ошибок

#### Установка для реплик DualShock 4

Для китайских реплик **DualShock 4** необходимо будет собрать модуль ядра `hid-sony-fix-dkms`.

Для установки необходимы: `dkms`, `kernel-headers`, `kernel-headers-modules` и [git](/git).

Перед установкой нужно узнать свою [ветку ядра](/kernel#переключить-ветку-ядра).

#### Установка зависимостей

::: code-group

```shell[un-def]
su -
apt-get install dkms kernel-headers-un-def kernel-headers-modules-un-def git
```

```shell[std-def]
su -
apt-get install dkms kernel-headers-std-def kernel-headers-modules-std-def git
```

#### Установка модуля

:::

```shell
su -
git clone https://github.com/ozz-is-here/hid-sony-fix-dkms.git /usr/src/hid-sony-fix-dkms-0.1
dkms install -m hid-sony-fix-dkms -v 0.1
```

### Запуск и использование

После установки драйверов необходимо выполнить:

```shell
su -
echo 'blacklist hid_sony' >> /etc/modprobe.d/blacklist-hid_sony.conf
```

После создания конфигурации необходимо перезапустить операционную систему.
