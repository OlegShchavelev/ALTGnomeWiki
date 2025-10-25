---
aggregation:
  sisyphus: fish
appstream:
  id: fish.desktop
  name: Fish
  icon: /fish/fish.png
  summary: Smart and convenient shell for operating systems based on the Linux kernel
  developer:
    name: The user-friendly shell
  metadata_license:
    name: GNU GPLv2
    link: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
  url:
    homepage: https://fishshell.com/
    bugtracker: https://github.com/fish-shell/fish-shell/issues
---

# Fish

Fish is a smart and convenient shell for operating systems based on the Linux kernel

<!--@include: @en/apps/.parts/install/content-repo.md-->

## Setting Fish as the default shell for your user

```shell
su -
usermod USER -s /usr/bin/fish
```

`USER` — your username

## Setting up Fish for root user

```shell
su -
usermod root -s /usr/bin/fish
```

## Oh my Fish

Oh My Fish (OMF) is a configuration and extension management framework for the Fish (Friendly Interactive SHell) shell. It provides a convenient way to install themes, plugins and customize the Fish environment, making it more functional and beautiful. Oh My Fish simplifies the shell customization process, allowing users to easily add new features and change the appearance of the terminal.

## Install Oh My Fish

```shell
curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
```

## Installing themes for Oh My Fish

### View available themes

You can view the available themes by running the command:

```shell
omf search theme
```

### Installing a theme

To install a specific theme, use the `omf install` command followed by the theme name. For example, to install the `batman` theme, run:

```shell
omf install batman
```

After this command the theme will be applied automatically
