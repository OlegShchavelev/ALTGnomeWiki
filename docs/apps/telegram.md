---
title: Telegram
appstreamRepo: org.telegram.desktop
appstreamFlatpak: org.telegram.desktop
gallery: 
    type: slider
    items: 
        - src: /telegram/telegram-6.png
        - src: /telegram/telegram-7.png
        - src: /telegram/telegram-8.png
---

# Telegram

Telegram — кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями обмена текстовыми, голосовыми и видеосообщениями, а также стикерами, фотографиями и файлами многих форматов.

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

<AGWGallery />

Оформление системной рамки зависит от оконного интерфейса приложения `X11` или `Wayland`. 


## Как сбросить настройки

Telegram Desktop <Badge type="warning" text="Sisyphus" />

```shell
rm -rfv .local/share/TelegramDesktop
```

Telegram Desktop <Badge type="tip" text="Flatpak" />

```shell
rm -rfv .var/app/org.telegram.desktop/config
```

## Проблема запуска Telegram в свёрнутом виде

:::info
Исправлено в версии 4.15
:::

В настоящее время наблюдается проблема с запуском Телеграмм при установленных галочках **Запускать Telegram при запуске системы** и **Запускать в свёрнутом виде**, а именно запуске Телеграмм в свёрнутом виде

![Draw attention to the window](/telegram/telegram_5.png)

Для обхода этой ситуации необходимо выполнить следующие действия

В каталоге 

```shell
cd $HOME/.config/autostart
```
необходимо создать файл, к примеру, **telegram.desktop** со следующим содержанием

```shell
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Name=Telegram
NoDisplay=true
Comment=telegram on sys trey
Exec=telegram -startintray
Terminal=false
```
