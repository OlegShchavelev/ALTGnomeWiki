---
aggregation:
    epm:
        play:
            id: mts-link-desktop
            build: unoffical
appstream:
    name: МТС Линк
    icon: /mts-link/mts-link-logo.svg
    summary: Приложение MTS Link для Linux
    keywords:
        - proprietary
    developer:
        name: ПАО «Мобильные ТелеСистемы»
        avatar: /mts-link/mts-link-avatar.svg
    metadata_license:
        name: Собственная
        link: https://mts-link.ru/legal/license-agreement.pdf
    url:
        homepage: https://mts-link.ru/application/

gallery:
    title: Галерея
    type: slider
    items:
        - src: /mts-link/mts-link-1.png
        - src: /mts-link/mts-link-2.png
        - src: /mts-link/mts-link-3.png
---

# МТС Линк

МТС Линк — это экосистема сервисов для бизнес‑коммуникаций и совместной работы.

<AGWGallery />

<!--@include: @apps/_parts/install/content-epm-play.md-->

## Установка с официального сайта

### Загрузка пакета

Переходим на [сайт программы](https://mts-link.ru/application/) и нажимаем кнопку [[Скачать для Linux]]

Далее нажимаем [[Скачать в формате AppImage]]

![Загрузка](/mts-link/mts-link-download.gif)

### Установка пакета

Открываем терминал и выполняем

```shell
su -
cd /home/.../Downloads/ # Где "..." - имя вашего пользователя
epm install mts-link-desktop.AppImage
```

![Установка](/mts-link/mts-link-install.gif)

Соглашаемся на всех шагах и готово, приложение установлено.

## Известные проблемы

### Не работает демонстрация полного экрана в сессии wayland

Увы, эта проблема наблюдается в множестве других приложений и она связана с тем, что авторы приложения еще не адаптировали их для сессии wayland.
