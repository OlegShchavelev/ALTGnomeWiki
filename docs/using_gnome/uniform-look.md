# Общая тема для всех приложений

По умолчанию в GNOME почти в каждой приложение разный дизайн, ниже описано как это исправить

## Установка темы LibAdwaita для устаревших (GTK3) приложений

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install gtk3-theme-adw-gtk3
```
```shell[epm]
epm -i gtk3-theme-adw-gtk3
```
:::

## Установка Kvantum и темы под него

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install Kvantum git
```
```shell[epm]
epm -i Kvantum git
```
:::

```shell
git clone https://github.com/vinceliuice/Colloid-kde.git
cd Colloid-kde
cp -r Kvantum/* ~/.config/Kvantum/
```

![Kvantum-1](/Kvantum/Kvantum-1.png)

## Настройка GNOME для использования Kvantum

Открываем файл /etc/environment нужным вам текстовым редактором (nano исключительно как пример)

```shell
su -
nano /etc/environment
```

И добавляем туда строчку

```shell
export QT_STYLE_OVERRIDE=kvantum
```
