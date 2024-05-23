---
title: Fastfetch
aggregation:
    sisyphus: fastfetch
appstream:
    id: fastfetch.desktop
    name: Fastfetch
    summary: Средство для отображения информации о системе.
    metadata_license:
        name: MIT License
        link: https://choosealicense.com/licenses/mit/
    developer:
        name: fastfetch-cli
    url:
        homepage: https://github.com/dylanaraps/neofetch
        bugtracker: https://github.com/dylanaraps/neofetch/issues
---

# Fastfetch

Fastfetch — инструмент, похожий на [neofetch](/neofetch), для вывода системной информации и отображения ее в привлекательном виде. Он написан в основном на C с учетом производительности и настраиваемости. В настоящее время поддерживаются Linux, Android, FreeBSD, macOS и Windows 7 (или более поздние версии).

## Установка из репозитория

**Fastfetch** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fastfetch
```
```shell[epm]
epm -i fastfetch
```
:::

