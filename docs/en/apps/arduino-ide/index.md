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
  summary: IDE for developing programs for Arduino-compatible boards
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

Arduino IDE is an integrated development environment for Windows, MacOS and Linux, developed using Electron technology, designed for creating and loading programs in C and C++ for Arduino-compatible boards, as well as for boards from other manufacturers.

![Arduino IDE](/arduino-ide/arduino-ide-1.png)

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Configuring correct operation with the board via USB

```shell
su -
usermod -aG dialout,tty,uucp $USER
```

## Arduino IDE Editions

Arduino IDE v2 - The second version of the Arduino IDE provides an updated interface that makes it easier to work with multiple files. The built-in tab system makes it easy to switch between files and promote more organized development. A new feature in Arduino IDE v2 is built-in debugging.

![Arduino IDE](/arduino-ide/arduino-ide-2.png)
