---
aggregation:
  sisyphus: neofetch
appstream:
  name: Neofetch
  icon: /neofetch/neofetch-logo.png
  summary: Средство для отображения информации о системе.
  metadata_license:
    name: MIT License
    link: https://choosealicense.com/licenses/mit/
  developer:
    name: Dylan Araps & Linux Community
    nickname: dylanaraps
    avatar: /neofetch/neofetch-avatar.png
  url:
    homepage: https://github.com/dylanaraps/neofetch
    bugtracker: https://github.com/dylanaraps/neofetch/issues
---

<style module>
    @font-face {
        font-family: "FiraCode Nerd Font";
        src: url("/neofetch/neofetch-fiersik-font.ttf");
    }
    code {
        font-family: 'FiraCode Nerd Font' !important;
    }
</style>

# Neofetch

Neofetch — средство вывода системной информации в командную строку, написанное на `bash 3.2+`. Он отображает информацию о вашей операционной системе, программном и аппаратном обеспечении эстетичным и визуально приятным способом.

## Установка из репозитория

**Neofetch** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install neofetch
```

```shell[epm]
epm -i neofetch
```

:::

## Конфигурация

Neofetch имеет довольно гибкую конфигурацию, и каждый может настроить его под себя.

::: info
В данном блоке рассматривается настройка на примере [одной из пользовательских конфигураций](https://github.com/fiersik/fiersik_dots/tree/main/neofetch).

Для его правильного отображения необходимо установить один из [Nerd-шрифтов](https://www.nerdfonts.com/font-downloads).
:::

::: tabs
== По умолчанию
![по умолчанию](/neofetch/neofetch-config-no.png)

== Fiersik
![Fiersik](/neofetch/neofetch-config-custom.png)
:::

### Функция `print_info`

Основная визуальная часть настраивается в данной функции.

::: tabs
== По умолчанию

```shell
print_info() {
    info title
    info underline
    info "OS" distro
    info "Host" model
    info "Kernel" kernel
    info "Uptime" uptime
    info "Packages" packages
    info "Shell" shell
    info "Resolution" resolution
    info "DE" de
    info "WM" wm
    info "WM Theme" wm_theme
    info "Theme" theme
    info "Icons" icons
    info "Terminal" term
    info "Terminal Font" term_font
    info "CPU" cpu
    info "GPU" gpu
    info "Memory" memory
    info cols
}
```

== Fiersik

```shell
print_info() {
    prin " \n \n \n \n \n \n ${cl2}F \n \n I \n \n E  \n \n R  \n \n S  \n \n I  \n \n K"
    prin " "
    info "${cl6} ╭─" distro
    info "${cl6} ├─" kernel
    info "${cl6} ├─" de
    info "${cl6} ╰─󰔛" uptime
    echo
    info "${cl2} ╭─" users
    info "${cl2} ├─" shell
    info "${cl2} ╰─󰏗" packages
    echo
    info "${cl1} ╭─" term
    info "${cl1} ├─󰂫" theme
    info "${cl1} ├─󰂫" icons
    info "${cl1} ╰─" font
    echo
    info "${cl4} ╭─󰍛" cpu
    info "${cl4} ├─󰍹" gpu
    info "${cl4} ├─" gpu_driver
    info "${cl4} ├─" resolution
    info "${cl4} ├─ ${cl7}" disk
    info "${cl4} ╰─" memory
}
```

:::

**Структура строки**

::: tabs
== info
Функция `info` выводит один из параметров системы.

```shell
info "КОММЕНТАРИЙ" ПАРАМЕТР
```

Пример:

```shell
    info "Theme" theme
    info "Icons" icons
    info "Terminal" term # [!code focus]
    info "CPU" cpu
    info "GPU" gpu

```

Вывод:

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
Terminal: kgx # [!code focus]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
```

== prin
Функция `prin` выводит произвольную строку или переменную оболочки.

```shell
prin "СТРОКА"
```

Пример:

```shell
    info "Host" model
    info "Kernel" kernel
    prin "Строка с переменной '${USER}'" # [!code focus]
    info "Uptime" uptime
    info "Packages" packages
```

Вывод:

```shell
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.8-6.8-alt1
Строка с переменной 'fiersik' # [!code focus]
Uptime: 1 hour, 7 mins
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
```

== echo
Функция `echo` выводит пустую строку.

```shell
echo
```

Пример:

```shell
    info "Shell" shell
    info "Resolution" resolution
    echo # [!code focus]
    info "DE" de
    info "WM" wm
```

Вывод:

```shell
Shell: zsh 5.9
Resolution: 1920x1080
 # [!code focus]
DE: GNOME 46.1
WM: Mutter
```

:::

::: details Возможные параметры

| Переменная   | Значение              |
| :----------- | :-------------------- |
| `title`      | Заголовок (user@host) |
| `underline`  | Разделительная черта  |
| `distro`     | Дистрибутив           |
| `model`      | Модель ПК             |
| `kernel`     | Ядро                  |
| `uptime`     | Время работы          |
| `packages`   | Пакеты                |
| `shell`      | Оболочка              |
| `resolution` | Разрешение экрана     |
| `de`         | Окружение             |
| `wm`         | Оконный менеджер      |
| `wm_theme`   | Тема окон             |
| `theme`      | Тема                  |
| `icons`      | Тема иконок           |
| `term`       | Терминал              |
| `term_font`  | Шрифт терминала       |
| `cpu`        | Процессор             |
| `gpu`        | Видеокарта            |
| `memory`     | Оперативная память    |
| `gpu_driver` | Драйвер видеокарты    |
| `disk`       | Диск                  |
| `battery`    | Батарея               |
| `font`       | Шрифт                 |
| `song`       | Песня                 |
| `local_ip`   | Локальный IP-адрес    |
| `public_ip`  | Публичный IP-адрес    |
| `users`      | Пользователь          |
| `locale`     | Локаль                |
| `cols`       | Цветовые блоки        |

