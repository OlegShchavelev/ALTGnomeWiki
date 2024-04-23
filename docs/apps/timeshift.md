---
aggregation:
    sisyphus: timeshift
appstream:
    id: timeshift-gtk.desktop
    name: Timeshift
    icon: /timeshift/timeshift-logo.png
    summary: Инструмент для автоматического создания копий системы (снимков/snapshots) с определенной периодичностью.
    developer: 
        name: Linux Mint Team
        avatar: /timeshift/timeshift-avatar.svg
    metadata_license: 
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    url: 
        homepage: https://github.com/linuxmint/timeshift
        bugtracker: https://github.com/linuxmint/timeshift/issues
---




# Timeshift

Timeshift — инструмент для автоматического создания копий системы (снимков/snapshots) с определенной периодичностью.
В первую очередь создаются снимки системных файлов и настроек. Данные пользователя по умолчанию не архивируются, хотя возможностью включить данную функцию есть. В случае сбоя системы обычно данные пользователя не затрагиваются. По этому включать их в снимок или не включать, пользователь решает сам.

![Timeshift](/timeshift/timeshift.png)


<!--@include: @apps/_parts/install/content-repo.md-->

## Восстановление из Grub

Если Вы используете файловую систему BTRFS, то рекомендуется установить пакет поддержки «отката» из Grub.
В процессах обновления системы в Grub появится строчка **ALT snapshots**, либо **Sisyphus snapshots** в случае ALT Regular Gnome

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install grub-btrfs
```
```shell[epm]
epm -i grub-btrfs
```
:::

Чтобы автоматически обновлять меню grub при создании или удалении снимка grub-btrfs предоставляет демон, наблюдающий за каталогом снимков, и автоматически обновляющий меню grub.
Для его конфигурации необходимо выполнить команду:

```shell
su -
systemctl edit --full grub-btrfsd
```

В открывшемся конфигурационном файле нужно изменить строку `ExecStart=/usr/bin/grub-btrfsd --syslog /.snapshots` на `ExecStart=/usr/bin/grub-btrfsd --syslog --timeshift-auto`
и сохранить изменения

Настройка закончина. Теперь можно запустить демон.

```shell
su -
systemctl enable --now grub-btrfsd
```
