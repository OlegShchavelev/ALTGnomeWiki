# Samba

Samba — пакет программ, которые позволяют обращаться к сетевым дискам и принтерам на различных операционных системах по протоколу SMB/CIFS.

## Установка из репозитория 

**Samba** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install samba samba-client
```
```shell[epm]
su -
epm -i samba samba-client
```
:::

Для включения обзора сетевых ресурсов SMB протокола в Nautilus достаточно выполнить следующее:
1) Изменить группу в `/etc/samba/smb.conf` c Samba на что-то свое, например: WORKGROUP
2) Включить сервис Samba (smb.service) в системе, если еще не включено
3) Установить пакет `avahi-daemon`
  ::: code-group
  ```shell[apt-get]
  su -
  apt-get install avahi-daemon
  ```
  ```shell[epm]
  su -
  epm install avahi-daemon
  ```
  :::

  
