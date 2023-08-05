# Telegram
Кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями обмена текстовыми, голосовыми и видеосообщениями, а также стикерами, фотографиями и файлами многих форматов.
## Установка из репозитория <Badge type="warning" text="sysphus" />
**Telegram** можно установить любым привычным и удобным способом

**Установка через терминал**
::: code-group

```bash[apt-get]
su -
apt-get update
apt-get install telegram-desktop
```
```bash[epm]
epm -i telegram-desktop
```
:::

## Установка c помощью единой комманды управления пакетами 

При наличии пакета eepm, можно установить **Telegram** одной командой:

**Установка через терминал**

```bash
epm play telegram
```

## Установка c помощью Flatpak

При наличии пакета Flatpak, можно установить **Telegram** одной командой:

```bash
flatpak install flathub org.telegram.desktop
```