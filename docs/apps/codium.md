---
title: VSCodium
appstreamFlatpak: com.vscodium.codium
---

# VSCodium

VSCodium — управляемый сообществом, свободно лицензированный двоичный дистрибутив Microsoft editor VS Code.

## Установка из репозитория

**VSCodium** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install codium
```
```shell[epm]
epm -i codium
```
:::

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **VSCodium** одной командой:

```shell
flatpak install flathub com.vscodium.codium
```

<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **VSCodium** одной командой:




## Запуск VSCodium в оконном интерфейсе Wayland

Запустить **VSCodium** через терминал указав дополнительные опции запуска:

::: code-group

```shell[Сизиф]
codium -enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto
```

```shell[Flatpak]
flatpak run com.vscodium.codium --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto
```
:::

Для запускаска приложения из панели приложений скопируйте `.desktop` в локальную папку пользователя и внесите изменения:

::: code-group

```shell[Сизиф]
codium --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto
```

```shell[Flatpak]
flatpak run com.vscodium.codium --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto
```
:::

Для запуска необходимо скопировать `.desktop` и внести изменения в параметра запуска:

::: code-group

```shell[Сизиф]
su -
cp /usr/share/applications/codium.desktop /home/current_user/.local/share/applications/codium.desktop
nano ~/.local/share/applications/codium.desktop
```

```shell[Flatpak]
su -
cp /var/lib/flatpak/app/com.vscodium.codium/current/active/export/share/applications/com.vscodium.codium.desktop /home/current_user/.local/share/applications/com.vscodium.codium.desktop
nano ~/.local/share/applications/com.vscodium.codium.desktop
```
:::

:::info
Замените в пути `current_user`, на текущего пользователя в системе.
:::

Вносим в значение параметра `Exec` дополнительные параметры запуска:

::: code-group

```shell[Сизиф]
[Desktop Entry]
Name=VSCodium
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/bin/codium --unity-launch %F // [!code --]
Exec=/usr/bin/codium --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto --unity-launch %F // [!code ++]
Icon=codium
Type=Application
StartupNotify=false
StartupWMClass=VSCodium
Categories=Utility;TextEditor;Development;IDE;
MimeType=text/plain;inode/directory;application/x-codium-workspace;
Actions=new-empty-win
```

```shell[Flatpak]
[Desktop Entry]
Name=VSCodium
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=codium --file-forwarding com.vscodium.codium --unity-launch @@ %F @@ // [!code --]
Exec=/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=codium --file-forwarding com.vscodium.codium --unity-launch --ozone-platform-hint=auto --enable-features=WaylandWindowDecorations @@ %F @@ // [!code ++]
Icon=com.vscodium.codium
Type=Application
StartupNotify=false
StartupWMClass=VSCodium
Categories=TextEditor;Development;IDE;Utility;
MimeType=text/plain;inode/directory;application/x-codium-workspace;
Actions=new-empty-window;
Keywords=vscode;
X-Desktop-File-Install-Version=0.27
X-Flatpak=com.vscodium.codium

```
:::


## VSCodium не запускается или запускается с ошибками.

После обновления операционной системы Сodium, не запускается или запускается не корректно:

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/VSCodium/GPUCache
```

## Установка расширений

Для установки и просмотра плагинов выберите пункт Расширения на панели слева или нажмите сочетание клавиш `Ctrl`+ `Shift`+ `X`.
Введите название плагина в строке поиска, выберите дополнение и нажмите установить.
Каждое расширение в списке включает краткое описание, имя издателя, количество загрузок и пятизвездочный рейтинг.

![codium_1](/codium/codium_1.gif)