---
search: false
---

## Установка с помощью Snaps <Badge v-if="$frontmatter?.aggregation?.snap?.build === 'unofficial'" type="danger" text="Неофициальная сборка" />

При наличии пакета [snapd](/snap), можно установить **{{ $frontmatter?.appstream?.name }}** одной командой:

```shell-vue
snap install {{ $frontmatter?.aggregation?.snap?.id ?? $frontmatter?.aggregation?.snap }}
```

<!--@include: @apps/.parts/install/software-snap.md-->
