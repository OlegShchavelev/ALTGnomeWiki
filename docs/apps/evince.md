# Просмотр документов

Просмотр документов (Evince) — это официальная утилита для рабочего стола GNOME, которая поддерживает документы в следующих форматах: PDF, PS, EPS, XPS, DjVu, TIFF, DVI (с SyncTeX) и Comic Book Archive (CBR, CBT, CBZ, CB7).

## Установка из репозитория

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

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Просмотр документов** одной командой:

```shell
flatpak install flathub org.gnome.Evince
```