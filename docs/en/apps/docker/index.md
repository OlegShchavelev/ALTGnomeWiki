---
aggregation:
  sisyphus: docker-engine
appstream:
  id: docker-engine
  name: Docker
  icon: /docker/docker-logo.svg
  summary: A platform for developing, delivering and running applications using containerization.
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

Docker is a platform for developing, delivering and running applications using containerization. Allows you to package applications and all their dependencies into standardized containers, which ensures portability and simplifies the deployment process.

<!--@include: @en/apps/.parts/install/content-repo.md-->

## Preparing to use Docker

To start using Docker, you need to add a user to the `docker` group:

```shell
su -
gpasswd -a USER docker
systemctl enable --now docker
reboot
```

`USER` is your username.

## Installing Docker Compose

Docker Compose can be installed via the terminal:

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

You can verify that Docker Compose is installed by running the command, which will display help:

```shell
docker compose --help
```