:::

### Заголовок

**Скрыть/показать полное доменное имя**

| Флаг           | Значения    |
| :------------- | :---------- |
| `--title_fqdn` | `on`, `off` |

::: code-group

```shell[По умолчанию]
title_fqdn="off"
```

```shell[Fiersik]
title_fqdn="off"
```

:::

### Ядро

**Сократить выходные данные функции kernel**

| Флаг                 | Значения    |
| :------------------- | :---------- |
| `--kernel_shorthand` | `on`, `off` |

::: tabs
== on

```shell
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.8-6.8-alt1 # [!code focus]
Uptime: 1 hour, 32 mins
```

== off

```shell
OS: ALT Regular Sisyphus x86_64
Kernel: Linux 6.8.8-6.8-alt1 # [!code focus]
Uptime: 1 hour, 32 mins
```

:::

::: code-group

```shell[По умолчанию]
kernel_shorthand="on"
```

```shell[Fiersik]
kernel_shorthand="off"
```

:::

### Дистрибутив

**Сократить выходные данные функции distro**

| Флаг                 | Значения            |
| :------------------- | :------------------ |
| `--distro_shorthand` | `on`, `tiny`, `off` |

::: code-group

```shell[По умолчанию]
distro_shorthand="off"
```

```shell[Fiersik]
distro_shorthand="off"
```

:::

**Скрыть/показать архитектуру OS**

| Флаг        | Значения    |
| :---------- | :---------- |
| `--os_arch` | `on`, `off` |

::: tabs
== on

```shell
fiersik@alt-gnome
-----------------
OS: ALT Regular Sisyphus x86_64 # [!code focus]
Kernel: 6.8.8-6.8-alt1
```

== off

```shell
fiersik@alt-gnome
-----------------
OS: ALT Regular Sisyphus # [!code focus]
Kernel: 6.8.8-6.8-alt1
```

:::

::: code-group

```shell[По умолчанию]
os_arch="on"
```

```shell[Fiersik]
os_arch="on"
```

:::

### Время работы

**Сократить выходные данные функции uptime**

| Флаг                 | Значения            |
| :------------------- | :------------------ |
| `--uptime_shorthand` | `on`, `tiny`, `off` |

::: tabs
== on

```shell
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.8-6.8-alt1
Uptime: 1 hour, 47 mins # [!code focus]
Packages: 2208 (rpm), 35 (flatpak)
Shell: zsh 5.9
```

== tiny

```shell
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.8-6.8-alt1
Uptime: 1h 47m # [!code focus]
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
Shell: zsh 5.9
```

== off

```shell
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.8-6.8-alt1
Uptime: 1 hour, 47 minutes # [!code focus]
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
Shell: zsh 5.9
```

:::

::: code-group

```shell[По умолчанию]
uptime_shorthand="on"
```

```shell[Fiersik]
uptime_shorthand="on"
```

:::

### Память

**Скрыть/показать процент использования**

| Флаг               | Значения    |
| :----------------- | :---------- |
| `--memory_percent` | `on`, `off` |

::: tabs
== on

```shell
Icons: Adwaita [GTK2/3]
Terminal: kgx
Memory: 6807MiB / 15982MiB (42%) # [!code focus]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
```

== off

```shell
Icons: Adwaita [GTK2/3]
Terminal: kgx
Memory: 6807MiB / 15982MiB # [!code focus]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
```

:::

::: code-group

```shell[По умолчанию]
memory_percent="off"
```

```shell[Fiersik]
memory_percent="on"
```

:::

**Изменить единицы вывода памяти**

| Флаг            | Значения            |
| :-------------- | :------------------ |
| `--memory_unit` | `kib`, `mib`, `gib` |

::: tabs
== kib

```shell
Icons: Adwaita [GTK2/3]
Terminal: kgx
Memory: 7144448KiB / 16365568KiB # [!code focus]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
```

== mib

```shell
Icons: Adwaita [GTK2/3]
Terminal: kgx
Memory: 7516MiB / 15982MiB # [!code focus]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
```

== gib

```shell
Icons: Adwaita [GTK2/3]
Terminal: kgx
Memory: 7.40GiB / 15.61GiB # [!code focus]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
```

:::

::: code-group

```shell[По умолчанию]
memory_unit="mib"
```

```shell[Fiersik]
memory_unit="mib"
```

:::

### Пакеты

**Скрыть/показать имена пакетных менеджеров**

| Флаг                 | Значения           |
| :------------------- | :----------------- |
| `--package_managers` | `on`, `tiny` `off` |

::: tabs
== on

```shell
Kernel: 6.8.8-6.8-alt1
Uptime: 1 hour, 56 mins
Packages: 2208 (rpm), 35 (flatpak), 4 (snap) # [!code focus]
Shell: zsh 5.9
Resolution: 1920x1080
```

== tiny

```shell
Kernel: 6.8.8-6.8-alt1
Uptime: 1 hour, 56 mins
Packages: 2247 (rpm, flatpak, snap) # [!code focus]
Shell: zsh 5.9
Resolution: 1920x1080
```

== off

```shell
Kernel: 6.8.8-6.8-alt1
Uptime: 1 hour, 56 mins
Packages: 2247 # [!code focus]
Shell: zsh 5.9
Resolution: 1920x1080
```

:::

::: code-group

```shell[По умолчанию]
package_managers="tiny"
```

```shell[Fiersik]
package_managers="on"
```

:::

### Оболочка ($SHELL)

**Скрыть/показать путь к оболочке**

| Флаг           | Значения    |
| :------------- | :---------- |
| `--shell_path` | `on`, `off` |

::: tabs
== on

