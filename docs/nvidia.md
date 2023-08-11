# NVIDIA

Данная статья описывает процесс установки и настройки проприетарного драйвера графических карт NVIDIA

## Смена открытых драйверов на проприетарные

Для перехода с nouveau на NVIDIA рекомендуется сначала обновить ядро:

```bash
su -l root
update-kernel
```
Для вступление в силу необходимо перезагруть операциционную систему

Установим пропоритарный драйвера NVIDIA:

```bash
su -l root
rpm -e $(rpm -qf `modinfo -F filename nouveau`)
apt-get install nvidia_glx_common && nvidia-install-driver
make-initrd
```

::: danger
Не следует запускать фирменный инсталятор драйвера NVIDIA из .run-файла!
:::
