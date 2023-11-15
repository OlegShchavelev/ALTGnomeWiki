# Macbook

Статья будет об установке Alt Regular Gnome, как завести все устройства и настроить систему, чтобы она жила на уровне с MacOS (никакой магии нет, есть только настройки)
Статья охватывает только установку автора на Macbook 11,1 он же Macbook Pro 13" Late 2013

## Установка
Настоятельно рекомендую, возьми диск или nas или ещё что либо равное объёму диска макбука и сделай TimeMachine резервную копию. 
Линукс это круто и без возвратный прыжок в этот мир, может помочь бороться с трудностями, но лучше иметь бекап, чем не иметь. 
Восстановится можно будет в тот же день, в котором начали - синяя таблетка нео и ты никогда не узнаешь суровой реальности Linux.

0. Качаем образ и пишем на флешку
1. Выключаем мак и подключаем флешку
2. Включаем мак с зажатой клавишей [alt/option]
3. На этапе выбора нам нужен жёлтый диск с странным названием EFI, это наш
4. Далее устанавливаем, как на обычным PC, никакой разницы.

## Настройка

Настраивать нам нужно многое, но всё не так страшно. Для начала нам нужна сеть
Для начала перед всеми манипуляциями обновите систему
```bash
su -
apt-get update && apt-get dist-upgrade
```

### WiFi
Прошли те времена, когда это вызывало боль, на сегодня Broadcom даёт свои драйвера под распространение, нам нужно их только установить:

```shell
su -
apt-get install kernel-modules-bcmwl-un-def
apt-get install bcmwl-kernel-conf
reboot
```

::: warning
Источник: https://www.altlinux.org/Wi-fi_Broadcom
Данные по поддержке в таблице устарели, не смотрите туда
:::

После перезагрузки появиться возможность подключиться и использовать wifi.

### Улучшаем энергосбережение

0. Перво-наперво - заходим в меню в правом верхнем углу и выбираем энергосбережение.

1. PC6/PC7 состояния CPU 
Для начала, нам нужно сказать маку, что мы не притворяемся linux или windows, мы вообще macos, ну почти.
И это разблокирует возможности переключаться в состояния PC6 и PC7, то что даст нам 5-7W потребления и почти 10ч от батареи, как на MacOS 

```shell
su -
mcedit /etc/default/grub
```

Добавляем в параметр GRUB_CMDLINE_LINUX_DEFAULT значение в конец `acpi_osi=` прям вот так, пустой. И сохраняем.

`grub-mkconfig -o /boot/grub/grub.cfg` обновляем GRUB с новой конфигурацией и перезагружаемся

Источник: https://www.jonayling.net/battery-life-under-linux/

2. Powertop нам друг
```shell
su -
powertop
```
Табом дойти до tunable вкладки, заодно можете полюбоваться Idle State в левом столбце Pkg(HW) должны быть проценты не нулевые у C6/C7
Дойдя до Tunable - пробелом протыкиваем всё Bad в Good кроме клавиатуры и трекпадом иначе может не выходить из сна.

Так мы уже разительно снизили потребление 

# Facetime Camera

Запуск камеры в пару простых действий

0. Установка всего необходимого 
```bash
su -
apt-get install git kernel-headers-un-def kernel-headers-modules-un-def
```

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

# Включаем двойную графику и собираем GPU-Switch
### Предисловие
В Macbook Pro 11,3 по умолчанию для Linux разрешена только дискретная карта Nvidia GT 750M, однако для обычной работы ее слишком много, как много и потребления питания при ее работе.

Что-бы исправить это положение дел предлагается следующее решение:

### GPU switcher
Для переключения режима достаточно скачать приложение gpu-switch с репозитория 

https://github.com/0xbb/gpu-switch.git

Эта программа позволяет переключить видеокарту на требуемую.

::: info
Переключение происходит непосредственно после перезагрузки
:::

```bash
su -

git clone https://github.com/0xbb/gpu-switch.git
cd gpu-switch

# для интегрированной карты (Intel)
./gpu-switch -i 

# или для дискретной карты (NVidia)
./gpu-switch -d 
```

### Включаем Intel