```shell
Uptime: 2 hours, 1 min
Packages: 2208 (rpm), 35 (flatpak)
Shell: /bin/zsh 5.9 # [!code focus]
Resolution: 1920x1080
DE: GNOME 46.1
```

== off

```shell
Uptime: 2 hours, 1 min
Packages: 2208 (rpm), 35 (flatpak)
Shell: zsh 5.9 # [!code focus]
Resolution: 1920x1080
DE: GNOME 46.1
```

:::

::: code-group

```shell[По умолчанию]
shell_path="off"
```

```shell[Fiersik]
shell_path="off"
```

:::

**Скрыть/показать версию**

| Флаг              | Значения    |
| :---------------- | :---------- |
| `--shell_version` | `on`, `off` |

::: tabs
== on

```shell
Uptime: 2 hours, 1 min
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
Shell: zsh 5.9 # [!code focus]
Resolution: 1920x1080
DE: GNOME 46.1
```

== off

```shell
Uptime: 2 hours, 1 min
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
Shell: zsh # [!code focus]
Resolution: 1920x1080
DE: GNOME 46.1
```

:::

::: code-group

```shell[По умолчанию]
shell_version="on"
```

```shell[Fiersik]
shell_version="on"
```

:::

### Окружение рабочего стола

**Скрыть/показать версию**

| Флаг           | Значения    |
| :------------- | :---------- |
| `--de_version` | `on`, `off` |

::: tabs
== on

```shell
Shell: zsh 5.9
Resolution: 1920x1080
DE: GNOME 46.1 # [!code focus]
WM: Mutter
WM Theme: Adwaita
```

== off

```shell
Shell: zsh 5.9
Resolution: 1920x1080
DE: GNOME # [!code focus]
WM: Mutter
WM Theme: Adwaita
```

:::

::: code-group

```shell[По умолчанию]
de_version="on"
```

```shell[Fiersik]
de_version="on"
```

:::

### Процессор

**Тип частоты**

| Флаг           | Значения                                                                 |
| :------------- | :----------------------------------------------------------------------- |
| `--speed_type` | `scaling_cur_freq`, `scaling_min_freq`, `scaling_max_freq`, `bios_limit` |

<!-- На всех значениях у меня был один и тот же вывод :( -->

::: code-group

```shell[По умолчанию]
speed_type="bios_limit"
```

```shell[Fiersik]
speed_type="scaling_cur_freq"
```

:::

**Сократить частоту**

| Флаг                | Значения     |
| :------------------ | :----------- |
| `--speed_shorthand` | `on`, `off`. |

::: tabs
== on

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.5GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

== off

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

:::

::: code-group

```shell[По умолчанию]
speed_shorthand="off"
```

```shell[Fiersik]
speed_shorthand="on"
```

:::

**Скрыть/показать бренд**

| Флаг          | Значения    |
| :------------ | :---------- |
| `--cpu_brand` | `on`, `off` |

::: tabs
== on

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

== off

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16) @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

:::

::: code-group

```shell[По умолчанию]
cpu_brand="on"
```

```shell[Fiersik]
cpu_brand="off"
```

:::

**Скрыть/показать частоту**

| Флаг          | Значения    |
| :------------ | :---------- |
| `--cpu_speed` | `on`, `off` |

::: tabs
== on

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16) @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

== off

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16) # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

:::

::: code-group

```shell[По умолчанию]
cpu_speed="on"
```

```shell[Fiersik]
cpu_speed="on"
```

:::

**Скрыть/показать ядра**

| Флаг          | Значения                     |
| :------------ | :--------------------------- |
| `--cpu_cores` | `logical`, `physical`, `off` |

::: tabs
== logical

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16) @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

== physical

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (8) @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

== off

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

:::

::: code-group

```shell[По умолчанию]
cpu_cores="logical"
```

```shell[Fiersik]
cpu_cores="logical"
```

:::

**Скрыть/показать температуру**

| Флаг         | Значения        |
| :----------- | :-------------- |
| `--cpu_temp` | `C`, `F`, `off` |

::: tabs
== C

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16) @ 2.500GHz [38.0°C] # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

== F

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16) @ 2.500GHz [100.4°F] # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

== off

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16) @ 2.500GHz # [!code focus]
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 7897MiB / 15982MiB

```

:::

::: code-group

```shell[По умолчанию]
cpu_temp="off"
```

```shell[Fiersik]
cpu_temp="C"
```

:::

### Графический процессор

**Скрыть/показать бренд**

| Флаг          | Значения    |
| :------------ | :---------- |
| `--gpu_brand` | `on`, `off` |

::: tabs
== on

```shell
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16)
GPU: AMD ATI Radeon RX 580 2048SP # [!code focus]
Memory: 7897MiB / 15982MiB

```

== off

```shell
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16)
GPU: ATI Radeon RX 580 2048SP # [!code focus]
Memory: 7897MiB / 15982MiB

```

:::

::: code-group

```shell[По умолчанию]
gpu_brand="on"
```

```shell[Fiersik]
gpu_brand="off"
```

:::

**Какой отображать**

| Флаг         | Значения                         |
| :----------- | :------------------------------- |
| `--gpu_type` | `all`, `dedicated`, `integrated` |

::: tabs
== all

```shell
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16)
GPU: AMD ATI Radeon RX 580 2048SP # [!code focus]
GPU: Intel Integrated Graphics # [!code focus]
Memory: 7897MiB / 15982MiB
```

== dedicated

```shell
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16)
GPU: AMD ATI Radeon RX 580 2048SP # [!code focus]
Memory: 7897MiB / 15982MiB
```

== integrated

```shell
Icons: Adwaita [GTK2/3]
CPU: Xeon E5-2640 v2 (16)
GPU: Intel Integrated Graphics # [!code focus]
Memory: 7897MiB / 15982MiB
```

:::

::: code-group

```shell[По умолчанию]
gpu_type="all"
```

```shell[Fiersik]
gpu_type="all"
```

:::

### Разрешение

**Скрыть/показать частоту обновления**

| Флаг             | Значения    |
| :--------------- | :---------- |
| `--refresh_rate` | `on`, `off` |

::: tabs
== on

```shell
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
Shell: zsh 5.9
Resolution: 1920x1080 @ 75.00Hz # [!code focus]
DE: GNOME 46.1
WM: Mutter

