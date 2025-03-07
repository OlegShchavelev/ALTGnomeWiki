---
aggregation:
  flatpak: fm.reaper.Reaper
appstream:
  id: fm.reaper.Reaper
  name: Reaper
  icon: /reaper/reaper-logo.svg
  summary: Программная среда для создания, обработки, мастеринга аудио.
  keywords:
    - proprietary
  developer:
    name: Cockos
    avatar: https://www.cockos.com/images/rooster.gif
  metadata_license:
    name: Собственная
    link: https://www.reaper.fm/dist-agreement.php
  url:
    homepage: https://www.reaper.fm/index.php
    bugtracker: https://forum.cockos.com/forumdisplay.php?f=22
---

# Reaper

Reaper — программная среда для аудио производства, записи и аудио инженеринга. Аудио станция обладает широкими функциональными возможностями и является развитой, профессиональной рабочей системой для создания, записи, редактирования и микширования аудио и MIDI материала, а также мастеринга композиций.

![Reaper](/reaper/reaper-1.png)


## Подключение аудиоинтерфейса

В меню Options/Preferences необходимо перейти на вкладку Audio/Device и выбрать аудиосистему, нужный аудиоинтерфейс и расставить каналы. Для использования JACK необходимо дополнительно установить пакет `pipewire-jack` и `qjackctl`.

Проверить работу интерфейса можно следующим образом: добавить новую дорожку [[Ctrl + T]], выбрать нужный канал и нажать кнопку «Rec» ([[Ctrl + R]])

![Reaper](/reaper/reaper-audio_setting.png)

## Подключение нативных VST-плагинов

Для удобства рекомендуется положить скачанные/приобретённые плагины в один каталог в распакованном виде. Далее в меню Options/Preferences необходимо перейти на вкладку Plug-ins/VST, нажать на кнопку «Edit path list...» и выбрать пункт «Add patch...» и указать путь к каталогу с плагинами. После того, как новый путь был выбран, необходимо нажать на кнопку «Re-scan...» и выбрать пункт «Clear cache and re-scan VST paths for all plug-ins» или перезагрузить Reaper.

::: warning Важно!
Нажав в меню «Edit path list...» на уже существующий путь, он удалится!
:::

Для плагинов в формате LV2 в меню Options/Preferences необходимо перейти на вкладку Plug-ins/LV2, нажать на кнопку «Edit path list...» и выбрать пункт «Add patch» и указать путь к каталогу с плагинами. После того, как новый путь был выбран необходимо нажать на кнопку «Re-scan...».

![Reaper](/reaper/reaper-plug-ins-1.png)

![Reaper](/reaper/reaper-plug-ins-2.png)

<!--@include: @apps/.parts/install/content-flatpak.md-->
