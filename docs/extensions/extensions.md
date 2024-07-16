# Расширения рабочего окружения GNOME

Расширения оболочки GNOME — небольшие фрагменты кода, написанные сторонними разработчиками, которые изменяют способ работы GNOME, работают схожим с браузерными расширениями образом

## GNOME Extensions

Все расширения нужно устанавливать с сайта [GNOME Extensions](https://extensions.gnome.org)

::: tip
Для установки расширений из браузера необходимы пакет `gnome-browser-connector` и плагин для браузера GNOME Shell integration для браузеров на базе [Chromium](https://chromewebstore.google.com/detail/gphhapmejobijbbhgpjhcjognlahblep) или [Firefox](https://addons.mozilla.org/ru/firefox/addon/gnome-shell-integration/)
:::

- Список установленных расширений: вкладка `Установленные расширения`

- Информация о расширении: найдите расширение и нажмите по нему

- Включение расширений: найдите расширение и нажмите по нему, затем переведите переключатель в положение `ON`

- Отключение расширений: найдите расширение и переведите переключатель в положение `OFF`

- Настройка расширений: найдите расширение и нажмите на кнопку настроек (синяя кнопка с инструментами)

- Удаление расширений: найдите расширение и нажмите на кнопку для удаления (красную кнопку с крестом)

## Расширения

Утилита [Расширения](/shell-extensions) является официальной утилитой для управления расширениями оболочки GNOME

- Список установленных расширений: гланвый экран приложения

- Информация о расширении: нажмите на три точки и кнопку `Веб-сайт`

- Включение расширений: доступно только для установленных приложений. Установить расширения можно только через сайт [GNOME Extensions](https://extensions.gnome.org). Для включения установленного расширения переведите переключатель во включённое положение

- Отключение расширений: переведите переключатель в выключенное положение

- Настройка расширений: нажмите на три точки и кнопку `Настройки`

- Удаление расширений: нажмите на три точки, кнопку `Удалить` и подтвердите удаление

## Менеджер расширений

Менеджер позволяет не только манипулировать уже установленными расширениями, но и просматривать другие, доступные для установки. Подробнее о [Менеджере расширений](/gnome-extension-manager) можно прочитать в отдельной статье

- Список установленных расширений: главный экран приложения, вкладка `Установленные`

- Информация о расширении: найдите расширение во вкладве `Установленные` или `Обзор` и нажмите на него

- Включение расширений: установить расширения можно найти во вкладке `Обзор`. Для включения установленного расширения переведите переключатель во включённое положение

- Отключение расширений: найдите расширение и переведите переключатель в выключенное положение

- Настройка расширений: найдите расширение и нажмите на кнопку настрое (шестерёнка)

- Удаление расширений: найдите расширение, нажмите на кнопку `Удалить` и подвтердите удаление

## Управление расширениями рабочего окружения GNOME из командной строки

::: tip
Расширение Caffeine представлено для примера
:::

- Список установленных расширений

```shell
gnome-extensions list
```

::: details

```shell
user-theme@gnome-shell-extensions.gcampax.github.com
just-perfection-desktop@just-perfection
quick-settings-tweaks@qwreey
no-titlebar-when-maximized@alec.ninja
app-hider@lynith.dev
caffeine@patapon.info
```

:::

- Информация о расширении

```shell
gnome-extensions show caffeine@patapon.info
```

::: details

```shell
caffeine@patapon.info
  Имя: Caffeine
  Описание: Disable the screensaver and auto suspend
  Путь: /home/x1z53/.local/share/gnome-shell/extensions/caffeine@patapon.info
  URL: https://github.com/eonpatapon/gnome-shell-extension-caffeine
  Версия: 54
  Включено: Да
  Состояние: ACTIVE
```

:::

- Включить расширение

```shell
gnome-extensions enable caffeine@patapon.info
```

- Выключить расширение

```shell
gnome-extensions disable caffeine@patapon.info
```

- Открыть настройки расширения

```shell
gnome-extensions prefs caffeine@patapon.info
```

- Удалить расширение

```shell
gnome-extensions uninstall caffeine@patapon.info
```

## Системные расширения

Системные расширения — расширения, входящие в GNOME Classic и официально поддерживаемые GNOME

Для того, чтобы установить все системные расширения, нужно установить пакет `gnome-shell-extensions` и перезайти в пользователя

::: code-group

```shell-vue[apt-get]
su -
apt-get install gnome-shell-extensions
```

```shell-vue[epm]
epm -i gnome-shell-extensions
```

:::

[AlternateTab](https://extensions.gnome.org/extension/15/alternatetab/) <Badge type="danger" text="Устаревшее" /> — заменяет [[Alt]] + [[Tab]] оконным переключателем, без группировки по приложениям.

[Apps Menu](https://extensions.gnome.org/extension/6/applications-menu/) — добавляет меню для приложений на основе категорий в стиле GNOME 2.x

[Auto Move Windows](https://extensions.gnome.org/extension/16/auto-move-windows/) — перемещает приложения в определенные рабочие области при создании окон.

[Background Logo](https://extensions.gnome.org/extension/889/background-logo/) — наносит со вкусом подобранный логотип на задний план, чтобы улучшить восприятие пользователем

[Removable Drive Menu](https://extensions.gnome.org/extension/7/removable-drive-menu/) — меню состояния для доступа к съёмным устройствам и их отключения.

[Launch new instance](https://extensions.gnome.org/extension/600/launch-new-instance/) — позволяет всегда запускать новый экземпляр при нажатии на панель управления или в режиме Обзора.

[Native Window Placement](https://extensions.gnome.org/extension/18/native-window-placement/) — располагает окна в режиме Обзора более компактно.

[Places Status Indicator](https://extensions.gnome.org/extension/8/places-status-indicator/) — добавляет меню для быстрой навигации по местам в системе.

[Screenshot Window Sizer](https://extensions.gnome.org/extension/881/screenshot-window-sizer/) — позволяет изменять размер окон для скриншотов программного обеспечения GNOME.

[User Themes](https://extensions.gnome.org/extension/19/user-themes/) — позволяет загружать пользовательские темы оболочки.

[Window List](https://extensions.gnome.org/extension/602/window-list/) — отображает список окон в нижней части экрана.

[windowNavigator](https://extensions.gnome.org/extension/10/windownavigator/) — позволяет выбирать окна и рабочие области с помощью клавиатуры в режиме наложения. [[Ctrl]] + [[0-9]] — выбор рабочая область, [[Alt]] + [[0-9]] — выбор окна.

[Workspace Indicator](https://extensions.gnome.org/extension/21/workspace-indicator/) — устанавливает на панели индикатор, показывающий текущее рабочее пространство и позволяющий переключиться на другое.

[System Monitor](https://extensions.gnome.org/extension/6807/system-monitor/) <Badge type="warning" text="Новое" /> — позволяет контролировать систему с верхней панели

[Horizontal workspaces](https://extensions.gnome.org/extension/2141/horizontal-workspaces/) <Badge type="danger" text="Устаревшее" /> — позволяет использовать горизонтальную компоновку рабочей области

[Light Style](https://extensions.gnome.org/extension/6198/light-style/) <Badge type="danger" text="Устаревшее" /> — переключает стиль по умолчанию на светлый
