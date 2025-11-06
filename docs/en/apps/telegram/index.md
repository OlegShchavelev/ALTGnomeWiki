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
  summary: Cross-platform instant messaging system
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
  images:
    - src: /telegram/telegram-6.png
    - src: /telegram/telegram-7.png
    - src: /telegram/telegram-8.png
---

# Telegram

Telegram is a cross-platform instant messaging system (messenger) with functions for exchanging text, voice and video messages, as well as stickers, photos and files of many formats.

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->

## Disable notification to the active window (Draw attention to the window)

The messenger informs the user about the active chat by sending a notification. You can disable the option by going to:

- Settings
- Notifications and sounds
- Disable the Draw attention to the window option

![Draw attention to the window](/telegram/telegram_1.png)

## Problem displaying notifications in Telegram

If, instead of a notification with the text of the incoming message, you see something like this:

1. Then go to: _Settings -> Advanced settings -> Experimental settings_ enable the **GNotification** option
2. Reboot the Telegram client and check the result.

## Use system frame in Telegram

Enable the system frame as follows:

- Open Telegram Desktop
- Settings -> Advanced settings
- Uncheck "QT Window Frame"

<Gallery />

The design of the system frame depends on the application window interface `X11` or `Wayland`.

## Replacing characters in messages

When writing messages in Telegram, the text is automatically formatted. This is done to make the text easier to read and to follow typographic rules:

| Symbol      | Modifier                 |
| :---------- | :----------------------- |
| `--`        | Em dash (—)              |
| `<<` и `>>` | French quotes («ёлочки») |

## Ignore disabled chats and channels in the notification counter

Set up notification counter:

- Go to Settings -> Notifications and sounds
- Disable the “Count silent chats” setting

![Do not count disabled chats and channels in the notification counter](/telegram/telegram-9.png)

## WebApp does not work in Telegram from a repository in a Wayland session

If you encounter the error `Error: Could not initalize WebView`, there are several ways to fix it:

- Change the launch parameters of the Telegram application: launch the application in the X11 window interface.
- Select a different installation type for the Telegram messenger.

:::info
The community has already filed a report [BZ49324](https://bugzilla.altlinux.org/49324) describing the problem.
:::

## Reset settings

Telegram Desktop <Badge type="warning" text="Sisyphus" />

```shell
rm -rfv ~/.local/share/TelegramDesktop
```

Telegram Desktop <Badge type="tip" text="Flatpak" />

```shell
rm -rfv ~/.var/app/org.telegram.desktop/config
```
