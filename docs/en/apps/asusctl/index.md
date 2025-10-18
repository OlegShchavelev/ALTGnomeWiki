---
aggregation:
  sisyphus: asusctl
appstream:
  id: rog-control-center.desktop
  name: AsusCtl
  icon: /asusctl/asusctl-logo.png
  summary: A utility for managing many aspects of various ASUS laptops.
  metadata_license:
    name: MPL-2.0
    link: https://www.mozilla.org/en-US/MPL/2.0/
  developer:
    name: Asus Linux Community
  url:
    homepage: https://asus-linux.org/
    bugtracker: https://gitlab.com/asus-linux/asusctl/-/issues
---

# AsusCtl

AsusCtl is a utility for managing ASUS laptops with systems based on the GNU/Linux kernel: setting a custom charge limit, changing system power profiles, setting custom fan rotation curves, controlling the keyboard backlight. The utility can also be used with laptops from other manufacturers, but with restrictions.

<!--@include: @en/apps/.parts/install/content-repo.md-->

:::info
После установки необходимо перезагрузить компьютер для запуска сервисов `asustl`
:::

## Display supported options

Displays all options supported by the laptop:

```shell
asusctl -s
```

## Charge limit

Setting the battery limit:

```shell
asusctl -c 80
```

:::info
For a laptop that is often unplugged, a charging limit of 80% is appropriate. 60% is a good value for a laptop that remains plugged in most of the time.
:::

## Keyboard backlight

Commands for switching LED operating modes:

Next mode:

```shell
asusctl led-mode -n
```

Previous mode:

```shell
asusctl led-mode -p
```

Use one of the possible values (`off`, `low`, `med`, `high`):

```shell
asusctl -k off
```
