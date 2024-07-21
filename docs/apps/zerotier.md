---
aggregation:
  sisyphus: zerotier-one
appstream:
  id: zerotier-one
  name: ZeroTierOne
  icon: /zerotier-one/zerotier-one-logo.png
  summary: Сервис ZeroTierOne
  developer:
    name: ZeroTier Inc.
  metadata_license:
    name: ZeroTier BSL 1.1
    link: https://github.com/zerotier/ZeroTierOne/blob/dev/LICENSE.txt
  url:
    homepage: https://zerotier.com/
    bugtracker: https://github.com/zerotier/ZeroTierOne/issues
---

# ZeroTierOne

ZeroTierOne — бесплатный мультиплатформенный сервис, с открытым исходным кодом позволяющий строить современные, безопасные многоточечные виртуализированные сети практически любого типа. От надёжных одноранговых сетей до мультиоблачной ячеистой инфраструктуры — обеспечение глобальной связи с простотой локальной сети.

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

::: info
Помните, что сети ZeroTier представляют собой 16-значные идентификаторы, которые выглядят как `8056c2e21c000001`.
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
