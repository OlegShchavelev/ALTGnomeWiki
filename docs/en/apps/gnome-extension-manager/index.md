---
aggregation:
  flatpak: com.mattjakeman.ExtensionManager
  sisyphus: gnome-extension-manager
appstream:
  id: com.mattjakeman.ExtensionManager
  name: Extension Manager
  icon: /gnome-extension-manager/gnome-extension-manager-logo.svg
  summary: An easy way to manage extensions
  developer:
    name: Matt Jakeman
    nickname: mjakeman
    avatar: https://avatars.githubusercontent.com/u/12368711?v=4
  metadata_license:
    name: GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://github.com/mjakeman/extension-manager
    bugtracker: https://github.com/mjakeman/extension-manager/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /gnome-extension-manager/gnome-extension-manager-1.gif
---

# Extension Manager

Extension Manager is a graphical tool for installing, uninstalling and configuring GNOME Shell extensions

Because extensions are created outside of the normal GNOME design and development process, they are maintained by their authors and not by the GNOME community. Some features that were first introduced as extensions may appear in future versions of GNOME.

Unlike its official counterpart for the GNOME shell, the [Extensions](/en/apps/extensions-app/) application, this tool has additional functionality related to not yet installed extensions. Through the Manager, you can search for extensions that have not yet been installed, and view basic information without going into the browser. Here you can immediately see the description, number of downloads, useful links, as well as user comments

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

<AGWGallery />

## Usage

### Installing extensions

- Go to the `Overview` tab

![Overview Tab](/gnome-extension-manager/gnome-extension-manager-2.png)

- Enter the name of the extension or part of its description

![Found extension](/gnome-extension-manager/gnome-extension-manager-3.png)

- Click on the desired extension. Here you can install the extension using the `Install` button

![Extension details](/gnome-extension-manager/gnome-extension-manager-4.png)

### Removing extensions

- In the `Installed` tab, find the extension you need and click on it

![Installed tab](/gnome-extension-manager/gnome-extension-manager-5.png)

- Confirm deletion by clicking the `Delete` button

![Deletion confirmation](/gnome-extension-manager/gnome-extension-manager-6.png)
