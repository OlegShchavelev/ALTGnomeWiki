---
aggregation:
  epm:
    play:
      id: vk-messenger
      build: unofficial
appstream:
  name: VK Мессенджер
  icon: /vk-messenger/vk-messenger-logo.svg
  summary: Бесплатный мессенджер от компании VK.
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

<!--@include: @apps/.parts/install/content-epm-play.md-->

:::info
Если ваш [eepm](/epm) ниже версии `3.60.8` установите **VK Мессенджер** версии `5.3.2`:

```shell
epm play vk
```

:::

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

USER — имя непривилегированного пользователя, укажите имя учётной записи.
