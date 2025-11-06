---
search: false
---

## Installation using Snaps <Badge v-if="$frontmatter?.aggregation?.snap?.build === 'unofficial'" type="danger" text="Unofficial build" />

If you have the [snapd](/en/package-manager/snap/) package, you can install **{{ $frontmatter?.appstream?.name }}** with one command:

```shell-vue
snap install {{ $frontmatter?.aggregation?.snap?.id ?? $frontmatter?.aggregation?.snap }}
```

<!--@include: @en/apps/.parts/install/software-snap.md-->
