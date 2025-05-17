---
aggregation:
  flatpak:
    id: com.wps.Office
    build: unofficial
  epm:
    play:
      id: wpsoffice
      build: unofficial
appstream:
  id: com.wps.Office
  name: WPS Office
  icon: /wps-office/wps-office-logo.svg
  summary: Универсальный пакет Office приложений
  keywords:
    - proprietary
  developer:
    name: Kingsoft Corporation
    avatar: /wps-office/wps-office-avatar.png
  metadata_license:
    name: Собственная
    link: https://www.wps.com/eula/
  url:
    homepage: https://www.wps.com/office/linux/
    bugtracker: https://help.wps.com/
gallery:
  title: Галерея
  type: slider
  items:
    - src: /wps-office/wps-office-1.png
    - src: /wps-office/wps-office-2.png
    - src: /wps-office/wps-office-3.png
    - src: /wps-office/wps-office-4.png
---

# WPS Office

WPS Office — офисный пакет, разрабатываемый Kingsoft Office Software. Продукт предоставляет, пожалуй, лучшую совместимость с файлами Microsoft Office.

WPS Office включает следующие приложения:

- Document
- Excel
- Presentation
- PDF

<AGWGallery />

<!--@include: @apps/.parts/install/content-flatpak.md-->

<!--@include: @apps/.parts/install/content-epm-play.md-->

::: tip Если хотите версию свежее - доступна китайская версия

Глобально доступна только 11 версия, но через eepm можно установить китайскую.

(Доступна с выпуска `EPM` 3.64.28)

```shell
epm play wpsoffice-cn
```
:::