```

== off

```shell
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
Shell: zsh 5.9
Resolution: 1920x1080 # [!code focus]
DE: GNOME 46.1
WM: Mutter

```

:::

::: code-group

```shell[По умолчанию]
refresh_rate="off"
```

```shell[Fiersik]
refresh_rate="on"
```

:::

### Gtk темы / иконки / шрифты

**Сократить вывод**

| Флаг              | Значения    |
| :---------------- | :---------- |
| `--gtk_shorthand` | `on`, `off` |

::: tabs
== on

```shell
WM: Mutter
WM Theme: Adwaita
Theme: Numix, Adwaita # [!code focus]
Icons: Numix, Adwaita # [!code focus]
Terminal: kgx

```

== off

```shell
WM: Mutter
WM Theme: Adwaita
Theme: Numix [GTK2], Adwaita [GTK3] # [!code focus]
Icons: Numix [GTK2], Adwaita [GTK3] # [!code focus]
Terminal: kgx

```

:::

::: code-group

```shell[По умолчанию]
gtk_shorthand="off"
```

```shell[Fiersik]
gtk_shorthand="off"
```

:::

**Скрыть/показать gtk2**

| Флаг     | Значения    |
| :------- | :---------- |
| `--gtk2` | `on`, `off` |

::: tabs
== on

```shell
WM: Mutter
WM Theme: Adwaita
Theme: Numix [GTK2], Adwaita [GTK3] # [!code focus]
Icons: Numix [GTK2], Adwaita [GTK3] # [!code focus]
Terminal: kgx

```

== off

```shell
WM: Mutter
WM Theme: Adwaita
Theme: Adwaita [GTK3] # [!code focus]
Icons: Adwaita [GTK3] # [!code focus]
Terminal: kgx

```

:::

::: code-group

```shell[По умолчанию]
gtk2="on"
```

```shell[Fiersik]
gtk2="on"
```

:::

**Скрыть/показать gtk3**

| Флаг     | Значения    |
| :------- | :---------- |
| `--gtk3` | `on`, `off` |

::: tabs
== on

```shell
WM: Mutter
WM Theme: Adwaita
Theme: Numix [GTK2], Adwaita [GTK3] # [!code focus]
Icons: Numix [GTK2], Adwaita [GTK3] # [!code focus]
Terminal: kgx

```

== off

```shell
WM: Mutter
WM Theme: Adwaita
Theme: Numix [GTK2] # [!code focus]
Icons: Numix [GTK2] # [!code focus]
Terminal: kgx

```

:::

::: code-group

```shell[По умолчанию]
gtk3="on"
```

```shell[Fiersik]
gtk3="on"
```

:::

### IP-адрес

**Сайт для проверки IP-адреса**

| Флаг        | Значения |
| :---------- | :------- |
| `--ip_host` | `url`    |

::: code-group

```shell[По умолчанию]
public_ip_host="http://ident.me"
```

```shell[Fiersik]
public_ip_host="http://ident.me"
```

:::

**Тайм-аут публичного IP-адреса**

| Флаг           | Значения |
| :------------- | :------- |
| `--ip_timeout` | `int`    |

::: code-group

```shell[По умолчанию]
public_ip_timeout=2
```

```shell[Fiersik]
public_ip_timeout=1
```

:::

### Диск

**Какие диски отображать**

| Флаг          | Значения                           |
| :------------ | :--------------------------------- |
| `--disk_show` | `/`, `/dev/sdXX`, `/path/to/drive` |

::: tabs
== "/" "/dev/sdb1"

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk (/): 105G / 162G (66%) # [!code focus]
Disk (games): 2.5G / 61G (5%) # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

== "/"

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk (/): 105G / 162G (66%) # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

:::

::: code-group

```shell[По умолчанию]
disk_show=("/")
```

```shell[Fiersik]
disk_show=("/" "/run/media/fiersik/games")
```

:::

##### Какую подсказку отображать.

| Флаг              | Значения                       |
| :---------------- | :----------------------------- |
| `--disk_subtitle` | `mount`, `name`, `dir`, `none` |

::: tabs
== name

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk (/dev/nvme0n1p3): 105G / 162G (66%) # [!code focus]
Disk (/dev/nvme0n1p4): 2.5G / 61G (5%) # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

== mount

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk (/): 105G / 162G (66%) # [!code focus]
Disk (/run/media/fiersik/games): 2.5G / 61G (5%) # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

== dir

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk (/): 105G / 162G (66%) # [!code focus]
Disk (games): 2.5G / 61G (5%) # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

== none

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk: 105G / 162G (66%) # [!code focus]
Disk: 2.5G / 61G (5%) # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

:::

::: code-group

```shell[По умолчанию]
disk_subtitle="mount"
```

```shell[Fiersik]
disk_subtitle="dir"
```

:::

**Скрыть/показать процент использования**

| Флаг             | Значения    |
| :--------------- | :---------- |
| `--disk_percent` | `on`, `off` |

::: tabs
== on

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk (/): 105G / 162G (66%) # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

== off

```shell
GPU Driver: amdgpu
CPU Usage: 23%
Disk (/): 105G / 162G # [!code focus]
Font: Cantarell 11 [GTK2/3]
Local IP: 192.168.31.154
```

:::

::: code-group

```shell[По умолчанию]
disk_percent="on"
```

```shell[Fiersik]
disk_percent="on"
```

:::

### Музыка

**Музыкальный проигрыватель**

| Флаг             | Значения              |
| :--------------- | :-------------------- |
| `--music_player` | `auto`, `player-name` |

::: details Музыкальные проигрыватели.

| `amarok`        | `audacious`           | `banshee`    | `bluemindo`           |
| :-------------- | :-------------------- | :----------- | :-------------------- |
| `clementine`    | `cmus`                | `deadbeef`   | `deepin-music`        |
| `dragon`        | `elisa`               | `guayadeque` | `gnome-music`         |
| `gmusicbrowser` | `exaile`              | `gogglesmm`  | `io.elementary.music` |
| `yarock`        | `elisa`               | `muine`      | `iTunes`              |
| `juk`           | `lollypop`            | `mocp`       | `mopidy`              |
| `mpd`           | `netease-cloud-music` | `olivia`     | `playerctl`           |
| `pogo`          | `pragha`              | `qmmp`       | `quodlibet`           |
| `rhythmbox`     | `sayonara`            | `smplayer`   | `spotify`             |
| `strawberry`    | `auonmb`              | `tomahawk`   | `vlc`                 |
| `xmms2d`        | `xnoise`              |              |                       |

:::

::: code-group

```shell[По умолчанию]
music_player="auto"
```

```shell[Fiersik]
music_player="auto"
```

:::

**Формат отображения информации**

| Флаг            | Значения                         |
| :-------------- | :------------------------------- |
| `--song_format` | `%artist%`, `%album%`, `%title%` |

::: tabs
== "%artist% - %album% - %title%"

```shell
Disk (/): 105G / 162G (66%)
Font: Cantarell 11 [GTK2/3]
Song: Liar_Sieru - Обман - Реальный мир # [!code focus]
Music Player: vlc
Local IP: 192.168.31.154
```

:::

::: code-group

```shell[По умолчанию]
song_format="%artist% - %album% - %title%"
```

```shell[Fiersik]
song_format="%artist% - %album% - %title%"
```

:::

**Вывести в отдельных строках**

| Флаг               | Значения    |
| :----------------- | :---------- |
| `--song_shorthand` | `on`, `off` |

::: tabs
== on

```shell
Disk (/): 105G / 162G (66%)
Font: Cantarell 11 [GTK2/3]
Artist: Liar_Sieru # [!code focus]
Album: Обман # [!code focus]
Song: Реальный мир # [!code focus]
Music Player: vlc
Local IP: 192.168.31.154

