# PortProton

PortProton – это проект, разработанный командой linux-gaming.ru (бывший проект PortWINE) для того, чтобы сделать легким и удобным запуск Windows игр на Linux как для начинающих, так и для продвинутых пользователей. Проект стремится сделать запуск игр (и другого программного обеспечения) максимально простым, но в то же время предоставляет гибкие настройки для продвинутых пользователей.

PortProton основан на версии WINE от Valve (Proton) и ее модификациях (ProtonGE и ProtonLG). Включает в себя набор скриптов в сочетании с игровым WINE-PROTON, работающий в контейнере Steam Runtime Sniper с добавлением портированных версий MANGOHUD (вывод полезной информации через окно игры: FPS, FrameTime, CPU, GPU и т.д.) и vkBasalt (улучшение графики в играх, очень хорошо в сочетании с FSR, DLSS). Имеется множество уже настроенных оптимизаций для максимальной производительности в играх.
Также реализовано определение видеокарт серии NVIDIA RTX с автоматическим включением поддержки трассировки лучей в играх.

## Установка из репозитория

**Установка через терминал**

**PortProton** можно установить любым привычным и удобным способом

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
Мы рекомендуем перед установкой PortProton обновить операционную систему и ядро до актуального состоятия.
:::

## Ручная установка с указанием зависимостей

Для начала установим все необходимые зависимости

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install bubblewrap cabextract wget zstd gawk tar xz pciutils bc coreutils file curl icoutils wmctrl zenity xdg-utils desktop-file-utils libvulkan1 vulkan-tools libd3d libGL gamemode fontconfig xrdb libcurl libgio libnm libnsl1 libnss glibc-nss glibc-pthread /usr/bin/convert i586-{libvulkan1,libd3d,libGL,libcurl,libgio,libnm,libnsl1,libnss,glibc-nss,glibc-pthread,libunwind,xorg-dri-swrast
```
```shell[epm]
epm -i portproton bubblewrap cabextract wget zstd gawk tar xz pciutils bc coreutils file curl icoutils wmctrl zenity xdg-utils desktop-file-utils libvulkan1 vulkan-tools libd3d libGL gamemode fontconfig xrdb libcurl libgio libnm libnsl1 libnss glibc-nss glibc-pthread /usr/bin/convert i586-{libvulkan1,libd3d,libGL,libcurl,libgio,libnm,libnsl1,libnss,glibc-nss,glibc-pthread,libunwind,xorg-dri-swrast
```
:::

Затем произведём установку самой программы

```shell
wget -c "https://github.com/Castro-Fidel/PortWINE/raw/master/portwine_install_script/PortProton_1.0" && sh PortProton_1.0
```

:::info
Мы рекомендуем перед установкой PortProton обновить операционную систему и ядро до актуального состоятия.
:::

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **PortProton** одной командой:

```shell
epm play portproton
```
