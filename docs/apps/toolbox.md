# Toolbox

Toolbox — это приложение от компании JetBrains, предназначенное для управления инструментами и продуктами разработки, созданными этой компанией.

## Установка с официального сайта

Устанавливаем архив:

```shell
cd ~/Загрузки
wget https://download.jetbrains.com/toolbox/jetbrains-toolbox-2.1.3.18901.tar.gz
```

Разархивируем:

```shell
tar zxvf jetbrains-toolbox-2.1.3.18901.tar.gz
cd jetbrains-toolbox-2.1.3.18901
```

Делаем исполняемым и запускаем:

```shell
chmod +x jetbrains-toolbox
./jetbrains-toolbox
```

:::info
После первого запуска приложение Toolbox клонирует себя в директорию `~/.local/share/JetBrains/`, поэтому загруженный файл можно удалить.
:::

## Установка IDE

Открываем Toolbox:

![Toolbox](/toolbox/toolbox_1.png)

Выбираем нужную IDE и нажимаем установить:

![Toolbox](/toolbox/toolbox_2.png)