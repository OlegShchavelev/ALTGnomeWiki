---
search: false
---

## Установка c помощью stplr <Badge v-if="$frontmatter?.aggregation?.stplr?.build === 'unofficial'" type="danger" text="Неофициальная сборка" />

При наличии пакета [stprl](/package-manager/stplr/), можно установить **{{ $frontmatter?.appstream?.name }}** одной командой:

```shell-vue
stplr in {{ $frontmatter?.aggregation?.stplr?.id }}
```

Для установки пакета **{{ $frontmatter?.appstream?.name }}**, необходимо подключить репозиторий **Aides**:

```sh
stplr repo add aides https://altlinux.space/aides-community/aides.git
```

:::danger  Отказ от ответственности
Используйте пакеты и инструкции только на свой страх и риск. Сборка пакетов происходит локально, поэтому проверяйте исходный код и сборочные скрипты.
:::
