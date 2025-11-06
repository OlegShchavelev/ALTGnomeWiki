# Citrix Workspace

Citrix Workspace is a XenDesktop and XenApp client component developed by Citrix Systems.

## Getting the distribution

You can download the distribution from [official website](https://www.citrix.com/downloads/workspace-app/linux/workspace-app-for-linux-latest.html)

::: warning
The application is not officially available for users located in the Russian Federation. User services have been suspended indefinitely.
:::

## Unpacking and installation

::: tip
The version used at the time of writing the instructions: `23.9.0.24`
:::

- Create a working folder, unpack the archive into it and run the installer

```shell
mkdir /home/$USER/ICASetup
mv /home/$USER/Загрузки/linuxx64-23.9.0.24.tar.gz /home/$USER/ICASetup
cd /home/$USER/ICASetup
tar xzvf linuxx64-23.9.0.24.tar.gz
./setupwfc
```

- Once the installation process is complete, the application icon will appear in the launcher in GNOME
- Next, the installer can be removed

```shell
rm -r /home/$USER/ICASetup
```

::: tip
Before attempting to resolve the issue, check if Citrix itself is working
:::

::: details Error example

```shell
Setting file permissions...
cp: unable to create regular file '/home/user/ICAClient/linuxx64/ceb/CtxChromiumBrowser/thread_type.mojom.m.js': Permission denied
cp: unable to create regular file '/home/user/ICAClient/linuxx64/bcr/libEGL.so': Permission denied
cp: unable to create regular file '/home/user/ICAClient/linuxx64/bcr/libGLESv2.so': Permission denied

Failed to disable unit: Unit file ctxcwalogd.service does not exist.
Browser integration...
```

:::

## If [[Alt + Tab]] does not work in a Citrix session in GNOME under Wayland

Enable global key capture for the `wfica` application (Citrix Workspace):

```shell
gsettings set org.gnome.mutter.wayland xwayland-grab-access-rules "['Wfica']"
gsettings set org.gnome.mutter.wayland xwayland-allow-grabs true
```

::: tip
The 'wfica' application in this case must be specified with a capital "W", otherwise it will not work
:::

## Correct layout switching in a remote Citrix session

On Unix-like systems, Citrix Workspace has a common problem with synchronizing the local machine's layout with the remote session.

You can try to apply the recommendations from the [official website](https://help-docs.citrix.com/ru-ru/citrix-workspace-app/linux/keyboard.html), but, as practice shows, in most cases they are either ineffective or do not work at all.

In this case, you can apply a more radical solution to this problem: in the `/opt/Citrix/ICAClient/util/configmgr` (Citrix Workspace Preferences) application, on the “Keyboard” tab, select: in the application `/opt/Citrix/ICAClient/util/configmgr` (Citrix Workspace Preferences), on the “Keyboard” tab, select: “Synchronization options” - “Do not synchronize”, “Setting the keyboard input mode” - “Scancode”.

::: warning
For the “Scancode” mode to work correctly in GNOME under Wayland, you must first enable [global key capture](#if-alt-tab-does-not-work-in-a-citrix-session-in-gnome-under-wayland)

It is also worth noting that the `xwayland-allow-grabs` option enables the global key grab function for all applications, using XWayland, which in rare cases can cause problems with some native GNOME applications, and is also a potential security breach from the point of view of the GNOME and Wayland developers (hence why it is blocked by default).

Thus, if security is critical or you are faced with a problem with handling keyboard shortcuts in native GNOME applications, then you can refuse this option by changing only the `xwayland-grab-access-rules` option.

This will allow only the Citrix Workspace application to access the global key capture feature. This will also lead to the fact that the correct operation of the “Scancode” mode, as well as the interception of keyboard shortcuts (for example, [[Alt + Tab]]), will be ensured only in full-screen mode of Citrix Workspace!
:::
