---
title: Mission Center
appstreamRepo: io.missioncenter.MissionCenter
appstreamFlatpak: io.missioncenter.MissionCenter
---

# Mission Center

Mission Center — приложение для мониторинга использования системных ресурсов. Контролируйте использование вашего процессора, памяти, диска, сети и графического процессора.

## Установка из репозитория 

**Mission Center** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install mission-center
```
```shell[epm]
epm -i mission-center
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Mission Center** одной командой:

```shell
flatpak install flathub io.missioncenter.MissionCenter
```

<!--@include: ./parts/install/software-flatpak.md-->