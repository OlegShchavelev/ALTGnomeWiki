---
aggregation:
  sisyphus: nautilus-backspace
appstream:
  name: Nautilus Backspace
  summary: Возврат к папкам в Nautilus по одной клавише
  developer:
    name: ALT Gnome Team
    avatar: https://avatars.githubusercontent.com/u/159863200?s=48&v=4
  metadata_license:
    name: GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://github.com/alt-gnome-team/nautilus-backspace
    bugtracker: https://github.com/alt-gnome-team/nautilus-backspace/issues
---

# Nautilus Backspace

Если вы привыкли возвращаться к папкам через клавишу [[Backspace]], как в Windows проводнике, то этот плагин может вернуть такое поведение.

## Установка из репозитория

**{{ $frontmatter?.appstream?.name }}** можно установить любым привычным и удобным способом:

**Установка через терминал**

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install {{ $frontmatter?.aggregation?.sisyphus?.id ?? $frontmatter?.aggregation?.sisyphus }}
```

```shell-vue[epm]
epm -i {{ $frontmatter?.aggregation?.sisyphus?.id ?? $frontmatter?.aggregation?.sisyphus }}
```

:::

## Настройка

1. Откройте файл `config`:

```shell
nano ~/.config/nautilus_backspace/config
```

2. Установите необходимое сочетание:

```ini
[DEFAULT]
shortcut = <Alt>Down
```

## Удаление плагина

```shell
rm ~/.local/share/nautilus-python/extensions/Back.py
rm -rf ~/.config/nautilus_backspace
```