Однако на этом ноутбуке требуется дополнительные действия 
для включения видеокарты Intel. Самое простое это собрать EFI модуль 
для обхода ограничения Apple. Модуль можно собрать следующим образом:

```bash
su -

apt-get install gcc gnu-efi
git clone https://github.com/0xbb/apple_set_os.efi apple-set-os
cd apple-set-os
git apply ./alt-linux-lib64.patch
make
```

Сохраните патч ниже, как `alt-linux-lib64.patch` для команды выше в папку `apple-set-os`
```patch
commit 7f29a978c13de7cacc6d4d1c00bb160bf3bc51ae
Author: iTux <itux@idev.pro>
Date:   Sun Oct 29 17:13:43 2023 +0300

    Fix libdir

diff --git a/Makefile b/Makefile
index 31e1982..77b4d5d 100644
--- a/Makefile
+++ b/Makefile
@@ -1,4 +1,5 @@
 ARCH	= x86_64
+LIBDIR	= /usr/lib64
 
 TARGET	= apple_set_os.efi
 FORMAT 	= efi-app-$(ARCH)
@@ -9,8 +10,8 @@ CFLAGS	= -I$(INC) -I$(INC)/$(ARCH) \
 		 -fno-stack-protector -maccumulate-outgoing-args \
 		 -Wall -D$(ARCH) -Werror -m64 -mno-red-zone
 
-LDFLAGS	= -T /usr/lib/elf_$(ARCH)_efi.lds -Bsymbolic -shared -nostdlib -znocombreloc \
-		  /usr/lib/crt0-efi-$(ARCH).o
+LDFLAGS	= -T $(LIBDIR)/elf_$(ARCH)_efi.lds -Bsymbolic -shared -nostdlib -znocombreloc \
+		  $(LIBDIR)/crt0-efi-$(ARCH).o
 
 %.efi: %.so
 	objcopy -j .text -j .sdata -j .data -j .dynamic -j .dynsym -j .rel \
@@ -18,7 +19,7 @@ LDFLAGS	= -T /usr/lib/elf_$(ARCH)_efi.lds -Bsymbolic -shared -nostdlib -znocombr
 
 %.so: %.o
 	$(LD) $(LDFLAGS) -o $@ $^ $(shell $(CC) $(CFLAGS) -print-libgcc-file-name) \
-	/usr/lib/libgnuefi.a
+	$(LIBDIR)/libgnuefi.a
 
 all: $(TARGET)
```


Далее надо подключить этот модуль

- Копируем
```bash
mkdir /boot/efi/EFI/custom
cp apple_set_os.efi /boot/efi/EFI/custom
```

- Включаем модуль
``` bash
nano -w /etc/grub.d/40_custom
# в конец файла добавляем
 search --no-floppy --set=root --label EFI
 chainloader (${root})/EFI/custom/apple_set_os.efi
 boot
# сохраняем и выходим из редактора
```

- Обновляем конфигурацию
```bash
grub-mkconfig -o /boot/grub/grub.cfg
update-grub
```

И перезагружаемся...

### Проверка

Что-бы проверить работает или нет, достаточно взглянуть 
на результат команды `inxi -G`

```bash
inxi -G

#Graphics:
#  Device-1: Intel Crystal Well Integrated Graphics driver: i915
#  Device-2: NVIDIA GK107M [GeForce GT 750M Mac Edition] driver: nouveau
```


# Полезные ссылки:
- https://github.com/Dunedan/mbp-2016-linux большой репозиторий для макбуков 2016 год+
- https://wiki.archlinux.org/title/Mac/Troubleshooting# - решение проблем с маком
- https://github.com/0xbb/gpu-switch GPU переключатель на маках
- https://nixaid.com/linux-on-macbookpro-old/ не плохая статья можно подчерпнуть что-то полезное
- http://lukeluo.blogspot.com/2014/04/mac-book-pro-113-linux-customization-7_21.html?m=1 кастомизации для бука 2013 16" 11.3 

# ToDo
- [ ] Табличку поддержки может добавить, что работает, а что нет
- [ ] #ToDo tune kernel - стабильно дойти до PC7
- [ ] #ToDo tune планировщиков для улучшения жизни от батареи
