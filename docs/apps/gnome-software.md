---
aggregation:
    sisyphus: gnome-software
appstream:
    id: gnome-software.desktop
    name: Gnome Software
    icon: /gnome-software/gnome-software-logo.svg
    summary: Официальная утилита управления приложениями для рабочего окружения Gnome
    keywords: 
        - adaptive
    developer: 
        name: GNOME
        avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
    metadata_license: 
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    url: 
        homepage: https://apps.gnome.org/Software/
        bugtracker: https://gitlab.gnome.org/GNOME/gnome-software/issues
---



# Центр приложений

Центр приложений (Gnome Software) — официальная утилита для рабочего окружения GNOME, позволяющая находить и устанавливать новые приложения и системные расширения, а также удалять уже установленные.

Центр приложений предоставляет рекомендуемые и популярные приложения с описанием и несколькими снимками экрана к ним. Приложения можно находить, просматривая по категориям, либо с помощью функции поиска. Также центр приложений позволяет обновлять систему с помощью отложенных обновлений.

## Установка из репозитория

**Центр приложений** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-software
```
```shell[epm]
epm -i gnome-software
```
:::

## Как отключить запрос аутентификация администратора (root пользователя), при удалении приложений.

Необходимо удалить пакет polkit-rule-admin-root через терминал:

::: code-group

```shell[apt-get]
su -
apt-get remove polkit-rule-admin-root 
```
```shell[epm]
epm -e polkit-rule-admin-root
```
:::

:::info 
polkit-rule-admin-root — правило для набора polkit аутентификации по паролю root
:::

::: danger
Мы не рекомендуем удалять приложение 'Расширения', так как это может привести к удалению системных зависимостей.
:::
