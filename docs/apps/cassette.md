---
title: Cassette
nameRepo: cassette
appstreamRepo: io.github.Rirusha.Cassette
appstreamFlatpak: io.github.Rirusha.Cassette
aggregation: 
    sisyphus: cassette
    flatpak: io.github.Rirusha.Cassette
appstream:
    id: io.github.Rirusha.Cassette
    name: Cassette
    icon: /cassette/io.github.Rirusha.Cassette.png
    summary: Неофициальный клиент Яндекс Музыки
    url: 
        homepage: https://github.com/Rirusha/Cassette
        bugtracker: 
            name: github.com
            link: https://github.com/Rirusha/Cassette/issues
metainfo:
    thumb:
        src: /cassette/io.github.Rirusha.Cassette.png
        title: Кассета
    summary: Неофициальный клиент Яндекс Музыки
    developer: 
        name: Владимир Васьков
        nickname: Rirusha
        avatar: https://avatars.githubusercontent.com/u/95986183?v=4
    site:
        url: https://github.com/Rirusha/Cassette
        anchor: github.com
    licence:
        url: https://choosealicense.com/licenses/gpl-3.0/
        anchor: GNU GPLv3
    issue: 
        url: https://github.com/Rirusha/Cassette/issues
        anchor: github.com
    createTheme: true
    sponsor: 
        url: https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460/
---

# Cassette

Cassette — неофициальный клиент сервиса Яндекс Музыки.

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


## Nightly версия

::: warning
Данная версия каждую ночь собирается и обновляется из dev ветки приложения, поэтому может оказаться нестабильной 
:::

Подключаем репозиторий gnome-nightly и устанавливаем GNOME Platform:
```shell
flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo
flatpak install gnome-nightly org.gnome.Platform//master
```

Подключаем Nightly репозиторий и устанавливаем приложение:
```shell
flatpak remote-add --if-not-exists cassette-nightly https://rirusha.github.io/Cassette/index.flatpakrepo
flatpak install cassette-nightly io.github.Rirusha.Cassette-Devel
```


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
- [Поддержать рублём](https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460), просьба указывать в «Сообщении получателю» свой никнейм, иначе автор проекта не сможет добавить вас в соответствующий блок окна About. Система Тинькофф к сожелению не указывает имя отправителя;
- Написать отзыв в Центре Приложений о Кассете


## Решение проблем

### Не отображается интерфейс авторизации

::: info
У пользователей с графическим адаптаром NVIDIA (неизвестный диапозон устройств) и c закрытыми драйверами не отображается интерфейс авторизации Яндекс ID.
:::

![Пример проблемы с отображением интерфейса при авторизации](/cassette/casseta-1.png)

Если у вас flatpak версия, то выполните в терминале:
```shell
WEBKIT_DISABLE_COMPOSITING_MODE=1 flatpak run io.github.Rirusha.Cassette
```

Или создайте строчку в блоке переменных окружения в приложении [Flatseal](/flatseal) и перезапустите приложение.

При наличии версии из репозитория выполните:
```shell
WEBKIT_DISABLE_COMPOSITING_MODE=1 cassette
```

### Бесконечная загрузка при авторизации во Flatpak-версии приложения

Если при авторизации появляется значок загрузки и далее ничего не происходит, а при запуске приложения через терминал, выводит следующее:

```shell
(cassette:2): Gtk-WARNING **: 20:29:26.210: Locale not supported by C library.
	Using the fallback 'C' locale.

(cassette:2): Gtk-WARNING **: 20:29:26.598: AdwViewSwitcher 0x55bf67d9d910 (viewswitcher) reported min height -6, but sizes must be >= 0
flatpak-spawn: Invalid byte sequence in conversion input
Try "flatpak-spawn --help" for more information.
```

Добавте переменную окружения `LC_ALL`. Сделать это можно через терминал:

```shell
flatpak override --env=LC_ALL="en_US.UTF-8" --user io.github.Rirusha.Cassette
```

Или создайте строчку в блоке переменных окружения в приложении [Flatseal](/flatseal) и перезапустите приложение.
