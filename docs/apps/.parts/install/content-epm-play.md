---
search: false
---

## Установка c помощью epm play <Badge v-if="$frontmatter?.aggregation?.epm?.play?.build === 'unofficial'" type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **{{ $frontmatter?.appstream?.name }}** одной командой:

```shell-vue
epm play {{ $frontmatter?.aggregation?.epm?.play?.id ?? $frontmatter?.aggregation?.epm?.play }}
```
