---
aggregation:
  flatpak: com.github.tchx84.Flatseal
  sisyphus: flatseal
appstream:
  id: com.github.tchx84.Flatseal
  name: Flatseal
  icon: /flatseal/flatseal-logo.svg
  summary: Managing Flatpak Permissions
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  developer:
    name: Martin Abente Lahaye
    avatar: /flatseal/flatseal-avatar.png
    nickname: tchx84
  url:
    homepage: https://github.com/tchx84/flatseal
    bugtracker: https://github.com/tchx84/flatseal/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /flatseal/flatseal-1.png
    - src: /flatseal/flatseal-2.png
---

# Flatseal

Flatseal is a graphical utility for viewing and managing your [Flatpak applications](/en/package-manager/flatpak/).

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Settings

### Share

List of subsystems shared with the main system

| Name                        | Type   | Description                                  | `flatpak override` equivalent             |
| :-------------------------- | :----- | :------------------------------------------- | :---------------------------------------- |
| Network                     | Switch | Allow the application to access the network. | `--share=network` and `--unshare=network` |
| Interprocess Communications | Switch | Share the IPC namespace with the host.       | `--share=ipc` and `--unshare=ipc`         |

### Socket

List of known sockets available in the sandbox

| Name                                  | Type   | Description                                                                                                                                        | `flatpak override` equivalent                         |
| :------------------------------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| X11 Window System                     | Switch | Allow the application to open in the X11 window interface.                                                                                         | `--socket=x11` and `--nosocket=x11`                   |
| Wayland Window System                 | Switch | Allow the application to open in the Wayland windowed interface.                                                                                   | `--socket=wayland` and `--nosocket=wayland`           |
| Fallback option for X11 window system | Switch | Allow an application to open in an X11 window when Wayland is not available. For correct operation, you must enable the socket `Window system X11` | `--socket=fallback-x11` and `--nosocket=fallback-x11` |
| Sound server PulseAudio               | Switch | Allow an app to play sounds or access your microphone when using PulseAudio.                                                                       | `--socket=pulseaudio` and `--nosocket=pulseaudio`     |
| Session bus D-Bus                     | Switch | Allow the application to access the entire session bus.                                                                                            | `--socket=session-dbus` and `--nosocket=session-dbus` |
| System bus D-Bus                      | Switch | Allow application access to the entire system bus                                                                                                  | `--socket=system-dbus` and `--nosocket=system-dbus`   |
| SSH agent                             | Switch | Allow an application to use SSH authentication                                                                                                     | `--socket=ssh-auth` and `--nosocket=ssh-auth`         |
| Smart cards                           | Switch | Allow an application to use smart cards                                                                                                            | `--socket=pcsc` and `--nosocket=pcsc`                 |
| Printing system                       | Switch | Allow the application to use printing systems.                                                                                                     | `--socket=cups` and `--nosocket=cups`                 |
| GPG Agent Directories                 | Switch | Allow application access to GPG agent directories                                                                                                  | `--socket=gpg-agent` and `--nosocket=gpg-agent`       |

### Device

List of all devices available in the sandbox.

| Name             | Type   | Description                                                                                     | `flatpak override` equivalent           |
| :--------------- | :----- | :---------------------------------------------------------------------------------------------- | :-------------------------------------- |
| GPU acceleration | Switch | Allow an application to access direct graphics rendering to take advantage of GPU acceleration. | `--device=dri` and `--nodevice=dri`     |
| Input devices    | Switch | Allow access to the input device.                                                               | `--device=input` and `--nodevice=input` |
| Virtualization   | Switch | Allow the application to access virtualization.                                                 | `--device=kvm` and `--nodevice=kvm`     |
| Shared memory    | Switch | Allow the application to access shared memory.                                                  | `--device=shm` and `--nodevice=shm`     |
| All devices      | Switch | Allow the app to access all devices such as webcam and external devices.                        | `--device=all` and `--nodevice=all`     |

### Allow

List of functions available to the application

| Name                              | Type   | Description                                                                                                                                                                                                                              | `flatpak override` equivalent                              |
| :-------------------------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| Development System Calls          | Switch | Allow the application to access certain system calls, such as `ptrace()` and `perf_event_open()`.                                                                                                                                        | `--allow=devel` and `--disallow=devel`                     |
| Programs from other architectures | Switch | Allow an application to execute programs for an ABI other than the one natively supported by the system.                                                                                                                                 | `--allow=multiarch` and `--disallow=multiarch`             |
| Bluetooth                         | Switch | Allow an application to use Bluetooth.                                                                                                                                                                                                   | `--allow=bluetooth` and `--disallow=bluetooth`             |
| Controller LAN Bus                | Switch | Allow the application to use `canbus` connectors. To do this, you also need to have access to the network.                                                                                                                               | `--allow=canbus` and `--disallow=canbus`                   |
| Shared application memory         | Switch | Allow an application to share its `/dev/shm` between instances of the same `$FLATPAK_APP_ID`. Introduced specifically for the [Steam](/apps/steam/) package ([Flatpak](/package-manager/flatpak/)) to use `/dev/shm` for sandboxed games | `--allow=per-app-dev-shm` and `--disallow=per-app-dev-shm` |

