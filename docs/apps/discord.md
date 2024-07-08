---
aggregation:
  flatpak:
    id: com.discordapp.Discord
    build: official
  epm:
    play:
      id: discord
      build: unofficial
appstream:
  id: com.discordapp.Discord
  name: Discord
  icon: /discord/discord-logo.svg
  summary: Клиент для обмена сообщениями, аудио и видеосвязи
  metadata_license:
    name: CC0-1.0
    link: https://choosealicense.com/licenses/cc0-1.0/
  keywords:
    - proprietary
  developer:
    name: Discord Inc.
  url:
    homepage: https://discord.com/
---

# Discord

Discord — платформа для голосового общения и обмена текстовыми сообщениями в реальном времени, предназначенная для геймеров и игровых сообществ. Она позволяет общаться с друзьями и координировать действия во время игр, а также создавать каналы для обмена контентом.

![Discord](/discord/discord-1.png)

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->
