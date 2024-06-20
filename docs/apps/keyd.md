---
appstream:
    name: keyd
    summary: Переназначение клавиш
    developer:
        name: rvaiya
    url:
        homepage: https://github.com/rvaiya/keyd/
        bugtracker: https://github.com/rvaiya/keyd/issues
---

# keyd

keyd — простой демон для переназначения клавиш. Позволяет создавать отдельные слои при использовании модификаторов - <kbd>Alt</kbd>, <kbd>Meta</kbd> и <kbd>Ctrl</kbd>

## Установка из репозитория

**Установка через терминал**

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install keyd
```

```shell-vue[epm]
epm -i keyd
```

:::

## Примеры настройки

Основной конфигурационный файл `default.conf` находится в папке `/etc/keyd`

### Использование клавиш Vim в системе

Пример назначения клавиш Vim на стрелочки

Комбинация <kbd>Alt</kbd> + <kbd>h</kbd>/<kbd>j</kbd>/<kbd>k</kbd>/<kbd>l</kbd>

```
[ids]
*

[alt]
h = left
j = down
k = up
l = right
```

### Использование курсора мыши с помощью клавиатуры

Пример того, как на клавиатуре без цифрового блока перемещать курсор мыши

:::tip

Не забудьте включить поддержку управления курсором в настройках системы

`Настройки` -> `Специальные возможности` -> `Наведение и нажатие` -> `Клавиши мыши`

:::

Комбинация <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>h</kbd>/<kbd>j</kbd>/<kbd>k</kbd>/<kbd>l</kbd> для движения курсором влево/вниз/вправо/вверх

Комбинация <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>b</kbd>/<kbd>n</kbd> для нажатия левой/правой клавиши мыши

```
[ids]
*

[control+alt]

h = macro(kp4 kp4 kp4 kp4 kp4 kp4 kp4 kp4 kp4 kp4)
j = macro(kp2 kp2 kp2 kp2 kp2 kp2 kp2 kp2 kp2 kp2)
k = macro(kp8 kp8 kp8 kp8 kp8 kp8 kp8 kp8 kp8 kp8)
l = macro(kp6 kp6 kp6 kp6 kp6 kp6 kp6 kp6 kp6 kp6)

b = leftmouse
n = rightmouse
```

:::tip
Команда `macro` использована для ускорения движения мыши, так как по умолчанию она двигается медленно
:::

:::warning

Если курсор не двигается, то возможно у вас включён цифровой блок

Если у вас нет кнопки <kbd>NumLock</kbd>, то можно назначить отдельную клавиши

```
z = numlock
```

:::

### Примеры от разработчика

Примеры конфигурации можно найти в [репозитории проекта](https://github.com/rvaiya/keyd/)

