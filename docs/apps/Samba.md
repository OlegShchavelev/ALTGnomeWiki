# Samba

Samba — это реализация сетевого протокола SMB. Она облегчает организацию общего доступа к файлам и принтерам между системами Linux и Windows и является альтернативой NFS. 
## Установка из репозитория 

**Samba** можно установить привычным и удобным способом:

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install samba samba-client
```
```shell[epm]
epm -i samba samba-client
```
:::
