---
aggregation:
  sisyphus: cassette
  flatpak: io.github.Rirusha.Cassette
appstream:
  id: io.github.Rirusha.Cassette
  name: Кассета
  icon: /cassette/cassette-logo.svg
  summary: Неофициальный клиент Яндекс Музыки
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  keywords:
    - donttheme
  developer:
    name: Владимир Васьков
    nickname: Rirusha
    avatar: https://avatars.githubusercontent.com/u/95986183?v=4
  url:
    homepage: https://github.com/Rirusha/Cassette
    bugtracker: https://github.com/Rirusha/Cassette/issues
    translate: https://l10n.gnome.org/module/cassette/
    donation: https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460/
gallery:
  title: Галерея
  type: slider
  items:
    - src: /cassette/cassette-1.png
    - src: /cassette/cassette-2.png
---

# Кассета

Кассета — неофициальный клиент сервиса Яндекс.Музыка.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Nightly-версия

::: warning
Данная версия собирается и обновляется при каждом изменение в коде, поэтому может оказаться нестабильной.
:::

Подключаем репозиторий `gnome-nightly` и устанавливаем GNOME Platform:

```shell
flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo
flatpak install gnome-nightly org.gnome.Platform//master
```

Подключаем Nightly-репозиторий и устанавливаем приложение:

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

::: timeline 0.3
Оптимизация работы клиента и приложения в целом. Изменение логики работы виджетов списков треков. Добавление view виджетов для альбомов и исполнителей.
:::
::: timeline 0.4
Поиск по сервису
:::
::: timeline 0.5
Подкасты и книги
:::

Все запланированные фичи можно [посмотреть в бэклоге](https://github.com/users/Rirusha/projects/2)

## Как помочь Кассете

- Создать [Issue](https://github.com/Rirusha/Cassette/issues) с проблемой или предложением по улучшению;
- Сделать [Pull Request](https://github.com/Rirusha/Cassette/pulls) с фиксом или добавлением функционала;
- [Поддержать рублём](https://www.tinkoff.ru/collectmoney/crowd/vaskov.vladimir19/Uhi7d15460). Просьба указывать в «Сообщении получателю» свой ник, иначе автор проекта не сможет добавить вас в соответствующий блок окна `About` (система Тинькофф, к сожалению, не указывает имя отправителя);
- Написать отзыв в [Центре Приложений](/gnome-software) о Кассете.

## Решение проблем

### Не отображается интерфейс авторизации

::: info
У пользователей с графическим адаптером NVIDIA (неизвестный диапазон устройств) и закрытыми драйверами не отображается интерфейс авторизации Яндекс ID.
:::

![Пример проблемы с отображением интерфейса при авторизации](/cassette/cassette-3.png)

Если у вас [Flatpak-версия](/flatpak), то выполните в терминале:

```shell
WEBKIT_DISABLE_COMPOSITING_MODE=1 flatpak run io.github.Rirusha.Cassette
```

Или создайте строчку в блоке переменных окружения через [Flatseal](/flatseal) и перезапустите приложение.

При наличии версии из репозитория, выполните:

```shell
WEBKIT_DISABLE_COMPOSITING_MODE=1 cassette
```

### Бесконечная загрузка при авторизации во [Flatpak-версии](/flatpak) приложения

Если при авторизации появляется значок загрузки и далее ничего не происходит, а при запуске приложения через терминал, выводит следующее:

```shell
(cassette:2): Gtk-WARNING **: 20:29:26.210: Locale not supported by C library.
	Using the fallback 'C' locale.

(cassette:2): Gtk-WARNING **: 20:29:26.598: AdwViewSwitcher 0x55bf67d9d910 (viewswitcher) reported min height -6, but sizes must be >= 0
flatpak-spawn: Invalid byte sequence in conversion input
Try "flatpak-spawn --help" for more information.
```

Добавьте переменную окружения `LC_ALL`. Сделать это можно через терминал:

```shell
flatpak override --env=LC_ALL="en_US.UTF-8" --user io.github.Rirusha.Cassette
```

Или создайте строчку в блоке переменных окружения через [Flatseal](/flatseal) и перезапустите приложение.
