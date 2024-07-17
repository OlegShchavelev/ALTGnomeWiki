---
aggregation:
  extension:
    id: 615
    uuid: appindicatorsupport@rgcjonas.gmail.com
  sisyphus: gnome-shell-extension-appindicator
appstream:
  id: 615
  name: AppIndicator and KStatusNotifierItem Support
  summary: Добавление поддержки AppIndicator, KStatusNotifierItem и устаревших значков в трее в командной строке
  icon: /extensions/default-logo.png
  developer:
    name: 3v1n0
    avatar: https://secure.gravatar.com/avatar/b452213dba394e3fa816db630320e27a?d=mm&s=128
  url:
    homepage: https://github.com/ubuntu/gnome-shell-extension-appindicator
    bugtracker: https://github.com/ubuntu/gnome-shell-extension-appindicator/issues
---

# AppIndicator and KStatusNotifierItem Support

Это расширение интегрирует Ubuntu AppIndicators и KStatusNotifierItems (благословенный преемник системного трея KDE) в оболочку GNOME. Включая поддержку устаревших значков в трее.

- Показывает значки индикаторов на панели
- Открывает меню индикаторов по щелчку мыши
- Двойной щелчок по значку активирует окно приложения (при условии поддержки приложением)
- Устаревшие значки в трее
- Поддержка сессий Xorg и Wayland

<!--@include: ./parts/show-install-steps.md-->
<!--@include: ./parts/install-from-repository.md-->
