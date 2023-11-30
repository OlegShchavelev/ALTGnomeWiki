# Citrix Workspace

Приложение Citrix Workspace — это клиентский компонент XenDesktop и XenApp, разработанный Citrix Systems.

## Получение дистрибутива

- Ссылка на страницу дистрибутивов: `https://www.citrix.com/downloads/workspace-app/linux/workspace-app-for-linux-latest.html`
- Используемая версия на момент написания инструкции: `23.9.0.24`
- Скачивание предлагается реализовать самим пользователем (смотри предупреждение)

::: warning
В данный момент времени Citrix не работает c Российской федерацией и ресурс не доступен на территории Российской федерации.
::: 

## Распаковка и установка

- После того как скачали дистрибутив необходимо его распаковать и запустить установку

```shell
mkdir /home/$USER/ICASetup
mv /home/$USER/Загрузки/linuxx64-23.9.0.24.tar.gz /home/$USER/ICASetup
cd /home/$USER/ICASetup
tar xzvf linuxx64-23.9.0.24.tar.gz
```

- Запустить процесс установки
```shell
./setupwfc
```

- Везде ответить положительно, кроме интеграции с браузером (если она не нужна)
- Получить установленное приложение, иконка появится в панели запуска в Gnome
- Если во время установки возникли ошибки, например:
```
Настройка разрешений для файла...
cp: невозможно создать обычный файл '/home/user/ICAClient/linuxx64/ceb/CtxChromiumBrowser/thread_type.mojom.m.js': Отказано в доступе
cp: невозможно создать обычный файл '/home/user/ICAClient/linuxx64/bcr/libEGL.so': Отказано в доступе
cp: невозможно создать обычный файл '/home/user/ICAClient/linuxx64/bcr/libGLESv2.so': Отказано в доступе

Failed to disable unit: Unit file ctxcwalogd.service does not exist.
Интеграция с браузерами...
```
то либо проигнорировать, либо попытаться разобраться в их причине, но прежде просто проверить работает ли сам Citrix.

- Далее установщик можно удалить

```shell
rm -r /home/$USER/ICASetup
```