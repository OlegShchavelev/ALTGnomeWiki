---
appstream:
  name: Keyd
  summary: Key remapping
  developer:
    name: rvaiya
  url:
    homepage: https://github.com/rvaiya/keyd/
    bugtracker: https://github.com/rvaiya/keyd/issues
---

# Keyd

Keyd is a simple key remapping daemon. Allows you to create separate layers when using modifiers: [[Alt]], [[Meta]] and [[Ctrl]]

## Installation from repository

Installation via terminal:

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

## Setting examples

The main configuration file `default.conf` is located in the `/etc/keyd` folder

### Using Vim keys on the system

An example of assigning Vim keys to arrow keys

Combination [[Alt]] + [[h]]/[[j]]/[[k]]/[[l]]

```
[ids]
*

[alt]
h = left
j = down
k = up
l = right
```

### Using the mouse cursor with the keyboard

An example of how to move the mouse cursor on a keyboard without a number pad

:::tip

Don't forget to enable cursor control in your system settings

`Settings` -> `Accessibility` -> `Pointing and Clicking` -> `Mouse keys`

:::

Combination [[Ctrl]] + [[Alt]] + [[h]]/[[j]]/[[k]]/[[l]] to move the cursor left/down/right/up

Combination [[Ctrl]] + [[Alt]] + [[b]]/[[n]] for pressing the left/right mouse button

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
The `macro` command is used to speed up the mouse movement, since by default it moves slowly
:::

:::warning

If the cursor does not move, then you may have the number pad turned on

If you do not have a [[NumLock]] button, you can assign a separate key

```
z = numlock
```

:::

### Examples from the developer

Configuration examples can be found in [project repository](https://github.com/rvaiya/keyd/)
