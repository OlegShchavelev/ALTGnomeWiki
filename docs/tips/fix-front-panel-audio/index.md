# Проблема со звуком в передней панели

:::warning
Данное решение работает только в связке с `pipewire`, так что не подходит для p10, так как там по умолчанию используется pulseaudio
:::

## Краткое описание

В передней панели нет звука вне зависимости от того какой источник звука выбрать

## Решение

Первым делом установите pavucontrol

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install pavucontrol
```

```shell[epm]
epm -i pavucontrol
```

:::

Дальше зайдите в alsamixer и убедитесь что уровни громкости выглядят примерно так (не забудьте выбрать нужную звуковую карту через F6)

![alsamixer](/gnome-volume-fix/alsamixer.png)

Потом заходите в pavucontrol и ищите вкладку «Конфигурация»

![pavucontrol-1](/gnome-volume-fix/pavucontrol-1.png)

Как видите тут сразу несколько источников, в моём случае три, выбираете тот у которого много профилей и выбираете ему профиль `Pro Audio`

![pavucontrol-2](/gnome-volume-fix/pavucontrol-2.png)

И на всякий случай пример неправильного входа

![pavucontrol-3](/gnome-volume-fix/pavucontrol-3.png)

С выбором правильного источника звук заработает
