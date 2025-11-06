# Проблема с Broadcom 4322 (4311) на Macbook Pro 2010 года

## Симптомы

- Не работает Wi-Fi
- Не подключается к сети

### При использовании `bcmwl` драйвера

- На драйверах `kernel-modules-bcmwl-un-def` не работает сканирование сети
- Ошибки в логах:

```shell
ERROR @wl_notify_scan_status :
wlp2s0 Scan_results error (-22)
```

### При использовании firmware установленного через `b43-fwcutter`

```shell
b43-phy0 ERROR: DMA RX reset timed out
b43-phy0 ERROR: DMA TX reset timed out
b43 ssb0:0: timeout waiting for bitmask 01800000 on register 0F90 to clear
```

## Обходное решение

1. Подготовка пакетов
::: tabs
==apt-get
```shell[apt-get]
su -
apt-get remove kernel-modules-bcmwl-un-def bcmwl-kernel-config
apt-get install b43-fwcutter
```
==epm
```shell[epm]
su -
epm remove kernel-modules-bcmwl-un-def bcmwl-kernel-config
epm install b43-fwcutter
```

:::

2. Установка firmware

```shell
# скачать с этого ресурса или найти в другом месте
wget http://www.lwfinger.com/b43-firmware/broadcom-wl-5.100.138.tar.bz2

tar xjf broadcom-wl-5.100.138
mkdir -p /lib/firmware

# устанавливаем firmware
b43-fwcutter -w /lib/firmware broadcom-wl-5.100.138/linux/wl_apsta.o

# Обходное решение
nano -w /etc/modprobe.d/b43.conf

# Добавить туда строку (вот эта строка и есть фикс, отключающий DMA, медленно но будет работать)
options b43 pio=0 qos=0 verbose=3

# Сохранить и перезапустить
```

## Источники

- <https://lore.kernel.org/netdev/RO2P215MB193879B2D99DD0BAF59EFA92A721A@RO2P215MB1938.LAMP215.PROD.OUTLOOK.COM/>