```

== off

```shell
Disk (/): 105G / 162G (66%)
Font: Cantarell 11 [GTK2/3]
Song: Liar_Sieru - Обман - Реальный мир # [!code focus]
Music Player: vlc
Local IP: 192.168.31.154
```

:::

::: code-group

```shell[По умолчанию]
song_shorthand="off"
```

```shell[Fiersik]
song_shorthand="off"
```

:::

### Цвета текста

| Флаг       | Значения                                      |
| :--------- | :-------------------------------------------- |
| `--colors` | `distro`, `num` `num` `num` `num` `num` `num` |

| Порядок | Часть вывода           |
| :-----: | :--------------------- |
|    1    | Заголовок              |
|    2    | Разделитель домена     |
|    3    | Подчеркивание          |
|    4    | Подзаголовок           |
|    5    | Разделитель информации |
|    5    | Информация             |

::: code-group

```shell[По умолчанию]
colors=(distro)
```

```shell[Fiersik]
colors=(distro)
```

:::

### Параметры текста

**Жирный шрифт**

| Флаг     | Значения    |
| :------- | :---------- |
| `--bold` | `on`, `off` |

::: code-group

```shell[По умолчанию]
bold="on"
```

```shell[Fiersik]
bold="on"
```

:::

**Подчёркивание домена**

| Флаг          | Значения    |
| :------------ | :---------- |
| `--underline` | `on`, `off` |

::: tabs
== on

```shell
fiersik@alt-gnome # [!code focus]
---------------- # [!code focus]
OS: ALT Regular Sisyphus x86_64 # [!code focus]
Kernel: 6.8.7-6.8-alt1
ptime: 1 hour, 14 mins

