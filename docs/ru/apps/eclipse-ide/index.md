---
aggregation:
  flatpak: org.eclipse.Java
appstream:
  id: org.eclipse.Java
  name: Eclipse IDE
  icon: /eclipse-ide/eclipse-ide-logo.svg
  summary: Интегрированная среда разработки (IDE) для Java.
  metadata_license:
    name: EPL-2.0
    link: https://www.eclipse.org/legal/epl-2.0/
  developer:
    name: Eclipse Foundation, Inc.
  url:
    homepage: https://www.eclipse.org/
    bugtracker: https://bugs.eclipse.org/bugs/
gallery:
  title: Галерея
  type: slider
  items:
    - src: /eclipse-ide/eclipse-ide-1.png
    - src: /eclipse-ide/eclipse-ide-2.png
---

# Eclipse IDE

Eclipse IDE — интегрированная среда разработки (IDE), содержащая базовое рабочее пространство и расширяемую систему подключаемых модулей для настройки среды. Eclipse написан на Java и используется для разработки приложений на этом же языке, но его также можно использовать для разработки на других языках программирования с помощью подключаемых модулей.

<AGWGallery />

## Издания Eclipse IDE

Eclipse IDE for Java Developers — необходимые инструменты для любого Java-разработчика, включая Java IDE, клиент Git, редактор XML, интеграцию с Maven ant Gradle

Eclipse IDE for Web and JavaScript Developers — необходимые инструменты для любого разработчика JavaScript, включая поддержку языка JavaScript, Git-клиент, Mylyn и редакторы для JavaScript, HTML, CSS и XML.

<!--@include: @ru/apps/.parts/install/content-flatpak.md-->

Таким же способом можно установить Eclipse IDE for Web and JavaScript Developers

```shell
flatpak install flathub org.eclipse.Javascript
```

Или через [Центр приложений](/gnome-software), перейдя по [данной ссылке](appstream://org.eclipse.Javascript)
