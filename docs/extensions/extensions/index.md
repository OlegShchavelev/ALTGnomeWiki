---
title: Расширения рабочего окружения GNOME
gallery:
  - type: slider
    title: Основные возможности «Менеджер расширений»
    items:
      - src: /extensions/extensions-1.png
        text: Список установленных расширений главный экран приложения, вкладка «Установленные».
      - src: /extensions/extensions-2.png
        text: Отключение расширений найдите расширение и переведите переключатель в выключенное положение.
      - src: /extensions/extensions-3.png
        text: Настройка расширений найдите расширение и нажмите на кнопку настроек (шестерёнка).
      - src: /extensions/extensions-4.png
        text: Включение расширений установить расширения можно найти во вкладке «Обзор». Для включения установленного расширения переведите переключатель во включённое положение.
      - src: /extensions/extensions-5.png
        text: Удаление расширений найдите расширение, нажмите на кнопку «Удалить» и подтвердите удаление.
  - type: slider
    title: Основной возможности «Расширения»
    items:
      - src: /extensions/extensions-6.png
        text: Список установленных расширений главный экран приложения.
      - src: /extensions/extensions-7.png
        text: Информация о расширении нажмите на три точки и кнопку Веб-сайт.
      - src: /extensions/extensions-10.png
        text: Чтобы активировать установленное расширение, переведите переключатель во включённое положение. Чтобы отключить его, переведите переключатель в выключенное положение.
      - src: /extensions/extensions-8.png
        text: Настройка расширений нажмите на три точки и кнопку `Настройки`.
  - type: slider
    title: Управление расширениями с помощью веб-интерфейса GNOME Extensions
    items:
      - src: /extensions/extensions-11.png
        text: Установка расширения без установленного плагина в браузере.
      - src: /extensions/extensions-12.png
        text: Подтвердить установку расширения в систему
      - src: /extensions/extensions-13.png
        text: Включить или выключить расширение, настройка или удаление приложения с помощью плагина GNOME Shell integration.
---

# Расширения рабочего окружения GNOME

Расширения оболочки GNOME — небольшие фрагменты кода, написанные сторонними разработчиками, которые изменяют способ работы GNOME, работают схожим с браузерными расширениями образом

## GNOME Extensions

