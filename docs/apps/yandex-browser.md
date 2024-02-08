---
title: Яндекс Браузер
appstreamRepo: yandex-browser.desktop
appstreamFlatpak: ru.yandex.Browser
---

# Яндекс Браузер

Яндекс Браузер — это быстрый и безопасный браузер Яндекса для компьютера, смартфонов и планшетов на Android и iOS (iPhone и iPad). Ускоряет загрузку при медленном соединении, защищает от вирусов и мошенников, делает поиск удобнее.

## Установка из репозитория

**Яндекс Браузер** можно установить любым привычным и удобным способом:

<!--@include: ./parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install yandex-browser-stable
```
```shell[epm]
epm -i yandex-browser-stable
```
:::

::: info
C версии `23.5.1.753`, устанавливается **Яндекс Браузер для организаций** — специальная сборка, поддерживающая корпоративные функции, например, управление при помощи групповых политик. Однако ее можно использовать и на домашних компьютерах.
:::

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **Яндекс Браузер** одной командой:

```shell
flatpak install flathub ru.yandex.Browser
```

<!--@include: ./parts/install/software-flatpak.md-->

:::warning
Для запуска приложения требуется возможность создания непривилегированных пользовательских пространств, что является потенциально не безопасно. Вы можете [изменить настройку ядра](flatpak.md#запуск-приложении)
:::

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **Яндекс Браузер** одной командой:

```shell
epm play yandex-browser
```

## Не воспроизводится видео в Яндекс Браузере: 

Откройте терминал и запустите **Яндекс Браузер**:

::: code-group

```shell[sysphus]
yandex-browser-stable
```
```shell[epm play]
yandex-browser
```
:::

Ответ в терминале при установленных кодеках следующий:
::: code-group
```shell[Успешно]
Found ffmpeg: /usr/lib64/yandex/browser/libffmpeg.so
  avcodec: 3882340
  avformat: 3876196
  avutil: 3746916
Ffmpeg version is OK! Let's use it.
```
```shell[Ошибка]
find_ffmpeg failed, using integrated library
```
:::

Обновите кодеки с помощью утилиты **update-ffmpeg**:
::: code-group
```shell[sysphus]
su -
/usr/lib64/yandex/browser/update-ffmpeg
```
```shell[epm play]
su -
/opt/yandex/browser/update-ffmpeg
```
:::

:::warning
C версии `23.9.x.xxx` утилита update-ffmpeg исключена из Яндекс Браузера. Библиотека libffmpeg поставляется пакетом ffmpeg-plugin-browser
:::

Если в терминале вы получили ответ «Ffmpeg version is OK! Let's use it.» , а видео не воспроизводится, то в строке браузера вводим команду:

```
browser://flags/#external-media
```

Отключите опцию, выбрав «Disabled», в появившимся информере, подтверждаем перезагрузку **Яндекс Браузера**.

## Как вернуть стандартный вид окна в рабочем окружении Gnome

По умолчанию Браузер не использует системную рамку окна в Linux и изменяет дизайн элементов управления. Если вы хотите вернуть стандартный вид окна и элементов управления Linux:

1. Введите в Умную строку адрес `browser://flags`
2. Введите в строку поиска флаг `#enable-system-frame`
3. Включите опцию `System window controls`
4. Перезапустите Браузер и проверьте результат.

::: warning
Данная настройка является экспериментальной, после ее включения возможны неполадки в работе Браузера. В этом случае отключите опцию и напишите нам через форму
:::

![стандартный вид окна в рабочем окружении Gnome](/yandex-browser/yandex-browser.gif)

## Запуск Яндекс Браузер в оконном интерфейсе Wayland

По умолчанию Яндекс Браузер запускается в оконном интерфейсе X11, для запуска в оконном интерфейсе Wayland:

1. Введите в Умную строку адрес `browser://flags`
2. Введите в строку поиска флаг `#ozone-platform-hint`
3. Включите опцию `Preferred Ozone platform`
4. Перезапустите Яндекс Браузер и проверьте результат

![Запуск Яндекс Браузер в оконном интерфейсе Wayland](/yandex-browser/yandex-browser-2.gif)

Запустить Яндекс Браузер через терминал указав дополнительные опции запуска:

```shell
yandex-browser-stable --ozone-platform-hint=wayland
```

## Как исправить артефакты «моргания» в Яндекс Браузере при использовании закрытых драйверов NVIDIA

Открыть Яндекс Браузер, произвести дополнительную настройку:

