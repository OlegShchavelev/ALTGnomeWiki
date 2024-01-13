# Telegram

Telegram — это кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями обмена текстовыми, голосовыми и видеосообщениями, а также стикерами, фотографиями и файлами многих форматов.

## Установка из репозитория

**Telegram** можно установить любым привычным и удобным способом

**Установка через терминал**
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install telegram-desktop
```
```shell[epm]
epm -i telegram-desktop
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Telegram** одной командой:

```shell
flatpak install flathub org.telegram.desktop
```

## Установка c помощью epm play

При наличии пакета [eepm](/epm), можно установить **Telegram** одной командой:

```shell
epm play telegram
```

## Проблема отображения уведомлений в Telegram

Если вместо уведомления с текстом пришедшего сообщения вы видите нечто подобное:

1. Переходим в: *Настройки -> Уведомления* выключите опцию: **подсветка окна**
2. Затем переходим в: *Настройки -> Продвинутые настройки -> Экспериментальные настройки* включите опцию **GNotification**
3. Перезагружаем клиент Telegram, проверяем результат. 

## Использовать системную рамку в Telegram

Включите системную рамку следующим образом:

- Откройте Telegram Desktop
- Настройки -> Продвинутые настройки
- Cнимите флажок "Рамка окна QT"

:::info
Оформление системной рамки зависит от оконного интерфейса приложения X11 или Wayland. 
:::

## Как сбросить настройки

Telegram Desktop <Badge type="warning" text="Sisyphus" />

```shell
rm -rfv .local/share/TelegramDesktop
```

Telegram Desktop <Badge type="tip" text="Flatpak" />

```shell
rm -rfv .var/app/org.telegram.desktop/config
```