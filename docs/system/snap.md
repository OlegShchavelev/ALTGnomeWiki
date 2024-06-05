# Snaps

Snaps — система для создания, распространения и запуска изолированных приложений в Linux.

## Установка из репозитория

**Snaps** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install snapd

```

```shell[epm]
epm -i snapd
```

:::

После установки необходимо включить модуль systemd, который управляет основным коммуникационным разъёмом snap:

```shell
su -
systemctl enable --now snapd
```

Включить поддержку classic snap, введите следующее, необходимо создать символическую ссылку:

```shell
su -
ln -s /var/lib/snapd/snap /snap
```

Выйдите из системы и снова войдите в неё, либо перезапустите систему, чтобы убедиться, что пути snap обновлены правильно.

## Установка с помощью EPM

::: info
Актуально с версии **EPM 3.61.4**
:::

Для установки **Snap** с помощью EPM введите в терминале команду

```shell
epm play snap
```

Если хотите включить поддержку классических snap пакетов введите в терминале команду

```shell
epm play snap=classic
```

## Использование SNAPS

Основные команды, необходимые для установки, запуска приложений Snap и управления ими. Для получения полного списка команд **Snaps** выполните `snap --help`

### Поиск приложений

Для поиска приложения/среды в Snaps используйте команду find:

```shell
snap find telegram
```

::: details результат `snap search telegram`

```
Name                 Version             Publisher               Notes  Summary
telegram-desktop     4.14.15             telegram-desktop\u2713       -      Fast. Secure. Powerful.
telegram-cli         1.3.1               marius-quabeck          -      Command-line interface for Telegram. Uses the readline interface.
telegram-testbart    1.7.7               snap-retiring           -      A cloud-based messaging app with a focus on security and speed.
telega               0.7.1               alexmurray\u272a             -      Full featured unofficial client for Telegram in GNU Emacs.
superperms           13.3                lucyllewy\u272a              -      Search for minimal Super Permutations
```

:::

Вы можете узнать более подробную информацию о поставляемом пакете:

```shell
snap info chromium
```

::: details результат выполнения команды для вывода подробной информации о пакете chromium

```
[oleg@alt-gnome ~]$ snap info chromium
name:      chromium
summary:   Chromium web browser, open-source version of Chrome
publisher: Canonical\u2713
store-url: https://snapcraft.io/chromium
contact:   https://bugs.launchpad.net/ubuntu/+source/chromium-browser/+bugs?field.tag=snap
license:   unset
description: |
  An open-source browser project that aims to build a safer, faster, and more
  stable way for all Internet users to experience the web.
commands:
  - chromium.chromedriver
  - chromium
snap-id:      XKEcBqPM06H1Z7zGOdG5fbICuf8NWK5R
tracking:     latest/stable
refresh-date: today at 03:01 MSK
channels:
  latest/stable:    121.0.6167.160 2024-02-09 (2749) 167MB -
  latest/candidate: 121.0.6167.160 2024-02-07 (2749) 167MB -
  latest/beta:      122.0.6261.29  2024-02-08 (2754) 167MB -
  latest/edge:      123.0.6286.0   2024-02-09 (2755) 167MB -
