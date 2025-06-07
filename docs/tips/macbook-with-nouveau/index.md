# Проблема с Nouveau на Macbook (Pro)

## Симптомы:

```
янв 16 22:22:32 altstation kernel: nouveau 0000:01:00.0: Direct firmware load for nouveau/nve7_fuc084 failed with error -2
янв 16 22:22:32 altstation kernel: nouveau 0000:01:00.0: Direct firmware load for nouveau/nve7_fuc084d failed with error -2
янв 16 22:22:32 altstation kernel: nouveau 0000:01:00.0: msvld: unable to load firmware data
янв 16 22:22:32 altstation kernel: nouveau 0000:01:00.0: msvld: init failed, -19
```

## Вариант решения

### Подготовка

```shell
$ su -
# mkdir -p /tmp/nouveau && cd /tmp/nouveau
# wget http://us.download.nvidia.com/XFree86/Linux-x86_64/340.108/NVIDIA-Linux-x86_64-340.108.run
# wget https://raw.githubusercontent.com/envytools/firmware/a0b9f9be0efad90cc84b8b2eaf587c3d7d350ea9/extract_firmware.py
# sh NVIDIA-Linux-x86_64-340.108.run --extract-only
# python3 extract_firmware.py
```

### Установка

```shell
# mkdir /lib/firmware/nouveau
# cp nv* /lib/firmware/nouveau/
# cp vuc-* /lib/firmware/nouveau/
# reboot
```

### Запуск Wayland на Nouveau

```shell
su -
nano /etc/X11/xorg.conf.d/20-nouveau.conf
```

```text
Section "Device"
    Identifier "nouveau"
    Driver "nouveau"
    Option "DRI" "3"
    Option "AccelMethod" "glamor"
EndSection
```

Сохранить и перезапустить компьютер.

### Источники информации

- https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-firmware/nvidia-firmware/nvidia-firmware-340.32-r1.ebuild
- https://nouveau.freedesktop.org/VideoAcceleration.html
- https://github.com/envytools/firmware
- https://download.nvidia.com/XFree86/Linux-x86_64/
