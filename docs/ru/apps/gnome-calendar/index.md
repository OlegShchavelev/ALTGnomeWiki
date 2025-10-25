---
aggregation:
  flatpak: org.gnome.Calendar
  sisyphus: gnome-calendar
appstream:
  id: org.gnome.Calendar
  name: Календарь
  icon: /gnome-calendar/Calendar-logo.png
  summary: Простой и удобный инструмент для планирования и отслеживания расписания.
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GPLv2+
    link: https://packages.altlinux.org/license/GPL-2.0-or-later
  url:
    homepage: https://apps.gnome.org/ru/Calendar/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-calendar/-/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /gnome-calendar/sc-1.webp
    - src: /gnome-calendar/sc-2.webp
    - src: /gnome-calendar/sc-3.webp
---

# Календарь

Календарь GNOME — это элегантный инструмент, помогающий планировать и составлять расписание на ближайшие дни и недели, независимо от того, чем заняты ваши месяцы - встречами и совещаниями, общественными мероприятиями, поездками или другими жизненными обязательствами.

Удобное создание и управление неограниченным количеством календарей и событий с помощью Календаря GNOME с бесконечной прокруткой в виде месяца, расписания на неделю и списка расписаний.

Интегрируя новейшие технологии GNOME и лучшие практики проектирования, Календарь GNOME построен на базе зрелого сервера данных Evolution для управления большим количеством событий и интеграции с другими приложениями. Вы можете добавлять календари из различных онлайн-планировщиков (таких как NextCloud, Календарь Google и CalDAV / WebDAV-серверы), что позволяет синхронизировать события на различных устройствах и платформах. Календарь GNOME также поддерживает локальный и автономный календарный учет, что позволяет использовать его в любом месте и в любое время во время путешествий (или после краха цивилизации)

<AGWGallery />

<!--@include: @ru/apps/.parts/install/content-repo.md-->
<!--@include: @ru/apps/.parts/install/content-flatpak.md-->

## Синхронизация CalDAV с Яндекс.Календарём

Создайте пароль для CalDAV на [странице «Пароли приложений»](https://id.yandex.ru/security/app-passwords) и сохраните его.

В Яндекс.Календаре откройте настройки интересующего вас календаря и скопируйте ссылку из раздела «Экспорт»

![Ссылка в разделе «Экспорт»](/gnome-calendar/gnome-calendar-yandex-caldav-1.jpg)

В Календаре откройте меню «Управление календарями»

![Меню «Управление календарями»](/gnome-calendar/gnome-calendar-yandex-caldav-2.jpg)

Нажмите на кнопка «Добавить календарь»

![Кнопка «Добавить календарь»](/gnome-calendar/gnome-calendar-yandex-caldav-3.jpg)

Вставьте скопированную ссылку на календарь в разделе «Импортировать календарь»

::: tip
Имя календаря можно не вводить, иначе будет создан локальный дубликат
:::

![Меню добавления календаря](/gnome-calendar/gnome-calendar-yandex-caldav-4.jpg)

При добавлении введите логин аккаунта Яндекс и созданный для CalDAV пароль. Ещё раз введите данные для GNOME Keyring.

Готово! Теперь добавленные в Яндекс.Календаре события отобразятся в GNOME Calendar и наоборот.
