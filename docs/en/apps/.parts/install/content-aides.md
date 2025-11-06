---
search: false
---

## Installation from the Aides repository <Badge v-if="$frontmatter?.aggregation?.aides?.build === 'unofficial'" type="danger" text="Unofficial build" />

If you have the [stplr](/en/package-manager/stplr/) package, you can install **{{ $frontmatter?.appstream?.name }}** with one command:

```shell-vue
stplr in {{ $frontmatter?.aggregation?.aides?.id }}
```

If the Aides repository is not yet connected, add it with the following command:

```sh
stplr repo add aides https://altlinux.space/aides-community/aides.git
```

:::danger Disclaimer
Use packages and instructions only at your own risk. Packages are built locally, so check the source code and build scripts.
:::
