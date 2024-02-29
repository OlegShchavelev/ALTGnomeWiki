# Установка шрифтов в систему

Шрифты в систему ALT Gnome можно установить через пакеты из репозитория.

## Microsoft - установка шрифтов

Для установки шрифтов воспользуйтесь терминалом

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-ms
exit
fc-cache -fv
```
```shell[epm]
epm -i fonts-ttf-ms
fc-cache -fv
```
:::

## Китайские иероглифы - установка шрифтов

Для установки шрифтов воспользуйтесь терминалом

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install fonts-otf-adobe-source-han-sans-cn
exit
fc-cache -fv
```
```shell[epm]
epm -i fonts-otf-adobe-source-han-sans-cn
fc-cache -fv
```
:::

:::info
Для обновления кэша установленных шрифтов используется команда **fc-cache -fv**
:::
