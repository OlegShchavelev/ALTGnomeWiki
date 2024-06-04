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

Timeshift — инструмент для автоматического создания копий системы (снимков/snapshots) с определенной периодичностью. Также их можно делать вручную.
В первую очередь создаются снимки системных файлов и настроек. Данные пользователя по умолчанию не архивируются, хотя возможностью включить данную функцию есть. В случае сбоя системы обычно данные пользователя не затрагиваются. По этому включать их в снимок или не включать, пользователь решает сам.

![Timeshift](/timeshift/timeshift.png)


<!--@include: @apps/_parts/install/content-repo.md-->

## Восстановление из терминала

Несмотря на то что Timeshift поддерживает восстановление через GUI интерфейс, иногда возникает потребность сделать это из терминала.
Например, это может понадобиться, когда система сломана так что на руках остался только терминал (в данном контексте правильнее называть его консолью).
Для того чтобы воспользоваться данным функционалом, необходимо выполнить следующие команды:
```shell
su -
timeshift --restore
```
Теперь выбираем нужный снимок и подтверждаем свои действия. Далее просто следуем подсказкам от программы.

## Восстановление из GRUB

Если Вы используете файловую систему BTRFS, то рекомендуется установить пакет поддержки «отката» из Grub.
В процессах обновления системы в GRUB появится строчка **ALT snapshots**, либо **Sisyphus snapshots** в случае ALT Regular Gnome

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

Чтобы автоматически обновлять меню grub при создании или удалении снимка grub-btrfs предоставляет демон, наблюдающий за каталогом снимков, и автоматически обновляющий меню GRUB.
Для его конфигурации необходимо выполнить команду:

```shell
su -
systemctl edit --full grub-btrfsd
```

В открывшемся конфигурационном файле нужно изменить строку `ExecStart=/usr/bin/grub-btrfsd --syslog /.snapshots` на `ExecStart=/usr/bin/grub-btrfsd --syslog --timeshift-auto`
и сохранить изменения

Настройка закончена. Теперь можно запустить демон.

```shell
su -
systemctl enable --now grub-btrfsd
```
