---
aggregation:
  sisyphus: git
appstream:
  name: Git
  icon: /git/git-logo.svg
  summary: A free and open version control system with a distributed structure.
  metadata_license:
    name: GNU GPLv2
    link: https://choosealicense.com/licenses/gpl-2.0/
  developer:
    name: Git Community
  url:
    homepage: https://git-scm.com/
---

# Git

Git is a free and open distributed version control system for handling small to very large projects with speed and efficiency.

## Installation from repository

**Git** can be installed using the terminal, enter:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install git
```

```shell[epm]
epm -i git
```

:::

## Settings

To work with `git` version control, you need to configure your working environment:

### View current settings

To view your current settings, you can view all configurations or just global ones using the following commands:

To view all configurations by type (local, global):

```shell
git config --list --show-origin
```

To view global configurations:

```shell
git config --global --list
```

### Adding additional settings

To add additional settings, use the `config` command, with a configuration key and its value. You can add the `--global` option for one project (local) or for all (global). We use the following commands using the `status.short` setting as an example:

Run the command to add local configuration:

```shell
git config status.short true
```

Run the command to add global configuration:

```shell
git config --global status.short true
```

### Removing advanced settings

To remove additional settings, use the `config --unset` command with the configuration key. For example, to remove a username:

```shell
git config --global --unset user.name
```

### Resetting Git configurations to default values

If you need to reset all global configurations to default values, delete the global configuration file:

```shell
rm ~/.gitconfig
```

The command will delete the global Git configuration file, which will reset all global settings to their default values the next time they are used.

## Settings after installing `git`

### Personal information

Enter your name and email address. This information will be included in every commit and will remain unchanged. To do this you need to enter into the terminal:

```shell
git config --global user.name "username"
git config --global user.email "email@example.com"
```

:::info
Don't forget to replace `username` and `email@example.com` with your username and email in quotes.

Note that the `--global` option will cause this setting to be applied to all your commits by default.

If you want to apply settings only to a specific repository, you need to log into that repository and run the commands without the `--global` option.
:::

### Default master branch name

Optionally, you can customize the name of the main branch. The default name is `master`, but GitHub usually uses the name `main`. To change the name of the `master` branch to `main`, run the following command in the terminal:

```shell
git config --global init.defaultBranch main
```

:::info
If you need to set an option only for a specific repository, you need to go to that repository and run the command without the `--global` option:
:::

## Problems and possible solutions when using `git`

When submitting a commit, the following error occurs:

```shell
> git push origin main:main
error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
Everything up-to-date
```

A possible fix is to increase the size of `postBuffer` to 500 MB, for example. Make settings in the working environment using the terminal:

```shell
git config --global http.postBuffer 500M
```
