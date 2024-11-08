---
aggregation:
  sisyphus: mangojuice
appstream:
  id: io.github.radiolamp.mangojuice
  name: MangoJuice
  icon: /mangojuice/io.github.radiolamp.mangojuice.svg
  summary: Удобная альтернатива GOverlay для настройки MangoHud.
  developer:
    nickname: Radiolamp
    avatar: https://avatars.githubusercontent.com/u/64334647?v=4&size=64
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://github.com/radiolamp/mangojuice
    bugtracker: https://github.com/radiolamp/mangojuice/issues
    donation: https://www.tinkoff.ru/collectmoney/crowd/osipov.anton16/uMOHe45333/?short_link=1J1DvYNesgD&referer=https%3A%2F%2Fgithub.com%2F&httpMethod=GET
gallery:
  title: Галерея
  type: slider
  items:
    - src: /mangojuice/mj-window-1.png
    - src: /mangojuice/mj-window-2.png
    - src: /mangojuice/mj-window-3.png
    - src: /mangojuice/mj-window-4.png
---

# MangoJuice

MangoJuice - приложение для удобного редактирования настроек MangoHud, который в свою очередь является Overlay-решением для отслеживания нагрузки и остальных параметров в играх и другом программном обеспечении. Приложение следует принципу «KISS», стремясь выполнять одну задачу, делая это хорошо.

Написано на Vala, GTK4 и Libadwaita.

<AGWGallery />

<!--@include: @apps/.parts/install/software-repo.md-->

#### Установка через терминал

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install mangojuice
```

```shell[epm]
epm -i mangojuice
```

:::

## Комбинации клавиш

| Комбинация клавиш | Описание  |
| ----------------- | --------- |
| [[Ctrl + T]]      | Тест      |
| [[Ctrl + S]]      | Сохранить |
| [[Ctrl + Q]]      | Выйти     |
