## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **{{ $frontmatter?.appstream?.name }}** одной командой:

```shell-vue
flatpak install flathub {{ $frontmatter?.aggregation?.flatpak }}
```

<!--@include: @apps/_parts/install/software-flatpak.md-->