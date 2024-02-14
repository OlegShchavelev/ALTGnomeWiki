::if frontmatter.nameRepo

## Установка из репозитория

**{{ $frontmatter.title }}** можно установить любым привычным и удобным способом:

<!--@include: ./software-repo.md-->

**Установка через терминал**

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install {{ $frontmatter.nameRepo }}
```
```shell-vue[epm]
epm -i {{ $frontmatter.nameRepo }}
```

:::

::endif

::if frontmatter.appstreamFlatpak

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **{{ $frontmatter.title }}** одной командой:

```shell-vue
flatpak install {{ $frontmatter.appstreamFlatpak }}
```

<!--@include: ./software-flatpak.md-->

::endif

::if frontmatter.nameSnap

## Установка с помощью Snaps

При наличии пакета [snapd](/snap), можно установить **{{ $frontmatter.title }}** одной командой:

```shell-vue
snap install {{ $frontmatter.nameSnap }}
```

<!--@include: ./software-snap.md-->

::endif

::if frontmatter.nameEpmPlay

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **{{ $frontmatter.title }}** одной командой:

```shell-vue
epm play {{ $frontmatter.nameEpmPlay }}
```

::endif