---
aggregation:
  sisyphus: lsp-plugins
appstream:
  id: in.lsp_plug
  name: Linux Sound Plugins
  icon: /linux-sound-plugins/linux-sound-plugins.svg
  summary: Набор плагинов обработки, мастеринга аудио.
  developer:
    name: LSP Project Team
    avatar: https://avatars.githubusercontent.com/u/88401241?s=200&v=4
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://lsp-plug.in/
    bugtracker: https://lsp-plug.in/?page=feedback
---

# Linux Sound Plugins

Linux Sound Plugins — коллекция плагинов для обработки звука с открытым исходным кодом. Компрессоры, эквалайзеры, гейт, делеи...

В настоящее время проект разрабатывается и поддерживается командой LSP Project Team во главе с основным основателем и разработчиком — Владимиром Садовниковым. Основная идея — восполнить недостаток хороших и полезных плагинов под платформу GNU/Linux.

Поддерживаются следующие форматы плагинов: CLAP, JACK, LADSPA, LV2, VST2, VST3

![Linux Sound Plugins](/linux-sound-plugins/linux-sound-plugins-1.png)

Для подключения плагинов в программе записи звука, например Reaper в меню [[Options/Preferences]] необходимо перейти на вкладку [[Plug-ins/VST]], нажать на кнопку [[Edit path list...]] и выбрать пункт [[Add patch...]] и указать путь к каталогу с плагинами. Например: `/usr/lib64/vst/lsp-plugins.vst`

![Linux Sound Plugins](/linux-sound-plugins/linux-sound-plugins-2.png)

<!--@include: @ru/apps/.parts/install/content-repo.md-->
