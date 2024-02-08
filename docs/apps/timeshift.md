# Timeshift

Timeshift — инструмент для автоматического создания копий системы (снимков/snapshots) с определенной периодичностью.
В первую очередь создаются снимки системных файлов и настроек. Данные пользователя по умолчанию не архивируются, хотя возможностью включить данную функцию есть. В случае сбоя системы обычно данные пользователя не затрагиваются. По этому включать их в снимок или не включать, пользователь решает сам.

![Timeshift](/timeshift/timeshift.png)


## Установка Timeshift

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install timeshift
```
```shell[epm]
epm -i timeshift
```
:::

## Восстановление из Grub

Если Вы используете файловую систему BTRFS, то рекомендуется установить пакет поддержки "отката" из Grub.
В процессах обновления системы в Grub появится строчка **ALT snapshots**, либо **Sisyphus snapshots** в случае Gnome Regular

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
