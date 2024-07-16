# Расширения рабочего окружения GNOME

Расширения оболочки GNOME — небольшие фрагменты кода, написанные сторонними разработчиками, которые изменяют способ работы GNOME, работают схожим с браузерными расширениями образом

## Управление расширениями через Менеджер расширений

Подробнее о [Менеджере расширений](/gnome-extension-manager) можно прочитать в отдельной статье

Менеджер позволяет не только манипулировать уже установленными расширениями, но и просматривать другие, доступные для установки

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

[AlternateTab](https://extensions.gnome.org/extension/15/alternatetab/) <Badge type="danger" text="Устаревшее" /> — заменяет [[Alt]]+[[Tab]] оконным переключателем, без группировки по приложениям.

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
