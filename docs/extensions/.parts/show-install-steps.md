## Установка через GNOME Extensions

1. Перейдите на страницу <a target="_blank" :href="'https://extensions.gnome.org/extension/' + $frontmatter?.aggregation?.extension?.id">{{ $frontmatter?.appstream?.name }}</a> в GNOME Extensions.

2. Нажмите `Установить` и подтвердите установку расширения.

::: tip
Для установки расширений из браузера необходимы пакет `gnome-browser-connector` и плагин для браузера GNOME Shell integration для браузеров на базе [Chromium](https://chromewebstore.google.com/detail/gphhapmejobijbbhgpjhcjognlahblep) или [Firefox](https://addons.mozilla.org/ru/firefox/addon/gnome-shell-integration/)
:::

## Установка через [Менеджер расширений](/gnome-extension-manager)

1. Перейдите по ссылке <a :href="'gnome-extensions://' + $frontmatter?.aggregation?.extension?.uuid?.replace('@', '%40')">Установить {{ $frontmatter?.appstream?.name }}</a> и подтвердите открытие Менеджера расширений

2. Нажмите `Установить` и подтвердите установку расширения.
