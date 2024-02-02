---
title: Bottles
appstreamRepo: com.usebottles.bottles
appstreamFlatpak: com.usebottles.bottles
---

# Bottles

Bottles — это приложение, которое позволяет вам легко управлять и использовать Windows приложения игры.

## Установка из репозитория

**Bottles** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install bottles
```
```shell[epm]
epm -i bottles
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Bottles** одной командой:

```shell
flatpak install flathub com.usebottles.bottles
```

<!--@include: ./parts/install/software-flatpak.md-->