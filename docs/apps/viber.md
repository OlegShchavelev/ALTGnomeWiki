# Viber

Viber — кроссплатформенное приложение для обмена сообщениями и звонков, насчитывающее миллиард пользователей по всему миру.

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **Viber** одной командой:

```shell
flatpak install flathub com.viber.Viber
```

:::warning 
На 31.01.2024 года, установка Viber инструментами Flatpak временно не доступен

```shell
Error: Неправильный размер дополнительных данных по адресу https://download.cdn.viber.com/cdn/desktop/Linux/viber.deb
ошибка: Failed to install com.viber.Viber: Неправильный размер дополнительных данных по адресу https://download.cdn.viber.com/cdn/desktop/Linux/viber.deb
```
:::

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Viber** одной командой:

```shell
epm play viber
```

## Установка с официального сайта

Cкачиваем пакет с официального сайта Viber:

```shell
cd ~/Загрузки
wget https://download.cdn.viber.com/desktop/Linux/viber.AppImage
```

Делаем исполняемым и запускаем

```shell
chmod +x viber.AppImage
./viber.AppImage
```

:::info
После первого запуска приложение Toolbox клонирует себя в директорию `~/.local/share/viber/`, поэтому загруженный файл можно удалить.
:::