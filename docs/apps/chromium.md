# Chromium

Chromium — это проект браузера с открытым исходным кодом, целью которого является создание более безопасного, быстрого и стабильного способа работы в Интернете для всех пользователей.

## Установка из репозитория <Badge type="warning" text="sysphus" /> <Badge type="warning" text="p10" />

**Chromium** можно установить любым привычным и удобным способом:

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install chromium
```
```shell[epm]
epm -i chromium
```

:::

## Отображение шрифта Emoji при просмотре веб-страниц в браузере Chromium

Необходимо установить дополнительные шрифты:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```
```shell[epm]
epm -i fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```

:::

## Chromium не запускается или запускается с ошибками.

После обновления операционной системы Chromium не запускается или запускается не корректно:

Удалите пользовательскую конфигурацию у пользователя

```shell
rm -rfv .config/chromium/
```

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/chromium/Default/GPUCache
```
