# Citrix Workspace

Citrix Workspace — клиентский компонент XenDesktop и XenApp, разработанный Citrix Systems.

## Получение дистрибутива

Скачать дистрибутив можно с [официального сайта](https://www.citrix.com/downloads/workspace-app/linux/workspace-app-for-linux-latest.html)

::: warning
Приложение не поставляется официально для пользователей находящихся на территории РФ. Обслуживание пользователей приостановлено на неопределённый срок.
:::

## Распаковка и установка

::: tip
Используемая версия на момент написания инструкции: `23.9.0.24`
:::

- Создайте рабочую папку, распакуйте архив в неё и запустите установщик

```shell
mkdir /home/$USER/ICASetup
mv /home/$USER/Загрузки/linuxx64-23.9.0.24.tar.gz /home/$USER/ICASetup
cd /home/$USER/ICASetup
tar xzvf linuxx64-23.9.0.24.tar.gz
./setupwfc
```

- После завершения процесса установки, иконка приложения появится в панели запуска в GNOME
- Далее установщик можно удалить

```shell
rm -r /home/$USER/ICASetup
```

## Если во время установки возникли ошибки

Пример ошибки

```
Настройка разрешений для файла...
cp: невозможно создать обычный файл '/home/user/ICAClient/linuxx64/ceb/CtxChromiumBrowser/thread_type.mojom.m.js': Отказано в доступе
cp: невозможно создать обычный файл '/home/user/ICAClient/linuxx64/bcr/libEGL.so': Отказано в доступе
cp: невозможно создать обычный файл '/home/user/ICAClient/linuxx64/bcr/libGLESv2.so': Отказано в доступе

Failed to disable unit: Unit file ctxcwalogd.service does not exist.
Интеграция с браузерами...
```

::: tip
Перед попыткой разобраться с проблемой, проверьте, работает ли сам Citrix
:::

## Если в сеансе Citrix не рабоатет Alt+Tab в Gnome Wayland
Включите возможность <a id="xwayland-allow-grabs">глобального захвата клавиш</a> для приложения   `Wfica` (Citrix Workspace):

```
gsettings set org.gnome.mutter.wayland xwayland-grab-access-rules "['Wfica']"
gsettings set org.gnome.mutter.wayland xwayland-allow-grabs true
```
::: tip
Приложение 'wfica' в данном случае нужно указывать иенно с заглавной "W", иначе работать не будет 
:::

## Корректное переключение раскладки в удаленном сеансе Citrix
В *nix подобных системах у Citrix Workspace есть распространенная проблема с синхронизацие раскладки локальной машины с удаленным сенасом.
Можно попытаться перименить рекомендации с [официального сайта](https://help-docs.citrix.com/ru-ru/citrix-workspace-app/linux/keyboard.html), но, как показывает практика, в большинстве случаев они либо мало эффективны, либо вовсе не работают. 
В таком случае можно применить более радикальное решение данной проблемы: в приложении `/opt/Citrix/ICAClient/util/configmgr` (Citrix Workspace Preferences), на вкладке "Клавиатура"
выбрать:
Параметры синхронизации: "Не синхронизировать"
Настройка режима ввода с клавиатуры: "Сканкод"

::: warning
Для корректной работы режима "Сканкод" в Gnome Wayland, необходимо предварительно включить [глобального захвата клавиш](#xwayland-allow-grabs)
:::
