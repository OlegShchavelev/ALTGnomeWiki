---
title: Cassette
appstreamRepo: io.github.Rirusha.Cassette
appstreamFlatpak: io.github.Rirusha.Cassette
---

# Cassette

Cassette — это неофициальный клиент сервиса Яндекс Музыки.

## Установка из репозитория

**Cassette** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install сassette
```
```shell[epm]
epm -i сassette
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Cassette** одной командой:

```shell
flatpak install flathub io.github.Rirusha.Cassette
```

<!--@include: ./parts/install/software-flatpak.md-->

## Авторизация

Доступна авторизация по:

- логину и паролю;
- логину и коду из приложения Я.Ключ;
- QR-коду;

## План обновлений

::: timeline 0.1
Реализовать работу с плейлистами, проигрывание музыки, работу с очередью воспроизведения
:::
::: timeline 0.2
Моя волна
:::
::: timeline 0.3
Альбомы и исполнители
:::
::: timeline 0.4
Поиск по сервису
:::
::: timeline 0.5
Подкасты и книги
:::

Все запланированные фичи можете [посмотреть в бэклоге](https://github.com/users/Rirusha/projects/2)

## Как помочь Кассете

- Создать [ISSUE](https://github.com/Rirusha/Cassette/issues) с проблемой или предложением по улучшению;
- Сделать [Pull Request](https://github.com/Rirusha/Cassette/pulls) с фиксом или добавлением функционала;
- [Поддержать рублём](https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460), просьба указывать в "Сообщении получателю" свой никнейм, иначе автор проекта не сможет добавить вас в соответствующий блок окна About. Система Тинькофф к сожелению не указывает имя отправителя;
- Написать отзыв в Центре Приложений о Кассете

## Не отображается интерфейс авторизации

У пользователей с графическим адаптаром NVIDIA (неизвестный диапозон устройств) и c закрытыми драйверами не отображается интерфейс авторизации входа в клиент Яндекс Музыки.

```shell
su -
echo WEBKIT_DISABLE_COMPOSITING_MODE=1 >> /etc/environment
```

 После исполнения данной комманды перезагрузить операционную систему

 ![Пример проблемы с отображением интерфейса при авторизации](/casseta/casseta-1.png)