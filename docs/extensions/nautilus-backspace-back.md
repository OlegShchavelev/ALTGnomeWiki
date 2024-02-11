# Возращение на прежнюю папку с помощью backspace в Nautilus

Если вы привыкли возращаться к папкам через backspace, как в windows, то первым делом вам нужно установить nautilus-python

## Установка Nautilus python

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install nautilus-python
```
```shell[epm]
epm -i nautilus-python
```
:::

Далее нам нужен сам плагин, скачать его можно по прямой ссылке здесь

https://gist.githubusercontent.com/molaeiali/3f99f9c8b8b845b803bbdbb1fcbb4cbf/raw/2d7e84213898933df48657931c63e5b41306e044/BackspaceBack.py

## Установка плагина BackspaceBack

```shell
mkdir -p ~/.local/share/nautilus-python/extensions/
mv BackspaceBack.py ~/.local/share/nautilus-python/extensions/
```
