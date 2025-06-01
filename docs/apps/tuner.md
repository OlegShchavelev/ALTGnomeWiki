---
aggregation:
  sisyphus: tuner
appstream:
  id: org.altlinux.Tuner
  name: Tuner
  icon: /tuner/color.svg
  summary: Расширяемый центр управления
  keywords:
    - adaptive
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  developer:
    name:     ALT Gnome
    avatar:   /tuner/alt-gnome.png
  url:
    homepage:   https://altlinux.space/alt-gnome/Tuner
    bugtracker: https://altlinux.space/alt-gnome/Tuner/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /tuner/tuner-1.png
    - src: /tuner/tuner-2.png
---
# Тюнер (Tuner)

Тюнер — это вместилище плагинов, а вот плагины содержат сами настройки. Подобный подход удобен не только пользователю, но и сопровождающему, так как в зависимости от образа можно сформировать оптимальный профиль и создать свой набор в зависимости от целей и задач образа.

<AGWGallery />

<!--@include: @apps/.parts/install/content-repo.md-->

## Доступные плагины

### Tweaks

```shell 
su - 
apt-get update
apt-get install tuner-tweaks
```

### Panel

```shell 
su - 
apt-get update
apt-get install tuner-panel
```