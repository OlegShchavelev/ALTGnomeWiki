<div class="header" align="center">

[<img src="https://alt-gnome.wiki/alt-gnome.png" height="256">](https://github.com/OlegShchavelev/ALTRegularGnomeWiki)

# ALT Gnome Wiki

База знаний открытого сообщества пользователей операционной системы ALT Linux с графическим окружением GNOME.

![GitHub License](https://img.shields.io/github/license/OlegShchavelev/ALTGnomeWiki)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/OlegShchavelev/ALTGnomeWiki)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/OlegShchavelev/ALTGnomeWiki)
![GitHub deployments](https://img.shields.io/github/deployments/OlegShchavelev/ALTGnomeWiki/github-pages?label=Last%20Deploy)

[![Telegram](https://img.shields.io/badge/Group-%235AA9E6?logo=telegram&label=Telegram)](https://t.me/alt_gnome)
[![Rutube](https://badgen.net/static/Rutube/Chanel/cyan?icon=https://static.rutube.ru/static/img/favicon-icons/icon.svg")](https://rutube.ru/channel/32425669/)

</div>

## Разработка

### :inbox_tray: Создание форка репозитория

Для контроля качества и безопасности контента на вики все изменения вносятся в личную копию репозитория (Fork).

Процесс создания форка описан в разделе [Внесение изменений](https://alt-gnome.wiki/reference/pages/alteration.html).

### :gear: Локальный запуск проекта

> [!IMPORTANT]
> Перед запуском проекта убедитесь, что у вас установлены необходимые компоненты
>
> ```
> sudo apt-get install node git
> ```

Клонируйте свою копию репозиторий и запустите в режиме разработки:

```shell
git clone https://github.com/{USER}/ALTGnomeWiki.git
cd ALTGnomeWiki
npm i
npm run docs:dev
```

> [!NOTE]
> Замените `{USER}` на имя пользователя GitHub.

### :pencil: Внесение изменений

Все возможности редактирования статей и их структурой подробно описаны в разделе [Для авторов](https://alt-gnome.wiki/reference).

У проекта существуют правила, свод которых размещён на странице [Общие правила](https://alt-gnome.wiki/reference/pages/general-rules.html) в разделе Для авторов. С ними стоит ознакомиться заранее, чтобы изменения можно было принять быстрее.

Также настоятельно рекомендуется проверять ваш коммиты на орфографические и критические ошибки. Для этого ознакомьтесь со страницами [Проверка текста на ошибки](https://alt-gnome.wiki/reference/tests/speller.html) и ~~[Проверка структуры статьи](https://alt-gnome.wiki/reference/tests/remark.html)~~ (в разработке) в разделе Контроль качества.

> [!TIP]
> Следование вышеперечисленному — залог хорошего будущего проекта.

### :outbox_tray: Отправка изменений

Для того, чтобы изменения стали доступны всем, нужно создать Запрос на слияние (Pull Request).

Процесс его создания также описан в разделе [Внесение изменений](https://alt-gnome.wiki/reference/pages/alteration.html#_3-создаем-pull-request).

## Зеркало

Вся документация из этого репозитория размещается на сайте [alt-gnome.wiki](https://alt-gnome.wiki/) автоматически.

## Участники проекта

Список людей внесших вклад в проект:

[![Участники](https://contrib.rocks/image?repo=OlegShchavelev/ALTGnomeWiki)](https://github.com/OlegShchavelev/ALTGnomeWiki/graphs/contributors)

## Активность проекта

![Статистика активности](https://repobeats.axiom.co/api/embed/4637fb51923408d570b8e555b3fde24eedb2bfea.svg 'Repobeats analytics image')

## Поддержка

Вы можете поддержать проект несколькими способами:

- Создать Задачу с проблемой или предложением по улучшению (Issue)
- Создать Запрос на слияние с добавлением/исправлением статьи или функционала
- Поддержать конкретного автора: все ссылки размещены на странице [Участники](https://alt-gnome.wiki/contributions.html)
- Поддержать весь проект рублём на [Boosty](http://boosty.to/alt_gnome)

<div style="max-height: 48px; display: flex">

[<img src="https://github.com/Rirusha/Cassette/assets/95986183/313ee5af-d374-4f95-af62-9445d1c27347" height="36" />](https://boosty.to/alt_gnome)

</div>

## Благодарность

Спасибо [команде разработки Nólëbase](https://github.com/nolebase) за создание и поддержку набора плагинов [Nólëbase Integrations](https://github.com/nolebase/integrations) и активное взаимодействие.

## Лицензия

[MIT](https://github.com/OlegShchavelev/ALTRegularGnomeWiki/blob/main/LICENSE)

Copyright © 2023-present OLEG SHCHAVELEV
