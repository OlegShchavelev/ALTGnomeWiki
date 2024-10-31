---
aggregation:
  sisyphus: yandex-browser-stable
  flatpak:
    id: ru.yandex.Browser
    build: unofficial
  epm:
    play:
      id: yandex-browser
      build: unofficial
appstream:
  id: yandex-browser.desktop
  name: Яндекс Браузер
  icon: /yandex-browser/yandex-browser-logo.svg
  summary: Быстрый и безопасный браузер Яндекса для компьютера.
  keywords:
    - proprietary
  developer:
    name: Yandex
    avatar: /yandex-browser/yandex-browser-avatar.png
  metadata_license:
    name: Собственная
    link: https://yandex.ru/legal/browser_agreement/
  url:
    homepage: https://browser.yandex.ru/
    bugtracker: https://browser.yandex.ru/feedback/
---

# Яндекс Браузер

Яндекс Браузер — быстрый и безопасный браузер Яндекса для компьютера, смартфонов и планшетов на Android и iOS (iPhone и iPad). Ускоряет загрузку при медленном соединении, защищает от вирусов и мошенников, делает поиск удобнее.

## Издания Яндекс Браузера

**Яндекс Браузер** — Быстрый и безопасный браузер со встроенной технологией активной защиты Protect. Она проверяет скачиваемые файлы на вирусы, предупреждает об опасных сайтах, защищает подключение к общественным сетям и ваши пароли.

**Яндекс Браузер для организаций** — Защита от вредоносных программ, фишинга и кражи паролей. Простая настройка в пару кликов на всю компанию и выделенная техподдержка.

