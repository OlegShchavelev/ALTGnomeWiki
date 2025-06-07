---
search: false
---

## Установка из репозитория

**{{ $frontmatter?.appstream?.name }}** можно установить любым привычным и удобным способом:

<!--@include: @apps/.parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install {{ $frontmatter?.aggregation?.sisyphus?.id ?? $frontmatter?.aggregation?.sisyphus }}
```

```shell-vue[epm]
epm -i {{ $frontmatter?.aggregation?.sisyphus?.id ?? $frontmatter?.aggregation?.sisyphus }}
```

:::
