# Open Weather
Расширение GNOME Shell добавляющее пункт прогноза погоды в верхнем док меню.

:::warning
Расширение Open Weather не совместимо с GNOME 45 
:::

![Демонстрация интерфейса open weather](/openweather/openweather.png)

## Установка Open Weather из GNOME Shell Extensions <Badge type="info" text="GNOME Shell Extensions" />

1. Переходим на [страницу Open Weather](https://extensions.gnome.org/extension/750/openweather/) в GNOME Extensions.

2. Включаем расширение и подтверждаем его установку.

3. Расширение установлено!

## Установка Open Weather из репозитория <Badge type="warning" text="sisyphus" />

Данный способ установки расширений крайне не рекомендуется, но имеет право на жизнь.
::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-openweather
```
```shell[epm]
epm -i gnome-shell-extension-openweather
```
:::