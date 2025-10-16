# Внесение изменений

:::info
Для внесения изменений необходимо иметь профиль на GitHub.
:::

## 1. Создаём fork репозитория

### 1.1. Заходим на [GitHub проекта](https://github.com/OlegShchavelev/ALTRegularGnomeWiki):

![github_main](/alteration/github_main.png)

### 1.2. Переходим на вкладку Fork и нажимаем [[Create fork]]:

![github_fork_create](/alteration/github_fork_create.png)

:::info
После небольшого ожидания репозиторий появится в вашем профиле GitHub.
:::

## 1.3. Клонируем созданный fork на локальный компьютер:

::: code-group

```shell[https]
git clone https://github.com/USER/ALTRegularGnomeWiki.git
```

```shell[ssh]
git clone git@github.com:USER/ALTRegularGnomeWiki.git
```

:::

`USER` — имя вашего пользователя GitHub.

## 2. Добавляем необходимую информацию и создаём commit.

Перед внесением изменений ознакомьтесь с правилами и возможностями VitePress.

После того как добавили всё необходимое, выполните следующие команды:

### 2.1. Добавляем изменения в индекс git:

::: tabs
== Терминал

```shell
git add *
```

== VSCodium
Нажимаем [[+]] около имени файла

![indexing_via_vscodium](/alteration/indexing_via_vscodium.png)
:::

### 2.2. Создаём commit:

::: tabs
== Терминал

```shell
git commit -m "commit message"
```

Замените `commit message` на описание ваших изменений.
== VSCodium
Добавляем описание и нажимаем [[Фиксация]]

![indexing_via_vscodium](/alteration/indexing_via_vscodium.png)
:::

:::info
Описание необходимо писать на русском языке.

Также мы рекомендуем следующие приставки:

Добавлено: \
Обновлено: \
Удалено:

_Например_

```
Обновлено: Для авторов | Страница приложения
```

:::

### 2.3. Отправляем изменения на GitHub:

::: tabs
== Терминал

```shell
git push
```

== VSCodium
Нажимаем [[Синхронизировать изменения]]

![indexing_via_vscodium](/alteration/sync_changes_via_vscodium.png)
:::

## 3. Создаём pull request

### 3.1. Возвращаемся в ваш fork на GitHub:

![github_fork](/alteration/github_fork.png)

### 3.2. Выбираем `Contribute` и нажимаем [[Open pull request]]:

смотрим что нет никаких проблем и нажимаем [[Create pull request]]

![pr_no_error](/alteration/pr_no_error.png)

### 3.3. Заполняем и нажимаем [[Create pull request]]:

::: warning
Пожалуйста, прикрепите к своему первому PR ваш ник в Telegram! Это необходимо для связи и добавления в рабочие чаты.
:::

![pr_create](/alteration/pr_create.png)

После этого остаётся только подождать пока одобрят ваш PR.
