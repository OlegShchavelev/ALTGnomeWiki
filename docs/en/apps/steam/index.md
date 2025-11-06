---
aggregation:
  sisyphus: steam
  flatpak:
    id: com.valvesoftware.Steam
    build: unofficial
  epm:
    play:
      id: steam
      build: unofficial
appstream:
  id: com.valvesoftware.Steam
  name: Steam
  icon: /steam/steam-logo.svg
  summary: Клиент для платформы Steam
  keywords:
    - proprietary
    - restrictions
  developer:
    name: Valve Software
    avatar: https://avatars.githubusercontent.com/u/3082775?s=200&v=4
  metadata_license:
    name: Собственная
    link: https://store.steampowered.com/eula/243950_eula_0
  url:
    homepage: https://store.steampowered.com/
    bugtracker: https://github.com/ValveSoftware/steam-for-linux/issues
---

# Steam

Steam is an online digital distribution service for computer games and programs developed and maintained by Valve. It serves as a technical copyright protection tool, a platform for multiplayer games and streaming, and a social network for players. The Steam software client also provides installation, regular updates and cloud saves of games, text and voice communication between players.

:::info
For Steam to work correctly, it is recommended to install using epm play
:::

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->

## How to change language on Steam

Launch the client and look for Steam at the top of the application. When you click on it, a context menu will open, select Settings. In the settings, go to the Interface section and click on English to open the languages ​​menu. Select “Russian” from the drop-down list and click OK. After this, a window will appear informing you that you need to restart the application to apply the changes. Click Restart. Now Steam should launch in Russian.

![steam_1](/steam/steam_1.gif)

## Steam Play

Proton is a tool released by Valve Software that integrates with Steam Play to make playing Windows games on Linux as easy as clicking the "Play" button on Steam. Inside, Proton contains other popular tools such as Wine and DXVK that the player would otherwise have to install and maintain themselves.

Launch the client and look for Steam at the top of the application. When you click on it, a context menu will open, select Settings. In settings, go to the compatibility section and select:

- Enable Steam Play, for supported products
- Enable Steam Play for other products
- Enable other games using `Proton 8.x.x`

It is also possible to enable Steam Play support for a specific game. In the **LIBRARY** section in the list of games, select a game from the list, call the RMB context menu and select properties. In the settings window, under **Compatibility**, enable the **Force the selected Steam Play compatibility tool** options and select the **Proton** branch

![steam_1](/steam/steam_2.gif)

## Check game compatibility on Steam Play

[ProtonDB](https://www.protondb.com/) - a database of reports from players with user ratings. A growing selection of offerings allows you to customize your games as Proton continues to improve. In addition to this, you can explore the game catalog.

## Launching the Steam client for AMD graphics devices

To run the Steam client, you need to install additional packages:

::: code-group

```shell[apt-get]
su -
apt-get install i586-xorg-drv-radeon
```

```shell[epm]
epm -i i586-xorg-drv-radeon
```

:::

## Launching the Steam client for INTEL graphics devices

To run the Steam client, you need to install additional packages:

::: code-group

```shell[apt-get]
su -
apt-get install i586-libGL i586-libGLU i586-xorg-dri-intel
```

```shell[epm]
epm -i i586-libGL i586-libGLU i586-xorg-dri-intel
```

:::

## Recommendations and workarounds

### Control keys do not work in the game when launched natively (without proton)

Make sure that the English keyboard layout is selected on your system when starting the game. If this is not the case, close the game, change the layout to English and start the game again.

You can also add a launch option to the game, this should solve the problem:

```shell
-input_button_code_is_scan_code
```

![Launch parameter](/steam/steam_3.png)

### Keys stick (stuck down) in Steam Play games (Proton)

You can use the xset utility, which runs at the Xorg level in desktop environments.

Disable repeat from keyboard:

```shell
xset r off
```

:::info
Typically, this problem is associated with a bug in the ibus library, [issue discussion](https://github.com/ibus/ibus/issues/2485])

This method works in both XORG and Wayland sessions.
:::

Re-enable repeat from the keyboard with the same delay and speed settings:

```shell
xset r on
```

### Mouse freezes when moving in games

As a rule, this problem is caused by the connection of “Unknown Monitor” in the list of devices for users of NVIDIA graphics devices with proprietary 535.xx drivers. A workaround is described on the page [NVIDIA](/equipment/nvidia/#"unknown-monitor"-in-display-settings-in-wayland-session)

### Scaling the Steam interface for High DPI monitors

**Steam <Badge type="tip" text="Flatpak" />**

For ease of setup, we recommend installing the [Flatseal](/apps/flatseal/) application, and add [to the list of variables exported to the application](/apps/flatseal/#environment) the parameter `STEAM_FORCE_DESKTOPUI_SCALING`, for example with a scaling factor value of `1.25`:

```
STEAM_FORCE_DESKTOPUI_SCALING = 1.25
```

![steam-1](/steam/steam-1.jpg)

or via terminal:

```shell
flatpak override --user --env=STEAM_FORCE_DESKTOPUI_SCALING=1.25 com.valvesoftware.Steam
```
