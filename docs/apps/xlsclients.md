# XLSCLIENTS

xlsclients — это утилита для отображения информации о клиентских приложениях, запущенных в оконном интерфейсе X11. 

## Установка из репозитория
**xlsclients** можно установить любым привычным и удобным способом

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install xlsclients
```
```shell[epm]
epm -i xlsclients
```
:::

## Использование утилиты XLSCLIENTS

Для получучения списка приложений запущенных в оконном интерфейсе X11 введите в терминале:

```shell
xlsclients
```

::: details Пример ответа xlsclients
```shell
[oleg@alt-gnome ~]$ xlsclients
alt-gnome  gsd-xsettings
alt-gnome  ibus-x11
alt-gnome  jetbrains-toolbox
alt-gnome  codium
alt-gnome  yandex-browser-stable
alt-gnome  anydesk
alt-gnome  mutter-x11-frames
alt-gnome  steam
```
:::