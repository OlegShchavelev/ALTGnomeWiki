---
aggregation:
    sisyphus: codium
    flatpak:
        id: com.vscodium.codium
        build: unoffical
    epm:
        play:
            id: codium
            build: unoffical
appstream:
    id: com.vscodium.codium
    name: VSCodium
    icon: /vscodium/vscodium-logo.svg
    summary: Управляемый сообществом, свободно лицензированный двоичный дистрибутив Microsoft editor VSCode.
    developer:
        name: VSCodium Community
    metadata_license:
        name: MIT License
        link: https://choosealicense.com/licenses/mit/
    url:
        homepage: https://vscodium.com/
        bugtracker: https://github.com/VSCodium/vscodium/issues
---

# VSCodium

VSCodium — управляемый сообществом, свободно лицензированный двоичный дистрибутив Microsoft editor VSCode.


<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->

## Запуск VSCodium в оконном интерфейсе Wayland

Для запуска **VSCodium** через терминал, укажите следующие опции запуска:

::: code-group

```shell[Сизиф]
codium --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto
```

```shell[EPM Play]
codium --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto
```
:::

:::info
При авторизации пользователя в сессии Wayland и запуска приложения VSCodium Flatpak-версии c `1.87.0.24060` открывается в оконном интерфейсе Wayland. При наличии пользовательского файла `.desktop` c добавленными параметрами `--enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto` открепите Pin [в приложении PinApp](/pin-app)
:::

Для запуска приложения в окружении GNOME и простоты настройки, мы рекомендуем установить приложение [PinApp](/pin-app), выбирите приложение **VSCodium**, сделайте Pin и внесите следующие параметры в поле `Exec`:

::: code-group

```shell[Сизиф]
/usr/bin/codium --unity-launch %F // [!code --]
/usr/bin/codium --unity-launch --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto %F // [!code ++]
```

```shell[EPM Play]
codium --unity-launch %F // [[!code --]]
codium --unity-launch --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto %F // [[!code ++]]
```
:::

## Использование Node.js в изолированой среде в приложении VSCodium

Вы используете VSCodium установленного с помощью пакетного менеджера [Flatpak](flatpak), для использования Node.js необходимо:

Выберите расширение SDK для этого воспользуемся поиском:

```shell
flatpak search Sdk.Extension.node
```

::: details вывод при поиске `Sdk.Extension.node`
```shell
[oleg@alt-gnome ~]$ flatpak search Sdk.Extension.node
Имя                          Описание                                                ID Приложения                               Версия          Ветвь            Удаленные репозитории
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.16.0         23.08beta        flathub-beta
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.4.0          22.08beta        flathub-beta
Node.js 20.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node20        20.11.1         23.08            flathub
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.18.1         23.08            flathub
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.19.1         22.08            flathub
Node.js 18.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node18        18.12.1         21.08            flathub,flathub-beta
Node.js 16.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node16        16.20.2         22.08            flathub
Node.js 16.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node16        16.18.1         21.08            flathub
Node.js 14.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node14        14.21.3         22.08            flathub
Node.js 14.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node14        14.21.1         21.08            flathub
Node.js 14.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node14        14.17.6         20.08            flathub
Node.js 12.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node12        12.22.12        21.08            flathub
Node.js 12.x                 JavaScript runtime built on V8 JavaScript engine        org.freedesktop.Sdk.Extension.node12        12.22.6         20.08            flathub
Node.js SDK extension        Node.js SDK extension                                   org.freedesktop.Sdk.Extension.node12        12.19.0         19.08            flathub
Node.js SDK extension        Node.js SDK extension                                   org.freedesktop.Sdk.Extension.node10        10.22.1         19.08            flathub
Node.js SDK extension        Node.js SDK extension                                   org.freedesktop.Sdk.Extension.node10        10.20.1         18.08            flathub,flathub-beta
```
:::

Установите выбранную версию Node.js, [я выбрал LTS версию 20.xx](/nodejs#выпуски-node-js):

```shell
flatpak install flathub org.freedesktop.Sdk.Extension.node20
```

Разрешите использование Node.js приложению **VSCodium**:

Для этого необходимо [установить Flatseal](flatseal), выберите **VSCodium** и в списке переменных добавьте правило `FLATPAK_ENABLE_SDK_EXT=node20`

![codium-1](/vscodium/codium-1.png)

## Сбой графики при открытии VSCodium.

После обновления операционной системы **VSCodium** происходит сбой графики. При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/VSCodium/GPUCache
```

## Установка расширений

Для установки и просмотра плагинов выберите пункт Расширения на панели слева или нажмите сочетание клавиш [[Ctrl]]+ [[Shift]]+ [[X]].
Введите название плагина в строке поиска, выберите дополнение и нажмите установить.
Каждое расширение в списке включает краткое описание, имя издателя, количество загрузок и пятизвездочный рейтинг.

![codium_1](/vscodium/codium_1.gif)
