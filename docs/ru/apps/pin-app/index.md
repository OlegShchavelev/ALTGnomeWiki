---
aggregation:
  flatpak:
    id: io.github.fabrialberio.pinapp
    build: unofficial
appstream:
  id: io.github.fabrialberio.pinapp
  name: PinApp
  icon: /pin-app/pin-app-logo.svg
  summary: Позволяет менять Desktop Файлы
  developer:
    name: Fabrizio Alberio
    nickname: fabrialberio
    avatar: /pin-app/pin-app-avatar.png
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://github.com/fabrialberio/PinApp
    bugtracker: https://github.com/fabrialberio/PinApp/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /pin-app/pin-app-3.png
    - src: /pin-app/pin-app-4.png
    - src: /pin-app/pin-app-5.png
    - src: /pin-app/pin-app-6.png
---

# PinApp

PinApp позволяет закреплять изменённые приложения, возможности:

- Создавайте пользовательские ярлыки на веб-сайты
- Скрывайте приложения, которые вы не хотите видеть

<AGWGallery />

<!--@include: @ru/apps/.parts/install/content-flatpak.md-->

## Управление классическими приложениями из Сизифа

При установке **PinApp** <Badge type="tip">Flatpak</Badge> , оно открывается в изолированной среде и не имеет доступ по-умолчанию к директории `/usr/share/applications`, для настройки воспользуемся [программой Flatseal](/apps/flatseal/). Выберите приложение **PinApp** и в разделе Filesystem, включим опции `--filesystem=host-os`

![pin-app-7](/pin-app/pin-app-7.png)

или с помощью менеджера пакета Flatpak, в терминале введём:

```shell
flatpak override --user io.github.fabrialberio.pinapp --filesystem=host-os
```
