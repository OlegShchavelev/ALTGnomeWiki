---
title: ZeroTierOne

metainfo:
    active: true
    thumb:
        src: https://avatars.githubusercontent.com/u/4173285?s=48&v=4
        title: ZeroTierOne
    summary: сервис ZeroTierOne
    developer: 
        name: Franck Nijhof, Weston Blieden
    site:
        url: https://zerotier.com
        anchor: zerotier.com
    licence:
        url: 
        anchor: ZeroTier BSL 1.1
    translate:
        url: 
        anchor: 
    issue: 
        url: https://github.com/zerotier/ZeroTierOne/issues
        anchor: github.com
    sisyphus:
        url: https://packages.altlinux.org/ru/sisyphus/srpms/zerotier-one/
        
---

# ZeroTierOne

ZeroTierOne — бесплатный мультиплатформенный сервис, с открытым исходным кодом позволяющий строить современные, безопасные многоточечные виртуализированные сети практически любого типа. От надежных одноранговых сетей до мультиоблачной ячеистой инфраструктуры — обеспечение глобальной связи с простотой локальной сети. 

## Установка из репозитория

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install zerotier-one
```
```shell[epm]
epm -i zerotier-one
```
:::

После установки **ZeroTierOne**, необходимо запустить службу для начала использования приложения в системе:

```shell
su -
serv zerotier-one on
```

## Использование **ZeroTierOne**:

::: tip
Помните, что сети ZeroTier представляют собой 16-значные идентификаторы, которые выглядят как 8056c2e21c000001.
:::

```shell
su -
zerotier-cli join ################
```

```shell
su -
zerotier-cli leave ################
```

```shell
su -
zerotier-cli listnetworks
```
