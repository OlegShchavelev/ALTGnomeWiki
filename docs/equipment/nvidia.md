# NVIDIA

Данная статья описывает процесс установки и настройки проприетарного драйвера графических карт NVIDIA. 

Данные драйвера разрабатываются самой компанией [NVIDIA](https://www.nvidia.com/) и являются проприетарной разработкой, в следствии чего поставляются отдельно от ядра Linux и требуют отдельной установки (В отличии от Nouveau, которые уже есть в системе).

Также, из-за постоянного развития и изменения драйверов NVIDIA, разные версии драйверов имеют свои нюансы и ограничения, именно поэтому [важно знать версию своих драйверов и информацию, связанную с ними](nvidia.md#настроика-драиверов).

Необходимая версия драйверов ставится автоматически, при установке основного пакета [nvidia_glx_common](https://packages.altlinux.org/ru/sisyphus/srpms/nvidia_glx_common/) и не требует дополнительных мероприятий.

## Установка (Смена Nouveau драйверов на проприетарные)

### Способ 1. Вручную

Для перехода с Nouveau на NVIDIA рекомендуется сначала обновить ядро:


```shell
su -
update-kernel
```
Для дальнейшей корректной установки проприетарных драйверов NVIDIA, **необходимо перезагрузить операционную систему**.

Установим проприетарный драйвера NVIDIA:

```shell
su -
rpm -e $(rpm -qf `modinfo -F filename nouveau`)
apt-get install nvidia_glx_common
nvidia-install-driver
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
Данная инструкция рекомендована для использования только на стационарных ПК, в которых графическая карта NVIDIA будет использована как основная. Для ноутбуков с гибридной графикой рекомендуется пропустить этот шаг и воспользоваться [утилитой switcheroo-control](/nvidia#выбор-графического-устроиства-при-запуске-приложения-с-типом-устроиств-dual-gpu).
:::

::: info
Удостоверьтесь, что у вас стоит пакет 'alterator-x11'. Если его нет, установите.

Без него не будет необходимого параметра "Дисплей"
:::

После перезагрузки устройства следует зайти в Центр управления системой.

![nvidia-acc-1](/nvidia/nvidia-acc-1.png)

Выбираем параметр **Дисплей** в категории **Графический интерфейс**.

![nvidia-acc-2](/nvidia/nvidia-acc-2.png)

В графе **Драйвер** нажимаем на кнопку **Другой драйвер**.

![nvidia-acc-3](/nvidia/nvidia-acc-3.png)

В открывшемся окне выбираем **nvidia - NVIDIA (proprietary)**.

После выбора соглашаемся, нажимаем **ОК** и **Применить** и снова перезагружаем операционную систему.

## Настройка драйверов

::: info
Настройки описаны, в первую очередь, для актуальных драйверов.

Поэтому перед началом настройки, сначала узнайте версию драйверов и ознакомьтесь с информацией, связанной с ними (См. блоки "Для драйверов XXX", где XXX это версия установленных у вас драйверов).
:::

Чтобы узнать версию драйверов, необходимо ввести:
```shell
inxi -G
```

## Актуальные драйвера (545.29 и новее)

### [KMS](https://www.kernel.org/doc/html/latest/gpu/drm-kms.html)
Для драйверов версии 545 и выше, нет необходимости указывать modeset в параметрах ядра. Эта настройка будет правильно установлена вместе с установкой самих драйверов. (Настройка будет установлена в /etc/modprobe.d/nvidia_common.conf)

::: info
Для работы в сессии X11 настройка KMS необязательна. 
Единственная причина, это Plymouth (см. ниже)
:::

::: tip
Чтобы проверить, работает ли KMS, напишите в консоли от имени root (Администратора):

'cat /sys/module/nvidia_drm/parameters/modeset' 

Если консоль выводит "Y" значит работает
:::

### Ранняя загрузка KMS
Для корректного отображения Plymouth ( отображения лого загрузки от загрузчика до окна приглашения к входу), добавляем модули NVIDIA в initramfs. 
Для этого в `/etc/initrd.mk` добавляем строку `MODULES_LOAD += nvidia nvidia-modeset nviida-drm nvidia-uvm`
```shell
su -
mcedit /etc/initrd.mk
```
Далее необходимо закомментировать `BLACKLIST_MODULES += nvidia nvidia-drm nvidia-modeset` в `/usr/share/make-initrd/features/nvidia/config.mk`
```shell
su -
sed -i 's/BLACKLIST_MODULES += nvidia nvidia-drm nvidia-modeset/#BLACKLIST_MODULES += nvidia nvidia-drm nvidia-modeset/' /usr/share/make-initrd/features/nvidia/config.mk
```
::: details
Файл '/usr/share/make-initrd/features/nvidia/config.mk' идёт вместе с пакетом nvidia_glx_common. Изначально, make-initrd самостоятельно добавлял эти модули без явного указания от пользователя. Такое поведение посчитали нежелательным и добавили в исключения (См. подробности в ["Ошибка 39108 - guess-drm добавляет лишние модули"](https://bugzilla.altlinux.org/39108)).

По этой же причине, с модулями NVIDIA в initramfs не будет работать [замена драйверов nouveau/NVIDIA "на лету"](https://www.altlinux.org/Nvidia#%D0%97%D0%B0%D0%BC%D0%B5%D0%BD%D0%B0_%D0%B4%D1%80%D0%B0%D0%B9%D0%B2%D0%B5%D1%80%D0%BE%D0%B2_nouveau/nvidia_%22%D0%BD%D0%B0_%D0%BB%D0%B5%D1%82%D1%83%22).
:::

Генерируем initramfs
```shell
make-initrd
```
### Сессия Wayland

Активируем **Wayland** сессию в **ALT Regular Gnome** для видеокарт NVIDIA с установленными проприетарными драйверами.

#### Прежде всего должна работать [KMS](./nvidia.md#kms)


#### Настраиваем поддержку управления питания видеокарты
Активируем интерфейсы управления питания NVIDIA. Эти интерфейсы необходимы для предотвращения проблем с сохранением видеопамяти при входе в спящий режим и гибернизации. [(см. источник)](https://download.nvidia.com/XFree86/Linux-x86_64/550.40.07/README/powermanagement.html)

```shell
su -
systemctl enable nvidia-suspend.service nvidia-resume.service nvidia-hibernate.service
```
В опциях драйверов NVIDIA указываем о смене способа сохранения видеопамяти:

```shell
su -
cat << _EOF_ > /etc/modprobe.d/nvidia_videomemory_allocation.conf
options nvidia NVreg_PreserveVideoMemoryAllocations=1
options nvidia NVreg_TemporaryFilePath=/run
_EOF_
make-initrd
```

::: tip
Для сохранения видеопамяти важно, чтобы файловая система имела поддержку безымянных временных файлов и имела достаточный объём для сохранения видеопамяти. Объём, равный сумме всей видеопамяти + 5% от неё, будет вполне достаточно для её сохранения. 
:::

Перезагружаем операционную систему, в интерфейсе выбора сессий появится дополнительные пункты для входа в Xorg, выберите в списке сессию GNOME.


## Для драйверов < 545.29

### [KMS](https://www.kernel.org/doc/html/latest/gpu/drm-kms.html)
Если у вас версия драйвера ниже 545, или же вы решили откатить до более ранней версии, добавляем в параметр `GRUB_CMDLINE_LINUX_DEFAULT` значение `nvidia-drm.modeset=1` и генерируем новых grub.cfg:

```shell
su -
mcedit /etc/sysconfig/grub2
grub-mkconfig -o /boot/grub/grub.cfg
```

В остальном, информация актуальна как для [последних драйверов](./nvidia.md#актуальные-драивера-545-29-и-новее)

## Для драйверов < 470.223.02

### Проблема с Intel:
Драйвера 470.223.02 и более ранние версии, начиная с Linux 5.18 могут работать неправильно в системах с процессорами Intel 11-го поколения и новее, из-за несовместимости с [Indirect Branch Tracking](https://edc.intel.com/content/www/us/en/design/ipla/software-development-platforms/client/platforms/alder-lake-desktop/12th-generation-intel-core-processors-datasheet-volume-1-of-2/007/indirect-branch-tracking/).
Можно отключить его, добавив значение `ibt=off` в параметр `GRUB_CMDLINE_LINUX_DEFAULT`:

```shell
su -
mcedit /etc/sysconfig/grub2
grub-mkconfig -o /boot/grub/grub.cfg
```

::: warning
Имейте в виду, что эта функция безопасности отвечает за [защиту от ряда методов эксплойта](https://lwn.net/Articles/889475/) .
:::
### Сессия Wayland


::: info
Драйвера до версии 495 имеют поддержку только [EGLStreams](https://www.phoronix.com/news/GNOME-Mutter-Mainline-EGLStream). 

Начиная с 495 NVIDIA представила поддержку [GBM](https://en.wikipedia.org/wiki/Generic_Buffer_Management). 
Обычно GBM считается лучшим и с более широкой поддержкой, в отличии от EGLStreams, которую продвигала только одна NVIDIA. 
Gnome, один из немногих, кто ещё поддерживает EGLStreams, но на сегодняшний день эта поддержка постепенно уходит на второй план.
:::

В остальном, информация актуальна как для [драйверов < 545.29](./nvidia.md#для-драиверов-545-29)


## Для драйверов < 390.157

### Сессия Wayland
::: info
Драйверы NVIDIA до версии 470 не поддерживают аппаратное ускорение Xwayland, из-за чего приложения, не относящиеся к Wayland, страдают от низкой производительности в сеансах Wayland.

Для драйверов до версии  ~400 NVDEC недоступен.
:::


В остальном, информация актуальна как для [драйверов < 470.223.02](./nvidia.md#для-драиверов-470-223-02)

## Для драйверов < 340.108
::: info
Драйверы до версии 364.12 **не имеют поддержку Kernel Mode Settings**.

**Wayland** сессия с такими драйверами **недоступна**.

Для драйверов до версии ~400 ускоренное декодирование видео NVDEC **недоступен**.
:::

В остальном, информация актуальна как для [драйверов < 390.157](./nvidia.md#для-драиверов-390-157)

## Для драйверов < 304.137

::: info
Для драйверов до версии 340.108 ускоренное декодирование видео VDPAU **недоступен**.
:::

В остальном, информация актуальна как для [драйверов < 340.108](./nvidia.md#для-драиверов-340-108)


## Утилита NVIDIA Settings

Утилита для настройки и оптимизации графических параметров на компьютерах с видеокартами Nvidia. Она позволяет пользователям настраивать качество изображения, разрешение экрана, а также различные параметры, связанные с производительностью видеокарты. С помощью Nvidia Settings можно также включить или отключить определенные функции, такие как вертикальная синхронизация или сглаживание.

В зависимости от сессии Xorg или Wayland возможны различаться набор настроек в утилите NVIDIA Settings. Например, в Wayland нельзя настроить вертикальную синхронизацию и тройную буферизацию, так как они работают по-другому в этом окружении. Также в Wayland нет поддержки G-Sync, так как эта технология работает только с NVIDIA и требует специального оборудования. В целом, основные функции NVIDIA Settings доступны в обоих окружениях, но некоторые дополнительные возможности могут быть ограничены.

### Установка из репозитория

**NVIDIA Settings** можно установить любым привычным и удобным способом:

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

Программа vulkaninfo отображает информацию о поддерживаемых возможностях Vulkan для пользователей графических устройст NVIDIA. Необходимо установить пакет `vulkan-tools`:

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

## Дополнительные настройки

### Управление питанием PCI-Express Runtime D3 (RTD3)
TODO
1. Что это такое
2. Где оно само активируется, а где нет
3. ограничения
4. проверить расположение папки rules и узнать, нужны ли эти правила для Turing, Amphere и выше

Для автоматизации управления надо добавить правила в '/lib/udev/rules.d':
```shell
su -
cat << _EOF_ > /lib/udev/rules.d/80-nvidia-pm
# Enable runtime PM for NVIDIA VGA/3D controller devices on driver bind
ACTION=="bind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030000", TEST=="power/control", ATTR{power/control}="auto"
ACTION=="bind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030200", TEST=="power/control", ATTR{power/control}="auto"

# Disable runtime PM for NVIDIA VGA/3D controller devices on driver unbind
ACTION=="unbind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030000", TEST=="power/control", ATTR{power/control}="on"
ACTION=="unbind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030200", TEST=="power/control", ATTR{power/control}="on" 
_EOF_
make-initrd
```
В /etc/modprobe.d добавляем конфигурационный файл с параметром:
```shell
su -
cat << _EOF_ > /etc/modprobe.d/nvidia_RTD3.conf
# This options activate RTD3
options nvidia "NVreg_DynamicPowerManagement=0x02"
_EOF_
make-initrd
```
::: info
Более подробное описание, а также решение возможных проблем смотрите в [документации NVIDIA](https://download.nvidia.com/XFree86/Linux-x86_64/550.40.07/README/dynamicpowermanagement.html)
:::

### PAT

TODO
1. Что такое PAT
2. Проверка, работает ли.
3. Предупреждение, что если не поддерживает и включить, могут быть проблемы

В /etc/modprobe.d добавляем конфигурационный файл с параметром:
```shell
su -
cat << _EOF_ > /etc/modprobe.d/nvidia_PAT.conf
# This options activate PAT
options nvidia NVreg_UsePageAttributeTable=1
_EOF_
make-initrd
```

### GSP прошивка

Некоторые видеокарты имеют GSP процессор, который может использоваться для разгрузки задач и управления графическим процессором. По умолчанию, он включён для ограниченного числа видеокарт.
Тем не менее, начиная с архитектуры Turing, этот процессор присутствует во всех видеокартах и его можно принудительно включить(Подробнее см. [GSP firmware](https://download.nvidia.com/XFree86/Linux-x86_64/550.40.07/README/gsp.html))

В /etc/modprobe.d добавляем конфигурационный файл с параметром:

```shell
su -
cat << _EOF_ > /etc/modprobe.d/nvidia_GSP_firmware.conf
# This options force unlock GPU firmware
options nvidia NVreg_EnableGpuFirmware=1
_EOF_
make-initrd
```

### Фреймбуфер от NVIDIA (Экспериментальная функция)

Начиная с драйверов версии 545.29, можно включить фреймбуффер предусмотренный nvidia-drm. Он заменяет стандартные фреймбуферы, такие как efifb или vesafb. 
Для работы, необходимо, чтобы работал [KMS](./nvidia.md#kms)

В /etc/modprobe.d добавляем конфигурационный файл с параметром:

```shell
su -
cat << _EOF_ > /etc/modprobe.d/nvidia-framebuffer.conf
# This options unlock experimental nvidia framebuffer
options nvidia_drm fbdev=1
_EOF_
make-initrd
```

::: danger
Это экспериментальная функция и работает нестабильно.
:::

N

## Решение известных проблем

### «Неизвестный монитор» в настройках дисплеев в сессии Wayland

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

### После настроек для [сессии wayland](./nvidia.md#сессия-wayland), wayland в GDM не появляется

Если, после настройки, по каким-то причинам сессия с wayland протоколом не появляется(нет явных пунктов с X11), его можно принудительно включить в GDM через маскирование [правил](https://git.altlinux.org/srpms/g/gdm.git?p=gdm.git;a=blob;f=gdm/data/61-gdm.rules.in;h=a4f841bdfe02138f2a4ef00979a8700caeeadcac;hb=45.0.1-alt3.1#l51):

```
su -
ln -s /dev/null /etc/udev/rules.d/61-gdm.rules
```
## Известные проблемы
TODO

## Данные об оборудовании и ПО пользователей за 2024 год.

Ознакомиться с таблецей вы можете перейдя [по ссылке](https://cloud.alt-gnome.ru/index.php/s/JSCj9gxB7j5boPg)

## Смена проприетарных драйверов от NVIDIA на Nouveau 

Для установки открытых драйверов NOUVEAU, необходимо следующее:

::: code-group
```shell[apt-get]
su -
apt-get remove nvidia_glx_common
mcedit /etc/sysconfig/grub2 # тут может быть и nano, и vi, и другой редактор
# удаляем initcall_blacklist и nvidia-drm.modeset
# сохраняем и выходим
grub-mkconfig -o /boot/grub/grub.cfg
# удаляем так-же ссылку на 61-gdm.rules, если она есть
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

Как только все загрузилось и мы убедились, что NOUVEAU заработало:

```shell
su -
make-initrd
# подождать пока соберется initrd
# посмотреть что в выводе сборки initrd присутствует Nouveau
reboot
```

### Источники:
https://www.altlinux.org/Nvidia
https://www.kernel.org/doc/html/latest/gpu/drm-kms.html
https://wiki.gentoo.org/wiki/NVIDIA/nvidia-drivers/ru
https://bugzilla.altlinux.org/39108
https://git.altlinux.org/gears/n/nvidia_glx_common.git?p=nvidia_glx_common.git;a=blob;f=nvidia_glx_common.spec;h=19e084eae0006604525bc0a134492875cecb91da;hb=909a94c100c9491380789de8897a6b85b1921b36#l270
https://git.altlinux.org/srpms/g/gdm.git?p=gdm.git;a=blob;f=gdm/data/61-gdm.rules.in;h=a4f841bdfe02138f2a4ef00979a8700caeeadcac;hb=45.0.1-alt3.1#l51
https://download.nvidia.com/XFree86/Linux-x86_64/550.40.07/README/powermanagement.html
https://wiki.archlinux.org/title/NVIDIA
https://wiki.archlinux.org/title/NVIDIA/Tips_and_tricks
https://wiki.archlinux.org/title/Kernel_mode_setting
https://wiki.gentoo.org/wiki/NVIDIA/nvidia-drivers