Все расширения нужно устанавливать с сайта [GNOME Extensions](https://extensions.gnome.org)

::: tip
Для установки расширений из браузера необходимы пакет `gnome-browser-connector` и плагин для браузера GNOME Shell integration для браузеров на базе [Chromium](https://chromewebstore.google.com/detail/gphhapmejobijbbhgpjhcjognlahblep) или [Firefox](https://addons.mozilla.org/ru/firefox/addon/gnome-shell-integration/)
:::

<AGWGallery id=2 />

## Расширения

Приложение [Расширения](/extensions-app) является официальной утилитой для управления расширениями оболочки GNOME

<AGWGallery id=1 />

Приложение «Расширение» не содержит функций установки приложения, в отличие от приложения «Менеджер расширений». Установка приложения в системе реализована:

- С помощью веб-интерфейса [GNOME Extensions](https://extensions.gnome.org).
- Установить пакет с расширением, к примеру:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-caffeine
```

```shell[epm]
epm -i gnome-shell-extension-caffeine
```

:::

- Установить расширение локально

## Менеджер расширений

Менеджер позволяет не только манипулировать уже установленными расширениями, но и просматривать другие, доступные для установки. Подробнее о [Менеджере расширений](/gnome-extension-manager) можно прочитать в отдельной статье

<AGWGallery id=0 />

## Управление расширениями рабочего окружения GNOME из командной строки

Управление расширениями можно осуществлять через терминал. Рассмотрим некоторые популярные команды на примере расширения Caffeine.

Список установленных расширений:

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

Информация о расширении:

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

Включить расширение:

```shell
gnome-extensions enable caffeine@patapon.info
```

Выключить расширение:

```shell
gnome-extensions disable caffeine@patapon.info
```

Открыть настройки расширения:

```shell
gnome-extensions prefs caffeine@patapon.info
```

Установить расширение:

```shell
gnome-extensions caffeine@patapon.info
```

Удалить расширение:

```shell
gnome-extensions uninstall caffeine@patapon.info
```

Сброс настроек расширения:
```shell
dconf reset -f /org/gnome/shell/extensions/caffeine
```

## Локальная установка расширений с использованием исходников релиза сайта GNOME Extensions или GitHub

Иногда может возникнуть необходимость поставить расширение вручную без коннектора и менеджера расширений (например, если версия GNOME значительно отстает от upstream) или потребовалось установить расширение с GitHub.
Для ручной установки с официального сайта расширений [GNOME Extensions](https://extensions.gnome.org) идем на сайт выбираем понравившееся нам расширение (в примере ddterm) и выбираем текущую версию `gnome-shell` и подходящую версию расширения, после произойдет загрузка.

Для установки [с GitHub](https://github.com/ddterm/gnome-shell-extension-ddterm/releases/tag/v54) или ресурса [GNOME Extensions](https://extensions.gnome.org/extension/3780/ddterm/), скачайте расширение в формате архива.

Для установки расширение в формате архива воспользуйтесь терминальной командой `gnome-extensions install`, где укажите аргументом путь до архива с расширением:

```shell
gnome-extensions install ~/Загрузки/ddterm@amezin.github.com.shell-extension.zip
```

:::info
Если расширение уже установлено, но вы хотите обновить его до более новой версии, воспользуйтесь параметром (флагом) `-f`. При этом приложение будет переустановлено.

```shell
gnome-extensions install -f ~/Загрузки/ddterm@amezin.github.com.shell-extension.zip
```

:::

Перезагрузите операционную систему. После перезапуска установленное расширение появится в списке доступных. После перезагрузки зайдите в приложение «Расширения» или введите в терминале:

```shell
gnome-extensions list
```

В случае, если по какой-то причине установка с помощью gnome-extensions невозможна, то расширение можно установить следующим образом:

Распаковываем архив с расширением, если вы используете терминал:

```shell
cd ~/Загрузки
mkdir ddterm@amezin.github.com.shell-extension
unzip ddterm@amezin.github.com.shell-extension.zip -d ddterm@amezin.github.com.shell-extension
```

В распакованной папке находим файл `metadata.json` и открываем его. В файле находим строку uuid и копируем uuid расширения без кавычек. Альтернативный вариант, воспользуемся терминалом:

```shell
cat ddterm@amezin.github.com.shell-extension/metadata.json | grep uuid
```

Переместим файлы расширения, используя приложение «Файлы» из директории `~/Загрузки/ddterm@amezin.github.com.shell-extension/` в директорию `~/.local/share/gnome-shell/extensions/ddterm@amezin.github.com` (папок может не существовать, их нужно создать) или воспользуйтесь терминалом:

```shell
mkdir -p ~/.local/share/gnome-shell/extensions/ddterm@amezin.github.com
cp -rf ~/Загрузки/ddterm@amezin.github.com.shell-extension/** ~/.local/share/gnome-shell/extensions/ddterm@amezin.github.com
```

Перезапускаем операционную систему, расширение появится в списке доступных `gnome-extensions list` или в приложение «Расширения» после перезапуска рабочего окружения.

## Системные расширения

Системные расширения — как правило используются в сессии GNOME Classic и поддерживаются участниками проекта GNOME. Расширения поставляются в пакете `gnome-shell-extensions`, если в операционной системе он отсутствует, установите его используя терминал:

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

[System Monitor](https://extensions.gnome.org/extension/6807/system-monitor/) <Badge type="success" text="Новое" /> — позволяет контролировать систему с верхней панели

[Horizontal workspaces](https://extensions.gnome.org/extension/2141/horizontal-workspaces/) <Badge type="danger" text="Устаревшее" /> — позволяет использовать горизонтальную компоновку рабочей области

[Light Style](https://extensions.gnome.org/extension/6198/light-style/) <Badge type="success" text="Новое" /> — переключает стиль по умолчанию на светлый
