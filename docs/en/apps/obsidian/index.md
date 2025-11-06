---
aggregation:
  flatpak: md.obsidian.Obsidian
  epm:
    play:
      id: obsidian
      build: unofficial
appstream:
  id: md.obsidian.Obsidian
  name: Obsidian
  icon: /obsidian/obsidian-logo.png
  summary: Powerful knowledge base, runs on top of a local folder with regular Markdown text files.
  keywords:
    - proprietary
  metadata_license:
    name: Proprietary
    link: https://obsidian.md/license
  developer:
    name: Dynalist Inc.
  url:
    homepage: https://obsidian.md/
    bugtracker: https://github.com/flathub/md.obsidian.Obsidian/issues
    translate: https://github.com/obsidianmd/obsidian-translations
---

# Obsidian

Obsidian is a personal knowledge base and note-taking program that works with Markdown files. Users can create internal links to notes and visualize these relationships as a graph. Obsidian is designed to help the user organize and structure thoughts and knowledge in a flexible, non-linear way. Obsidian supports CommonMark and GitHub Flavored Markdown (GFM), as well as other useful features: tags, LaTeX math expressions, mermaid diagrams, footnotes, internal links, and embedding notes or external files. Obsidian has a system of plugins to expand functionality.

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->

## Running Obsidian in a Wayland windowed interface

To launch **Obsidian** through a terminal, specify the following launch options:

::: code-group

```shell[flatpak]
flatpak run md.obsidian.Obsidian --ozone-platform-hint=auto
```

```shell[epm play]
obsidian --ozone-platform-hint=auto
```

:::

:::warning
When running the [Flatpak version](/en/package-manager/flatpak/), make sure it can run using the Wayland graphical protocol. One of the most convenient verification options is the [Flatseal](/en/apps/flatseal/) program

![Enable Wayland graphics protocol](/obsidian/obsidian-1.png)

By default, launching in the Wayland windowed interface is prohibited. To run through it, enable the following items:

- Wayland window system
- Revert to X11 windowing system

An alternative environment setting is the terminal:

```shell
flatpak override --user md.obsidian.Obsidian --socket=wayland --socket=fallback-x11
```

:::

To run the application in the GNOME environment and ease of setup, it is recommended to install the [PinApp](/en/apps/pin-app/) application, select the **Obsidian** application, make a `Pin` and enter the following parameters in the `Exec` field:

::: code-group

```shell[flatpak]
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=obsidian.sh --file-forwarding md.obsidian.Obsidian @@u %U @@ // [!code --]
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=obsidian.sh --file-forwarding md.obsidian.Obsidian --ozone-platform-hint=auto @@u %U @@ // [!code ++]
```

```shell[epm play]
obsidian %U // [!code --]
obsidian --ozone-platform-hint=auto %U // [!code ++]
```

:::

## Hardware acceleration:

To avoid graphical errors at startup, [hardware acceleration must be disabled](https://github.com/flathub/md.obsidian.Obsidian?tab=readme-ov-file#gpu-acceleration).

For [Flatpak version](/package-manager/flatpak/) you need to add a variable with the value `--env=OBSIDIAN_DISABLE_GPU=1:`

```shell
flatpak override --user --env=OBSIDIAN_DISABLE_GPU=1 md.obsidian.Obsidian
```

For the epm version you need to add a variable with the value `OBSIDIAN_DISABLE_GPU=1`. For example, via `./bashrc`:

```shell
cat << _EOF_ >> ~/.bashrc
# Disable GPU for obsidian
export OBSIDIAN_DISABLE_GPU=1
_EOF_
```
