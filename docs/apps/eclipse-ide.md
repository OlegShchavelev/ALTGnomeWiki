---
aggregation: 
    flatpak: org.eclipse.Java
appstream:
    id: org.eclipse.Java
    name: Eclipse IDE
    icon: /eclipse-ide/eclipse-ide-logo.svg
    summary: Интегрированная среда разработки (IDE) для Java, используемая в компьютерном программировании.
    metadata_license: 
        name: EPL-2.0
        link: https://www.eclipse.org/legal/epl-2.0/
    developer: 
        name:  Eclipse Foundation, Inc. 
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

Eclipse IDE — интегрированная среда разработки (IDE), используемая в компьютерном программировании. Она содержит базовое рабочее пространство и расширяемую систему подключаемых модулей для настройки среды. Eclipse написан в основном на Java и в основном используется для разработки приложений на Java, но его также можно использовать для разработки приложений на других языках программирования с помощью подключаемых модулей.

<AGWGallery />

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **Eclipse IDE** одной командой:

**Установить Eclipse IDE for Java Developers**

```shell
flatpak install flathub org.eclipse.Java
```

:::tip Или с помощью Центра приложений :thinking:
Перейдите по ссылке для <a :href="'appstream://org.eclipse.Java'">установки Eclipse IDE for Java Developers</a>, затем в браузере подтвердите операцию «открыть приложение». После этого откроется Центр приложений, выберите в нём источник **«Flathub»** и нажмите кнопку «скачать»
:::

**Eclipse IDE for Web and JavaScript Developers**

```shell
flatpak install flathub org.eclipse.Javascript
```

:::tip Или с помощью Центра приложений :thinking:
Перейдите по ссылке для <a :href="'appstream://org.eclipse.Javascript'">установки Eclipse IDE for Web and JavaScript Developers</a>, затем в браузере подтвердите операцию «открыть приложение». После этого откроется Центр приложений, выберите в нём источник **«Flathub»** и нажмите кнопку «скачать»
::: 

## Издания Eclipse IDE

**Eclipse IDE for Java Developers** — необходимые инструменты для любого Java-разработчика, включая Java IDE, клиент Git, редактор XML, интеграцию с Maven ant Gradle

**Eclipse IDE for Web and JavaScript Developers** — необходимые инструменты для любого разработчика JavaScript, включая поддержку языка JavaScript, Git-клиент, Mylyn и редакторы для JavaScript, HTML, CSS и XML.