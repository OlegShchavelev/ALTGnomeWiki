# NVIDIA

Данная статья описывает процесс установки и настройки проприетарного драйвера графических карт NVIDIA

## Смена открытых драйверов на проприетарные

### Способ 1. Вручную

Для перехода с nouveau на NVIDIA рекомендуется сначала обновить ядро:

```shell
su -l root
update-kernel
```
Для вступление в силу необходимо перезагрузить операционную систему

Установим проприетарный драйвера NVIDIA:

```shell
su -l root
rpm -e $(rpm -qf `modinfo -F filename nouveau`)
apt-get install nvidia_glx_common && nvidia-install-driver
make-initrd
```

::: danger
Не следует запускать фирменный инсталлятор драйвера NVIDIA из .run-файла!
:::

### Способ 2. Через EPM

Для упрощения процесса установки проприетарного драйвера графических карт NVIDIA возможно использование [интерфейса EPM](/epm).

Выполним команду:

```shell
su -
epm play switch-to-nvidia
```

::: tip
Для корректной установки во время выполнения скрипта следует читать сообщения из консоли и следовать указанным там шагам. Возможно, потребуется несколько перезагрузок. Например, для автоматического обновления ядра.
:::

После успешного завершения работы скрипта перезагружаем операционную систему.

## Выбор проприетарного драйвера в ЦУС

