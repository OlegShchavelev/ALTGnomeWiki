---
aggregation:
  sisyphus: telegram-desktop
  flatpak: org.telegram.desktop
  epm:
    play:
      id: telegram
      build: unofficial
appstream:
  id: org.telegram.desktop
  name: Telegram
  icon: /telegram/telegram-logo.svg
  summary: Кроссплатформенная система мгновенного обмена сообщениями
  developer:
    name: John Preston & Community
    nickname: john-preston
    avatar: /telegram/telegram-avatar.png
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://desktop.telegram.org/
    bugtracker: https://github.com/telegramdesktop/tdesktop/issues
gallery:
  type: slider
  items:
    - src: /telegram/telegram-6.png
    - src: /telegram/telegram-7.png
    - src: /telegram/telegram-8.png
---

# Telegram

Telegram — кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями обмена текстовыми, голосовыми и видеосообщениями, а также стикерами, фотографиями и файлами многих форматов.

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->

## Отключить уведомление активное окно (Draw attention to the window)

Мессенджер информирует пользователя об активном чате путём отправки уведомления. Вы можете отключить опцию перейдя в:

- Настройки
- Уведомления и звуки
- Отключите опцию подсветка окна (Draw attention to the window)

![Draw attention to the window](/telegram/telegram_1.png)

## Проблема отображения уведомлений в Telegram

Если вместо уведомления с текстом пришедшего сообщения вы видите нечто подобное:

1. Затем переходим в: _Настройки -> Продвинутые настройки -> Экспериментальные настройки_ включите опцию **GNotification**
2. Перезагружаем клиент Telegram, проверяем результат.

## Использовать системную рамку в Telegram

Включите системную рамку следующим образом:

- Откройте Telegram Desktop
- Настройки -> Продвинутые настройки
- Снимите флажок «Рамка окна QT»

<AGWGallery />

Оформление системной рамки зависит от оконного интерфейса приложения `X11` или `Wayland`.

## Замена символов в сообщениях

При написании сообщений в Telegram происходит автоматическое форматирование текста. Это делается для того, чтобы текст было легче читать, и он соответствовал правилам типографики:

| Символ      | Модификатор                    |
| :---------- | :----------------------------- |
| `--`        | Длинное тире (—)               |
| `<<` и `>>` | Французские кавычки («ёлочки») |

## Не учитывать отключённые чаты и каналы в счётчике уведомлений

Настроить счётчик уведомлений:

- Перейдите в Настройки -> Уведомления и звуки
- Отключите настройку «Учитывать чаты без звука»

![Не учитывать отключённые чаты и каналы в счётчике уведомлений](/telegram/telegram-9.png)

## Как сбросить настройки

Telegram Desktop <Badge type="warning" text="Sisyphus" />

```shell
rm -rfv .local/share/TelegramDesktop
```

Telegram Desktop <Badge type="tip" text="Flatpak" />

```shell
rm -rfv .var/app/org.telegram.desktop/config
```
