---
title: Глаз GNOME
appstreamRepo: org.gnome.eog
appstreamFlatpak: org.gnome.eog
---

# Глаз GNOME (eog)

::: warning
Приложение eog считается устаревшим, исключено из GNOME Core, актуальное приложение [Loupe](/loupe).
:::

Глаз GNOME (eog) — это официальная утилита для рабочего стола GNOME, которая поддерживает множество форматов, позволяя просматривать как отдельные изображения, так и коллекции.

Глаз GNOME также позволяет просматривать изображения в полноэкранном режиме слайд-шоу или установить изображение в качестве фона рабочего стола. Приложение считывает теги камеры для автоматического поворота изображений в правильную портретную или альбомную ориентацию.

## Установка из репозитория

**Глаз GNOME** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install eog
```
```shell[epm]
epm -i eog
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Глаз GNOME** одной командой:

```shell
flatpak install flathub org.gnome.eog
```

<!--@include: ./parts/install/software-flatpak.md-->