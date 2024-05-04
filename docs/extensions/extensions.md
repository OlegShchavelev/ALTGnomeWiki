# Расширения рабочего окружения GNOME

**Расширения оболочки GNOME** — небольшие фрагменты кода, написанные сторонними разработчиками, которые изменяют способ работы GNOME. (Если вы знакомы с расширениями Chrome или дополнениями Firefox, расширения GNOME Shell похожи на них.)
Поскольку расширения создаются вне обычного процесса проектирования и разработки GNOME, они поддерживаются их авторами, а не сообществом GNOME. Некоторые функции, впервые реализованные в виде расширений, могут появиться в будущих версиях GNOME.

## Установка расширений рабочего окружения GNOME с помощью GNOME Shell Extension Manager

Для просмотра, установки и управления вашими расширениями существует приложение **GNOME Shell Extension Manager**

### Установка из репозитория

**GNOME Shell Extension Manager** можно установить любым привычным и удобным способом:

**Установка через терминал**

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install gnome-extension-manager
```
```shell[epm]
epm -i gnome-extension-manager
```
:::

### Установка c помощью Flatpak<Badge type="info" text="flatpak" />

При наличии пакета [Flatpak](/flatpak), можно установить **GNOME Shell Extension Manager** одной командой:

```shell
flatpak install flathub com.mattjakeman.ExtensionManager
```

![extensions_1](/extensions/extensions_1.gif)

## Управление расширениями рабочего окружения GNOME из командной строки

### Список установленных расширений

```shell
gnome-extensions list
```

### Просмотр информации о расширении

Посмотрим данные о расширении foo-bar

```shell
gnome-extensions show foo-bar
```


### Включить расширение

Включим расширение foo-bar

```shell
gnome-extensions enable foo-bar
```

### Выключить расширение

Выключим расширение foo-bar

```shell
gnome-extensions disable foo-bar
```

### Открыть параметры расширения

Откроем параметры расширения foo-bar

```shell
gnome-extensions prefs foo-bar
```

### Удалить расширение

Удалим расширение foo-bar

```shell
gnome-extensions uninstall foo-bar
```

## Системные расширения

**Applications Menu**

Дополнительная навигация с помощью меню в стиле GNOME `2.x` на панели

**Auto Move Windows**

Позволяет вам проще управлять вашими рабочими пространствами, назначая определенное рабочее пространство каждому приложению, как только запускается в рабочем окружении, настраиваемым с помощью ключа `GSettings`

**Launch new interface**

Показывает меню состояния для быстрого размонтирования и отключения питания внешних запоминающих устройств (флешки, внешние диски)
