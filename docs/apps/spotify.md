---
aggregation:
  flatpak:
    id: com.spotify.Clientflatpak
    build: unofficial
  epm:
    play:
      id: spotify
      build: unofficial
appstream:
  id: com.spotify.Client
  name: Spotify
  icon: /spotify/spotify-logo.svg
  summary: Музыкальный стриминговый сервис.
  keywords:
    - restrictions
    - proprietary
  developer:
    name: Spotify Technology S.A.
  metadata_license:
    name: Собственная
    link: https://www.spotify.com/legal
  url:
    homepage: https://www.spotify.com/
    bugtracker: https://community.spotify.com/t5/Desktop-Linux/bd-p/desktop_linux
---

# Spotify

Spotify — стриминговый сервис, позволяющий легально прослушивать музыкальные композиции, аудиокниги и подкасты, не скачивая их на устройство.

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->
