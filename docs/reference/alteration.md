# Внесение изменений

:::info
Для внесения изменений необходимо иметь профиль на GitHub.
:::

## 1. Создаём fork репозитория

### 1.1. Заходим на [GitHub проекта](https://github.com/OlegShchavelev/ALTRegularGnomeWiki):

![github_main](/alteration/github_main.png)

### 1.2. Переходим на вкладку Fork и нажимаем `Create fork`:

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

После того как добавили желаемую информацию выполняем следующие команды:

### 2.1. Добавляем изменения в индекс git:

Через терминал:

```shell
git add *
```

Через VSCodium:

Нажимаем `+` около имени файла
![indexing_via_vscodium](/alteration/indexing_via_vscodium.png)

### 2.2. Создаём commit:

Через терминал:

```shell
git commit -m "commit message"
```
Замените `commit message` на описание ваших изменений.

Через VSCodium:

Добавляем описание и нажимаем `Фиксация`
![indexing_via_vscodium](/alteration/indexing_via_vscodium.png)

:::info
Описание лучше писать на русском языке, также мы рекомендуем следующие приставки:

Добавлено: \
Обновлено: \
Удалено:
:::

### 2.3. Отправляем изменения на GitHub:

```shell
git push
```

## 3. Создаём pull request

### 3.1. Возвращаемся в ваш fork на GitHub:

![github_fork](/alteration/github_fork.png)

### 3.2. Выбираем `Contribute` и нажимаем `Open pull request`:

смотрим что нет никаких проблем и нажимаем `Create pull request`

![pr_no_error](/alteration/pr_no_error.png)

### 3.3. Заполняем необходимые поля и нажимаем `Create pull request`:

![pr_create](/alteration/pr_create.png)

После этого остаётся только подождать пока одобрят ваш PR.