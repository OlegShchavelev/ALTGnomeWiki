---
title: VK Мессенджер
appstream:
    name: VK Мессенджер
    icon: /vk-messenger/vk-messenger-logo.svg
    summary: Редактор меню для GNOME, использующий спецификацию меню freedesktop.org.
    keywords: 
        - proprietary
    developer: 
        name: VK Company Limited
        avatar: /vk-messenger/vk-messenger-avatar.svg
    metadata_license: 
        name: Собственная
        link: https://vk.com/terms
    url: 
        homepage: https://vk.me/app
---



# VK Мессенджер

VK Мессенджер — бесплатное и быстрое приложение для общения. Будьте на связи с друзьями и знакомыми в чатах и звонка.


## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm) с версии `3.60.8`, можно установить **VK Мессенджер** одной командой:

```shell
epm play vk-messenger
```

[eepm](/epm) ниже версии `3.60.8` установите **VK Мессенджер** версии `5.3.2`:

```shell
epm play vk
```

## Установка с официального сайта 

Загрузите пакет `.rpm` со страницы релизов приложения `vk-messenger` с официального [сайта производителя](https://vk.me/app), затем установите через терминал:

::: code-group

```shell[apt-get]
su -
cd /home/USER/Загрузки
apt-get install vk-messenger.rpm

```
```shell[epm]
сd Загрузки
epm -i vk-messenger.rpm
```
:::

USER — имя непривилегированного пользователя, укажите имя учетной записи. 