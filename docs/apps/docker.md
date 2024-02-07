# Docker

Docker — это платформа для разработки, доставки и запуска приложений с использованием контейнеризации. Он позволяет упаковывать приложения и все их зависимости в стандартизированные контейнеры, что обеспечивает портативность и упрощает процесс развертывания.

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
systemctl enable docker
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