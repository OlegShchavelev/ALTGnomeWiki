# Thunderbird

Thunderbird — это бесплатное приложение для работы с электронной почтой, которое легко установить и настроить с отличными характеристиками

## Установка из репозитория

**Thunderbird** можно установить любым привычным и удобным способом

**Установка через терминал**
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install thunderbird
```
```shell[epm]
epm -i thunderbird
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Thunderbird** одной командой:

```shell
flatpak install flathub org.mozilla.Thunderbird
```

## Thunderbird GNOME theme

Склонируйте скрипт и установите **Thunderbird GNOME theme**

```shell
git clone https://github.com/rafaelmardojai/thunderbird-gnome-theme && cd thunderbird-gnome-theme
sudo ./scripts/install.sh -f ~/.var/app/org.mozilla.Thunderbird/.thunderbird
```