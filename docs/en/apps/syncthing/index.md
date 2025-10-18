---
title: Syncthing
appstreamRepo: me.kozec.syncthingtk
aggregation:
  flatpak: me.kozec.syncthingtk
appstream:
  id: me.kozec.syncthingtk
  name: Syncthing
  icon: /syncthing/syncthing-logo.svg
  summary: An application that allows you to synchronize files between multiple devices.
  developer:
    name: kozec
    avatar: https://avatars.githubusercontent.com/u/1282500?v=4
  metadata_license:
    name: GNU GPLv2
    link: https://choosealicense.com/licenses/gpl-2.0/
  url:
    homepage: https://github.com/kozec/syncthing-gtk
    bugtracker: https://github.com/kozec/syncthing-gtk/issues
    translate: https://explore.transifex.com/syncthing-gtk/syncthing-gtk/
---

# Syncthing

Syncthing is an application that allows you to synchronize files between multiple devices. There is support for saving sequential versions of a file using several algorithms, including a custom one, which allows you to use Syncthing for backup (not recommended). The application and protocol are published under an open license.

Syncthing can work both on a local network and on the Internet. All data is transmitted over secure TLS channels using PFS (Perfect Forward Secrecy Key Exchange) to eliminate the possibility of eavesdropping. Synchronization occurs based on the file modification date. There is support for synchronization at the block level, that is, with small changes in the file, only the changed blocks will be synchronized, and not the entire file.

## Installing Syncthing

1. Download the program from [developer’s website](https://syncthing.net/downloads/)
2. Unpack the archive into the `/opt` folder

```shell
cd Загрузки
sudo tar -C '/opt' -xvf syncthing*
```

3. During unpacking, the folder `/opt/syncthing-linux-amd64-v1.27.3` was created (for convenience, in the example it was renamed to `/opt/syncthing`)
4. Run Syncthing as a normal user.

```shell
cd /opt/syncthing
./syncthing
```

You need to configure Syncthing to start automatically as a daemon that runs when the user logs in. The example uses `systemd`, other options for automatic loading can be found on the [project website](https://docs.syncthing.net/users/autostart.html#linux).

- Download `syncthing.service` file from [GitHub](https://github.com/syncthing/syncthing/tree/main/etc/linux-systemd/user) and copy it to `$HOME/.config/systemd/user`
- Edit the `[Service]` section, specifying the correct path to the executable file - change `ExecStart` from `/usr/bin/syncthing` to `/opt/syncthing/syncthing`. The line should look like this:

```
ExecStart=/opt/syncthing/syncthing serve --no-browser --no-restart --logflags=0
```

- Save changes and start the service.

::: warning
Since the service will be launched as a regular user, the following command must be executed without root rights
:::

```shell
systemctl --user enable --now syncthing.service
```

5. Done. Launch your browser, go to [http://127.0.0.1:8384/](http://127.0.0.1:8384/), link devices and configure folders for synchronization.

::: tip
To manage the service, you can use the [Syncthing-GTK](https://flathub.org/apps/me.kozec.syncthingtk) application

```shell
flatpak install flathub me.kozec.syncthingtk
```
:::