```

== off

```shell
fiersik@alt-gnome # [!code focus]
OS: ALT Regular Sisyphus x86_64 # [!code focus]
Kernel: 6.8.7-6.8-alt1
ptime: 1 hour, 14 mins
```

:::

::: code-group

```shell[По умолчанию]
underline_enabled="on"
```

```shell[Fiersik]
underline_enabled="on"
```

:::

**Символ разделителя домена**

| Флаг               | Значения |
| :----------------- | :------- |
| `--underline_char` | `string` |

::: tabs
== "="

```shell
fiersik@alt-gnome
================= # [!code focus]
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.7-6.8-alt1
Uptime: 1 hour, 33 mins
```

== ">"

```shell
fiersik@alt-gnome
>>>>>>>>>>>>>>>>> # [!code focus]
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.7-6.8-alt1
Uptime: 1 hour, 34 mins
```

:::

::: code-group

```shell[По умолчанию]
underline_char="-"
```

```shell[Fiersik]
underline_char="-"
```

:::

**Символ разделителя информации**

| Флаг          | Значения |
| :------------ | :------- |
| `--separator` | `string` |

::: tabs
== "="

```shell
fiersik@alt-gnome
----------------
OS= ALT Regular Sisyphus x86_64
Kernel= 6.8.7-6.8-alt1
Uptime= 1 hour, 33 mins
```

== " "

```shell
fiersik@alt-gnome
----------------
OS ALT Regular Sisyphus x86_64
Kernel 6.8.7-6.8-alt1
Uptime 1 hour, 34 mins
```

:::

::: code-group

```shell[По умолчанию]
separator=":"
```

```shell[Fiersik]
separator=" "
```

:::

### Цветные блоки

**Диапазон цветов**

| Флаг            | Значения     |
| :-------------- | :----------- |
| `--block_range` | `num`, `num` |

::: code-group

```shell[По умолчанию]
block_range=(1 16)
```

```shell[Fiersik]
block_range=(1 18)
```

:::

**Пользовательские цвета**

::: info
Данный подблок не является обязательным и отсутствует в конфигурации по умолчанию. Он необходим для удобной настройки собственных цветов вывода информации.
:::

::: code-group

```shell[Fiersik]
magenta="\033[1;35m"
green="\033[1;32m"
white="\033[0;37m"
blue="\033[1;34m"
red="\033[1;31m"
black="\033[1;40;30m"
yellow="\033[1;33m"
cyan="\033[1;36m"
reset="\033[0m"
bgyellow="\033[1;43;33m"
bgwhite="\033[1;47;37m"
cl0="${reset}"
cl1="${magenta}"
cl2="${green}"
cl3="${white}"
cl4="${blue}"
cl5="${red}"
cl6="${yellow}"
cl7="${cyan}"
cl8="${black}"
cl9="${bgyellow}"
cl10="${bgwhite}"
```

:::

**Скрыть/показать цветовые блоки**

| Флаг             | Значения    |
| :--------------- | :---------- |
| `--color_blocks` | `on`, `off` |

::: code-group

```shell[По умолчанию]
color_blocks="on"
```

```shell[Fiersik]
color_blocks="off"
```

:::

**Ширина блока**

| Флаг            | Значения |
| :-------------- | :------- |
| `--block_width` | `num`    |

::: code-group

```shell[По умолчанию]
block_width=3
```

```shell[Fiersik]
block_width=0
```

:::

**Высота блока**

| Флаг             | Значения |
| :--------------- | :------- |
| `--block_height` | `num`    |

::: code-group

```shell[По умолчанию]
block_height=1
```

```shell[Fiersik]
block_height=0
```

:::

**Смещение блоков от левой части**

| Флаг           | Значения      |
| :------------- | :------------ |
| `--col_offset` | `auto`, `num` |

::: code-group

```shell[По умолчанию]
col_offset="auto"
```

```shell[Fiersik]
col_offset="auto"
```

:::

col_offset="auto"

### Индикаторы выполнения

**Отображение информации**

| Флаг                | Значения                           |
| :------------------ | :--------------------------------- |
| `--cpu_display`     | `bar`, `infobar`, `barinfo`, `off` |
| `--memory_display`  | `bar`, `infobar`, `barinfo`, `off` |
| `--battery_display` | `bar`, `infobar`, `barinfo`, `off` |
| `--disk_display`    | `bar`, `infobar`, `barinfo`, `off` |

::: tabs
== bar

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: [-----------====] # [!code focus]
GPU Driver: amdgpu
CPU Usage: 10%
```

== infobar

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12545MiB / 15982MiB [-----------====] # [!code focus]
GPU Driver: amdgpu
CPU Usage: 10%
```

== barinfo

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: [-----------====] 12735MiB / 15982MiB # [!code focus]
GPU Driver: amdgpu
CPU Usage: 10%
```

== off

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12735MiB / 15982MiB # [!code focus]
GPU Driver: amdgpu
CPU Usage: 10%

```

:::

::: code-group

```shell[По умолчанию]
cpu_display="off"
memory_display="off"
battery_display="off"
disk_display="off"
```

```shell[Fiersik]
cpu_display="off"
memory_display="off"
battery_display="off"
disk_display="off"
```

:::

**Символы бара**

| Флаг         | Значения          |
| :----------- | :---------------- |
| `--bar_char` | `string` `string` |

::: tabs
== "-" "="

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12764MiB / 15982MiB [-----------====] # [!code focus]
GPU Driver: amdgpu
CPU Usage: 9%
```

== "0" "1"

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12764MiB / 15982MiB [000000000001111] # [!code focus]
GPU Driver: amdgpu
CPU Usage: 9%
```

:::

::: code-group

```shell[По умолчанию]
bar_char_elapsed="-"
bar_char_total="="
```

```shell[Fiersik]
bar_char_elapsed=""
bar_char_total=""
```

:::

**Скрыть/показать границы индикатора выполнения**

| Флаг           | Значения    |
| :------------- | :---------- |
| `--bar_border` | `on`, `off` |

::: tabs
== on

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12764MiB / 15982MiB [-----------====] # [!code focus]
GPU Driver: amdgpu
CPU Usage: 9%
```

== off

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12764MiB / 15982MiB -----------==== # [!code focus]
GPU Driver: amdgpu
CPU Usage: 9%
```

:::

::: code-group

```shell[По умолчанию]
bar_border="on"
```

```shell[Fiersik]
bar_border="off"
```

:::

**Ширина индикатора выполнения**

| Флаг           | Значения |
| :------------- | :------- |
| `--bar_length` | `num`    |

::: tabs
== 10

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12764MiB / 15982MiB [-------===] # [!code focus]
GPU Driver: amdgpu
CPU Usage: 9%
```

== 15

```shell
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
Memory: 12764MiB / 15982MiB [-----------====] # [!code focus]
GPU Driver: amdgpu
CPU Usage: 9%
```

:::

::: code-group

```shell[По умолчанию]
bar_length=15
```

```shell[Fiersik]
bar_length=0
```

:::

**Цвета индикатора выполнения**

| Флаг           | Значения        |
| :------------- | :-------------- |
| `--bar_colors` | `distro`, `num` |

::: code-group

```shell[По умолчанию]
bar_color_elapsed="distro"
bar_color_total="distro"
```

```shell[Fiersik]
bar_color_elapsed="distro"
bar_color_total="distro"
```

:::

### Настройки бэкенда

**Сервер изображений**

| Флаг        | Значения              |
| :---------- | :-------------------- |
| `--backend` | `backend_name`, `off` |

::: details Возможные значения

