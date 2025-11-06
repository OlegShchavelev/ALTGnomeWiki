---
aggregation:
  sisyphus: fish
appstream:
  id: fish.desktop
  name: Fish
  icon: /fish/fish.png
  summary: Умная и удобная оболочка для операционных систем на базе ядра Linux
  developer:
    name: The user-friendly shell
  metadata_license:
    name: GNU GPLv2
    link: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
  url:
    homepage: https://fishshell.com/
    bugtracker: https://github.com/fish-shell/fish-shell/issues
---

# Fish

Fish — умная и удобная оболочка для операционных систем на базе ядра Linux

<!--@include: @ru/apps/.parts/install/content-repo.md-->

## Установка Fish оболочкой по умолчанию для вашего пользователя

```shell
su -
usermod USER -s /usr/bin/fish
```

`USER` — имя вашего пользователя.

## Настройка Fish для root пользователя

```shell
su -
usermod root -s /usr/bin/fish
```

## Oh my Fish

Oh My Fish (OMF) — это фреймворк для управления конфигурацией и расширениями для командной оболочки Fish (Friendly Interactive SHell). Он предоставляет удобный способ установки тем, плагинов и настройки окружения Fish, делая его более функциональным и красивым. Oh My Fish упрощает процесс настройки оболочки, позволяя пользователям легко добавлять новые функции и изменять внешний вид терминала.

## Установите Oh My Fish

```shell
curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
```

## Установка тем для Oh My Fish

### Просмотр доступных тем

Вы можете просмотреть доступные темы, выполнив команду:

```shell
omf search theme
```

### Установка темы

Чтобы установить конкретную тему, используйте команду `omf install`, за которой следует имя темы. Например, чтобы установить тему `batman`, выполните:

```shell
omf install batman
```

После этой команды тема применится автоматически
