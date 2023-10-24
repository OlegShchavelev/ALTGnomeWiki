# Macbook

Статья будет об установке Alt Regular Gnome, как завести все устройства и настроить систему, чтобы она жила на уровне с MacOS (никакой магии нет, есть только настройки)
Статья охватывает только установку автора на Macbook 11,1 он же Macbook Pro 13" Late 2013

## Установка
Настоятельно рекомедую, возьми диск или nas или ещё что либо равное объёму диска макбука и сделай TimeMachine резервную копию. 
Линукс это круто и без возвратный прыжок в этот мир, может помочь бороться с трудностями, но лучше иметь бекап, чем не иметь. 
Восстановится можно будет в тот же день, в котором начали - синяя таблетка нео и ты никогда не узнаешь суровой реальности Linux.

0. Качаем образ и пишем на флешку
1. Выключаем мак и подключаем флешку
2. Включаем мак с зажатой клавишей [alt/option]
3. На этапе выбора нам нужен жёлтый диск с странным названием EFI, это наш
4. Далее устанавливаем, как на обычным PC, никакой разницы.

## Настройка

Настраивать нам нужно многое, но всё не так страшно. Для начала нам нужна сеть

### WiFi
Прошли те времена, когда это вызывало боль, на сегодня Broadcom даёт свои драйвера под распространение, нам нужно их только установить:

```shell
$ su -
# apt-get install kernel-modules-bcmwl-un-def
# apt-get insall bcmwl-kernel-conf
# reboot
```
> Источник: https://www.altlinux.org/Wi-fi_Broadcom (данные по поддержке устарели) 

После перезагрузки появиться возможность подключиться и использовать wifi.

### Улучшаем энергосбережение

0. Перво-наперво - заходим в меню в правом верхнем углу и выбираем энергосбережение.

1. PC6/PC7 состояния CPU 
Для начала, нам нужно сказать маку, что мы не притворяемся linux или windows, мы вообще macos, ну почти.
И это разблокирует возможности переключаться в состояния PC6 и PC7, то что даст нам 5-7W потребления и почти 10ч от батреи, как на MacOS 

```shell
su -
mcedit /etc/default/grub
```

Добавляем в параметр GRUB_CMDLINE_LINUX_DEFAULT значение в конец `acpi_osi=` прям вот так, пустой. И сохраняем.

`grub-mkconfig -o /boot/grub/grub.cfg` обновляем GRUB с новой конфигурацией и перезагружаемся

Источник: https://www.jonayling.net/battery-life-under-linux/

2. Powertop нам друг
```shell
su -l
powertop
```
Табом дойти до tunable вкладки, заодно можете полюбоваться Idle State в левом столбце Pkg(HW) должны быть проценты не нулевые у C6/C7
Дойдя до Tunable - пробелом протыкиваем всё Bad в Good кроме клавиатуры и трекпадом иначе может не выходить из сна.

Так мы уже разительно снизили потребление 

# Facetime Camera

Запуск камеры в пару простых действий

1. Создадим bash скрипт, который сделает всё по красоте за нас. Например пусть будет facetimehd.sh
```bash
#!/bin/bash
set -e

export CONFIG_MODULE_SIG=n
export CONFIG_MODULE_SIG_ALL=n
# For current kernel
export KERNELRELEASE=$(cat /proc/version | awk '{print $3}')

temp_dir=$(mktemp -d)
echo "Installing FacetimeHD camera for $KERNELRELEASE"
cd $temp_dir
git clone https://github.com/patjak/facetimehd-firmware.git
git clone https://github.com/patjak/bcwc_pcie.git

cd $temp_dir/facetimehd-firmware
pwd
make
make install
cd $temp_dir/bcwc_pcie
pwd
make
make install
rm -rf $temp_dir

if [ ! -d "/etc/modules-load.d" ]; then
  mkdir -p "/etc/modules-load.d"
fi

cat > "/etc/modules-load.d/facetimehd.conf" << EOL
videobuf2-core
videobuf2_v4l2
videobuf2-dma-sg
facetimehd
EOL


# Workaround for depmod being skipped above with error:
# Warning: modules_install: missing 'System.map' file. Skipping depmod
echo "Generate modules.dep and map files"
sudo depmod

echo "Adding kernel modules"
sudo modprobe -r bdc_pci
sudo modprobe facetimehd

echo "Install complete"
```
2. Делаем его исполняемым `chmod +x facetimehd.sh`
3. Собираем и устанавливаем `sudo ./facetimehd.sh`
4. Если будет ошибка `modprobe: FATAL: Module bdc_pci not found.` не паримся и делаем так `sudo modprobe facetimehd`

Ну всё, вот камера и работает :)

Источник: https://gist.github.com/ukn/a2f85e3420ae7d0f64db2274a9bc106b 

Можно попробовать с калибровкой цветов отсюда: https://gist.github.com/xyb/879f3bdf93cb5e8fc3d9d9675ae272cb


- [ ] #ToDo tune kernel - стабильно дойти до PC7
- [ ] #ToDo tune планировщиков для улучшениея жизни от батареи
