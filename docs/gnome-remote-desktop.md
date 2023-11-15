# Удаленный рабочий стол (Gnome)

**Удаленный рабочий стол** позволяет производить удаленное управление системой. Данный функционал предоставляется пакетом `gnome-remote-desktop`.

## Установка из репозитория

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-remote-desktop
```

```shell[epm]
su -
epm -i gnome-remote-desktop
```

:::

## Настройка

### Из графической оболочки

- Открыть приложение настройки
- Открыть группу настроек "Общий доступ"\
![gnome-remote-desktop-1](/gnome-remote-desktop/open-settings.gif)

- Изменить состояние переключателя "Удаленный рабочий стол" на - включено
- Переключатель "Удаленное управление" управляет режимами "просмотр" / "управление"\
![gnome-remote-desktop-2](/gnome-remote-desktop/enable-service.gif)

- Задать пароль пользователя (установить новый)\
![gnome-remote-desktop-3](/gnome-remote-desktop/set-user-password.gif)

### Из командной строки

```shell
# Включить сервис RDP  (который так-же доступен для управления в GUI)
grdctl rdp enable

# Настроить авторизацию в RDP <username>, <password>
grdctl rdp set-credential <username> <password>

# Так-же из коммандной строки (терминала) доступно управление 
# другой системой удаленного доступа - VNC
# Включить VNC
grdctl vnc enable

# Более подробная информация о настройках может быть получена здесь
grdctl --help
```
