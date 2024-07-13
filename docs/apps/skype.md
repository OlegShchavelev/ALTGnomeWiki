---
aggregation:
  flatpak:
    id: com.skype.Client
    build: unofficial
  epm:
    play:
      id: skype
      build: unofficial
appstream:
  id: com.skype.Client
  name: Skype
  icon: /skype/skype-logo.svg
  summary: Платформа для бесплатных видеозвонков, обмена сообщениями и файлами
  keywords:
    - proprietary
    - restrictions
  developer:
    name: Microsoft Corporation
    avatar: /skype/skype-avatar.svg
  metadata_license:
    name: Собственная
    link: https://www.microsoft.com/en-us/servicesagreement/
  url:
    homepage: https://www.skype.com/
---

# Skype

Skype — платформа для бесплатных видеозвонков, обмена сообщениями и файлами, которая позволяет пользователям общаться с друзьями и близкими в реальном времени на любых устройствах.

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->
