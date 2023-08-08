# Единая команда управления пакетами (epm)
**EPM** — имеющая одинаковый интерфейс на всех системах команда управления пакетами. При интерфейсе, похожем на rpm, apt и urpm, выполняет необходимые операции **на любой платформе**.
## Установка из репозитория
**EPM** можно установить используя терминал:

```bash
su -
apt-get update
apt-get install eepm
```

## Команды

| Описание операции |      Команда EPM      |  Команда ALT Linux |
| ----------------- | :-------------------: | :-----------------: |
| Установка пакета по названию в систему      | epm -i (package) | apt-get install (package) |
| Установка файла пакета в систему      |   epm -i (package file)	    |   apt-get install (package file) |
| Удаление пакета из системы |   epm -e (package)    |    apt-get remove (package) |
| Поиск пакета в репозитории |   epm -s (text)    |    apt-cache search (text) |
| Проверка наличия пакета в системе |   epm -q (package)    |    rpm -qa (pipe) grep (package) |
| Список установленных пакетов |   epm -qa    |    rpm -qa |
| Поиск по названиям установленных пакетов |   epm -qp (word)    |    grep (word) |
| Принадлежность файла к (установленному) пакету |   epmqf (file)   |  rpm -qf (file) |
| Список файлов в (установленном) пакете |  epm -ql (package)   |  rpm -ql (package) |
| Вывести информацию о пакете |  epm -ql (package)   |  apt-cache show (package) |
| Обновить дистрибутив |  epm upgrade   |  apt-get dist-upgrade |