
 <div align="center"> 
  <a href="https://github.com/OlegShchavelev/ALTRegularGnomeWiki"> 
    <img src="https://alt-gnome.wiki/alt-gnome.png" alt="Logo" width="256" height="256"> 
  </a> 
  <h1 align="center">ALT Gnome Wiki
  <br/>
  <img alt="GitHub License" src="https://img.shields.io/github/license/OlegShchavelev/ALTGnomeWiki">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/OlegShchavelev/ALTGnomeWiki">
  <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/OlegShchavelev/ALTGnomeWiki">
  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/OlegShchavelev/ALTGnomeWiki/github-pages?label=Last%20Deploy">
  <br/>
  <a href="https://t.me/alt_gnome"><img src="https://img.shields.io/badge/Group-%235AA9E6?logo=telegram&label=Telegram" /></a>
  <a href="https://rutube.ru/channel/32425669/"><img src="https://badgen.net/static/Rutube/Chanel/cyan?icon=https://static.rutube.ru/static/img/favicon-icons/icon.svg" /></a>
  </h1> 
  <p align="center"> База знаний открытого сообщества пользователей операционной системы ALT Linux с графическим окружением GNOME.</p>
  <br/> 
  <br/> 
 </div> 

## Разработка

### Создание fork-а репозитория

Для контроля качества и безопасности контента на нашей вики все изменения вносятся в вашу копию репозитория (fork).

Как создать его описано на нашей [вики в разделе "Внесение изменений"](https://alt-gnome.wiki/reference/pages/alteration.html#_1-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B5%D0%BC-fork-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F)

### Локальный запуск проекта

Перед запуском проекта убедитесь, что у вас установлены необходимые компоненты

```
sudo apt-get install node git
```

Выполним загрузку репозитория, перейдём в каталог проекта и запустим в режиме разработки

```
git clone https://github.com/{ваш username}/ALTGnomeWiki.git
cd ALTRegularGnomeWiki
npm i
npm run docs:dev
```

### Внесение изменений

В нашем проекте существует [некоторый свод правил](https://alt-gnome.wiki/reference/pages/general-rules.html), перечисленых на нашей странице для авторов, с которым стоит ознакомиться заранее, чтобы ваши изменения можно было быстрее принять. 

Так же ознакомтесь с возможностями редактирования статей и их структурой. Все это подробно описано в [разделе "Для авторов"](https://alt-gnome.wiki/reference).

Также настоятельно рекомендуем проверять ваш commit на орфографию и/или критические ошибки.
Для этого рекомендуем ознакомиться с [разделом "Котроль качества" на нашей вики](https://alt-gnome.wiki/reference/tests/speller.html).

Следование вышеперечисленному залог хорошего будущего проекта.

### Отправка изменений

Для того, чтобы ваши изменения стали доступны всем, нужно открыть pull-request.

Процесс его открытия также описан на [нашей вики в разделе "Внесение изменений"](https://alt-gnome.wiki/reference/pages/alteration.html#_3-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B5%D0%BC-pull-request)

## Дополнительный функционал

### Включение динамической сортировки участников на главной странице

Для работы функции требуется создать `read-only` токен GitHub 

(Оффициальный REST API GitHub не предоставляет данные об активности в репозитории без авторизации.
Поэтому для использования данного функционала требуется ключ с правом на чтение публичных репозиториев)

[Как это сделать можно прочитать тут](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

Далее для локального использования нужно создать файл `.env` в папке `/docs/` и добавить в него данную строку:

```
VITE_GIT_KEY="{ваш токен}"
```

(Данный файл добавлен в исключения `.gitignore`, можно не бояться, что он уйдет в репозиторий)

А для использования функционала в сборке нужно создать `secret` c названием `VITE_GIT_KEY` для `GitHub Actions` в вашем репозитории

[Как это сделать можно ознакомиться здесь](https://docs.github.com/actions/security-guides/encrypted-secrets)

После этого будет доступен функционал сортировки.

(На данный момент данный ключ используется только в `.vitepress/composables/git/stats.js`, если вы не доверяете проекту - вы можете проверить как ваш ключ используется ведь все компоненты имеют открытый исходный код. Либо вы можете просто не использовать данный функционал. Все остается на ваше усмотрение.)

### Настройки динамической сортировки

- homeTopLimit - Лимит отображаемых пользователей на главной странице
- home_filter_type - Тип сортировки пользователей на главной странице
- page_filter_type - Тип сортировки пользователей на странице команды
1. 'additions' - по количеству добавленых в репозиторий строк
2. 'commits' - по количеству коммитов в репозиторий
3. 'role+additions' - по роли участника (Разработчик -> Участник) и количеству добавленых в репозиторий строк
4. 'role+commits' - по роли участника (Разработчик -> Участник) и количеству коммитов
- enable_autosearch - Включено/выключено автозаполнение перечня участников из статистики
- loading_placeholders - Массив с возможными выводами у спиннера загрузки виджета


## Зеркало

Вся документация из этого репозитория размещается на сайте [alt-gnome.wiki](https://alt-gnome.wiki/) автоматически.


## Участники проекта

Список людей внесших вклад в проект:

[![Участники](https://contrib.rocks/image?repo=OlegShchavelev/ALTGnomeWiki)](https://github.com/OlegShchavelev/ALTGnomeWiki/graphs/contributors)

## Активность проекта

![Статистика активности](https://repobeats.axiom.co/api/embed/4637fb51923408d570b8e555b3fde24eedb2bfea.svg "Repobeats analytics image")


## Поддержка
Вы можете поддержать проект несколькими способами:
- Создать issue с проблемой или предложением по улучшению
- Отправить pull request с добавлением/исправлением статьи или функционала
- Поддержать весь проект рублем на бусти:
  <p>
    <a href="http://boosty.to/alt_gnome">
      <img height="36" src="https://github.com/Rirusha/Cassette/assets/95986183/313ee5af-d374-4f95-af62-9445d1c27347" alt="boosty.to">
    </a>
  </p>
- [Поддержать конкретного автора найдя его на странице команды](https://alt-gnome.wiki/contributions.html)

## Благодарность

Спасибо [команде разработки Nólëbase](https://github.com/nolebase) за создание и поддержку набора плагинов [Nólëbase Integrations](https://github.com/nolebase/integrations) и активное взаимодействие.

## Лицензия
[MIT](https://github.com/OlegShchavelev/ALTRegularGnomeWiki/blob/main/LICENSE)
Copyright © 2023-present OLEG SHCHAVELEV
