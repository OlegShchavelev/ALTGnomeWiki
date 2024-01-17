# Проблемы при подключении USB устройств

Если при подключении через USB устройства не видны в системе или работают некорректно,
то в данном случае может помочь установка пакета gvfs-backends:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gvfs-backends
```
```shell[epm]
epm -i gvfs-backends
```

:::info
Данный пакет необходим для правильной работы Nautilus c Samba ресурсами
:::
