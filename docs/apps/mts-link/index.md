---
aggregation:
  epm:
    play:
      id: mts-link
      build: unofficial
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

МТС Линк — экосистема сервисов для бизнес‑коммуникаций и совместной работы.

<AGWGallery />

<!--@include: @apps/.parts/install/content-epm-play.md-->

## Установка с официального сайта

### Загрузка пакета

Перейдите на [официальный сайт](https://mts-link.ru/application/) и скачайте дистрибутив по кнопке `Скачать для Linux` -> `Скачать в формате AppImage`

![Загрузка](/mts-link/mts-link-4.gif)

### Установка пакета

- откройте терминал и выполняем

```shell
su -
cd $HOME/Downloads
epm install mts-link-desktop.AppImage
```

![Установка](/mts-link/mts-link-5.gif)

- Пройдите все шаги в установщике
- Готово, приложение установлено.

## Известные проблемы

### Не работает демонстрация полного экрана в сессии Wayland

Эта проблема наблюдается в множестве других приложений. Она связана с тем, что авторы приложения ещё не адаптировали их для сессии Wayland.
