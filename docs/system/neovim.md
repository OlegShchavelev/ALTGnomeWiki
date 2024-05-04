---
title: Neovim
nameRepo: neovim
appstreamRepo: neovim.desktop
aggregation:
    sisyphus: neovim
appstream:
    id: neovim.desktop
    name: Neovim
    icon: /neovim/neovim-logo.svg
    summary: Форк редактора Vim, направленный на улучшение кодовой базы.
    metadata_license:
        name: Apache License 2.0
        link: https://choosealicense.com/licenses/apache-2.0/
    developer:
        name: Neovim Community
    url:
        homepage: https://neovim.io/
        bugtracker: https://github.com/neovim/neovim/issues
        donation: https://github.com/sponsors/neovim
---



# Neovim

Neovim — форк Vim, направленный на улучшение кодовой базы, упрощающий реализацию API, улучшающий пользовательский интерфейс и реализацию плагинов. Редакторы, подобные Helix, вдохновлялись Neovim.

## Установка из репозитория

**Neovim** можно установить через терминал:
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install neovim
```
```shell[epm]
epm -i neovim
```
:::
