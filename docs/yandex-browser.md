# Яндекс Браузер

Быстрый и безопасный браузер Яндекса для компьютера, смартфонов и планшетов на Android и iOS (iPhone и iPad). Ускоряет загрузку при медленном соединении, защищает от вирусов и мошенников, делает поиск удобнее.

## Установка из репозитория <Badge type="warning" text="sysphus" /> <Badge type="warning" text="p10" />

**Яндекс Браузер** можно установить любым привычным и удобным способом:

**Установка через терминал**

::: code-group

```bash[apt-get]
su -
apt-get update
apt-get install yandex-browser-stable
```
```bash[epm]
epm -i yandex-browser-stable
```

:::

::: info
C версии 23.5.1.753, устанавляется **Яндекс Браузер для организаций** — специальная сборка, поддерживающая корпоративные функции, например, управление при помощи групповых политик. Однако ее можно использовать и на домашних компьютерах.
:::


## Установка c помощью единой комманды управления пакетами 

При наличии пакета eepm, начиная с версии 3.7.6-alt1, можно установить **Яндекс Браузер** одной командой:

**Установка через терминал**

```bash
epm play yandex-browser
```

## Не воспроизводится видео в Яндекс Браузере: 

Откройте терминал и запустите **Яндекс Браузер** 

::: code-group

```bash[sysphus]
yandex-browser-stable
```
```bash[epm play]
yandex-browser
```
:::

Ответ в терминале при установленных кодеках следующий:
::: code-group
```bash[Успешно]
Found ffmpeg: /usr/lib64/yandex/browser/libffmpeg.so
  avcodec: 3882340
  avformat: 3876196
  avutil: 3746916
Ffmpeg version is OK! Let's use it.
```
```bash[Ошибка]
find_ffmpeg failed, using integrated library
```
:::

Обновите кодеки с помощью утилиты **update-ffmpeg**:
::: code-group
```bash[sysphus]
su -
/usr/lib64/yandex/browser/update-ffmpeg
```
```bash[epm play]
su -
/opt/yandex/browser/update-ffmpeg
```
:::

Если в терминале вы получили ответ «Ffmpeg version is OK! Let's use it.» , а видео не воспроизводится, то в строке браузера вводим команду:

```
browser://flags/#external-media
```

Отключите опцию, выбрав «Disabled», в появившимся информере, подтверждаем перезагрузку **Яндекс Браузера**.

## Примечания

настройку работы с sudo смотри [sudo](https://www.altlinux.org/Яндекс_Браузер).