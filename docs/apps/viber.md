---
aggregation:
  flatpak:
    id: com.viber.Viber
    build: unofficial
  epm:
    play:
      id: viber
      build: unofficial
appstream:
  name: Viber
  icon: /viber/viber-logo.svg
  summary: Кроссплатформенное приложение для обмена сообщениями и звонков, насчитывающее миллиард пользователей по всему миру.
  keywords:
    - proprietary
  developer:
    name: Viber Media
  metadata_license:
    name: Собственная
    link: https://www.viber.com/app/uploads/ViberEULA82316.pdf
  url:
    homepage: https://www.viber.com/
---

# Viber

Viber — кроссплатформенное приложение для обмена сообщениями и звонков, насчитывающее миллиард пользователей по всему миру.

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/install/content-epm-play.md-->

## Установка с официального сайта

Скачиваем пакет с официального сайта Viber:

```shell
cd ~/Загрузки
wget https://download.cdn.viber.com/desktop/Linux/viber.AppImage
```

Делаем исполняемым и запускаем

```shell
chmod +x viber.AppImage
./viber.AppImage
```

:::info
После первого запуска приложение Viber клонирует себя в директорию `~/.local/share/viber/`, поэтому загруженный файл можно удалить.
:::
