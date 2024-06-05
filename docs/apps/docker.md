---
aggregation:
    sisyphus: docker-engine
appstream:
    id: docker-engine
    name: Docker
    icon: /docker/docker-logo.svg
    summary: Платформа для разработки, доставки и запуска приложений с использованием контейнеризации.
    developer:
        name: Docker Project
    metadata_license:
        name: Apache-2.0
        link: https://www.apache.org/licenses/LICENSE-2.0
    url:
        homepage: https://hub.docker.com/
        bugtracker: https://forums.docker.com/c/docker-hub/issue-tracking/
---

# Docker

Docker — платформа для разработки, доставки и запуска приложений с использованием контейнеризации. Он позволяет упаковывать приложения и все их зависимости в стандартизированные контейнеры, что обеспечивает портативность и упрощает процесс развёртывания.

## Установка из репозитория

**Docker** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install docker-engine
```

```shell[epm]
epm -i docker-engine
```

:::

## Подготовка к использованию Docker

Для начала использования **Docker** необходимо добавить пользователя в группу `docker`:

```shell
su -
gpasswd -a USER docker
systemctl enable --now docker
reboot
```

`USER` — имя вашего пользователя.

## Установка docker-compose

**Docker compose** можно также установить через терминал:

```shell
su -
apt-get update
apt-get install docker-compose-v2
```

Проверить, что docker-compose установился можно выполнив команду, которая покажет справку:

```shell
docker compose --help
```