| `ascii`   | `caca`    |
| :-------- | :-------- |
| `chafa`   | `jp2a`    |
| `iterm2`  | `pot`     |
| `termpix` | `pixterm` |
| `tycat`   | `w3m`     |
| `kitty`   | `off`     |

:::

::: code-group

```shell[По умолчанию]
image_backend="ascii"
```

```shell[Fiersik]
image_backend="ascii"
```

:::

**Источник изображения**

| Флаг       | Значения                                                       |
| :--------- | :------------------------------------------------------------- |
| `--source` | `auto`, `ascii`, `wallpaper`, `/path/to/file`, `/path/to/dir/` |

::: code-group

```shell[По умолчанию]
image_source="auto"
```

```shell[Fiersik]
image_source="auto"
```

:::

### Параметры ASCII

**Дистрибутив**

| Флаг             | Значения              |
| :--------------- | :-------------------- |
| `--ascii_distro` | `auto`, `distro_name` |

::: details Возможные значения

| Стандартные         | Уменьшенные        | Ретро         |
| :------------------ | :----------------- | :------------ |
| AIX                 | Alpine_small       | Arch_old      |
| Anarchy             | Arch_small         | Ubuntu_old    |
| Android             | CRUX_small         | Redhat_old    |
| Antergos            | Debian_small       | Dragonfly_old |
| antiX               | Gentoo_small       |               |
| "AOSC OS"           | FreeBSD_small      |               |
| "AOSC OS/Retro"     | Mac_small          |               |
| Apricity            | NixOS_small        |               |
| ArcoLinux           | OpenBSD_small      |               |
| ARCHlabs            | android_small      |               |
| ArchStrike          | Antrix_small       |               |
| XFerience           | CentOS_small       |               |
| ArchMerge           | Cleanjaro_small    |               |
| Artix               | ElementaryOS_small |               |
| Arya                | GUIX_small         |               |
| Bedrock             | Hyperbola_small    |               |
| Bitrig              | Manjaro_small      |               |
| BlackArch           | MXLinux_small      |               |
| BLAG                | NetBSD_small       |               |
| BlankOn             | Parabola_small     |               |
| BlueLight           | POP_OS_small       |               |
| bonsai              | PureOS_small       |               |
| BSD                 | Slackware_small    |               |
| BunsenLabs          | SunOS_small        |               |
| Calculate           | LinuxLite_small    |               |
| Carbs               | OpenSUSE_small     |               |
| CentOS              | Raspbian_small     |               |
| Chakra              | postmarketOS_small |               |
| ChaletOS            | Void_small         |               |
| Chapeau             |                    |               |
| Chrom\*             |                    |               |
| Cleanjaro           |                    |               |
| ClearOS             |                    |               |
| Clear_Linux         |                    |               |
| Clover              |                    |               |
| Condres             |                    |               |
| Container_Linux     |                    |               |
| CRUX                |                    |               |
| Cucumber            |                    |               |
| Debian              |                    |               |
| Deepin              |                    |               |
| DesaOS              |                    |               |
| Devuan              |                    |               |
| DracOS              |                    |               |
| DarkOs              |                    |               |
| DragonFly           |                    |               |
| Drauger             |                    |               |
| Elementary          |                    |               |
| EndeavourOS         |                    |               |
| Endless             |                    |               |
| EuroLinux           |                    |               |
| Exherbo             |                    |               |
| Fedora              |                    |               |
| Feren               |                    |               |
| FreeBSD             |                    |               |
| FreeMiNT            |                    |               |
| Frugalware          |                    |               |
| Funtoo              |                    |               |
| GalliumOS           |                    |               |
| Garuda              |                    |               |
| Gentoo              |                    |               |
| Pentoo              |                    |               |
| gNewSense           |                    |               |
| GNOME               |                    |               |
| GNU                 |                    |               |
| GoboLinux           |                    |               |
| Grombyang           |                    |               |
| Guix                |                    |               |
| Haiku               |                    |               |
| Huayra              |                    |               |
| Hyperbola           |                    |               |
| janus               |                    |               |
| Kali                |                    |               |
| KaOS                |                    |               |
| KDE_neon            |                    |               |
| Kibojoe             |                    |               |
| Kogaion             |                    |               |
| Korora              |                    |               |
| KSLinux             |                    |               |
| Kubuntu             |                    |               |
| LEDE                |                    |               |
| LFS                 |                    |               |
| Linux_Lite          |                    |               |
| LMDE                |                    |               |
| Lubuntu             |                    |               |
| Lunar               |                    |               |
| macos               |                    |               |
| Mageia              |                    |               |
| MagpieOS            |                    |               |
| Mandriva            |                    |               |
| Manjaro             |                    |               |
| Maui                |                    |               |
| Mer                 |                    |               |
| Minix               |                    |               |
| LinuxMint           |                    |               |
| MX_Linux            |                    |               |
| Namib               |                    |               |
| Neptune             |                    |               |
| NetBSD              |                    |               |
| Netrunner           |                    |               |
| Nitrux              |                    |               |
| NixOS               |                    |               |
| Nurunner            |                    |               |
| NuTyX               |                    |               |
| OBRevenge           |                    |               |
| OpenBSD             |                    |               |
| openEuler           |                    |               |
| OpenIndiana         |                    |               |
| openmamba           |                    |               |
| OpenMandriva        |                    |               |
| OpenStage           |                    |               |
| OpenWrt             |                    |               |
| osmc                |                    |               |
| Oracle              |                    |               |
| "OS Elbrus"         |                    |               |
| PacBSD              |                    |               |
| Parabola            |                    |               |
| Pardus              |                    |               |
| Parrot              |                    |               |
| Parsix              |                    |               |
| TrueOS              |                    |               |
| PCLinuxOS           |                    |               |
| Peppermint          |                    |               |
| popos               |                    |               |
| Porteus             |                    |               |
| PostMarketOS        |                    |               |
| Proxmox             |                    |               |
| Puppy               |                    |               |
| PureOS              |                    |               |
| Qubes               |                    |               |
| Radix               |                    |               |
| Raspbian            |                    |               |
| Reborn_OS           |                    |               |
| Redstar             |                    |               |
| Redcore             |                    |               |
| Redhat              |                    |               |
| Refracted_Devuan    |                    |               |
| Regata              |                    |               |
| Rosa                |                    |               |
| sabotage            |                    |               |
| Sabayon             |                    |               |
| Sailfish            |                    |               |
| SalentOS            |                    |               |
| Scientific          |                    |               |
| Septor              |                    |               |
| SereneLinux         |                    |               |
| SharkLinux          |                    |               |
| Siduction           |                    |               |
| Slackware           |                    |               |
| SliTaz              |                    |               |
| SmartOS             |                    |               |
| Solus               |                    |               |
| Source_Mage         |                    |               |
| Sparky              |                    |               |
| Star                |                    |               |
| SteamOS             |                    |               |
| SunOS               |                    |               |
| openSUSE_Leap       |                    |               |
| openSUSE_Tumbleweed |                    |               |
| openSUSE            |                    |               |
| SwagArch            |                    |               |
| Tails               |                    |               |
| Trisquel            |                    |               |
| Ubuntu-Budgie       |                    |               |
| Ubuntu-GNOME        |                    |               |
| Ubuntu-MATE         |                    |               |
| Ubuntu-Studio       |                    |               |
| Ubuntu              |                    |               |
| Venom               |                    |               |
| Void                |                    |               |
| Obarun              |                    |               |
| windows10           |                    |               |
| Windows7            |                    |               |
| Xubuntu             |                    |               |
| Zorin               |                    |               |
| IRIX                |                    |               |

