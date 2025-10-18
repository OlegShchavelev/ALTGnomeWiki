---
aggregation:
  flatpak: org.gnome.Boxes
  sisyphus: gnome-boxes
appstream:
  id: org.gnome.Boxes
  name: Boxes
  icon: /boxes/boxes-logo.svg
  summary: Virtualization made easier
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: LGPL-2.1
    link: https://www.gnu.org/licenses/old-licenses/lgpl-2.1.ru.html#SEC1
  keywords:
    - dev
  url:
    homepage: https://gnomeboxes.org/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-boxes/issues
    translate: https://wiki.gnome.org/TranslationProject
gallery:
  title: Gallery
  type: slider
  items:
    - src: /boxes/boxes-1.png
    - src: /boxes/boxes-2.png
---

# Boxes

Boxes is the official utility for the GNOME desktop environment, which allows you to easily create virtual machines from operating system images.

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Usage example

After launching Boxes, you can immediately begin creating the desired virtual machine. To create a VM, click `+` in the upper left corner.

::: tip An example of the Boxes window immediately after launch.

![An example of the Boxes window immediately after launch. To create a VM, click **+** in the upper left corner.](/boxes/boxes-4.png)

:::

Next, you can select the `.iso` image file already existing on the disk, containing the desired OS. To do this, click “**Install from file**”.

If there is no ready-made `.iso` image, then you can select the desired OS from the list. In this case, it will be automatically downloaded from the network (an Internet connection is required) and offered for installation. To do this, click “**Download OS**”.

::: tip An example of choosing an image for installing the OS.

![An example of choosing an image for installing the OS.](/boxes/boxes-5.png)

:::

::: tip An example of selecting a `.iso` image to install an OS from a local disk.

![An example of selecting a `.iso` image to install an OS from a local disk.](/boxes/boxes-6.png)

:::

::: tip An example of selecting an image for installing an OS from the network.

![An example of selecting an image for installing an OS from the network.](/boxes/boxes-7.png)

:::

::: tip Wait for the image to download. After this, you can continue configuring the VM.

![Wait for the image to download.](/boxes/boxes-8.png)

:::

Then you need to set the resources for the VM and configuration parameters. Specify the required settings. For any popular and modern OS, it is recommended to select the UEFI emulation type. For outdated or less popular operating systems (for example, for BSD systems), it is better to choose the BIOS emulation option.

::: tip Specify parameters for the created VM.

![Specify parameters for the created VM.](/boxes/boxes-9.png)

:::

Next, you can begin installing the OS. Follow the installation program instructions.

::: tip An example of starting a VM with installing the OS.

![An example of starting a VM with installing the OS.](/boxes/boxes-11.png)

:::

The Boxes utility may offer to intercept input control. If you want the input to be intercepted, select “**Allow**”, otherwise select “**Refuse**”.

::: tip Example of a request to intercept input.

![Example of a request to intercept input.](/boxes/boxes-10.png)

:::

## Interaction with the guest operating system

You can “forward” some equipment directly from your computer or laptop into the installed guest operating system. These can be USB devices, such as flash drives, tokens, printers, etc., and some other peripheral equipment.

In addition, inside the guest VM the network will immediately work in Network address translation (NAT) mode, the clipboard will work (in both directions), screen scaling and file transfer (Drag and Drop) in both directions will work. It is also possible to create a shared network folder.

::: warning IMPORTANT!

- It is necessary that the so-called. paravirtualization drivers. Such drivers are already included by default in most modern versions of Linux;
- If the guest OS is Windows, then you may need to install Virtio paravirtualization drivers into it. They can be downloaded from the link: https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/?C=M;O=D;
- If you need to use FreeBSD as a guest system, see the information in the FreeBSD manual: https://docs.freebsd.org/en/books/handbook/virtualization/;
- The network inside the guest VM in the default configuration has some limitations: the ICMP protocol does not work, and the `ping` command neither to nor from the guest OS will return a result. Connecting via SSH will only work from the guest system, but not into it. There is also no virtual bridge and is not created by default for guest OSes;
- The forwarded equipment will be disconnected from the main (host) system, and exclusively connected inside the guest OS. This means that forwarded hardware cannot be used in the main OS at the same time as the guest OS.

:::

To forward the device inside the guest VM, you need to go to the settings and switch to the “**Devices and compatible resources**” tab. Move the slider to forward the desired device.

To create a shared folder, you can click `+` and specify the name of the shared folder. Then the selected local folder of the guest OS will appear under the specified name in the main (host) system.

::: tip An example of forwarding a video camera and creating a shared folder for data exchange.

![An example of forwarding a video camera and creating a shared folder for data exchange.](/boxes/boxes-12.png)

:::

You can simply drag and drop the file into the VM window, then it will appear in the “**Downloads**” folder in the guest OS.

::: tip Example of data exchange using Drag and drop.

![Example of data exchange using Drag and drop.](/boxes/boxes-13.png)

:::

## 3D acceleration

Boxes makes it possible to use 3D acceleration for virtual machines if it is supported by the guest and host systems. This setting will improve the performance of everyday applications and games that require graphic processing, enable animation of the working environment, and so on.

1. Right-click on the virtual machine, in the context menu that opens, select `Settings`.
2. If the box supports 3D acceleration, then a 3D acceleration switch will appear in the settings (acceleration is disabled by default). To enable 3D acceleration, enable this switch.

::: info Don't forget to restart the machine
If you enable 3D acceleration for a box that is already running, the changes will take effect only after a restart.
:::

::: tip An example of enabling 3D acceleration for boxing.

![An example of enabling 3D acceleration for boxing.](/boxes/boxes-3.png)

:::

## Changing the directory with virtual machines

Virtual machines take up quite a lot of disk space, so the directory where they are stored can be changed if necessary:

```shell
mv ~/.local/share/gnome-boxes/ /path/to/directory
ln -s /path/to/directory ~/.local/share/gnome-boxes
```

`/path/to/directory` — the directory to which you want to move the virtual machines.

::: warning
Boxes must be installed [from the repository](/apps/boxes/#install-from-repository). Changing the directory via [Flatpak](/package-manager/flatpak/) is currently **not supported**.
:::

## Shortcuts

### Overview

| Shortcut         | Description                |
| ---------------- | ---------------------------|
| [[F1]]           | Help                       |
| [[F10]]          | Open Main menu             |
| [[Ctrl]] + [[N]] | Create new virtual machine |
| [[Ctrl]] + [[F]] | Search                     |
| [[Ctrl]] + [[?]] | Shortcuts                  |
| [[Ctrl]] + [[Q]] | Close windows / Close app  |

### Creating a virtual machine and setting parameters

| Shortcut        | Description         |
| --------------- | ------------------- |
| [[Alt]] + [[→]] | Go to next page     |
| [[Alt]] + [[←]] | Go to previous page |

### Virtual machine display

| Shortcut             | Description              |
| -------------------- | ------------------------ |
| [[CtrlL]] + [[AltL]] | Go to next page          |
| [[Alt]] + [[←]]      | Back to Overview         |
| [[Ctrl]] + [[Q]]     | Close window / Close app |
| [[F11]]              | Toggle fullscreen mode   |
