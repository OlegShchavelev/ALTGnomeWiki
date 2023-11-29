# Просмотр документов

Приложение просмотра документов для рабочего стола GNOME. Вы можете просматривать, искать или комментировать документы в множестве разных форматов.
Evince поддерживает документы в следующих форматах: PDF, PS, EPS, XPS, DjVu, TIFF, DVI (с SyncTeX) и Comic Book Archive (CBR, CBT, CBZ, CB7).

## Установка c помощью единой команды управления пакетами  

**Просмотр документов** можно установить любым привычным и удобным способом

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install evince
```
```shell[epm]
epm -i evince
```

:::

## Установка c помощью Flatpak<Badge type="info" text="flatpak" />

При наличии пакета [Flatpak](/flatpak), можно установить **Просмотр документов** одной командой:

```shell
flatpak install flathub org.gnome.Evince
```