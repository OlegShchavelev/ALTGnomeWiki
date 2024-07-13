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
    avatar: https://avatars.githubusercontent.com/u/1282500?v=4
  metadata_license:
    name: GNU GPLv2
    link: https://choosealicense.com/licenses/gpl-2.0/
  url:
    homepage: https://github.com/kozec/syncthing-gtk
    bugtracker: https://github.com/kozec/syncthing-gtk/issues
    translate: https://explore.transifex.com/syncthing-gtk/syncthing-gtk/
---

# Syncthing

Syncthing — приложение, позволяющее синхронизировать файлы между несколькими устройствами. Присутствует поддержка сохранения последовательных версий файла по нескольким алгоритмам, включая пользовательский, что позволяет использовать Syncthing для резервного копирования (не рекомендуется). Приложение и протокол публикуются под открытой лицензией.

Syncthing может работать как в локальной сети, так и в сети Интернет. Передача всех данных происходит по защищённым каналам TLS с использованием PFS (обмен ключами с совершенной прямой секретностью), чтобы исключить возможность прослушивания. Синхронизация происходит по дате изменения файла. Есть поддержка синхронизации на уровне блоков, то есть при небольших изменениях в файле будут синхронизированы только изменившиеся блоки, а не весь файл.

## Установка Syncthing

1. Скачайте программу с [сайта разработчика](https://syncthing.net/downloads/)
2. Распакуйте архив в папку `/opt`

```shell
cd Загрузки
sudo tar -C '/opt' -xvf syncthing*
```

3. При распаковке создалась папка `/opt/syncthing-linux-amd64-v1.27.3` (для удобства в примере она переименована в `/opt/syncthing`)
4. Запустите Syncthing под обычным пользователем.

```shell
cd /opt/syncthing
./syncthing
```

Нужно настроить автоматический запуск Syncthing в виде демона, запускаемого при входе пользователя в систему. В примере использован `systemd`, другие варианты автоматической загрузки можно посмотреть на [сайте проекта](https://docs.syncthing.net/users/autostart.html#linux).

- Скачайте файл `syncthing.service` c [GitHub](https://github.com/syncthing/syncthing/tree/main/etc/linux-systemd/user) и скопируйте в `$HOME/.config/systemd/user`
- Отредактируйте раздел `[Service]`, указав корректный путь к исполняемому файлу — измените `ExecStart` c `/usr/bin/syncthing` на `/opt/syncthing/syncthing`. Строка должна выглядеть так:

```
ExecStart=/opt/syncthing/syncthing serve --no-browser --no-restart --logflags=0
```

- Сохраните изменения и запустите службу.

::: warning
Так как запуск службы будет осуществляться от имени обычного пользователя, следующая команда должна выполняться без root-прав
:::

```shell
systemctl --user enable --now syncthing.service
```

5. Готово. Запустите браузер, перейдите по адресу [http://127.0.0.1:8384/](http://127.0.0.1:8384/), привяжите устройства и настройте папки для синхронизации.

::: tip
Для управления сервисом можно использовать приложение [Syncthing-GTK](https://flathub.org/apps/me.kozec.syncthingtk)

```shell
flatpak install flathub me.kozec.syncthingtk
```

:::
