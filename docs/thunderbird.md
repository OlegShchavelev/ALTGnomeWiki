# Thunderbird

Thunderbird — это бесплатное приложение для работы с электронной почтой, которое легко установить и настроить с отличными характеристиками

## Установка из репозитория

**Thunderbird** можно установить любым привычным и удобным способом

**Установка через терминал**
::: code-group

```bash[apt-get]
su -
apt-get update
apt-get install thunderbird
```
```bash[epm]
epm -i thunderbird
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Thunderbird** одной командой:

```bash
flatpak install flathub org.mozilla.Thunderbird
```

## Thunderbird GNOME theme

Склонируйте скрипт и установите **Thunderbird GNOME theme**

```bash
git clone https://github.com/rafaelmardojai/thunderbird-gnome-theme && cd thunderbird-gnome-theme
sudo ./scripts/install.sh -f ~/.var/app/org.mozilla.Thunderbird/.thunderbird
```