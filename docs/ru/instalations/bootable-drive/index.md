# Создание загрузочного диска ALT Regular Gnome

Создание загрузочного диска — это процесс создания специального носителя данных (например, диска CD, DVD или USB-накопителя), который содержит операционную систему или специализированные инструменты для запуска компьютера в автономном режиме.

Этот диск может быть использован для установки операционной системы, восстановления данных, диагностики и исправления ошибок, которые могут возникнуть при работе компьютера.

Здесь будет рассказано о том, как создать загрузочный диск с образом ALT Regular Gnome

## Подготовка

- Скачайте [образ ALT Regular Gnome](/download)

- Убедитесь в том, что на компьютере установлено приложение для создания загрузочного диска: [ALT Media Writer](#alt-media-writer), [Ventoy](#ventoy), [dd](#dd), [Balena Etcher](#balena-etcher)

- Подготовьте носитель, на который будет записан загрузочный образ. Желательно иметь устройство объёмом не меньше 8 ГБ

::: warning
В ходе записи образа на диск, все данные с него будут удалены

Убедительная просьба сохранить все важные данные на другом устройстве
:::

## ALT Media Writer

[ALT Media Writer](https://github.com/altlinux/ALTMediaWriter) — простой в использовании инструмент для Linux, заточенный под создание загрузочных дисков с операционной системой семейства ALT Linux.

1. Установите ALT Media Writer:

**Установка через терминал**

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install altmediawriter
```

```shell-vue[epm]
epm -i altmediawriter
```

:::

![Окно ALT Media Writer](/bootable-drive/bootable-drive-alt-media-writer-1.png)

2. Откройте AGW и выберите пункт `Другой образ`:

![ALT Media Writer с выбранным образом](/bootable-drive/bootable-drive-alt-media-writer-2.png)

3. Нажмите кнопку `Записать на диск` и после окончания записи, загрузочный диск будет готов:

![Начало записи образа в Окно ALT Media Writer](/bootable-drive/bootable-drive-alt-media-writer-2.png)

![Конец записи образа в ALT Media Writer](/bootable-drive/bootable-drive-alt-media-writer-2.png)

## Ventoy

[Ventoy](https://ventoy.net/) — позволяет создать мультизагрузочный накопитель, на который можно записать различные ISO образы операционных систем, утилит и других загрузочных файлов. При этом Ventoy сохраняет структуру файловой системы носителя без изменений, что позволяет легко добавлять и удалять ISO образы.

1. Скачайте [исполняемый файл Ventoy](https://www.ventoy.net/en/download.html) с официального сайта проекта и запустите его для установки на USB-накопитель. В примере будет использоваться Linux-версия, однако в версии для Windows всё аналогично

2. Перейдите в папку, куда был скачен дистрибутив, распакуйте архив и запустите Ventoy с графическим интерфейсом:

```shell
tar -xvf ventoy-***-linux.tar.gz
cd ventoy-***
./VentoyGUI.x86-64
```

Где `***` — версия дистрибутива.

![Окно Ventoy](/bootable-drive/bootable-drive-ventoy-1.png)

3. Если накопитель не был вставлен до открытия программы, нажмите кнопку обновления. Выберите свой USB-накопитель в интерфейсе программы:

![Ventoy с выбранным накопителем](/bootable-drive/bootable-drive-ventoy-2.png)

4. Нажмите кнопку `Install`, а также `OK` в двух следующих окнах подтверждения и дождитесь оповещения о завершении установки:

![Оповещение Ventoy о завершении установки](/bootable-drive/bootable-drive-ventoy-3.png)

5. Просто скопируйте ISO образ системы на носитель любым удобным способом и загрузочный диск готов

## dd

dd — утилита командной строки в Unix-подобных системах, которая позволяет копировать и конвертировать файлы. С помощью dd можно записать загрузочный образ напрямую на USB-накопитель.

1. Подключите накопитель и определите, какое устройство ассоциировано с ним с помощью команды `lsblk`:

```shell
 lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    1  14,5G  0 disk /run/media/x1z53/USB
```

В данном случае, искомое устройство — `sda`. Полный путь к нему — `/dev/sda`

2. Запишите образ с использованием команды `dd` и загрузочный диск готов:

```
sudo dd if="***" of="/dev/sda" status="progress" bs=32M
```

Где `***` — путь к ISO образу, а `/dev/sda` — ассоциированное устройство.

## Balena Etcher

[Balena Etcher](https://etcher.balena.io/) — простой кроссплатформенный инструмент для записи образов операционных систем на USB-накопители.

1. Скачайте дистрибутив Balena Etcher [с официального сайта](https://etcher.balena.io/#download-etcher), распакуйте и запустите:

```shell
unzip balenaEtcher-linux-x64-***.zip
cd balenaEtcher-linux-x64
./balena-etcher
```

::: tip

Если программа не запускается и предлагает проверить права файла `chrome-sandbox`, запустите её с ключом `--no-sandbox`

```shell
./balena-etcher --no-sandbox
```

:::

![Окно Balena Etcher](/bootable-drive/bootable-drive-balena-etcher-1.png)

2. В интерфейсе программы выберите образ и накопитель:

![Balena Etcher с выбранным образом](/bootable-drive/bootable-drive-balena-etcher-2.png)

![Выбор накопителя в Balena Etcher](/bootable-drive/bootable-drive-balena-etcher-3.png)

![Balena Etcher готов к записи образа](/bootable-drive/bootable-drive-balena-etcher-4.png)

3. Нажмите кнопку `Flash!` для начала записи образа на накопитель. После завершения записи накопитель будет готов к загрузке.

![Начало записи образа в Balena Etcher](/bootable-drive/bootable-drive-balena-etcher-5.png)

![Конец записи образа в Balena Etcher](/bootable-drive/bootable-drive-balena-etcher-6.png)

## Rufus

[Rufus](https://rufus.ie) — утилита для форматирования и создания загрузочных накопителей, карт памяти и т.д. из-под Windows

1. Загрузите установщик или переносную версию (с постфиксом `p`) и запустите программу:

![Окно Rufus](/bootable-drive/bootable-drive-rufus-1.png)

2. Выберите ISO образ и нажмите кнопку `СТАРТ`:

![Rufus с выбранным образом](/bootable-drive/bootable-drive-rufus-2.png)

3. Выберите `Записать в режиме DD-образ`, нажмите кнопку `ОК` в этом окне и следующем окне подтверждения:

![Окно Rufus с выбором режима записи](/bootable-drive/bootable-drive-rufus-3.png)

![Окно Rufus с подтверждением](/bootable-drive/bootable-drive-rufus-4.png)

4. Дождитесь окончания записи, и загрузочная флешка будет готова:

![Начало записи образа в Rufus](/bootable-drive/bootable-drive-rufus-5.png)

![Конец записи образа в Rufus](/bootable-drive/bootable-drive-rufus-6.png)

## Impression

[Impression](https://apps.gnome.org/ru/Impression) — утилита GNOME Apps для создания загрузочного диска в три клика

1. Установите Impression:

**Установка через терминал**

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install impression
```

```shell-vue[epm]
epm -i impression
```

:::

**Установка c помощью Flatpak**

```shell-vue
flatpak install flathub io.gitlab.adhami3310.Impression
```

2. Выберите пункт `Другой файл...` и выберите образ:

![Окно Impression](/bootable-drive/bootable-drive-impression-1.png)

3. Выберите носитель для записи образа:

![Выбор носителя в Impression](/bootable-drive/bootable-drive-impression-2.png)

4. Подтвердите начало записи, и после окончания процесса загрузочный диск будет готов:

![Подтверждение записи в Impression](/bootable-drive/bootable-drive-impression-3.png)

![Начало записи образа в Impression](/bootable-drive/bootable-drive-impression-4.png)

![Конец записи образа в Impression](/bootable-drive/bootable-drive-impression-5.png)