**Яндекс Браузер Бета-версия** — Все новые возможности Яндекс Браузера, отзывы о последних версиях и общение с разработчиками в [блоге Яндекс Браузера](https://dzen.ru/yandexbrowser).

<!--@include: @apps/.parts/install/content-repo.md-->

::: info
C версии `23.5.1.753`, устанавливается **Яндекс Браузер для организаций** — специальная сборка, поддерживающая корпоративные функции, например, управление при помощи групповых политик. Однако её можно использовать и на домашних компьютерах.
:::

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @apps/.parts/install/content-epm-play.md-->

## Полезные советы и дополнения

### Запуск Яндекс Браузера в оконном интерфейсе Wayland

По умолчанию Яндекс Браузер запускается в оконном интерфейсе X11, для запуска в оконном интерфейсе Wayland:

1. Введите в Умную строку адрес `browser://flags`
2. Введите в строку поиска флаг `#ozone-platform-hint`
3. Выберите значение `Auto` для опции `Preferred Ozone platform`
4. Перезапустите Яндекс Браузер и проверьте результат

![Запуск Яндекс Браузера в оконном интерфейсе Wayland](/yandex-browser/yandex-browser-2.gif)

Запустить Яндекс Браузер через терминал указав дополнительные опции запуска:

```shell
yandex-browser-stable --ozone-platform-hint=auto
```

:::info
С версии `24.6.1.893` приложения Яндекс Браузера, параметр запуска по умолчанию `--ozone-platform-hint=auto`

Данный параметр задан «жеско» ([51301](https://bugzilla.altlinux.org/51301)), если вы хотите изменить оконный интерфейс приложения, предварительно выполните следующие действия в терминале:

```shell
export YANDEX_DISABLE_WAYLAND=True
```
:::

После ввода и перезапуска Яндекс Браузера, вы можете изменить параметр `ozone-platform-hint`.

:::tip
Для запуска Яндекс Браузера версии Flatpak, необходимо разрешить список сокетов:

- Оконная система Wayland
- Возврат к оконной системе X11

:::info
Удобным способом управления Flatpak-приложений является приложение [Flatseal](flatseal)
:::

### Как вернуть стандартный вид окна в рабочем окружении GNOME

По умолчанию Браузер не использует системную рамку окна в Linux и изменяет дизайн элементов управления. Если вы хотите вернуть стандартный вид окна и элементов управления Linux:

1. Введите в Умную строку адрес `browser://flags`
2. Введите в строку поиска флаг `#enable-system-frame`
3. Включите опцию `System window controls`
4. Перезапустите Браузер и проверьте результат.

::: warning
Данная настройка является экспериментальной, после её включения возможны неполадки в работе Браузера. В этом случае отключите опцию и напишите нам через форму
:::

![стандартный вид окна в рабочем окружении GNOME](/yandex-browser/yandex-browser.gif)

### Video DownloadHelper

Как известно, **Яндекс Браузер** , как и другие браузеры, обладает множеством расширений. **Video DownloadHelper** не исключение.
Однако не так давно, приложение компаньон обновилось и поменяло своё название на VdhCoApp.
В настоящее время в EPM существует возможность установки нового приложения-компаньона для корректной работы **Video DownloadHelper**.

Для установки приложения компаньона используем консоль и EPM версии **3.60.9** или выше

```shell
epm play vdhcoapp
```

:::info
Далее описан вариант для версии EPM ниже **3.60.9**
:::

Если Вы используете **Video DownloadHelper** и столкнулись с проблемой обновления приложения-компаньона, но после его установки в Яндекс Браузере не заработало, необходимо выполнить следующие действия.

```shell
cd ~
wget https://github.com/aclap-dev/vdhcoapp/releases/download/v2.0.10/vdhcoapp-2.0.10-linux-x86_64.tar.bz2
tar xf vdhcoapp-2.0.10-linux-x86_64.tar.bz2 -C $HOME/.local/share/
$HOME/.local/share/vdhcoapp-2.0.10/vdhcoapp install
rm $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
echo -e '{\n"type": "stdio",\n"allowed_origins": [\n"chrome-extension://lmjnegcaeklhafolokijcfjliaokphfk/",\n"chrome-extension://pfoiagbblcbmognbkekfpodpidedkmcc/",\n"chrome-extension://jmkaglaafmhbcpleggkmaliipiilhldn/",\n"chrome-extension://fojefjolbhfidomcaelhceoldmmpcaga/"\n],\n  "name": "net.downloadhelper.coapp",\n"description": "Video DownloadHelper companion app",\n"path": "'$HOME'/.local/share/vdhcoapp-2.0.10/vdhcoapp"\n}' >> $HOME/.config/yandex-browser/NativeMessagingHosts/net.downloadhelper.coapp.json
```

Запускаем Яндекс Браузер.

## Известные проблемы

### Не воспроизводится видео в Яндекс Браузере:

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

### Как исправить артефакты «моргания» в Яндекс Браузере при использовании закрытых драйверов NVIDIA

Открыть Яндекс Браузер, произвести дополнительную настройку:

1. В поисковой строке запустить: `browser://flags/`
2. Введите в строку поиска флаг `#enable-vulkan`, включите опцию Enabled
3. Введите в строку поиска флаг `#enable-flutter-suggest`, включите опцию Disabled
4. Перезапустите Яндекс Браузер и проверьте результат

### Сбой графики при открытии Яндекс Браузера.

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

### Отключить окно фонового режима

В рабочем окружении GNOME нет интерфейса трея на верхней панели, поэтому окно фоновых приложений выглядит именно так, как на скриншоте.

![Окно фоновых процессов](/yandex-browser/yandex-browser-3.png 'Окно фоновых процессов')

Вы можете отключить данную функцию, тем самым скрыть данное окно, для этого:

- Нажмите на значок перехода в главное меню (три горизонтальные полоски на верхней панели).
- Выберите пункт «Настройки».
- В разделе «Системные» найдите блок «Фоновый режим».
- Снимите отметку у параметра «Разрешить работу в фоне».

#### Зачем нужен фоновый режим?

В фоновом режиме часть функций браузера продолжает работать даже после его закрытия и включается автоматически при запуске компьютера.

Вот несколько функций(задач), которые дает работа браузера в фоновом режиме:

- Регулярное обновление антивирусных баз.
- Более быстрое открытие браузера при запуске, что особенно важно, когда открыто много вкладок.
- Получение уведомлений от сайтов.
- Работа фоновых расширений, таких как прокси-расширения.
