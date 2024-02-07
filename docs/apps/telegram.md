---
title: Telegram
appstreamRepo: org.telegram.desktop
appstreamFlatpak: org.telegram.desktop
---

# Telegram

Telegram — это кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями обмена текстовыми, голосовыми и видеосообщениями, а также стикерами, фотографиями и файлами многих форматов.

## Установка из репозитория

**Telegram** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

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

<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Telegram** одной командой:

```shell
epm play telegram
```

## Отключить уведомление активное окно (Draw attention to the window)

Мессенжер информирует пользователя об активном чате путем отправки уведомления. Вы можете отключить опцию перейдя в:

- Настройки
- Уведомления и звуки
- Отключите опцию подсветка окна (Draw attention to the window)

![Draw attention to the window](/telegram/telegram_1.png)

## Проблема отображения уведомлений в Telegram

Если вместо уведомления с текстом пришедшего сообщения вы видите нечто подобное:

1. Затем переходим в: *Настройки -> Продвинутые настройки -> Экспериментальные настройки* включите опцию **GNotification**
2. Перезагружаем клиент Telegram, проверяем результат. 

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