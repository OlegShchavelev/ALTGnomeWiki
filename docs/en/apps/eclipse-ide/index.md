---
aggregation:
  flatpak: org.eclipse.Java
appstream:
  id: org.eclipse.Java
  name: Eclipse IDE
  icon: /eclipse-ide/eclipse-ide-logo.svg
  summary: Integrated Development Environment (IDE) for Java.
  metadata_license:
    name: EPL-2.0
    link: https://www.eclipse.org/legal/epl-2.0/
  developer:
    name: Eclipse Foundation, Inc.
  url:
    homepage: https://www.eclipse.org/
    bugtracker: https://bugs.eclipse.org/bugs/
gallery:
  title: Gallery
  type: slider
  images:
    - src: /eclipse-ide/eclipse-ide-1.png
    - src: /eclipse-ide/eclipse-ide-2.png
---

# Eclipse IDE

The Eclipse IDE is an integrated development environment (IDE) that contains a basic workspace and an extensible system of plug-ins for customizing the environment. Eclipse is written in Java and is used to develop applications in the same language, but it can also be used to develop in other programming languages ​​using plug-ins.

<Gallery />

## Eclipse IDE Editions

Eclipse IDE for Java Developers - essential tools for any Java developer, including Java IDE, Git client, XML editor, Maven ant Gradle integration

Eclipse IDE for Web and JavaScript Developers - essential tools for any JavaScript developer, including JavaScript language support, a Git client, Mylyn, and editors for JavaScript, HTML, CSS, and XML.

<!--@include: @en/apps/.parts/install/content-flatpak.md-->

In the same way you can install Eclipse IDE for Web and JavaScript Developers

```shell
flatpak install flathub org.eclipse.Javascript
```

Or through [GNOME Software](/en/apps/gnome-software/) by following [this link](appstream://org.eclipse.Javascript)