### File system

List of file system subsets available for applications

| Name                                              | Type   | Description                                                                                                                                                 | `flatpak override` equivalent                                               |
| :------------------------------------------------ | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| All files in the file system                      | Switch | Allow read and write access to the entire file system. Anything that is not writable by the user will be read-only.                                         | `--filesystem=host` and `--nofilesystem=host`                               |
| All system libraries, executables and static data | Switch | Allow read/write access to system libraries located in `/usr`. Since writing to this directory requires root access, the permission will be read-only.      | `--filesystem=host-os` and `--nofilesystem=host-os`                         |
| All system configurations                         | Switch | Allow read/write access to system configurations located in `/etc`. Since writing to this directory requires root access, the permission will be read-only. | `--filesystem=host-etc` and `--nofilesystem=host-etc`                       |
| All user files                                    | Switch | Allow read/write access to the user directory (`$HOME` or `~/`).                                                                                            | `--filesystem=home` and `--nofilesystem=home`                               |
| Other files                                       | Enter  | Allow read and write access to the directory you want.                                                                                                      | `--filesystem=[PATH]`, `--filesystem=[PATH]:ro` and `--nofilesystem=[PATH]` |

### Persist

List of relative paths to the home folder created in the sandbox

| Name  | Type  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `flatpak override` equivalent |
| :---- | :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------- |
| Files | Enter | Allow an application to access the target directory while restricting access to it by other applications. Starting from the user's directory (`$HOME` or `~/`), the target directory will be remapped to the application directory (`~/.var/app/$FLATPAK_APP_ID/[PATH]`) if they do not have write access to the target directory. For example, saving `.mozilla` will map `~/.mozilla` to `~/.var/app/org.mozilla.Firefox/.mozilla.` This method is also used to remove the user's directory because it prevents the application from writing to `~/`. | `--persist=[PATH]`            |

### Environment

List of variables imported into the application

| Name      | Type  | Description                                                                                                                                                                                                  | `flatpak override` equivalent |
| :-------- | :---- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| Variables | Enter | Set an environment variable in your application to make the variable available to the application when it starts. For example, you can add `MOZ_ENABLE_WAYLAND=1` for Firefox to enable the Wayland backend. | `--env=[VAR]=[VALUE]`         |

### System bus

List of known names on the system bus

| Name         | Type  | Description                                                                                                                                                       | `flatpak override` equivalent |
| :----------- | :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| Negotiations | Enter | Allow the application to interact with system services. For example, adding `org.freedesktop.Accounts` will allow the application to access users' login history. | `--system-talk-name=[NAME]`   |
| Owners       | Enter | Allow an application to own system services under the given name.                                                                                                 | `--system-own-name=[NAME]`    |

### Session bus

List of known names on the session bus

| Name  | Type  | Description                                                                                                                                                    | `flatpak override` equivalent |
| :---- | :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| Talks | Enter | Allow the application to interact with session services. For example, adding `org.freedesktop.Notifications` will allow the application to send notifications. | `--talk-name=[NAME]`          |
| Owns  | Enter | Allow the application to own session services under the given name.                                                                                            | `--own-name=[NAME]`           |

### Portals

List of resources selectively provided to the application

| Name                   | Type   | Description                                             | `flatpak override` equivalent         |
| :--------------------- | :----- | :------------------------------------------------------ | :------------------------------------ |
| Background Information | Switch | Allow the application to run in the background.         | `org.freedesktop.portal.Background`   |
| Notifications          | Switch | Allow the app to send notifications.                    | `org.freedesktop.portal.Notification` |
| Microphone             | Switch | Allow the app to listen to your microphone.             | `org.freedesktop.portal.Device`       |
| Speakers               | Switch | Allow the app to play sounds through your speakers.     | `org.freedesktop.portal.Device`       |
| Camera                 | Switch | Allow the application to record video from your webcam. | `org.freedesktop.portal.Device`       |
| Location               | Switch | Allow the app to access location data.                  | `org.freedesktop.portal.Location`     |

## Tips and tricks

### Restore Flatseal permissions for all applications

If the permissions are removed and a factory reset is no longer possible, run the following command from a terminal and re-launch Flatseal:

```shell
rm ~/.local/share/flatpak/overrides/com.github.tchx84.Flatseal
```
