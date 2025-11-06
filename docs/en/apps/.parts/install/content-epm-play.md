---
search: false
---

## Installation using epm play <Badge v-if="$frontmatter?.aggregation?.epm?.play?.build === 'unofficial'" type="danger" text="Unofficial build" />

If you have the [eepm](/en/package-manager/epm/) package, you can install **{{ $frontmatter?.appstream?.name }}** with one command:

```shell-vue
epm play {{ $frontmatter?.aggregation?.epm?.play?.id ?? $frontmatter?.aggregation?.epm?.play }}
```
