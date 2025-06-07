---
title: ddterm
aggregation:
  extension:
    id: 3780
    uuid: ddterm@amezin.github.com
appstream:
  id: 307
  name: ddterm
  summary: Виртуальный терминал с вкладками
  developer:
    name: amezin
    avatar: https://secure.gravatar.com/avatar/dfd7b065ada8217d447ede927e0da16e?d=mm&s=128
  url:
    homepage: https://github.com/ddterm/gnome-shell-extension-ddterm
    bugtracker: https://github.com/ddterm/gnome-shell-extension-ddterm/issues
gallery:
  type: slider
  title: Основные возможности расширения ddterm
  items:
    - src: /ddterm/ddterm-1.png
    - src: /extensions/extensions-2.png
    - src: /extensions/extensions-3.png
    - src: /extensions/extensions-4.png
---

# ddterm

ddterm — удобное расширение для терминала в GNOME Shell с вкладками. Расширение изначально поддерживает cессию Wayland.

<AGWGallery />

<!--@include: @extensions/.parts/show-install-steps.md-->

:::warning
Чтобы расширение `ddterm` работало корректно, вам потребуется установить библиотеку `Vte-2.91.typelib`. Для этого введите следующую команду в терминале:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install libvte3-gir
```

```shell[epm]
epm -i gnome-shell-libvte3-gir
```

:::
