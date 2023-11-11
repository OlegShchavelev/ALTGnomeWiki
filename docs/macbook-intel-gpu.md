# MacbookPro enable Intel gpu

## Предисловие

В Macbook Pro 11,3 по умолчанию для Linux разрешена только дискретаная карта Nvidia M750GT, однако для обычной работы ее слишком много, как много и потребления питания при ее работе.

Что-бы исправить это положение дел предлагается следующее решение:

## GPU switcher

- Для переключения режима достаточно скачать приложение gpu-switch с репозитория: 
  - <https://github.com/0xbb/gpu-switch.git>

- Эта программа позволяет переключить видеокарту на требуемую.

::: info
Переключение происходит непосредственно после перезагрузки
:::

```shell
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
для включения видеокарты Intel. Cамое простое это собрать EFI модуль 
для обхода ограничения Apple. Модуль можно собрать следующим образом:

```shell
su -

apt-get install gcc gnu-efi
git clone https://github.com/0xbb/apple_set_os.efi apple-set-os
cd apple-set-os
git apply ../alt-linux-lib64.patch
make
```

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

```shell
mkdir /boot/efi/EFI/custom
cp apple_set_os.efi /boot/efi/EFI/custom
```

- Включаем модуль

``` shell
nano -w /etc/grub.d/40_custom
# в конец файла добавляем
 search --no-floppy --set=root --label EFI
 chainloader (${root})/EFI/custom/apple_set_os.efi
 boot
# сохраняем и выходим из редактора
```

- Обновляем конфигурацию

```shell
grub-mkconfig -o /boot/grub/grub.cfg
update-grub
```

И перезагружаемся...

### Проверка

Что-бы проверить работает или нет, достаточно взглянуть на результат комманды `inxi -G`

```shell
inxi -G

#Graphics:
#  Device-1: Intel Crystal Well Integrated Graphics driver: i915
#  Device-2: NVIDIA GK107M [GeForce GT 750M Mac Edition] driver: nouveau
```
