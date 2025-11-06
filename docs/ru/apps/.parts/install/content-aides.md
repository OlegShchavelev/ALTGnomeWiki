---
search: false
---

## Установка из репозитория Aides <Badge v-if="$frontmatter?.aggregation?.aides?.build === 'unofficial'" type="danger" text="Неофициальная сборка" />

При наличии пакета [stplr](/package-manager/stplr/), можно установить **{{ $frontmatter?.appstream?.name }}** одной командой:

```shell-vue
stplr in {{ $frontmatter?.aggregation?.aides?.id }}
```

Если репозиторий Aides ещё не подключён, добавьте его следующей командой:

```sh
stplr repo add aides https://altlinux.space/aides-community/aides.git
```

:::danger Отказ от ответственности
Используйте пакеты и инструкции только на свой страх и риск. Сборка пакетов происходит локально, поэтому проверяйте исходный код и сборочные скрипты.
:::
