---
title: Samba
nameRepo: samba
aggregation: 
    sisyphus: samba
appstream:
    name: Samba
    icon: /samba/samba-logo.svg
    summary: Пакет программ, которые позволяют обращаться к сетевым дискам и принтерам на различных операционных системах по протоколу SMB/CIFS.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: The Samba Team
    url: 
        homepage: https://www.samba.org/
---



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

## Обзор сетевых ресурсов в Nautilus

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

## Управление пользователями SAMBA

По умолчанию конфигурационный файл `smb.conf` содержит следующую строку:
```
passdb backend = tdbsam
```
что говорит нам о том, что samba использует механизм авторизации основанный на базе данных TDB

Добавить пользователя в таком случае возможножно используя следующий подход:

```shell
su -
pdbedit -au username
```

Что-бы посмотреть текущих пользователей:

```shell
su -
pdbedit -L
```
