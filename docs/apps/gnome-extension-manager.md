---
gallery:
  title: Галерея
  type: slider
  items:
    - src: /gnome-extension-manager/gnome-extension-manager-1.gif
aggregation:
  flatpak: com.mattjakeman.ExtensionManager
  sisyphus: gnome-extension-manager
appstream:
  id: com.mattjakeman.ExtensionManager
  name: Менеджер расширений
  icon: /gnome-extension-manager/gnome-extension-manager-logo.svg
  summary: Простой способ управления раширениями
  developer:
    name: Matt Jakeman
    nickname: mjakeman
    avatar: https://avatars.githubusercontent.com/u/12368711?v=4
  metadata_license:
    name: GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://github.com/mjakeman/extension-manager
    bugtracker: https://github.com/mjakeman/extension-manager/issues
---

# Менеджер расширений

Менеджер расширений — графический инструмент установки, удаления и настройки расширений оболочки GNOME

Поскольку расширения создаются вне обычного процесса проектирования и разработки GNOME, они поддерживаются их авторами, а не сообществом GNOME. Некоторые функции, впервые реализованные в виде расширений, могут появиться в будущих версиях GNOME.

В отличие от своего официального аналога для оболочки GNOME, приложения [Расширения](/extensions-app), данный инструмент имеет дополнительный функционал, связанный с ещё неустановленными расширениями. Через Менеджер, можно искать ещё не установленные расширения, смотреть основную информацию не заходя в браузер. Здесь сразу можно увидеть описание, количество загрузок, полезные ссылки, а также комментарии пользователей

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->

<AGWGallery />

## Использование

### Установка расширений

- Перейдите во вкладку `Обзор`

![Вкладка Обзор](/gnome-extension-manager/gnome-extension-manager-2.png)

- Введите название расширения или часть его описания

![Найденное расширение](/gnome-extension-manager/gnome-extension-manager-3.png)

- Нажмите по нужному расширению. Здесь же можно установить расширение по кнопке `Установить`

![Подробности о расширении](/gnome-extension-manager/gnome-extension-manager-4.png)

### Удаление расширений

- Во вкладке `Установленные` найдите нужное расширение и нажмите по нему

![Вкладка Установленные](/gnome-extension-manager/gnome-extension-manager-5.png)

- Подтвердите удаление нажатием по кнопке `Удалить`

![Подтверждение удаления](/gnome-extension-manager/gnome-extension-manager-6.png)
