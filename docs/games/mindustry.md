---
aggregation:
  flatpak:
    id: com.github.Anuken.Mindustry
    build: unofficial
  snap:
    id: mindustry
    build: unofficial
appstream:
  id: com.github.Anuken.Mindustry
  name: Mindustry
  icon: /mindustry/mindustry-logo.png
  summary: Добывайте ресурсы и стройте заводы для защиты базы
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  keywords:
  developer:
    name: Антон Крамской
    nickname: Anuken
    avatar: https://avatars.githubusercontent.com/u/10100000?v=4
  url:
    homepage: https://mindustrygame.github.io/
    bugtracker: https://github.com/Anuken/Mindustry/issues
    help: https://mindustrygame.github.io/wiki/
gallery:
  - title: Галерея
    type: slider
    items:
      - src: /mindustry/mindustry-menu.png
      - src: /mindustry/mindustry-serpulo-1.png
      - src: /mindustry/mindustry-serpulo-2.png
      - src: /mindustry/mindustry-serpulo-3.png
      - src: /mindustry/mindustry-erekir-1.png
      - src: /mindustry/mindustry-erekir-2.png
      - src: /mindustry/mindustry-erekir-3.png
  - type: slider
    items:
      - src: /mindustry/mindustry-gier-1.png
      - src: /mindustry/mindustry-gier-2.png
  - type: slider
    items:
      - src: /mindustry/mindustry-notva-1.png
      - src: /mindustry/mindustry-notva-2.png
  - type: slider
    items:
      - src: /mindustry/mindustry-verilus-1.png
      - src: /mindustry/mindustry-verilus-2.png
---

# Mindustry

Mindustry — Песочница в жанре tower-defense. Создавайте сложные цепочки поставок из конвейеров, чтобы загружать боеприпасы в свои турели, производить материалы для строительства и защищать свои сооружения от волн врагов. Играйте со своими друзьями в кроссплатформенные многопользовательские кооперативные игры или бросайте им вызов в командных PvP-матчах.

<AGWGallery />

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/install/content-snap.md-->

## Serpulo

Serpulo — Планета суровых ландшафтов и необъятных пространств. Основное место действия компании с версии 5.0 и единственное до появления [Erekir](#erekir). Климат Serpulo крайне разнообразен, от заснеженных гор до жарких пустынь. Планета находится на умеренном расстоянии от своего солнца, что создаёт разнообразные климатические зоны.

На данный момент на Serpulo 272 сектора, 18 из которых являются необходимыми для прогресса и открытия всех технологий.

## Erekir

Erekir — это планета с уникальными природными ресурсами и опасными условиями. Климат Erekir характеризуется экстремальными условиями, такими как кислотные дожди, радиоактивные бури и другие аномалии. Планета находится на небольшом расстоянии от своего солнца, что определяет её уникальный климат.

Сюжет на секторах Erekir разворачивается в условиях постоянной угрозы и опасности, что создаёт захватывающий игровой опыт. Планета находится в разработке и включает в себя 17 секторов.

## Скрытый контент

Всего в игру добавлено 3 планеты и 3 астероида, официально доступны лишь 2 планеты. Но взглянуть вы сможете лишь на три астероида, так как третья планета удалена полностью.

::: warning
Включить весь скрытый контент можно через консоль, мы не гарантируем правильную его работу.

Включить консоль можно в настройках, вкладка `игра`, пункт `включить консоль`.
:::

### Tantros

Данная планета удалена из игры и будет невидимой.

Для включения, введите в консоль игры следующую команду:

```
Planets.tantros.alwaysUnlocked = true
```

![tantros](/mindustry/mindustry-tantros.png)

### Gier

Первые астероиды.

Для включения, введите в консоль игры следующую команду:

```
Planets.gier.alwaysUnlocked = true
```

<AGWGallery id=1 />

### Notva

Вторые астероиды.

Для включения, введите в консоль игры следующую команду:

```
Planets.notva.alwaysUnlocked = true
```

<AGWGallery id=2 />

### Verilus

Третьи астероиды.

Для включения, введите в консоль игры следующую команду:

```
Planets.verilus.alwaysUnlocked = true
```

<AGWGallery id=3 />