installed:          121.0.6167.160            (2749) 167MB -
```

:::

### Установка приложений

Для установки snaps, запустите:

```shell
snap install chromium
```

Для подтверждение операции и привилегий введите пароль администратора.

::: details результат выполнения команды по установке chromium

```
chromium 121.0.6167.160 from Canonical\u2713 installed
```

:::

Для установки пакета из определённого канала используйте соответствующую опцию, например `--stable`, `--candidate`, `--beta` или `--edge`:

```shell
snap install chromium --edge
```

### Удаления приложения

Для удаления приложения в Snaps **используйте** команду `remove` и идентификатор приложения:

```shell
snap remove chromium
```

::: details результат выполнения команды по удалению chromium

```
chromium removed
```

:::

### Устранение неполадок

Получить информацию о подключённых интерфейсов, введите:

```shell
snap connections chromium
```

::: details результат выполнения команды connections для программы chromium

```
[oleg@alt-gnome ~]$ snap connections chromium
Interface                 Plug                                    Slot                            Notes
audio-playback            chromium:audio-playback                 :audio-playback                 -
audio-record              chromium:audio-record                   :audio-record                   -
bluez                     chromium:bluez                          :bluez                          -
browser-support           chromium:browser-sandbox                :browser-support                -
camera                    chromium:camera                         :camera                         -
content                   chromium:foo-install-cups               -                               -
content[gnome-42-2204]    chromium:gnome-42-2204                  gnome-42-2204:gnome-42-2204     -
content[gtk-3-themes]     chromium:gtk-3-themes                   gtk-common-themes:gtk-3-themes  -
content[icon-themes]      chromium:icon-themes                    gtk-common-themes:icon-themes   -
content[sound-themes]     chromium:sound-themes                   gtk-common-themes:sound-themes  -
cups                      chromium:cups                           cups:cups                       -
desktop                   chromium:desktop                        :desktop                        -
desktop-legacy            chromium:desktop-legacy                 :desktop-legacy                 -
gsettings                 chromium:gsettings                      :gsettings                      -
hardware-observe          chromium:hardware-observe               :hardware-observe               -
home                      chromium:home                           :home                           -
joystick                  chromium:joystick                       :joystick                       -
mount-observe             chromium:mount-observe                  -                               -
mpris                     -                                       chromium:mpris                  -
network                   chromium:network                        :network                        -
network-bind              chromium:network-bind                   :network-bind                   -
network-manager           chromium:network-manager                -                               -
opengl                    chromium:opengl                         :opengl                         -
password-manager-service  chromium:password-manager-service       -                               -
personal-files            chromium:chromium-config                :personal-files                 -
personal-files            chromium:dot-local-share-applications   :personal-files                 -
personal-files            chromium:dot-local-share-icons          :personal-files                 -
raw-usb                   chromium:raw-usb                        -                               -
removable-media           chromium:removable-media                :removable-media                -
screen-inhibit-control    chromium:screen-inhibit-control         :screen-inhibit-control         -
system-files              chromium:etc-chromium-browser-policies  :system-files                   -
system-packages-doc       chromium:system-packages-doc            :system-packages-doc            -
u2f-devices               chromium:u2f-devices                    :u2f-devices                    -
unity7                    chromium:unity7                         :unity7                         -
upower-observe            chromium:upower-observe                 :upower-observe                 -
wayland                   chromium:wayland                        :wayland                        -
x11                       chromium:x11                            :x11                            -

```

::::

Узнать, какие изменения вносились в вашу установку snaps с течением времени, вы можете просмотреть журналы:

```shell
snap changes
```

::: details результат выполнения команды changes

```
[oleg@alt-gnome ~]$ snap changes
ID   Status  Spawn               Ready               Summary
1    Done    today at 01:13 MSK  today at 01:13 MSK  Initialize system state
2    Done    today at 01:17 MSK  today at 01:19 MSK  Install "firefox" snap
3    Done    today at 01:17 MSK  today at 01:17 MSK  Initialize device
4    Done    today at 01:21 MSK  today at 01:23 MSK  Install "figma-linux" snap
5    Done    today at 01:34 MSK  today at 01:35 MSK  Install "brave" snap
6    Done    today at 02:29 MSK  today at 02:30 MSK  Install "icq-im" snap
7    Done    today at 02:35 MSK  today at 02:36 MSK  Remove "icq-im" snap
8    Done    today at 02:36 MSK  today at 02:36 MSK  Install "icq-im" snap
9    Done    today at 03:00 MSK  today at 03:01 MSK  Install "chromium" snap
10   Done    today at 03:13 MSK  today at 03:13 MSK  Remove "chromium" snap

```

:::
