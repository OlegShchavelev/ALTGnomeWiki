---
aggregation:
  flatpak:
    id: com.mojang.Minecraft
    build: unofficial 
  epm:
    play:
      id: minecraft-launcher
      build: unofficial
appstream:
    id: com.mojang.Minecraft
    name: Minecraft
    icon: /minecraft/minecraft.png
    summary: Песочница с открытым миром 
    keywords:
      - proprietary
      - restrictions
    metadata_license:
      name: Собственная
      link: https://www.minecraft.net/ru-ru/eula
    developer:
      name: Mojang Studios
      avatar: https://wholesgame.com/wp-content/uploads/Mojang-Studios-Logo-Thumb-Square-PNG.png 
    url:
      homepage: https://www.minecraft.net/ru-ru
---

# Minecraft 

Minecraft — это игра-песочница с элементами выживания, в которой игроки исследуют и осваивают процедурно сгенерированные миры, собранные из кубических блоков.

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->

## Установка официального лаунчера Minecraft

## Установка Java

Перед тем как скачивать сам лаунчер, вам нужно установить пакет `java-17-openjdk`
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install java-17-openjdk

```

```shell[epm]
epm -i java-17-openjdk

```
:::

##  Установка официального лаунчера Minecraft

Заходим на сайт загрузки и нажимаем `Other`

![Кнопка Other](/minecraft/dowloading.png)

Распаковываем архив и открываем терминал по пути, куда вы распаковали архив.Распаковываем архив и запускаем терминал в том месте, куда мы его распаковали. Или запустите терминал и напишите `cd` `путь`. Потом нам надо запустить сам исполняемый файл с помощью команды

```shell
./minecraft-launcher

```
После этих действий лаунчер запустился

![Окно входа в аккаунт Microsoft официального лаунчера Minecraft](/minecraft/launcher.png)
