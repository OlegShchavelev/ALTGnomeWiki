# Bottles

Bottles — это приложение, которое позволяет вам легко управлять и использовать Windows приложения игры.

## Установка из репозитория

**Bottles** можно установить любым привычным и удобным способом:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install bottles cabextract
```
```shell[epm]
epm -i bottles cabextract python3-module-yaml
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Bottles** одной командой:

```shell
flatpak install flathub com.usebottles.bottles
```