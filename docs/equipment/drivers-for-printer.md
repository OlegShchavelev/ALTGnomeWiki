# Настройка работы принтера

## Установка драйверов

Для нормального функционирования принтеров в **ALT Regular Gnome** необходимо самостоятельно установить необходимые для этого пакеты.

Также рекомендуется установить пакет **Центр управления системой** от BaseALT, так как он позволяет корректно установить принтер в систему.

Для установки пакетов воспользуйтесь Терминалом:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install cups alterator-printers gutenprint-cups
```

```shell[epm]
epm -i cups alterator-printers gutenprint-cups
```

:::

Далее необходимо запустить службу Cups и перезагрузить компьютер:

```shell
su -
systemctl start cups
systemctl enable cups
systemctl reboot
```

## HP - установка драйверов и дополнительного программного обеспечения

Для установки драйверов и программного обеспечения для принтеров марки HP воспользуйтесь терминалом:

:::info
Наблюдается некорректная работа программного обеспечения под сессией Wayland, если Вам необходимы только драйвера, установите пакет **hplip**, либо смотрите обходное решение проблемы ниже.
:::

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install hplip-gui hplip-gui-autostart hplip-sane hplip
epm play hplip-plugin
```

```shell[epm]
epm -i hplip-gui hplip-gui-autostart hplip-sane hplip
epm play hplip-plugin
```

:::

## HP-GUI - запуск под Wayland

Для начала нужно удалить пакет **hplip-gui-autostart**:

```shell
su -
apt-get remove hplip-gui-autostart
```

Далее редактируем строчку **Exec** в файле **hplip.desktop**:

```shell
su -
mcedit /usr/share/applications/hplip.desktop
```

Пишем как ниже и сохраняем:

```shell
Exec=env XDG_SESSION_TYPE=xwayland dbus-run-session hp-toolbox
```

Далее делаем автозапуск если нужен, если нет, перезагружаем компьютер.

Создаём файл к примеру:

```shell
~/.config/autostart/hp.desktop
```

со следующим содержимым:

```shell
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Name=HP Device Manager
NoDisplay=true
Comment=hp-toolbox in sys trey
Exec=env XDG_SESSION_TYPE=xwayland dbus-run-session hp-toolbox
Terminal=false
```

Перезагружаем компьютер.

## Brother - установка пакета драйверов

Для установки пакета драйверов для принтеров Brother воспользуйтесь терминалом:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install printer-driver-brlaser
```

```shell[epm]
epm -i printer-driver-brlaser
```

:::

## Canon - установка пакета драйверов

Для установки пакета драйверов с официального сайта для принтеров Canon воспользуйтесь терминалом:

```shell
epm play cnrdrvcups-ufr2
```

## Kyocera - установка пакета драйверов

Для установки пакета драйверов с официального сайта для принтеров Kyocera воспользуйтесь терминалом:

```shell
epm play kyodialog
```

## Pantum - установка пакета драйверов

Для установки пакета драйверов с официального сайта для устройств Pantum воспользуйтесь терминалом:

```shell
epm play pantum
```

## Установка принтера в систему

Для корректной установки принтера/МФУ в систему воспользуйтесь **Центр управления системой** от BaseALT раздел **Принтеры**:

![drivers-for-printer](/drivers-for-printer/drivers-for-printer1.png)

Далее необходимо ввести имя Вашего принтера и нажать **Новый**:

![drivers-for-printer](/drivers-for-printer/drivers-for-printer2.png)

В следующем окне выбираем как подключён Ваш принтер и продолжаем настройку:

![drivers-for-printer](/drivers-for-printer/drivers-for-printer3.png)

:::info
Если по каким-то причинам принтер не заработал, то зайдите в настройки GNOME -> Принтеры и проверьте установленный драйвер!

Иногда, редко, возможна ситуация, что при установке драйвера в системе будет установлен принтер, но с другим драйвером.

Для исправления этой ситуации необходимо зайти в **Сведения о принтере** и **Выбрать из базы данных...** нужный драйвер.

После этих манипуляций, принтер заработает:

![drivers-for-printer](/drivers-for-printer/drivers-for-printer4.png)


### Если в ЦУС нет раздела "Принтеры", то установить пакет:
::: code-group

```shell[apt-get]
apt-get install alterator-printers
```

```shell[epm]
epmi alterator-printers
```
:::