:::

::: code-group

```shell[По умолчанию]
ascii_distro="auto"
```

```shell[Fiersik]
ascii_distro="ALT_GNOME"
```

:::

**Цвета ASCII**

| Флаг             | Значения                            |
| :--------------- | :---------------------------------- |
| `--ascii_colors` | `num` `num` `num` `num` `num` `num` |

::: code-group

```shell[По умолчанию]
ascii_colors=(distro)
```

```shell[Fiersik]
ascii_colors=(distro)
```

:::

**Выделять ASCII-логотип полужирным**

| Флаг           | Значения    |
| :------------- | :---------- |
| `--ascii_bold` | `on`, `off` |

::: code-group

```shell[По умолчанию]
ascii_bold="on"
```

```shell[Fiersik]
ascii_bold="on"
```

:::

### Параметры изображения

**Перерисовка**

::: info
Если значение `on`, Neofetch будет постоянно перерисовывать изображение до тех пор, пока нажато сочетание клавиш [[Ctrl]] + [[C]]. Это устраняет проблемы с отображением в некоторых эмуляторах терминалов.
:::

| Флаг     | Значения    |
| :------- | :---------- |
| `--loop` | `on`, `off` |

::: code-group

```shell[По умолчанию]
image_loop="off"
```

```shell[Fiersik]
image_loop="off"
```

:::

**Каталог миниатюр**

| Значения |
| :------- |
| `dir`    |

::: code-group

```shell[По умолчанию]
thumbnail_dir="~/.cache/thumbnails/neofetch"
```

```shell[Fiersik]
thumbnail_dir="${XDG_CACHE_HOME:-${HOME}/.cache}/thumbnails/neofetch"
```

:::

**Режим обрезки**

| Флаг          | Значения                |
| :------------ | :---------------------- |
| `--crop_mode` | `normal`, `fit`, `fill` |

::: code-group

```shell[По умолчанию]
crop_mode="normal"
```

```shell[Fiersik]
crop_mode="normal"
```

:::

**Смещение**

::: warning
Влияет только на режим `normal`.
:::

| Флаг            | Значения |
| :-------------- | :------- |
| `--crop_offset` | `mode`   |

::: details Режимы:

| `northwest` | `north`  | `northeast` |
| :---------- | :------- | :---------- |
| `west`      | `center` | `east`      |
| `southwest` | `south`  | `southeast` |

:::

::: code-group

```shell[По умолчанию]
crop_offset="center"
```

```shell[Fiersik]
crop_offset="center"
```

:::

**Размер изображения**

| Флаги                    | Значения                      |
| :----------------------- | :---------------------------- |
| `--image_size`, `--size` | `auto`, `00px`, `00%`, `none` |

::: code-group

```shell[По умолчанию]
image_size="auto"
```

```shell[Fiersik]
image_size="auto"
```

:::

**Разрыв между изображением и текстом**

| Флаг    | Значения      |
| :------ | :------------ |
| `--gap` | `num`, `-num` |

::: code-group

```shell[По умолчанию]
gap=3
```

```shell[Fiersik]
gap=2
```

:::

**Смещение изображений**

::: warning
Работает только с `w3m`.
:::

| Флаг                     | Значения |
| :----------------------- | :------- |
| `--xoffset`, `--yoffset` | `num`    |

::: code-group

```shell[По умолчанию]
yoffset=0
xoffset=0
```

```shell[Fiersik]
yoffset=0
xoffset=0
```

:::

**Цвет фона**

::: warning
Работает только с `w3m`.
:::

| Флаг         | Значения |
| :----------- | :------- |
| `--bg_color` | `color`  |

::: code-group

```shell[По умолчанию]
background_color=" "
```

```shell[Fiersik]
background_color=" "
```

:::

### Другие опции

**Стандартный режим вывода**

::: info
Отключает все цвета. Полезно для перехода в другую команду.
:::

| Значения    |
| :---------- |
| `on`, `off` |

::: code-group

```shell[По умолчанию]
stdout="off"
```

```shell[Fiersik]
stdout="off"
```

:::
