# Boxes 

Выберите операционную систему и позвольте Boxes загрузить и установить ее для вас на виртуальной машине. Создавайте виртуальные машины из образов операционной системы несколькими щелчками мыши.

## Установка из репозитория

**Boxes** можно установить любым привычным и удобным способом:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnone-boxes
```
```shell[epm]
epm -i gnome-boxes
```

:::

## Подготовка к использованию Boxes

Для запуска необходим установить и запустить набор виртуализации

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install libvirt libvirt-kvm
```
```shell[epm]
epm -i libvirt libvirt-kvm
```

:::

```shell
su -
gpasswd -a xxxx vmusers
systemctl enable libvirtd
systemctl start libvirtd
```

`xxxx` — имя вашего пользователя.