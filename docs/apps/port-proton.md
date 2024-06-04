---
aggregation:
    sisyphus: portproton
    flatpak:
        id: ru.linux_gaming.PortProton
        build: offical
    epm:
        play:
            id: portproton
            build: offical
appstream:
    id: portproton
    name: PortProton
    icon: /port-proton/port-proton-logo.svg
    summary: Проект, разработанный командой linux-gaming.ru для того, чтобы сделать легким и удобным запуск Windows игр.
    developer:
        name: Mikhail Tergoev & Linux Gaming Community
        nickname: Castro-Fidel
        avatar: /port-proton/port-proton-avatar.png
    metadata_license:
        name: MIT License
        link: https://choosealicense.com/licenses/mit/
    url:
        homepage: https://linux-gaming.ru/
        bugtracker: https://discord.com/invite/SFc65A2FJ6
---

# PortProton

PortProton — проект, разработанный командой linux-gaming.ru (бывший проект PortWINE) для того, чтобы сделать легким и удобным запуск Windows игр на Linux как для начинающих, так и для продвинутых пользователей. Проект стремится сделать запуск игр (и другого программного обеспечения) максимально простым, но в то же время предоставляет гибкие настройки для продвинутых пользователей.

PortProton основан на версии WINE от Valve (Proton) и ее модификациях (ProtonGE и ProtonLG). Включает в себя набор скриптов в сочетании с игровым WINE-PROTON, работающий в контейнере Steam Runtime Sniper с добавлением портотивных версий MANGOHUD (вывод полезной информации через окно игры: FPS, FrameTime, CPU, GPU и т.д.) и vkBasalt (улучшение графики в играх, очень хорошо в сочетании с FSR, DLSS). Имеется множество уже настроенных оптимизаций для максимальной производительности в играх.
Также реализовано определение видеокарт серии NVIDIA RTX с автоматическим включением поддержки трассировки лучей в играх.

## Установка из репозитория

**Установка через терминал**

**PortProton** можно установить любым привычным и удобным способом:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install portproton i586-{libvulkan1,libd3d,libGL,libgio,libnm,libnsl1,libnss,glibc-nss,glibc-pthread,libunwind,xorg-dri-swrast}
```
```shell[epm]
epm -i portproton i586-{libvulkan1,libd3d,libGL,libgio,libnm,libnsl1,libnss,glibc-nss,glibc-pthread,libunwind,xorg-dri-swrast}
```
:::

:::info
Мы рекомендуем перед установкой PortProton обновить операционную систему и ядро до актуального состояния.
:::


<!--@include: @apps/_parts/install/content-epm-play.md -->
<!--@include: @apps/_parts/install/content-flatpak.md-->
