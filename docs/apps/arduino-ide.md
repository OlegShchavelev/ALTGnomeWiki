---
aggregation:
  flatpak:
    id: cc.arduino.arduinoide
    build: official
  sisyphus: arduino
appstream:
  id: cc.arduino.arduinoide.desktop
  name: Arduino IDE
  icon: /arduino-ide/arduino-ide-logo.png
  summary: IDE для разработки программ для Arduino-совместимых плат
  developer:
    name: Arduino LLC
  metadata_license:
    name: GNU LGPLv2.1
    link: https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html
  url:
    homepage: https://arduino.cc/
    bugtracker: https://github.com/arduino/Arduino/issues/
    translate: https://github.com/arduino/Arduino/tree/master/arduino-core/src/processing/app/i18n/
    help: https://www.arduino.cc/en/Guide/
    donation: https://github.com/sponsors/arduino
---

# Arduino IDE

Arduino IDE — интегрированная среда разработки для Windows, MacOS и Linux, разработанная с использованием технологии Electron, предназначенная для создания и загрузки программ на языках C и C++ для Arduino-совместимых плат, а также для плат других производителей.

![Arduino IDE](/arduino-ide/arduino-ide-1.png)

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->

## Настройка корректной работы с платой по USB

```shell
su - 
usermod -aG dialout,tty,uucp $USER
```

## Издания Arduino IDE

Arduino IDE v2 — вторая версия Arduino IDE предоставляет обновлённый интерфейс, который облегчает работу с несколькими файлами. Встроенная система вкладок упрощает переключение между файлами и способствует более организованной разработке. Новая функция в Arduino IDE v2 – это встроенная отладка.

![Arduino IDE](/arduino-ide/arduino-ide-2.png)
