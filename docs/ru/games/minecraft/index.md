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

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/install/content-epm-play.md-->

## Установка Java

Перед установкой игры необходимо установить пакет `java-17-openjdk`.
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

## Установка официального лаунчера Minecraft

Лаунчер можно скачать на официальной [странице загрузки](https://www.minecraft.net/ru-ru/download), выбрав дистрибутив Other.

![Кнопка Other](/minecraft/dowloading.png)

Необходимо перейти в директорию с загруженным архивом и разархивировать его. Затем открыть папку minecraft-launcher и запустить лаунчер.

```shell
tar -xf Minecraft.tar.gz
cd minecraft-launcher/
./minecraft-launcher
```

![Окно входа в аккаунт Microsoft официального лаунчера Minecraft](/minecraft/launcher.png)
