# Расширения рабочего окружения GNOME

**Расширения оболочки GNOME** - это небольшие фрагменты кода, написанные сторонними разработчиками, которые изменяют способ работы GNOME. (Если вы знакомы с расширениями Chrome или дополнениями Firefox, расширения GNOME Shell похожи на них.)
Поскольку расширения создаются вне обычного процесса проектирования и разработки GNOME, они поддерживаются их авторами, а не сообществом GNOME. Некоторые функции, впервые реализованные в виде расширений, могут появиться в будущих версиях GNOME.

## Установка расширений рабочего окружения GNOME с помощью GNOME Shell Extension Manager

Для просмотра, установки и управления вашими расширениями существует приложение **GNOME Shell Extension Manager**

### Установка из репозитория

**GNOME Shell Extension Manager** можно установить любым привычным и удобным способом

**Установка через терминал**

::: code-group
```bash[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-manager
```
```bash[epm]
epm -i gnome-shell-extension-manager
```
:::

### Установка c помощью Flatpak<Badge type="info" text="flatpak" />

При наличии пакета [Flatpak](/flatpak), можно установить **GNOME Shell Extension Manager** одной командой:

```bash
flatpak install flathub com.mattjakeman.ExtensionManager
```

## Установка расширений рабочего окружения GNOME из репозитория

Расщирения: Dash to Dock, Blur my Shell, Dash to Panel можно установить отдельными пакетами из репозитория

::: code-group
```bash[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-dash-to-dock
```
```bash[epm]
epm -i gnome-shell-extension-dash-to-dock
```
:::

::: info
Для вывода пакета в списке программы **Расширения**, необходимо перезгрузить компьютер, после установки расширения из репозитория.
:::