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
mkdir -p ~/.local/share/nautilus-python/extensions/
wget -P ~/.local/share/nautilus-python/extensions/ https://raw.githubusercontent.com/alt-gnome-team/nautilus_backspace/main/Back.py
```

### Готово!
Осталось перезапустить Nautilus:

```shell
nautilus -q
```

И всё готово.

## Удаление плагина
```shell
rm ~/.local/share/nautilus-python/extensions/Back.py
```
