# Figma

Figma — неофициальная версия Figma для Linux построенная на Electron.

## Установка из репозитория GitHub

Загрузите пакет `.rpm` со страницы релизов приложения `figma-linux` сервиса Github, затем установите через терминал: 

::: code-group

```shell[apt-get]
su -
cd ../home/USER/Загрузки
apt-get update
apt-get install figma-linux-*.x86_64.rpm
```
```shell[epm]
сd Загрузки
epm -i figma-linux-*.x86_64.rpm
```
:::

USER — имя не непривилегированного пользователя, укажите имя учетной записи. 

## Установка c помощью единой команды управления пакетами

При наличии пакета [eepm](/epm), начиная с версии `3.58.2-alt1`, можно установить **Figma** одной командой:

```shell
epm play figma
```