---
aggregation:
  sisyphus: neofetch
appstream:
  name: Neofetch
  icon: /neofetch/neofetch-logo.png
  summary: A tool for displaying system information.
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

Neofetch is a command line output tool written in `bash 3.2+`. It displays information about your operating system, software and hardware in an aesthetic and visually pleasing way.

## Installation from the repository

**Neofetch** can be installed through terminal:

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

## Configuration

Neofetch has a fairly flexible configuration, and anyone can customize it for themselves.

::: info
This block discusses configuration using the example of [one of the custom configurations](https://github.com/fiersik/fiersik_dots/tree/main/neofetch).

To display it correctly, you must install one of the [Nerd fonts](https://www.nerdfonts.com/font-downloads).
:::

::: tabs
== Deafult
![default](/neofetch/neofetch-config-no.png)

== Fiersik
![Fiersik](/neofetch/neofetch-config-custom.png)
:::

### `print_info` function

The main visual part is configured in this function.

::: tabs
== default

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

**Term structure**

::: tabs
== info
The `info` function displays one of the system parameters.

```shell
info "COMMENT" PARAMETR
```

Example:

```shell
    info "Theme" theme
    info "Icons" icons
    info "Terminal" term # [!code focus]
    info "CPU" cpu
    info "GPU" gpu

```

Output:

```shell
Theme: Adwaita [GTK2/3]
Icons: Adwaita [GTK2/3]
Terminal: kgx # [!code focus]
CPU: Intel Xeon E5-2640 v2 (16) @ 2.500GHz
GPU: AMD ATI Radeon RX 580 2048SP
```

== prin
The `prin` function prints an arbitrary string or shell variable.

```shell
prin "STRING"
```

Example:

```shell
    info "Host" model
    info "Kernel" kernel
    prin "String with variable '${USER}'" # [!code focus]
    info "Uptime" uptime
    info "Packages" packages
```

Output:

```shell
OS: ALT Regular Sisyphus x86_64
Kernel: 6.8.8-6.8-alt1
String with variable 'fiersik' # [!code focus]
Uptime: 1 hour, 7 mins
Packages: 2208 (rpm), 35 (flatpak), 4 (snap)
```

== echo
The `echo` function outputs an empty string.

```shell
echo
```

Example:

```shell
    info "Shell" shell
    info "Resolution" resolution
    echo # [!code focus]
    info "DE" de
    info "WM" wm
```

Output:

```shell
Shell: zsh 5.9
Resolution: 1920x1080
 # [!code focus]
DE: GNOME 46.1
WM: Mutter
```

:::

::: details Possible parameters

| Variable     | Value              |
| :----------- | ------------------ |
| `title`      | Header (user@host) |
| `underline`  | Dividing line      |
| `distro`     | Distribution       |
| `model`      | PC model           |
| `kernel`     | Core               |
| `uptime`     | Opening hours      |
| `packages`   | Packages           |
| `shell`      | Shell              |
| `resolution` | Screen resolution  |
| `de`         | Environment        |
| `wm`         | Window manager     |
| `wm_theme`   | Window theme       |
| `theme`      | Subject            |
| `icons`      | Icon theme         |
| `term`       | Terminal           |
| `term_font`  | Terminal font      |
| `cpu`        | CPU                |
| `gpu`        | Video card         |
| `memory`     | RAM                |
| `gpu_driver` | Video card driver  |
| `disk`       | Disk               |
| `battery`    | Battery            |
| `font`       | Font               |
| `song`       | Song               |
| `local_ip`   | Local IP address   |
| `public_ip`  | Public IP address  |
| `users`      | User               |
| `locale`     | Locale             |
| `cols`       | Color blocks       |

:::

### Title

**Hide/Show FQDN**

| Flag           | Value       |
| :------------- | :---------- |
| `--title_fqdn` | `on`, `off` |

::: code-group

```shell[Default]
title_fqdn="off"
```

```shell[Fiersik]
title_fqdn="off"
```

:::

### Kernel

**Shorten kernel function output**

| Flag                 | Value       |
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

```shell[Default]
kernel_shorthand="on"
```

```shell[Fiersik]
kernel_shorthand="off"
```

:::

### Distribution

**Shorten the output of the distro function**

| Flag                 | Value               |
| :------------------- | :------------------ |
| `--distro_shorthand` | `on`, `tiny`, `off` |

::: code-group

```shell[Default]
distro_shorthand="off"
```

```shell[Fiersik]
distro_shorthand="off"
```

:::

**Hide/Show OS Architecture**

| Flag        | Value       |
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

```shell[Default]
os_arch="on"
```

```shell[Fiersik]
os_arch="on"
```

:::

### Opening hours

**Shorten uptime function output**

| Flag                 | Value               |
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

```shell[Default]
uptime_shorthand="on"
```

```shell[Fiersik]
uptime_shorthand="on"
```

:::

### Memory

**Hide/show usage percentage**

| Flag               | Value       |
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

```shell[Default]
memory_percent="off"
```

```shell[Fiersik]
memory_percent="on"
```

:::

**Change Memory Output Units**

| Flag            | Value               |
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

```shell[Default]
memory_unit="mib"
```

```shell[Fiersik]
memory_unit="mib"
```

:::

### Packages

**Hide/show package manager names**

| Flag                 | Value              |
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

```shell[Default]
package_managers="tiny"
```

```shell[Fiersik]
package_managers="on"
```

:::

### Shell ($SHELL)

**Hide/show shell path**

| Flag           | Value       |
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

```shell[Default]
shell_path="off"
```

```shell[Fiersik]
shell_path="off"
```

:::

**Hide/show version**

| Flag              | Value       |
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

```shell[Default]
shell_version="on"
```

```shell[Fiersik]
shell_version="on"
```

:::

### Desktop environment

**Hide/show version**

| Flag           | Value       |
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

```shell[Default]
de_version="on"
```

```shell[Fiersik]
de_version="on"
```

:::

### Processor

**Frequency type**

| Flag           | Value                                                                    |
| :------------- | :----------------------------------------------------------------------- |
| `--speed_type` | `scaling_cur_freq`, `scaling_min_freq`, `scaling_max_freq`, `bios_limit` |

<!-- On all values ​​I had the same output :( -->

::: code-group

```shell[Default]
speed_type="bios_limit"
```

```shell[Fiersik]
speed_type="scaling_cur_freq"
```

:::

**Reduce frequency**

| Flag                | Value        |
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

```shell[Default]
speed_shorthand="off"
```

```shell[Fiersik]
speed_shorthand="on"
```

:::

**Hide/show brand**

| Flag          | Value       |
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

```shell[Default]
cpu_brand="on"
```

```shell[Fiersik]
cpu_brand="off"
```

:::

**Hide/show frequency**

| Flag          | Value       |
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

```shell[Default]
cpu_speed="on"
```

```shell[Fiersik]
cpu_speed="on"
```

:::

**Hide/Show Cores**

| Flag          | Value                        |
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

```shell[Default]
cpu_cores="logical"
```

```shell[Fiersik]
cpu_cores="logical"
```

:::

**Hide/show temperature**

| Flag         | Value           |
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

```shell[Default]
cpu_temp="off"
```

```shell[Fiersik]
cpu_temp="C"
```

:::

### GPU

**Hide/show brand**

| Flag          | Value       |
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

```shell[Default]
gpu_brand="on"
```

```shell[Fiersik]
gpu_brand="off"
```

:::

**Which to display**

| Flag         | Value                            |
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

```shell[Default]
gpu_type="all"
```

```shell[Fiersik]
gpu_type="all"
```

:::

### Permission

**Hide/Show refresh rate**

| Flag             | Value       |
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

```shell[Default]
refresh_rate="off"
```

```shell[Fiersik]
refresh_rate="on"
```

:::

### Gtk themes / icons / fonts

**Shorten output**

| Flag              | Value       |
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

```shell[Default]
gtk_shorthand="off"
```

```shell[Fiersik]
gtk_shorthand="off"
```

:::

**Hide/Show gtk2**

| Flag     | Value       |
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

```shell[Default]
gtk2="on"
```

```shell[Fiersik]
gtk2="on"
```

:::

**Hide/Show gtk3**

| Flag     | Value       |
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

```shell[Default]
gtk3="on"
```

```shell[Fiersik]
gtk3="on"
```

:::

### IP address

**Website for checking IP address**

| Flag        | Value |
| :---------- | :---- |
| `--ip_host` | `url` |

::: code-group

```shell[Default]
public_ip_host="http://ident.me"
```

```shell[Fiersik]
public_ip_host="http://ident.me"
```

:::

**Public IP Timeout**

| Flag           | Value |
| :------------- | :---- |
| `--ip_timeout` | `int` |

::: code-group

```shell[Default]
public_ip_timeout=2
```

```shell[Fiersik]
public_ip_timeout=1
```

:::

###Disk

**Which drives to display**

| Flag          | Value                              |
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

```shell[Default]
disk_show=("/")
```

```shell[Fiersik]
disk_show=("/" "/run/media/fiersik/games")
```

:::

##### Which tooltip to display.

| Flag              | Value                          |
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

```shell[Default]
disk_subtitle="mount"
```

```shell[Fiersik]
disk_subtitle="dir"
```

:::

**Hide/show usage percentage**

| Flag             | Value       |
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

```shell[Default]
disk_percent="on"
```

```shell[Fiersik]
disk_percent="on"
```

:::

### Music

**Music player**

| Flag             | Value                 |
| :--------------- | :-------------------- |
| `--music_player` | `auto`, `player-name` |

::: details Music players.

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

```shell[Default]
music_player="auto"
```

```shell[Fiersik]
music_player="auto"
```

:::

**Information display format**

| Flag            | Value                            |
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

```shell[Default]
song_format="%artist% - %album% - %title%"
```

```shell[Fiersik]
song_format="%artist% - %album% - %title%"
```

:::

**Output on separate lines**

| Flag               | Value       |
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

```shell[Default]
song_shorthand="off"
```

```shell[Fiersik]
song_shorthand="off"
```

:::

### Text colors

| Flag       | Value                                         |
| :--------- | :-------------------------------------------- |
| `--colors` | `distro`, `num` `num` `num` `num` `num` `num` |

| Order | Output part      |
| :---: | :--------------- |
|   1   | Title            |
|   2   | Domain separator |
|   3   | Underline        |
|   4   | Subtitle         |
|   5   | Separator        |
|   5   | Information      |

::: code-group

```shell[Default]
colors=(distro)
```

```shell[Fiersik]
colors=(distro)
```

:::

### Text Options

**Bold type**

| Flag     | Value       |
| :------- | :---------- |
| `--bold` | `on`, `off` |

::: code-group

```shell[Default]
bold="on"
```

```shell[Fiersik]
bold="on"
```

:::

**Domain underscore**

| Flag          | Value       |
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

```shell[Default]
underline_enabled="on"
```

```shell[Fiersik]
underline_enabled="on"
```

:::

**Domain separator character**

| Flag               | Value    |
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

```shell[Default]
underline_char="-"
```

```shell[Fiersik]
underline_char="-"
```

:::

**Information separator character**

| Flag          | Value    |
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

```shell[Default]
separator=":"
```

```shell[Fiersik]
separator=" "
```

:::

### Color blocks

**Color range**

| Flag            | Value        |
| :-------------- | :----------- |
| `--block_range` | `num`, `num` |

::: code-group

```shell[Default]
block_range=(1 16)
```

```shell[Fiersik]
block_range=(1 18)
```

:::

**Custom Colors**

::: info
This subblock is optional and is not included in the default configuration. It is necessary for conveniently setting your own colors for displaying information.
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

**Hide/Show Color Blocks**

| Flag             | Value       |
| :--------------- | :---------- |
| `--color_blocks` | `on`, `off` |

::: code-group

```shell[Default]
color_blocks="on"
```

```shell[Fiersik]
color_blocks="off"
```

:::

**Block width**

| Flag            | Value |
| :-------------- | :---- |
| `--block_width` | `num` |

::: code-group

```shell[Default]
block_width=3
```

```shell[Fiersik]
block_width=0
```

:::

**Block height**

| Flag             | Value |
| :--------------- | :---- |
| `--block_height` | `num` |

::: code-group

```shell[Default]
block_height=1
```

```shell[Fiersik]
block_height=0
```

:::

**Offset of blocks from the left side**

| Flag           | Value         |
| :------------- | :------------ |
| `--col_offset` | `auto`, `num` |

::: code-group

```shell[Default]
col_offset="auto"
```

```shell[Fiersik]
col_offset="auto"
```

:::

col_offset="auto"

### Progress bars

**Display information**

| Flag                | Value                              |
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

```shell[Default]
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

**Bar char**

| Flag         | Value             |
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

```shell[Default]
bar_char_elapsed="-"
bar_char_total="="
```

```shell[Fiersik]
bar_char_elapsed=""
bar_char_total=""
```

:::

**Hide/Show Progress Bar Borders**

| Flag           | Value       |
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

```shell[Default]
bar_border="on"
```

```shell[Fiersik]
bar_border="off"
```

:::

**Progress bar length**

| Flag           | Value |
| :------------- | :---- |
| `--bar_length` | `num` |

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

```shell[Default]
bar_length=15
```

```shell[Fiersik]
bar_length=0
```

:::

**Progress Bar Colors**

| Flag           | Value           |
| :------------- | :-------------- |
| `--bar_colors` | `distro`, `num` |

::: code-group

```shell[Default]
bar_color_elapsed="distro"
bar_color_total="distro"
```

```shell[Fiersik]
bar_color_elapsed="distro"
bar_color_total="distro"
```

:::

### Backend settings

**Image Server**

| Flag        | Value                 |
| :---------- | :-------------------- |
| `--backend` | `backend_name`, `off` |

::: details Possible values

| `ascii`   | `caca`    |
| :-------- | :-------- |
| `chafa`   | `jp2a`    |
| `iterm2`  | `pot`     |
| `termpix` | `pixterm` |
| `tycat`   | `w3m`     |
| `kitty`   | `off`     |

:::

::: code-group

```shell[Default]
image_backend="ascii"
```

```shell[Fiersik]
image_backend="ascii"
```

:::

**Image Source**

| Flag       | Value                                                          |
| :--------- | :------------------------------------------------------------- |
| `--source` | `auto`, `ascii`, `wallpaper`, `/path/to/file`, `/path/to/dir/` |

::: code-group

```shell[Default]
image_source="auto"
```

```shell[Fiersik]
image_source="auto"
```

:::

### ASCII options

**Distribution**

| Flag             | Value                 |
| :--------------- | :-------------------- |
| `--ascii_distro` | `auto`, `distro_name` |

::: details Possible values

| Default             | Small              | Retro         |
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

```shell[Default]
ascii_distro="auto"
```

```shell[Fiersik]
ascii_distro="ALT_GNOME"
```

:::

**ASCII Colors**

| Flag             | Value                               |
| :--------------- | :---------------------------------- |
| `--ascii_colors` | `num` `num` `num` `num` `num` `num` |

::: code-group

```shell[Default]
ascii_colors=(distro)
```

```shell[Fiersik]
ascii_colors=(distro)
```

:::

**Make ASCII logo bold**

| Flag           | Value       |
| :------------- | :---------- |
| `--ascii_bold` | `on`, `off` |

::: code-group

```shell[Default]
ascii_bold="on"
```

```shell[Fiersik]
ascii_bold="on"
```

:::

### Image Options

**Redraw**

::: info
If set to `on`, Neofetch will continually redraw the image as long as [[Ctrl]] + [[C]] is pressed. This resolves display issues in some terminal emulators.
:::

| Flag     | Value       |
| :------- | :---------- |
| `--loop` | `on`, `off` |

::: code-group

```shell[Default]
image_loop="off"
```

```shell[Fiersik]
image_loop="off"
```

:::

**Catalog of miniatures**

| Value |
| :---- |
| `dir` |

::: code-group

```shell[Default]
thumbnail_dir="~/.cache/thumbnails/neofetch"
```

```shell[Fiersik]
thumbnail_dir="${XDG_CACHE_HOME:-${HOME}/.cache}/thumbnails/neofetch"
```

:::

**Crop Mode**

| Flag          | Value                   |
| :------------ | :---------------------- |
| `--crop_mode` | `normal`, `fit`, `fill` |

::: code-group

```shell[Default]
crop_mode="normal"
```

```shell[Fiersik]
crop_mode="normal"
```

:::

**Offset**

::: warning
Only affects `normal` mode.
:::

| Flag            | Value  |
| :-------------- | :----- |
| `--crop_offset` | `mode` |

::: details Modes:

| `northwest` | `north`  | `northeast` |
| :---------- | :------- | :---------- |
| `west`      | `center` | `east`      |
| `southwest` | `south`  | `southeast` |

:::

::: code-group

```shell[Default]
crop_offset="center"
```

```shell[Fiersik]
crop_offset="center"
```

:::

**Image Size**

| Flags                    | Value                         |
| :----------------------- | :---------------------------- |
| `--image_size`, `--size` | `auto`, `00px`, `00%`, `none` |

::: code-group

```shell[Default]
image_size="auto"
```

```shell[Fiersik]
image_size="auto"
```

:::

**Gap between image and text**

| Flag    | Value         |
| :------ | :------------ |
| `--gap` | `num`, `-num` |

::: code-group

```shell[Default]
gap=3
```

```shell[Fiersik]
gap=2
```

:::

**Image offset**

::: warning
Works only with `w3m`.
:::

| Flag                     | Value |
| :----------------------- | :---- |
| `--xoffset`, `--yoffset` | `num` |

::: code-group

```shell[Default]
yoffset=0
xoffset=0
```

```shell[Fiersik]
yoffset=0
xoffset=0
```

:::

**Background color**

::: warning
Works only with `w3m`.
:::

| Flag         | Value   |
| :----------- | :------ |
| `--bg_color` | `color` |

::: code-group

```shell[Default]
background_color=" "
```

```shell[Fiersik]
background_color=" "
```

:::

### Other options

**Standard output mode**

::: info
Disables all colors. Useful for moving to another team.
:::

| Value       |
| :---------- |
| `on`, `off` |

::: code-group

```shell[Default]
stdout="off"
```

```shell[Fiersik]
stdout="off"
```

:::
