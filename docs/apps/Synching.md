---
title: Syncthing
appstreamRepo: me.kozec.syncthingtk
aggregation:
    flatpak: me.kozec.syncthingtk
appstream:
    id: me.kozec.syncthingtk
    name: Syncthing
    icon: /syncthing/syncthing-logo.svg
    summary: Приложение, позволяющее синхронизировать файлы между несколькими устройствами.
    developer:
        name: kozec
        avatar: /syncthing/syncthing-avatar.png
    metadata_license:
        name: GNU GPLv2
        link: https://choosealicense.com/licenses/gpl-2.0/
    url:
        homepage: https://github.com/kozec/syncthing-gtk
        bugtracker: https://github.com/kozec/syncthing-gtk/issues
        translate: https://explore.transifex.com/syncthing-gtk/syncthing-gtk/
---

# Syncthing

Syncthing — приложение, позволяющее синхронизировать файлы между несколькими устройствами. Присутствует поддержка сохранения последовательных версий файла по нескольким алгоритмам, включая пользовательский, что позволяет использовать Syncthing также для целей резервного копирования, хотя это и не рекомендуется. Приложение и протокол публикуются под открытой лицензией.

Syncthing может работать в локальной сети и сети интернет, передача всех данных происходит по защищённым каналам TLS с использованием протокола обмена ключами с совершенной прямой секретностью, чтобы исключить возможность прослушивания. Синхронизация происходит по дате изменения файла, есть поддержка синхронизации на уровне блоков, то есть при небольших изменениях в файле будут синхронизированы только изменившиеся блоки, а не весь файл.

## Установка Syncthing

1. Скачиваем программу с [сайта разработчика](https://syncthing.net/downloads/)
2. Распаковываем архив в папку opt

```shell
cd Загрузки
sudo tar -C '/opt' -xvf syncthing*
```

3. При распаковке у меня в папке opt создалась папка syncthing-linux-amd64-v1.27.3, для удобства, Я переименовал её в syncthing.
4. Запускаем Syncthing под обычным пользователем.

```shell
cd /opt/syncthing
./syncthing
```

Далее, нужно настроить автоматический запуск syncthing в виде фонового демона, загружаемого при входе пользователя в систему. Я буду использовать для этого systemd, другие варианты автоматической загрузки можно посмотреть [тут](https://docs.syncthing.net/users/autostart.html#linux).

Для этого, нам нужно скачать со страницы разработчика на [github.com](https://github.com/syncthing/syncthing/tree/main/etc/linux-systemd/user) файл syncthing.service и скопировать его в /$HOME/.config/systemd/user, где $HOME это директория Вашего пользователя.

Далее необходимо отредактировать этот файл, а именно [Service] указать корректный путь к исполняемому файлу. Для этого нужно изменить значение ExecStart c `/usr/bin/syncthing` на `/opt/syncthing/syncthing`. После этого, строка должна выглядеть так: `ExecStart=/opt/syncthing/syncthing serve --no-browser --no-restart --logflags=0`

Сохраняем изменения и запускаем службу. Внимание! Так как запуск службы будет осуществляться от имени обычного пользователя, следующая команда должны выполняться **НЕ** от root!

```shell
systemctl --user enable --now syncthing.service
```

5. Готово, можно запускать браузер, переходить по адресу [http://127.0.0.1:8384/](http://127.0.0.1:8384/), привязывать устройства и настраивать папки для синхронизации.

6. Если Вы предпочитаете проводить дальнейшую настройку не через web интерфейс, а через приложение, то можно установить [Syncthing-GTK](https://flathub.org/apps/me.kozec.syncthingtk) в виде Flatpak пакета.

```shell
flatpak install flathub me.kozec.syncthingtk
```
