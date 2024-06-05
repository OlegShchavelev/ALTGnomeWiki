---
aggregation:
    sisyphus: git
appstream:
    id: git.desktop
    name: Git
    icon: /git/git-logo.svg
    summary: Бесплатная и открытая система управления версиями с распределенной структурой.
    metadata_license:
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    developer:
        name: Git Community
    url:
        homepage: https://git-scm.com/
---



# Git

Git — бесплатная и открытая система управления версиями с распределенной структурой для обработки как небольших, так и очень крупных проектов с высокой скоростью и эффективностью.

## Установка из репозитория

**Git** можно установить используя терминал, введите:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install git
```
```shell[epm]
epm -i git
```
:::

## Настройка

Для работы с контролем версий git необходимо настроить рабочее окружение:

Введите своё имя и адрес электронной почты. Эта информация будет включена в каждый коммит в Git и останется неизменной. Для этого вам нужно ввести в терминал:

```shell
git config --global user.name "username"
git config --global user.email "email@example.com"
```

:::info
Не забудьте заменить "username" и "email@example.com" на свое имя пользователя и почту соответственно! (Кавычки убирать не нужно.)

Обратите внимание, что опция `--global` приведёт к применению этой настройки ко всем вашим репозиториям Git по умолчанию.
Если вы хотите применить настройки только к определённому репозиторию, вам нужно войти в этот репозиторий и выполнить команды без опции `--global`.
:::

По желанию вы можете настроить название основной ветки. По умолчанию используется название «master», но в GitHub принято использовать название «main». Чтобы изменить название ветки «master» на «main», выполните в терминале следующую команду:

```shell
git config --global init.defaultBranch main
```
:::info
При задаче настроить параметр только для определённого репозитория, необходимо перейти в этот репозиторий и выполнить команду без опции `–global`:

```shell
git config init.defaultBranch main
```
:::

Чтобы проверить конфигурацию вашего рабочего окружения для контроля версий Git и узнать, где были заданы все настройки, выполните следующую команду:

```shell
git config --list --show-origin
```

## Проблемы и возможные решения при использовании системы контроля версий GIT.

При отправке коммита возникает следующая ошибка:

```shell
> git push origin main:main
error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
Everything up-to-date
```

При такого рода ошибках увеличьте размер `postBuffer` к примеру до 500Mb. Внесите настройку в рабочее окружение используя терминал:

```shell
git config --global http.postBuffer 524288000
```
