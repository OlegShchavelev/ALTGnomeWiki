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

Docker — платформа для разработки, доставки и запуска приложений с использованием контейнеризации. Позволяет упаковывать приложения и все их зависимости в стандартизированные контейнеры, что обеспечивает портативность и упрощает процесс развёртывания.

<!--@include: @ru/apps/.parts/install/content-repo.md-->

## Подготовка к использованию Docker

Для начала использования Docker необходимо добавить пользователя в группу `docker`:

```shell
su -
gpasswd -a USER docker
systemctl enable --now docker
reboot
```

`USER` — имя вашего пользователя.

## Установка Docker Compose

Docker Compose можно установить через терминал:

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install docker-compose-v2
```

```shell-vue[epm]
epm -i docker-compose-v2
```

:::

Проверить, что Docker Compose установился, можно выполнив команду, которая покажет справку:

```shell
docker compose --help
```
