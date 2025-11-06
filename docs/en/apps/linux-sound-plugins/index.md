---
aggregation:
  sisyphus: lsp-plugins
appstream:
  id: in.lsp_plug
  name: Linux Sound Plugins
  icon: /linux-sound-plugins/linux-sound-plugins.svg
  summary: A set of audio processing and mastering plugins.
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

Linux Sound Plugins is a collection of open source audio processing plugins. Compressors, equalizers, gates, delays...

The project is currently being developed and maintained by the LSP Project Team, led by the main founder and developer, Vladimir Sadovnikov. The main idea is to fill the lack of good and useful plugins for the GNU/Linux platform.

The following plugin formats are supported: CLAP, JACK, LADSPA, LV2, VST2, VST3

![Linux Sound Plugins](/linux-sound-plugins/linux-sound-plugins-1.png)

To connect plugins in a sound recording program, for example Reaper, in the [[Options/Preferences]] menu, you need to go to the [[Plug-ins/VST]] tab, click on the [[Edit path list...]] button and select [[Add patch...]] and specify the path to the directory with plugins. For example: `/usr/lib64/vst/lsp-plugins.vst`

![Linux Sound Plugins](/linux-sound-plugins/linux-sound-plugins-2.png)

<!--@include: @en/apps/.parts/install/content-repo.md-->
