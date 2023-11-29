# Картриджи 

Картриджи - это простое приложение для запуска ваших игр. Оно поддерживает импорт игр из Steam, Lutris, Heroic и других без необходимости входа в систему. Вы можете сортировать и скрывать игры или загружать обложки из SteamGridDB.

## Установка из репозитория

**Картриджи** можно установить любым привычным и удобным способом:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install cartridges
```
```shell[epm]
epm -i cartridges
```
:::


## Установка c помощью Flatpak <Badge type="info" text="flatpak" />

При наличии пакета [Flatpak](/flatpak), можно установить **Картриджи** одной командой:

```shell
flatpak install flathub hu.kramo.Cartridges
```