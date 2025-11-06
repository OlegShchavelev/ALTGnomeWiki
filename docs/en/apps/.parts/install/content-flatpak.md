---
search: false
---

## Installation using Flatpak <Badge v-if="$frontmatter?.aggregation?.flatpak?.build === 'unofficial'" type="danger" text="Unofficial build" />

If you have the [Flatpak](/en/package-manager/flatpak/) package, you can install **{{ $frontmatter?.appstream?.name }}** with one command:

```shell-vue
flatpak install flathub {{ $frontmatter?.aggregation?.flatpak?.id ?? $frontmatter?.aggregation?.flatpak }}
```

<!--@include: @en/apps/.parts/install/software-flatpak.md-->