1. В поисковой строке запустить: `browser://flags/`
2. Введите в строку поиска флаг `#enable-vulkan`, включите опцию Enabled 
3. Введите в строку поиска флаг `#enable-flutter-suggest`, включите опцию Disabled
4. Перезапустите Яндекс Браузер и проверьте результат

## Сбой графики при открытии Яндекс Браузера.

После обновления операционной системы Яндекс Браузер происходит сбой графики:

Удалите пользовательскую конфигурацию у пользователя:

```shell
rm -rfv .config/yandex-browser/
```

При обновлении драйвера, иногда достаточно очистить кэш-файлы с графической обработкой или отображением графики:

```shell
rm -rfv .config/yandex-browser/Default/GPUCache
```

![Графический сбой в Яндекс Браузере](/yandex-browser/yandex-browser-1.jpg 'Графический сбой в Яндекс Браузере')

## Video DownloadHelper
Как известно, **Яндекс Браузер** , как и другие браузеры, обладает множеством расширений. **Video DownloadHelper** не исключение.
Однако не так давно, приложение компаньон обновилось и поменяло свое название на VdhCoApp.
В настоящее время в EPM появилась возможность установки нового приложения компаньона, но сам установщик пакета, как с официального сайта так и через EPM, не поддерживает установку приложения компаньона в Яндекс Браузер.

Если Вы используете **Video DownloadHelper** и столкнулись с проблемой обновления приложения компаньона, но после его установки в Яндекс Браузере не заработало, необходимо выполнить следующие действия.

1. Устанавливаем само приложение компаньон

```shell
epm play vdhcoapp
```

2. Удаляем из Яндекс Браузера старый файл, если его вдруг нет, будет написано, что файл не найден  

```shell
rm $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
```

3. Создаем новый файл net.downloadhelper.coapp.json

```shell
echo -e '{\n"type": "stdio",\n"allowed_origins": [\n"chrome-extension://lmjnegcaeklhafolokijcfjliaokphfk/",\n"chrome-extension://pfoiagbblcbmognbkekfpodpidedkmcc/",\n"chrome-extension://jmkaglaafmhbcpleggkmaliipiilhldn/",\n"chrome-extension://fojefjolbhfidomcaelhceoldmmpcaga/"\n],\n  "name": "net.downloadhelper.coapp",\n"description": "Video DownloadHelper companion app",\n"path": "/opt/vdhcoapp/vdhcoapp"\n}' >> $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
```

4. Перезапускаем Яндекс Браузер и проверяем, в случае если не заработало, делаем тоже самое, но принудительно ставим версию 2.0.10

```shell
epm play vdhcoapp=2.0.10
```

Дальше шаги с **2** по **4**

Если вышел конфликт версий при установке с помощью ЕПМ, возможна такая ситуация, то делаем все **без ЕПМ** по шагам.

```info
Ниже вариант предпочтительный
```

```shell
cd ~
```

```shell
wget https://github.com/aclap-dev/vdhcoapp/releases/download/v2.0.10/vdhcoapp-2.0.10-linux-x86_64.tar.bz2
```

```shell
tar xf vdhcoapp-2.0.10-linux-x86_64.tar.bz2 -C $HOME/.local/share/
```

```shell
$HOME/.local/share/vdhcoapp-2.0.10/vdhcoapp install
```

```shell
rm $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
```

```shell
echo -e '{\n"type": "stdio",\n"allowed_origins": [\n"chrome-extension://lmjnegcaeklhafolokijcfjliaokphfk/",\n"chrome-extension://pfoiagbblcbmognbkekfpodpidedkmcc/",\n"chrome-extension://jmkaglaafmhbcpleggkmaliipiilhldn/",\n"chrome-extension://fojefjolbhfidomcaelhceoldmmpcaga/"\n],\n  "name": "net.downloadhelper.coapp",\n"description": "Video DownloadHelper companion app",\n"path": "'$HOME'/.local/share/vdhcoapp-2.0.10/vdhcoapp"\n}' >> $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
```

Запускаем Яндекс Браузер.


## Издания Яндекс Браузера
**Яндекс Браузер** — Быстрый и безопасный браузер со встроенной технологией активной защиты Protect. Она проверяет скачиваемые файлы на вирусы, предупреждает об опасных сайтах, защищает подключение к общественным сетям и ваши пароли.

**Яндекс Браузер для организаций** — Защита от вредоносных программ, фишинга и кражи паролей. Простая настройка в пару кликов на всю компанию и выделенная техподдержка.

**Яндекс Браузер Бета-версия** — Все новые возможности Яндекс Браузера, отзывы о последних версиях и общение с разработчиками в [блоге Яндекс Браузера](https://dzen.ru/yandexbrowser).