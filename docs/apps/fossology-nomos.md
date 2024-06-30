# FOSSology

FOSSology — программная система и набор инструментов для обеспечения соответствия лицензионным требованиям при использовании программного обеспечения со свободным исходным кодом.

Как набор инструментов, FOSSology позволяет выполнять сканирование лицензий, авторских прав и экспортного контроля из командной строки.

## Установка из репозитория

**FOSSology** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fossology-nomos
```

```shell[epm]
epm -i node fossology-nomos
```

:::

## Использование утилиты **FOSSology**

Чтобы запустить сканер лицензий для проверки исходных кодов программы, если в папке `morphosis` находится исходный код программы Morphosis, необходимо ввести в терминале следующую команду:

```shell
nomossa -d morphosis
```

::: details Пример ответа nomossa

```shell
File morphosis/morphosis/main.py contains license(s) GPL-3.0-or-later
File morphosis/morphosis/print.py contains license(s) GPL-3.0-or-later
File morphosis/morphosis/window.py contains license(s) GPL-3.0-or-later
File morphosis/COPYING contains license(s) GPL-3.0-only
File morphosis/data/garden.jamie.Morphosis.metainfo.xml.in contains license(s) CC0-1.0,GPL-3.0-or-later
File morphosis/morphosis/morphosis.in contains license(s) GPL-3.0-or-later
File morphosis/morphosis/supported_formats.py contains license(s) GPL-3.0-or-later
File morphosis/.gear/morphosis.spec contains license(s) GPL-3.0-or-later

```

:::
