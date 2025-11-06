# Flatpak

Flatpak is a system for creating, distributing and running sandboxed desktop applications on Linux.

## Installation from repository

**Flatpak** can be installed via terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install flatpak
```

```shell[epm]
epm -i flatpak
```

:::

Log out and log back in, or restart the system to ensure that the flatpak paths are updated correctly.

::: details Why is it necessary to log out after installing Flatpak

```
Please note that directories

'/var/lib/flatpak/exports/share'
'/home/oleg/.local/share/flatpak/exports/share'

are not in the search path specified by the XDG_DATA_DIRS environment variable,
so applications installed by Flatpak may not appear on the desktop until the
session is restarted.
```

:::

## Alternative Flatpak installation option

An alternative and more convenient way is to install the `flatpak-repo-flathub` package, when installing the package: the automatic package will perform all the above operations:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install flatpak-repo-flathub
```

```shell[epm]
epm -i flatpak-repo-flathub
```

:::

:::info
During the installation of the `flatpak-repo-flathub` package, the `flathub` repository will be connected
:::

## Installation using epm play

When installing via epm, flathub will be installed immediately, and a fix will be applied to fix the error: “enabling unprivileged user namespaces”

::: info
Current from version **EPM 3.61.5**
:::

To install **Flatpak** using EPM, enter the command in the terminal

```shell
epm play flatpak
```

## Using Flatpak

Basic commands needed to install, run, and manage Flatpak applications. For a complete list of **Flatpak** commands, run `flatpak --help`

### Repository management

To view the repositories configured on your system, run:

```shell
flatpak remotes
```

Add a repository, run:

```shell
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

In this case, `flathub` specifies the local name that is assigned to the remote device. The URL points to the remote device's `.flatpakrepo` file. The `--if-not-exists` option stops the command from throwing an error if the remote device already exists.

:::info Most popular repositories

GNOME Nightly Repository:

```shell
flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo
```

Flatpak Beta Repository:

```shell
flatpak remote-add flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
```

:::

To delete a repository, run:

```shell
flatpak remote-delete flathub
```

In this case, `flathub` is the local name of the remote repository.

### Search applications

To search for an application/environment in Flatpak, use the `search` command:

```shell
flatpak search krita
```

### Installing applications

To install the application, run:

```shell
flatpak install flathub org.gimp.GIMP
```

`flathub` is the identifier of the remote repository from which the application should be installed, and `org.gimp.GIMP` is the identifier of the application.

Typically, an application will require a specific runtime environment, and this will be installed before the application.

Information about the application being installed can also be provided in a `.flatpakref` file, which can be remote or local. To specify `.flatpakref` instead of manually specifying the remote device and application ID, run:

```shell
flatpak https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref
```

As of Flatpak 1.2, the `install` command can perform a pre-search before installing an application:

```shell
flatpak install gimp
```

Confirm remote access and the command will begin installing the required package.

In graphical mode, to install applications in Flatpak **use** [App Center (GNOME Software)](/apps/gnome-software/). In the **"Installed"** tab, select the application in the list and click the **"Install"** button.

![flatpak_2](/flatpak/flatpak_2.gif)

### Launching applications

To run an application in Flatpak, use the `run` command and the application ID:

```shell
flatpak run org.gimp.GIMP
```

### Uninstalling apps

To uninstall an application in Flatpak, use the `uninstall` command and the application ID:

```shell
flatpak uninstall org.gimp.GIMP
```

To remove runtimes and extensions that are not used by installed applications, use:

```shell
flatpak uninstall --unused
```

In graphical mode, to uninstall apps in Flatpak **use** [App Center (GNOME Software)](/apps/gnome-software/). In the **"Installed"** tab, select the application in the list and click the **"Delete"** button.

![flatpak_1](/flatpak/flatpak_1.gif)

### Troubleshooting

To fix corrupt Flatpak packages, use:

```shell
flatpak repair
```

To see what changes have been made to your Flatpak installation over time, you can view the logs:

```shell
flatpak history
```
