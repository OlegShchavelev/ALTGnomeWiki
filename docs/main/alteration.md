# Внесение изменений

:::info
Для внесения изменений необходимо иметь профиль на GitHub
:::

## Создаём fork репозитория

### Заходим на [GitHub проекта](https://github.com/OlegShchavelev/ALTRegularGnomeWiki):

![github_main](/alteration/github_main.png)

### Переходим на вкладку Fork и нажимаем `Create fork`:

![github_fork_create](/alteration/github_fork_create.png)

:::info
После небольшого ожидания репозиторий появится в вашем профиле GitHub.
:::

## Клонируем созданный fork на локальный компьютер

::: code-group

```shell[https]
git clone https://github.com/USER/ALTRegularGnomeWiki.git
```
```shell[ssh]
git clone git@github.com:USER/ALTRegularGnomeWiki.git
```
:::

`USER` — имя вашего пользователя GitHub.

## Добавляем необходимую информацию и создаём commit

После того как вы добавили какую либо информация выполняем следующие команды.

### Добавляем изменения в индекс git:

```shell
git add *
```

### Создаём commit:

```shell
git commit -m "commit message"
```

Замените `commit message` на описание ваших изменений.

:::info
Мы рекомендуем следующие приставки к описанию:

Добавлено: \
Обновлено: \
Удалено:
:::

### Отправляем изменения на GitHub:

```shell
git push
```

## Создаём pull request

### Возвращаемся в ваш fork на GitHub:

![github_fork](/alteration/github_fork.png)

### Выбираем `Contribute` и нажимаем `Open pull request`:

смотрим что нет никаких проблем и нажимаем `Create pull request`

![pr_no_error](/alteration/pr_no_error.png)

### Заполняем необходимые поля и нажимаем `Create pull request`:

![pr_create](/alteration/pr_create.png)

После этого остаётся только подождать пока одобрят ваш PR.