::: warning
Данная инструкция рекомендована для использования только на станционарных ПК, в которых графическая карта NVIDIA будет использована как основная. Для ноутбуков с гибридной графикой рекомендуется пропустить этот шаг и воспользоваться [утилитой switcheroo-control](/nvidia#выбор-графического-устроиства-при-запуске-приложения-с-типом-устроиств-dual-gpu).
:::

После перезагрузки устройства следует зайти в Центр управления системой.

![nvidia-acc-1](/nvidia/nvidia-acc-1.png)

Выбираем параметр **Дисплей** в категории **Графический интерфейс**.

![nvidia-acc-2](/nvidia/nvidia-acc-2.png)

В графе **Драйвер** нажимаем на кнопку **Другой драйвер**.

![nvidia-acc-3](/nvidia/nvidia-acc-3.png)

В открывшемся окне выбираем **nvidia - NVIDIA (proprietary)**.

После выбора соглашаемся, нажимаем **ОК** и **Применить** и снова перезагружаем операционную систему.

## Утилита NVIDIA Settings

Утилита для настройки и оптимизации графических параметров на компьютерах с видеокартами Nvidia. Она позволяет пользователям настраивать качество изображения, разрешение экрана, а также различные параметры, связанные с производительностью видеокарты. С помощью Nvidia Settings можно также включить или отключить определенные функции, такие как вертикальная синхронизация или сглаживание.

В зависимости от сессии Xorg или Wayland возможны различаться набор настроек в утилите NVIDIA Settings. Например, в Wayland нельзя настроить вертикальную синхронизацию и тройную буферизацию, так как они работают по-другому в этом окружении. Также в Wayland нет поддержки G-Sync, так как эта технология работает только с Nvidia и требует специального оборудования. В целом, основные функции Nvidia Settings доступны в обоих окружениях, но некоторые дополнительные возможности могут быть ограничены.

### Установка из репозитория

**NVIDIA Settings** можно установить любым привычным и удобным способом

**Установка через терминал**
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install nvidia-settings
```
```shell[epm]
epm -i nvidia-settings
```
:::

## Cессия Wayland на закрытых драйверах NVIDIA

Активируем **Wayland** сессию в **ALT Regular Gnome** для видеокарт NVIDIA с установленными проприетарными драйверами.

:::info
Закрытый драйвер Nvidia поддерживает GBM, Wayland и аппаратное ускорение с помощью XWayland, начиная с драйвера серии 470.x
:::

Для каждого графического устройства NVIDIA существует свой диапазон поддерживаемых драйверов, конкретную информацию вы можете узнать на сайте производителя [Загрузка драйверов NVIDIA](https://www.nvidia.com/Download/Index.Aspx?lang=ru)

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
Активируем интерфейсы управления питания nvidia. Помимо предотвращения проблем с сохранением видеопамяти при входе в спящий режим и гибернизации [(см. источник)](https://download.nvidia.com/XFree86/Linux-x86_64/550.40.07/README/powermanagement.html), активация этих интерфейсов необходима для [правил](https://gitlab.gnome.org/GNOME/gdm/-/blob/main/data/61-gdm.rules.in#L51) разрешения протокола wayland на GDM.(Чтобы wayland режим был доступен при выборе сессии)

```shell
su -
systemctl enable nvidia-suspend.service nvidia-resume.service nvidia-hibernate.service
```
В опциях драйверов nvidia указываем о смене способа сохранения видеопамяти.

```shell
su -
cat << _EOF_ > /etc/modprobe.d/nvidia_videomemory_allocation.conf
options nvidia NVreg_PreserveVideoMemoryAllocations=1
options nvidia NVreg_TemporaryFilePath=/run
_EOF_
```
::: tip
Для сохранения видеопамяти важно, чтобы файловая система имела поддержку безымянный временных файлов и имела достаточный объём для сохранения видеопамяти. Объём, равный сумме всей видеопамяти + 5% от неё, будет вполне достаточно для её сохранения. 
:::

Перезагружаем операционную систему, в интерфейсе выбора сессий появится дополнительные пункты для входа в Xorg, выберите в списке сессию GNOME.

::: warning Для пользователей Macbook
Wayland не работает без `nvidia-drm.modeset=1`, а modeset не работает на драйверах младше 400-ой серии

Несовместимые карты:
- GT750M Mac edition (устанавливается драйвер 390-ой серии, при 417-ой максимально доступной)
:::

## Выбор графического устройства при запуске приложения с типом устройств dual-GPU

Для пользовательского выбора графического устройства при запуске приложения в рабочем окруженнии GNOME, необходимо установить утилиту `switcheroo-control` 

:::info
Для систем, имеющих как встроенный, так и выделенный графический процессор, switcheroo-control по умолчанию принудительно использует встроенный графический процессор для экономии энергии.
:::

**Установка через терминал**
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install switcheroo-control
systemctl enable --now switcheroo-control.service
```
```shell[epm]
epm -i switcheroo-control
systemctl enable --now switcheroo-control.service
```
:::

После установки приложения switcheroo-control, в меню появится пункт «Запустить с помощью выделенной видеокарты»

![Запустить с помощью выделенной видеокарты](/nvidia/nvidia-1.jpg)

## Проверка версии и возможностей платформы Vulcan

Программа vulkaninfo отображает информацию о поддерживаемых возможностях Vulkan для пользователей графических устройст NVIDIA. Необходимо установить пакет `vulkan-tools`

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install vulkan-tools
```
```shell[epm]
epm -i vulkan-tools
```
:::

Для вывода информации `vulkaninfo` в терминале введите:

```shell
vulkaninfo --summary
```

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

:::info 
Данная проблема может привести к некорректной работе устройств ввода: мышка, тачпад. Особенно часто данные проблемы проявляются в играх.
:::

:::info 
Данное решение приводит к невозможности входа в tty.
:::

## Данные об оборудовании и ПО пользователей за 2024 год.

Ознакомиться с таблецей вы можете перейдя [по ссылке](https://cloud.alt-gnome.ru/index.php/s/JSCj9gxB7j5boPg)

## Смена проприетарных (закрытых) на открытые драйвера NVIDIA 

Для установки открытых драйверов NOUVEAU, необходимо следующее

::: code-group
```shell[apt-get]
su -
apt-get remove nvidia_glx_common
mcedit /etc/sysconfig/grub2 # тут может быть и nano, и vi, и другой редактор
# удаляем initcall_blacklist и nvidia-drm.modeset
# сохраняем и выходим
grub-mkconfig -o /boot/grub/grub.cfg
# удаляем так-же ссылку на 61-gdm.rules
rm /etc/udev/rules.d/61-gdm.rules
# ставим драйвер (в нашем случае для ядра un-def)
apt-get install kernel-modules-drm-nouveau-un-def
# (опционально) переустановить xorg обвязку
apt-get install --reinstall xorg-dri-nouveau xorg-drv-noveau
# перезагрузиться
reboot
```

```shell[epm]
su -
apt-get remove nvidia_glx_common
mcedit /etc/sysconfig/grub2 # тут может быть и nano, и vi, и другой редактор
# удаляем initcall_blacklist и nvidia-drm.modeset
# сохраняем и выходим
grub-mkconfig -o /boot/grub/grub.cfg
# удаляем так-же ссылку на 61-gdm.rules
rm /etc/udev/rules.d/61-gdm.rules
# ставим драйвер (в нашем случае для ядра un-def)
epm install kernel-modules-drm-nouveau-un-def
# (опционально) переустановить xorg обвязку
epm reinstall xorg-dri-nouveau xorg-drv-noveau
# перезагрузиться
reboot
```
:::

Как только все загрузилось и мы убедились что NOUVEAU заработало

```shell
su -
make-initrd
# подождать пока соберется initrd
# посмотреть что в выводе сборки initrd присутствует nouveau
reboot
```

