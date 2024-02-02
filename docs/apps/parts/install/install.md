## Установка из репозитория

**{{ $frontmatter.title }}** можно установить любым привычным и удобным способом

<!--@include: ./software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install blender
```
```shell[epm]
epm -i blender
```

:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **{{ $frontmatter.title }}** одной командой:

```shell
flatpak install flathub org.blender.Blender
```

<!--@include: ./software-flatpak.md-->