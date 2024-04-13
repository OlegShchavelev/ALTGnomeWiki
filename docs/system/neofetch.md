---
title: Neofetch
nameRepo: neofetch
appstreamRepo: neofetch.desktop
aggregation: 
    sisyphus: neofetch
appstream:
    id: neofetch.desktop
    name: Neofetch
    icon: /neofetch/neofetch-logo.png
    summary: Средство для отображения информации о системе.
    metadata_license: 
        name: MIT License
        link: https://choosealicense.com/licenses/mit/
    developer: 
        name: Dylan Araps & Linux Community
        nickname: dylanaraps
        avatar: /neofetch/neofetch-avatar.png
    url: 
        homepage: https://github.com/dylanaraps/neofetch
        bugtracker: https://github.com/dylanaraps/neofetch/issues
---



# Neofetch

Neofetch — средство системной информации командной строки, написанное на bash 3.2+. Он отображает информацию о вашей операционной системе, программном и аппаратном обеспечении эстетичным и визуально приятным способом.

## Установка из репозитория

**Neofetch** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install neofetch
```
```shell[epm]
epm -i neofetch
```
:::