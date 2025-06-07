---
search: false
---

## Установка c помощью Flatpak <Badge v-if="$frontmatter?.aggregation?.flatpak?.build === 'unofficial'" type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **{{ $frontmatter?.appstream?.name }}** одной командой:

```shell-vue
flatpak install flathub {{ $frontmatter?.aggregation?.flatpak?.id ?? $frontmatter?.aggregation?.flatpak }}
```

<!--@include: @apps/.parts/install/software-flatpak.md-->
