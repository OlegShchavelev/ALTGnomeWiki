---
aggregation:
  sisyphus: kitty
appstream:
  id: kitty.desktop
  name: Kitty
  icon: /kitty/kitty-logo.svg
  summary: Fast, feature-rich, cross-platform terminal with GPU support
  developer:
    name: Kovid Goyal
    nickname: kovidgoyal
    avatar: https://avatars.githubusercontent.com/u/1308621?v=4
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://sw.kovidgoyal.net/kitty/
    bugtracker: https://github.com/kovidgoyal/kitty/issues
---

# Kitty

Kitty is a graphically accelerated terminal emulator for Linux, macOS and some BSD distributions. It is performance and functionality oriented, written in C and Python.

Its features include:

- Display images with ImageMagick installed;
- Interactive input of Unicode characters by name, code, which were recently used;
- Supports real color and text formatting functions;
- Splitting several windows and tabs into sheets;
- One configuration file;
- Transitions via hyperlinks;
- Mouse support (for example, in Vim);
- Multiple copy/paste buffers, like in Vim;
- Rendering in OpenGL.

Kitty supports additional programs called Kittens (“kittens”) that expand its functionality. It is also popular due to the ability to fully customize its appearance: the user can customize any element of the terminal, completely adapting it to their needs.

<!--@include: @en/apps/.parts/install/content-repo.md-->

## Basic keyboard shortcuts

### Move

| Action                                               | Keyboard shortcut                  |
| ---------------------------------------------------- | ---------------------------------- |
| Cursor to line up/down                               | [[Ctrl + Shift + ↑/↓]]             |
| Cursor to screen up/down                             | [[Ctrl + Shift + PageUp/PageDown]] |
| To the beginning/end of the terminal                 | [[Ctrl + Shift + Home/End]]        |
| To previous/next executed command                    | [[Ctrl + Shift + Z/X]]             |
| Use `less` to move around screen/last command output | [[Ctrl + Shift + H/G]]             |

### Tabs

| Action                    | Keyboard shortcut                                               |
| ------------------------- | --------------------------------------------------------------- |
| Open/Close tab            | [[Ctrl + Shift + T/Q]]                                          |
| Next/Previous tab         | [[Ctrl + Shift + →/←]] or [[Ctrl + Tab]]/[[Ctrl + Shift + Tab]] |
| Move tab forward/backward | [[Ctrl + Shift + ./,]]                                          |
| Change tab title          | [[Ctrl + Shift + Alt + T]]                                      |

### Windows

| Action                                           | Keyboard shortcut          |
| ------------------------------------------------ | -------------------------- |
| Open/Close window                                | [[Ctrl + Shift + Enter/W]] |
| New window in the system                         | [[Ctrl + Shift + N]]       |
| Next location of split terminals                 | [[Ctrl + Shift + L]]       |
| Resizing a window                                | [[Ctrl + Shift + R]]       |
| Next/Previous window                             | [[Ctrl + Shift + ]/[]]     |
| Move window forward/backward/top                 | [[Ctrl + Shift + F/B/\`]]  |
| Go to a specific window                          | [[Ctrl + Shift + 1-9]]     |
| Selecting a window to highlight in visual mode\* | [[Ctrl + Shift + F7]]      |
| Swap windows in visual mode\*                    | [[Ctrl + Shift + F8]]      |

![](/kitty/kitty-1.png '*Режим визуального взаимодействия с окнами')

## Settings

The configuration file is located at `~/.config/kitty/kitty.conf`. Through it you can configure all aspects of the terminal.

All configuration options can be found [in the official documentation](https://sw.kovidgoyal.net/kitty/conf/).

:::details Example configuration file

```
font_family      FiraCode Nerd Font
font_size        14

hide_window_decorations yes
enable_audio_bell no

tab_bar_edge            bottom
tab_bar_style           powerline
tab_powerline_style     slanted
tab_title_template      {title}{' :{}:'.format(num_windows) if num_windows > 1 else ''}

active_tab_foreground   #fff
active_tab_background   #222
inactive_tab_foreground #fff
inactive_tab_background #000
tab_bar_background      #000
```

Parsing parameters:

| Option                                                                     | Description                                                         |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `font_family`                                                              | Font used                                                           |
| `font_size`                                                                | Default font size                                                   |
| `hide_window_decorations` (`yes`/`no`)                                     | Hide system window decorations (frame, window title)                |
| `enable_audio_bell` (`yes`/`no`)                                           | Controlling the sound signal for incorrect input                    |
| `tab_bar_edge` (`top`/`bottom`)                                            | Tab bar position                                                    |
| `tab_bar_style` (`fade`/`slant`/`separator`/`powerline`/`custom`/`hidden`) | Tab bar style                                                       |
| `tab_powerline_style` (`angled`/`slanted`/`round`)                         | Additional style options (available with `tab_bar_style powerline`) |
| `tab_title_template`                                                       | Tab name template (allows conditional statements)                   |
| `active_tab_foreground/active_tab_background`                              | Set the text and background color of the active tab accordingly     |
| `inactive_tab_foreground/inactive_tab_background`                          | Set the text and background color of the inactive tab accordingly   |
| `tab_bar_background`                                                       | Setting the tab bar background                                      |

:::
