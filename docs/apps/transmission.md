# Transmission

Transmission — это быстрый, простой и бесплатный клиент BitTorrent. 

## Установка из репозитория 

**Transmission** можно установить любым привычным и удобным способом:

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install transmission-gtk
```
```shell[epm]
epm -i transmission-gtk
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Transmission** одной командой:

```shell
flatpak flatpak install flathub com.transmissionbt.Transmission
```