---
aggregation:
  sisyphus: git
appstream:
  name: Git
  icon: /git/git-logo.svg
  summary: Бесплатная и открытая система управления версиями с распределённой структурой.
  metadata_license:
    name: GNU GPLv2
    link: https://choosealicense.com/licenses/gpl-2.0/
  developer:
    name: Git Community
  url:
    homepage: https://git-scm.com/
---

# Git

Git — бесплатная и открытая система управления версиями с распределённой структурой для обработки как небольших, так и очень крупных проектов с высокой скоростью и эффективностью.

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

Для работы с контролем версий `git` необходимо настроить рабочее окружение:

### Личная информация

Введите своё имя и адрес электронной почты. Эта информация будет включена в каждый коммит и останется неизменной. Для этого вам нужно ввести в терминал:

```shell
git config --global user.name "username"
git config --global user.email "email@example.com"
```

:::info
Не забудьте заменить `username` и `email@example.com` на своё имя пользователя и почту в кавычках.

Обратите внимание, что опция `--global` приведёт к применению этой настройки ко всем вашим коммитам по умолчанию.

Если вы хотите применить настройки только к определённому репозиторию, вам нужно войти в этот репозиторий и выполнить команды без опции `--global`.
:::

### Имя главной ветки по умолчанию

По желанию вы можете настроить название основной ветки. По умолчанию используется название `master`, но в GitHub принято использовать название `main`. Чтобы изменить название ветки `master` на `main`, выполните в терминале следующую команду:

```shell
git config --global init.defaultBranch main
```

:::info
Если нужно установить параметр только для определённого репозитория, необходимо перейти в этот репозиторий и выполнить команду без опции `--global`:
:::

### Проверка конфигурации

Чтобы проверить конфигурацию вашего рабочего окружения и узнать, где были заданы все настройки, выполните следующую команду:

```shell
git config --list --show-origin
```

## Проблемы и возможные решения при использовании `git`

При отправке коммита возникает следующая ошибка:

```shell
> git push origin main:main
error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
Everything up-to-date
```

Возможная мера - увеличение размера `postBuffer` к примеру до 500 МБ. Внесите настройку в рабочее окружение используя терминал:

```shell
git config --global http.postBuffer 500M
```
