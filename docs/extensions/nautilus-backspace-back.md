# Nautilus Backspace Back

Если вы привыкли возвращаться к папкам через клавишу Backspace, как в Windows проводнике, то этот плагин может вернуть такое поведение.

## Установка

### Установка зависимостей
Зависимости можно установить через терминал:

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install nautilus-python libnautilus-gir
```
```shell[epm]
epm -i nautilus-python libnautilus-gir
```
:::

### Загрузка плагина
Далее нам нужно скачать сам плагин:

```shell
curl -sSL https://raw.githubusercontent.com/alt-gnome-team/nautilus_backspace/main/install | sh
```

## Настройка

Открываем config:
```shell
nano ~/.config/nautilus_backspace/config
```

Вставляем необходимое сочетание:
```ini
[DEFAULT]
shortcut = <Alt>Down
```

## Удаление плагина
```shell
rm ~/.local/share/nautilus-python/extensions/Back.py
rm -rf ~/.config/nautilus_backspace
```
