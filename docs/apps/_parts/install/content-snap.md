## Установка с помощью Snaps

При наличии пакета [snapd](/snap), можно установить **{{ $frontmatter?.appstream?.name }}** одной командой:

```shell-vue
snap install {{ $frontmatter?.aggregation?.snap }}
```

<!--@include: @apps/_parts/install/software-snap.md-->