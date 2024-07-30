# Podman

![podman-desktop](/podman/from-docker-to-podman.png)

Podman — инструмент командной строки для управления контейнерами в Linux. Он является альтернативой Docker,
но работает без необходимости использования демона контейнеров. Podman позволяет создавать, запускать, останавливать,
удалять и управлять контейнерами на хост-системе. Он поддерживает изоляцию процессов, файловую систему и сеть для
каждого контейнера. Podman также поддерживает работу с Kubernetes и позволяет управлять "подами" (pods) и производить
билды образов контейнеров без необходимости использования демона контейнеров.

![podman-desktop](/podman/podman-vs-docker.png)

### Установка

**Podman** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install podman
```

```shell[epm]
epm -i podman
```

:::

Проверить, что Podman установился можно выполнив команду, которая покажет версию:

::: code-group

```shell
podman -v
```

:::

### Основные команды для работы с Podman:

Список контейнеров:

```shell
podman ps
```

Создание нового контейнера:

```shell
podman create [опции] imageName
```

Запуск контейнера:

```shell
podman start [опции] containerID
```

Остановка контейнера:

```shell
podman stop containerID
```

Завершение контейнера:

```shell
podman kill containerID
```

Просмотр логов контейнера:

```shell
podman logs containerID
```

Подключение к контейнеру:

```shell
podman exec [опции] containerID command
```

Удаление контейнера:

```shell
podman rm containerID
```

Просмотр информации о контейнере:

```shell
podman inspect containerID
```

Просмотр списка образов:

```shell
podman images
```

Создание нового образа:

```shell
podman build [опции] -t imageName .
```

Загрузка образа в репозиторий:

```shell
podman push imageName
```

Загрузка образа из репозитория:

```shell
podman pull imageName
```

Удаление образа:

```shell
podman rmi imageName
```

Создание и запуск множества контейнеров из файла конфигурации:

```shell
podman play kube file.yaml
```

Перезапуск контейнера:

```shell
podman restart containerID
```

## podman-compose

![podman-desktop](/podman/podman-compose.png)

Podman-compose — инструмент, предоставляемый командой Podman, который позволяет запускать и управлять
многоконтейнерными приложениями. Он является аналогом инструмента Docker Compose, который используется для определения
и запуска контейнеров в Docker.

Podman-compose позволяет определить множество контейнеров и их взаимодействие с помощью файла конфигурации в
формате YAML. Этот файл содержит описания контейнеров, их параметры, переменные окружения, сети, тома и другие
настройки.
После определения конфигурации, podman-compose может использоваться для запуска, остановки, перезапуска и управления
всеми контейнерами, указанными в файле.

Podman-compose обеспечивает простой и удобный способ управления многоконтейнерными приложениями, особенно если вы уже
знакомы с Docker Compose. Он позволяет запускать и управлять контейнерами с помощью команд в командной строке или с
использованием скриптов. Podman-compose также поддерживает все основные функции Docker Compose,
такие, как масштабирование, сети, переменные окружения и многое другое.

Однако, стоит отметить, что Podman и Docker имеют некоторые различия в своей архитектуре и функциональности,
поэтому Podman-compose может отличаться от Docker Compose в некоторых аспектах. Пользователям, переключающимся с Docker
на Podman, может потребоваться некоторое время, чтобы привыкнуть к некоторым новым особенностям и
различиям в использовании инструментов.

### Установка

**Podman-compose** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install podman-compose
```

```shell[epm]
epm -i podman-compose
```

:::

### Основные команды podman-compose:

Создание и запуск всех контейнеров, описанных в файле docker-compose.yml:

```shell
podman-compose up
```

Остановка и удаление всех контейнеров, созданных с помощью podman-compose up:

```shell
podman-compose down
```

Запуск определённого сервиса, описанного в docker-compose.yml:

```shell
podman-compose start <service_name>
```

Остановка определённого сервиса:

```shell
podman-compose stop <service_name>
```

Перезапуск определённого сервиса:

```shell
podman-compose restart <service_name>
```

Отображение текущего состояния всех контейнеров, созданных с помощью podman-compose:

```shell
podman-compose ps
```

Отображение логов определённого сервиса:

```shell
podman-compose logs <service_name>
```

Выполнение команды внутри контейнера, например, `podman-compose exec db psql -U postgres`:

```shell
podman-compose exec <service_name> <command>
```

## podman-desktop

![podman-desktop](/podman/podman-desktop.png)

Podman-Desktop — удобный пользовательский интерфейс для создания, запуска, остановки и удаления контейнеров,
а также для управления их конфигурацией и настройками. Оно также интегрируется со средой разработки, чтобы
облегчить процесс разработки и тестирования приложений в контейнерах.

### Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Podman-Desktop** одной командой:

```shell
flatpak install io.podman_desktop.PodmanDesktop
```

<!--@include: ./parts/install/software-flatpak.md-->
