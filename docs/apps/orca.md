---
aggregation:
  sisyphus: orca
appstream:
  id: orca.desktop
  name: Orca
  icon: /orca/orca-logo.svg
  summary: Редактор меню для GNOME, использующий спецификацию меню freedesktop.org.
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png
  metadata_license:
    name: GNU LGPLv2.1
    link: https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html
  url:
    homepage: https://orca.gnome.org/
    bugtracker: https://gitlab.gnome.org/GNOME/orca
---

# Orca

Orca — это бесплатное, гибкое и расширяемое приложение для чтения с экрана с открытым исходным кодом, которое обеспечивает доступ к графическому рабочему столу с помощью настраиваемых пользователем комбинаций речи и / или шрифта Брайля.

Orca работает с приложениями и наборами инструментов, поддерживающими интерфейс поставщика услуг вспомогательных технологий (AT-SPI), который является основной инфраструктурой вспомогательных технологий для бесплатных и открытых настольных компьютеров.

## Установка из репозитория

**Orca** можно установить любым привычным и удобным способом:

**Установка через терминал**

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install orca
```

```shell-vue[epm]
epm -i orca
```

:::

## Чтение с экрана в фоне

Для того, чтобы Orca сама запускалась в фоне, необходимо в Настройках перейдите в раздел «Специальные возможности»:

![Раздел «Специальные возможности»](/orca/orca-1.png)

Далее перейдите в раздел «Зрение» и активируйте опцию «Чтение с экрана»:

![Включение «Чтения с экрана»](/orca/orca-2.png)

Теперь Orca будет активна в фоне

## Интеграция русского языка

Из коробки Orca имеет два синтезатора речи — Flite и eSpeak NG, однако из коробки они оба не поддерживает работают с русским довольно плохо, но здесь на помощь придёт синтезатор [RHVoice](https://rhvoice.ru/).

### Установка RHVoice

Для того, чтобы добавить поддержку русского языка, для начала нужно установить сам синтезатор RHVoice. Он доступен в репозитории Сизиф:

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install RHVoice
```

```shell-vue[epm]
epm -i RHVoice
```

:::

Далее необходимо установить голоса для синтезатора всего на данный момент в репозитории Сизиф их 18. Ниже приведена команда для установки всех голосов разом:

::: tip

Если вы используете стандартную оболочку Bash, то можете воспользоваться упрощённой версией команды для `apt-get`:

::: code-group

```shell-vue[apt-get]
su -
apt-get install RHVoice-Russian-*
```

:::

::: code-group

```shell-vue[apt-get]
su -
apt-get install RHVoice-Russian-aleksandr RHVoice-Russian-aleksandr-hq RHVoice-Russian-anna RHVoice-Russian-arina RHVoice-Russian-artemiy RHVoice-Russian-elena RHVoice-Russian-evgeniy RHVoice-Russian-irina RHVoice-Russian-mikhail RHVoice-Russian-pavel RHVoice-Russian-tatiana RHVoice-Russian-timofey RHVoice-Russian-umka RHVoice-Russian-victoria RHVoice-Russian-vitaliy RHVoice-Russian-vitaliy-ng RHVoice-Russian-vsevolod RHVoice-Russian-yuriy
```

```shell-vue[epm]
epm -i RHVoice-Russian-aleksandr RHVoice-Russian-aleksandr-hq RHVoice-Russian-anna RHVoice-Russian-arina RHVoice-Russian-artemiy RHVoice-Russian-elena RHVoice-Russian-evgeniy RHVoice-Russian-irina RHVoice-Russian-mikhail RHVoice-Russian-pavel RHVoice-Russian-tatiana RHVoice-Russian-timofey RHVoice-Russian-umka RHVoice-Russian-victoria RHVoice-Russian-vitaliy RHVoice-Russian-vitaliy-ng RHVoice-Russian-vsevolod RHVoice-Russian-yuriy
```

:::

::: tip
Для отображения голосов в Orca может потребоваться перезагрузка.
:::

### Настройка Orca

Для входа в графический интерфейс Orca используйте следующую команду:

```shell
orca --setup
```

В открывшемся окне перейдите во вкладку «Голос», в пункте «Синтезатор речи» выберите `rhvoice`:

![Выбор «Синтезатора речи»](/orca/orca-3.png)

В пункте «Голос» выберите подходящий вам голос:

![Выбор «Голоса»](/orca/orca-4.png)

Чтобы опробовать голос или проверить разные настройки Orca, но не выходить из меню настроек — нажмите «Применить»

Готово! Осталось только нажать кнопку «ОК».
