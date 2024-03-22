# Node.js

Node.js — асинхронное событийное JavaScript-окружение, спроектированное для построения масштабируемых сетевых приложений.

Этот подход контрастирует с более распространенной на сегодняшний день моделью параллелизма, в которой используются параллельные OS потоки. Такой подход является относительно неэффективным и очень сложным в использовании. Кроме того, пользователи Node.js могут не беспокоиться о блокировках процессов, поскольку их не существует. Почти ни одна из функций в Node.js не работает напрямую с I/O, поэтому поток никогда не блокируется. В следствии этого на Node.js легко разрабатывать масштабируемые системы.

## Установка из репозитория

**Node.js** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install node npm
```
```shell[epm]
epm -i node npm
```
:::

:::info
В репозитории Сизиф размещена и поддерживается Node.js релиз `20.xx`, ветка с долгосрочной поддержкой LTS
:::

## Использование Node.js в изолированой среде Flatpak

Выберите релиз Node.js из расширений SDK, для этого воспользуемся поиском:

```shell
flatpak search Sdk.Extension.node
```

::: details вывод при поиске `Sdk.Extension.node`
```shell
[oleg@alt-gnome ~]$ flatpak search Sdk.Extension.node
Имя                          Описание                                                ID Приложения                               Версия          Ветвь            Удаленные репозитории
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.16.0         23.08beta        flathub-beta
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.4.0          22.08beta        flathub-beta
Node.js 20.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node20        20.11.1         23.08            flathub
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.18.1         23.08            flathub
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.19.1         22.08            flathub
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.12.1         21.08            flathub,flathub-beta
Node.js 16.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node16        16.20.2         22.08            flathub
Node.js 16.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node16        16.18.1         21.08            flathub
Node.js 14.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node14        14.21.3         22.08            flathub
Node.js 14.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node14        14.21.1         21.08            flathub
Node.js 14.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node14        14.17.6         20.08            flathub
Node.js 12.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node12        12.22.12        21.08            flathub
Node.js 12.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node12        12.22.6         20.08            flathub
Node.js SDK extension        Node.js SDK extension                                   org.freedesktop.Sdk.Extension.node12        12.19.0         19.08            flathub
Node.js SDK extension        Node.js SDK extension                                   org.freedesktop.Sdk.Extension.node10        10.22.1         19.08            flathub
Node.js SDK extension        Node.js SDK extension                                   org.freedesktop.Sdk.Extension.node10        10.20.1         18.08            flathub,flathub-beta
```
:::

Установите выбранную версию Node.js, [я выбрал LTS версию 20.xx](/nodejs#выпуски-node-js):

```shell
flatpak install flathub org.freedesktop.Sdk.Extension.node20
```

Разрешите использовать расширение SDK Node.js в изолированном Flatpak-приложении, в котором вы будете использовать `Node.js`. Для этого необходимо [установить Flatseal](flatseal), выберите приложение и в списке переменных добавьте правило `FLATPAK_ENABLE_SDK_EXT=node20`

## Выпуски Node.js

|                          Release                          |     Status      |                             Codename                             | Initial Release | Active LTS Start | Maintenance Start | End-of-life |
|:---------------------------------------------------------:|:---------------:|:----------------------------------------------------------------:|:---------------:|:----------------:|:-----------------:|:-----------:|
| [18.x](https://nodejs.org/download/release/latest-v18.x/) | **Maintenance** | [Hydrogen](https://nodejs.org/download/release/latest-hydrogen/) |   2022-04-19    |    2022-10-25    |    2023-10-18     | 2025-04-30  |
| [20.x](https://nodejs.org/download/release/latest-v20.x/) |     **LTS**     |     [Iron](https://nodejs.org/download/release/latest-iron/)     |   2023-04-18    |    2023-10-24    |    2024-10-22     | 2026-04-30  |
| [21.x](https://nodejs.org/download/release/latest-v21.x/) |   **Current**   |                                                                  |   2023-10-17    |        -         |    2024-04-01     | 2024-06-01  |
|                           22.x                            |   **Pending**   |                                                                  |   2024-04-23    |    2024-10-29    |    2025-10-21     | 2027-04-30  |
|                           23.x                            |   **Pending**   |                                                                  |   2024-10-15    |        -         |    2025-04-01     | 2025-06-01  |
|                           24.x                            |   **Pending**   |                                                                  |   2025-04-22    |    2025-10-28    |    2026-10-20     | 2028-04-30  |

## Выпуски с истёкшим сроком службы (продукт EOL, англ. End-of-life product)

|                          Release                          |     Status      |                            Codename                            | Initial Release | Active LTS Start | Maintenance LTS Start |                             End-of-life                              |
|:---------------------------------------------------------:|:---------------:|:--------------------------------------------------------------:|:---------------:|:----------------:|:---------------------:|:--------------------------------------------------------------------:|
|                          v0.10.x                          | **End-of-Life** |                               -                                |   2013-03-11    |        -         |      2015-10-01       |                              2016-10-31                              |
|                          v0.12.x                          | **End-of-Life** |                               -                                |   2015-02-06    |        -         |      2016-04-01       |                              2016-12-31                              |
|  [4.x](https://nodejs.org/download/release/latest-v4.x/)  | **End-of-Life** |   [Argon](https://nodejs.org/download/release/latest-argon/)   |   2015-09-08    |    2015-10-01    |      2017-04-01       |                              2018-04-30                              |
|  [5.x](https://nodejs.org/download/release/latest-v5.x/)  | **End-of-Life** |                                                                |   2015-10-29    |        -         |                       |                              2016-06-30                              |
|  [6.x](https://nodejs.org/download/release/latest-v6.x/)  | **End-of-Life** |   [Boron](https://nodejs.org/download/release/latest-boron/)   |   2016-04-26    |    2016-10-18    |      2018-04-30       |                              2019-04-30                              |
|  [7.x](https://nodejs.org/download/release/latest-v7.x/)  | **End-of-Life** |                                                                |   2016-10-25    |        -         |                       |                              2017-06-30                              |
|  [8.x](https://nodejs.org/download/release/latest-v8.x/)  | **End-of-Life** |  [Carbon](https://nodejs.org/download/release/latest-carbon/)  |   2017-05-30    |    2017-10-31    |      2019-01-01       |                              2019-12-31                              |
|  [9.x](https://nodejs.org/download/release/latest-v9.x/)  | **End-of-Life** |                                                                |   2017-10-01    |        -         |                       |                              2018-06-30                              |
| [10.x](https://nodejs.org/download/release/latest-v10.x/) | **End-of-Life** | [Dubnium](https://nodejs.org/download/release/latest-dubnium/) |   2018-04-24    |    2018-10-30    |      2020-05-19       |                              2021-04-30                              |
| [11.x](https://nodejs.org/download/release/latest-v11.x/) | **End-of-Life** |                                                                |   2018-10-23    |        -         |                       |                              2019-06-01                              |
| [12.x](https://nodejs.org/download/release/latest-v12.x/) | **End-of-Life** |  [Erbium](https://nodejs.org/download/release/latest-erbium/)  |   2019-04-23    |    2019-10-21    |      2020-11-30       |                              2022-04-30                              |
| [13.x](https://nodejs.org/download/release/latest-v13.x/) | **End-of-Life** |                                                                |   2019-10-22    |        -         |                       |                              2020-06-01                              |
| [14.x](https://nodejs.org/download/release/latest-v14.x/) | **End-of-Life** | [Fermium](https://nodejs.org/download/release/latest-erbium/)  |   2020-04-21    |    2020-10-27    |      2021-10-19       |                              2023-04-30                              |
| [15.x](https://nodejs.org/download/release/latest-v15.x/) | **End-of-Life** |                                                                |   2020-10-20    |        -         |                       |                              2021-06-01                              |
| [16.x](https://nodejs.org/download/release/latest-v16.x/) | **End-of-Life** | [Gallium](https://nodejs.org/download/release/latest-gallium/) |   2021-04-20    |    2021-10-26    |      2022-10-18       | [2023-09-11](https://nodejs.org/en/blog/announcements/nodejs16-eol/) |
| [17.x](https://nodejs.org/download/release/latest-v17.x/) | **End-of-Life** |                                                                |   2021-10-19    |        -         |                       |                              2022-06-01                              |
| [19.x](https://nodejs.org/download/release/latest-v19.x/) | **End-of-Life** |                                                                |   2022-10-18    |        -         |      2023-04-01       |                              2023-06-01                              |
