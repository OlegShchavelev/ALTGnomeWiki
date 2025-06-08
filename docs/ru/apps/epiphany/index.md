---
aggregation:
  flatpak: org.gnome.Epiphany
  sisyphus: epiphany
appstream:
  id: org.gnome.Epiphany
  name: Веб-Браузер
  icon: /epiphany/Epiphany-Logo.svg
  summary: Простой, чистый и красивый вид Интернета
  keywords:
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://apps.gnome.org/ru/Epiphany/
    bugtracker: https://gitlab.gnome.org/GNOME/epiphany/-/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /epiphany/epiphany-1.png
    - src: /epiphany/epiphany-2.png
    - src: /epiphany/epiphany-3.png
    - src: /epiphany/epiphany-4.png
    - src: /epiphany/epiphany-5.png
    - src: /epiphany/epiphany-6.png
    - src: /epiphany/epiphany-7.png
    - src: /epiphany/epiphany-8.png
---

# Веб-браузер

Веб-браузер для рабочего стола GNOME, обеспечивающий тесную интеграцию с рабочим столом, имеющий простой и интуитивно-понятный интерфейс, который позволяет вам сосредоточиться на веб-страницах. Если вы ищете простой, лёгкий и красивый веб-браузер, то вы его нашли.

<AGWGallery />

<!--@include: @ru/apps/.parts/install/content-repo.md-->
<!--@include: @ru/apps/.parts/install/content-flatpak.md-->

## Выбор поисковой системы Яндекс

Перейдите в Главное меню -> Параметры или с помощью комбинации клавиш [[ctrl]] + [[,]]. В блоке «Поисковые системы» добавьте поисковую систему Яндекс, заполнив следующие поля:

- Имя: Яндекс
- Адрес: https://www.ya.ru/search?text=%s
- Комбинация клавиш: `!я`

![Добавить поисковую систему Яндекс](/epiphany/epiphany-9.png)
