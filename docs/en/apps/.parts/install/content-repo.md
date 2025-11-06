---
search: false
---

## Installation from repository

**{{ $frontmatter?.appstream?.name }}** can be installed in any familiar and convenient way:

<!--@include: @en/apps/.parts/install/software-repo.md-->

**Installation via terminal**

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
