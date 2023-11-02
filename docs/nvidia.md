# NVIDIA

Данная статья описывает процесс установки и настройки проприетарного драйвера графических карт NVIDIA

## Смена открытых драйверов на проприетарные

Для перехода с nouveau на NVIDIA рекомендуется сначала обновить ядро:

```shell
su -l root
update-kernel
```
Для вступление в силу необходимо перезагруть операциционную систему

Установим пропоритарный драйвера NVIDIA:

```shell
su -l root
rpm -e $(rpm -qf `modinfo -F filename nouveau`)
apt-get install nvidia_glx_common && nvidia-install-driver
make-initrd
```

::: danger
Не следует запускать фирменный инсталятор драйвера NVIDIA из .run-файла!
:::

## Cессия Wayland на закрытых драйверах NVIDIA

Активируем **Wayland** сессию в **ALT Regular Gnome** для видеокарт NVIDIA с установленными пропоритарными драйверами.

```shell
su -
mcedit /etc/sysconfig/grub2
```
Добавляем в параметр `GRUB_CMDLINE_LINUX_DEFAULT` значение `nvidia-drm.modeset=1` и сохраняем.

```shell
su -
grub-mkconfig -o /boot/grub/grub.cfg
ln -s /dev/null /etc/udev/rules.d/61-gdm.rules
```

Перезагружаем операционную систему, выберите в списке сессию Gnome.

::: tip
Wayland не работает без `nvidia_drm.modeset=1`, а modeset не работает на драйверах младше 400-ой серии

Несовместимые карты: 
- GT750M Mac edition (устанавливается драйвер 390-ой серии, при 417-ой максимально доступной)
:::

## «Неизвестный монитор» в настройках дисплеев в сессии Wayland

Внесем изменение в конфигурацию **GRUB**:

```shell
su -
mcedit /etc/sysconfig/grub2
```

Добавляем в параметр `GRUB_CMDLINE_LINUX_DEFAULT` значение `initcall_blacklist=simpledrm_platform_driver_init` и сохраняем.

```shell
su -
grub-mkconfig -o /boot/grub/grub.cfg
```