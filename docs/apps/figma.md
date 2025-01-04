---
aggregation:
  flatpak:
    id: io.github.Figma_Linux.figma_linux
    build: unofficial
  snap: 
     id: figma-linux
     build: unofficial
  epm:
    play:
      id: figma
      build: unofficial
appstream:
  id: io.github.Figma_Linux.figma_linux
  name: Figma
  icon: /figma/figma-logo.svg
  summary: Неофициальная версия Figma для Linux построенная на Electron.
  metadata_license:
    name: GNU GPLv2
    link: https://github.com/Figma-Linux/figma-linux/blob/master/LICENSE
  developer:
    name: Figma Linux Community
  url:
    homepage: https://github.com/Figma-Linux/figma-linux
    bugtracker: https://github.com/Figma-Linux/figma-linux/issues
---

# Figma

Figma — неофициальная версия Figma для Linux, построенная на Electron.

![Figma](/figma/figma-1.png)

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @apps/.parts/install/content-snap.md-->
<!--@include: @apps/.parts/install/content-epm-play.md-->

### Установка из репозитория GitHub

## RPM пакет

Загрузите пакет `.rpm` со страницы релизов приложения [`figma-linux` на Github](https://github.com/Figma-Linux/figma-linux/releases), затем установите через терминал:

::: code-group

```shell[apt-get]
su -
cd /home/USER/Загрузки
apt-get update
apt-get install figma-linux-*.x86_64.rpm
```

```shell[epm]
сd Загрузки
epm -i figma-linux-*.x86_64.rpm
```

:::

`USER` — имя вашего пользователя.

## AppImage

Загрузите пакет `.AppImage` со страницы релизов, потом откройте его через терминал:

```shell
su -
cd /home/USER/Загрузки
chmod +x figma-linux-*.AppImage
./figma-linux-*.AppImage -i
```

`USER` — имя вашего пользователя.
