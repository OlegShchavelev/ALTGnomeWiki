---
aggregation:
  flatpak:
    id: com.github.geigi.cozy
    build: unofficial
  sisyphus: cozy
appstream:
  id: com.github.geigi.cozy
  name: Cozy
  icon: /cozy/cozy-logo.svg
  summary: Audiobook player
  metadata_license:
    name: GNU GPLv3
    link: https://github.com/geigi/cozy/blob/master/LICENSE
  developer:
    name: Julian Geywitz and community
    nickname: geigi, rdbende and more...
  url:
    homepage: https://cozy.sh/
gallery:
  title: Gallery
  type: slider
  images:
    - src: /cozy/cozy-1.png
    - src: /cozy/cozy-2.png
    - src: /cozy/cozy-3.png
    - src: /cozy/cozy-4.png
    - src: /cozy/cozy-5.png
---

# Cozy

Do you like audiobooks? Then make yourself comfortable...

Cozy is an audiobook player. Here are some features:

- Supports the import of audiobooks into your own library and organizes its convenient viewing;
- Allows you to listen to audiobooks in the following formats: mp3, m4b, m4a (aac, ALAC), flac, ogg and wav (see notes below);
- Remembers the place where playback stopped and continues from the remembered place;
- Manages the sleep timer;
- Controls playback speed individually for each book;
- Supports library search and multiple places to scan audiobook files;
- Has an offline mode that allows you to save the audiobook in your own storage, for example, if your audiobooks are usually located on an external or network drive. This mode is ideal for listening on the go;
- Controlled using Drag and Drop. Just drag and drop audiobooks into the program window;
- Sorts audiobooks by name, author or speaker.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

::: warning IMPORTANT
There were problems with adding and playing audiobooks in some formats (for example, m4b format). Playback of files with playback copy protection (DRM) is not supported.
:::

::: tip TIP
Works in Wayland and Xorg environment.
:::

To remove metadata and the entire library, remove the directories:

```shell
rm -rfv ~/.local/share/cozy
rm -rfv ~/.cache/cozy
```
