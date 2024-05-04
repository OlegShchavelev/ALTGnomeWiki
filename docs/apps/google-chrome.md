---
aggregation:
    flatpak:
        id: com.google.Chrome
        build: unoffical
    epm:
        play:
            id: chrome
            build: unoffical
appstream:
    id: com.google.Chrome
    name: Google Chrome
    icon: /google-chrome/google-chrome-logo.svg
    summary: Веб-браузер от Google
    keywords:
        - proprietary
    metadata_license:
        name: Собственная
        link: https://chromeenterprise.google/terms/chrome-service-license-agreement/in/
    developer:
        name: Google
        avatar: /google-chrome/google-chrome-avatar.png
    url:
        homepage: https://www.google.com/chrome/
---

# Google Chrome

Google Chrome — Браузер, разрабатываемый компанией Google на основе свободного браузера Chromium и движка Blink. Первая стабильная версия вышла для операционных систем семейства Linux вышла в мае 2010 года.

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/warns/unpriveleged-spases.md -->
<!--@include: @apps/_parts/install/content-epm-play.md-->

## Запуск Google Chrome в оконном интерфейсе Wayland

По умолчанию Google Chrome запускается в оконном интерфейсе X11, для запуска в оконном интерфейсе Wayland:

1. Введите в Умную строку адрес `chrome://flags/`
2. Введите в строку поиска флаг `#ozone-platform-hint`
3. Включите опцию `Preferred Ozone platform` значение `auto`
4. Перезапустите Google Chrome и проверьте результат

```shell
google-chrome --ozone-platform-hint=auto
```

:::info
Мы рекомендуем использовать оконный режим Wayland для графических устройств NVIDIA, использующие закрытые драйвера NVIDIA и сессию Wayland
:::
