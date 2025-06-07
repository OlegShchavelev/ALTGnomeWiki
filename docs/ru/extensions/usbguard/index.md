# USBGuard

USBGuard — это система защиты, которая позволяет управлять доступом USB-устройств к компьютеру.

Реализована неполная поддержка всего функционала USBGuard, а только возможность заблокировать подключение новых устройств при заблокированном экране.

::: info
Если вам нужен полный функционал, обратитесь к CLI версии USBGuard.
:::

### Установка и настройка USBGuard:

Чтобы интерфейс GNOME имел возможность общаться с USBGuard, ему необходимо дать разрешения. Для этого делаем отдельную группу, даём ей права на выполнение действий с usbguard и добавляем туда активного пользователя.

Вход в root:

```shell
su -
```

**Установка USBGuard**

Установка usbguard-dbus:

```shell
apt-get install usbguard-dbus
```

::: info
Если хотите использовать только CLI вариант и не использовать интеграцию в gnome, достаточно пакета usbguard
:::

**Создание группы и настройка группы для USBGuard**

Создаём группу usbguard:

```shell
groupadd usbguard
```

Добавляем пользователя в группу usbguard:

```shell
usermod -a -G usbguard <пользователь>
```

::: info
Вставьте в <пользователь> своего пользователя.
:::

В sudoers даём право на исполнение одной команды usbguard:

```shell
sudo visudo -f /etc/sudoers.d/11-usbguard-group
```

Добавляем туда эту строку. Она разрешает выполнение только usbguard

```shell
%usbguard ALL=(ALL) /usr/bin/usbguard *
```

:::info
Главная причина создание новой группы и добавление пользователя, это добавление возможности пользователю выполнять программу от своего имени.

Это можно решить и другим способом, например через использование группы [wheel](https://alt-gnome.wiki/sudo.html#быстрая-настроика-sudo)
:::

**Запуск usbguard-dbus**

Генерируем разрешения для подключённых устройств:

```shell
usbguard generate-policy > /etc/usbguard/rules.conf
```

::: warning
Обязательно генерируем разрешения, в противном случаем заблокируете все usb-устройства, включая мышь и клавиатуру!

Если видите какие-либо ошибки при выполнении команды, не делайте следующий шаг!
:::

Запускаем dbus демон:

```shell
systemctl enable --now usbguard-dbus.service
```

Добавляем правила polkit для группы usbguard (Если настроена другая группа, то поменять на свою):

```shell
cat << _EOF_ > /etc/polkit-1/rules.d/70-allow-usbguard.rules
// Allow users in usbguard group to communicate with USBGuard
polkit.addRule(function(action, subject) {
    if ((action.id == "org.usbguard.Policy1.listRules" ||
         action.id == "org.usbguard.Policy1.appendRule" ||
         action.id == "org.usbguard.Policy1.removeRule" ||
         action.id == "org.usbguard.Devices1.applyDevicePolicy" ||
         action.id == "org.usbguard.Devices1.listDevices" ||
         action.id == "org.usbguard1.getParameter" ||
         action.id == "org.usbguard1.setParameter") &&
        subject.active == true && subject.local == true &&
        subject.isInGroup("usbguard")) {
            return polkit.Result.YES;
    }
});
_EOF_
```

Выходим из root:

```shell
exit
```

Включаем защиту:

```shell
gsettings set org.gnome.desktop.privacy usb-protection true
```

### Теперь во вкладке Конфиденциальность будет дополнительная опция, связанная с usbguard.

**Вкладка конфиденциальности до:**

![Вкладка конфиденциальности до](/usbguard/usbguard_gnome-settings_before.jpg)

**Вкладка конфиденциальности после:**

![Вкладка конфиденциальности после](/usbguard/usbguard_gnome-settings_after.jpg)

### Полная блокировка Usb

Если хотите полностью отключить подключение новых Usb, необходимо ввести:

```shell
gsettings set org.gnome.desktop.privacy usb-protection-level always
```
