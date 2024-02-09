---
title: Resources
appstreamRepo: net.nokyan.Resources
appstreamFlatpak: net.nokyan.Resources
---

# Ресурсы

Resources — простой, но мощный монитор ваших системных ресурсов и процессов, написанный на Rust и использующий GTK 4 и libadwaita в качестве графического интерфейса. Он способен отображать использование и подробную информацию о вашем процессоре, памяти, графических процессорах, сетевых интерфейсах и блочных устройствах. Отображает список запущенных графических приложений и процессов.

## Установка из репозитория

**Resources** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install resources
```
```shell[epm]
epm -i resources
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Resources** одной командой:

```shell
flatpak flatpak install flathub net.nokyan.Resources
```

<!--@include: ./parts/install/software-flatpak.md-->