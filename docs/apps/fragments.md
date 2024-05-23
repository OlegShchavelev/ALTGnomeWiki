---
aggregation:
    sisyphus: fragments
    flatpak:
        id: de.haeckerfelix.Fragments
        build: offical
appstream:
    id: de.haeckerfelix.Fragments
    name: Fragments
    icon: /fragments/fragments-logo.svg
    summary: Простой в использовании BitTorrent-клиент.
    keywords:
        - adaptive
        - circle
        - dontthemes
    metadata_license:
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer:
        name: Felix Häcker
        avatar: /fragments/fragments-avatar.png
    url:
        homepage: https://apps.gnome.org/Fragments/
        bugtracker: https://gitlab.gnome.org/World/Fragments/-/issues
        translate: https://l10n.gnome.org/module/Fragments/
gallery:
    title: Галерея
    type: slider
    items:
        - src: /fragments/fragments-1.png
        - src: /fragments/fragments-2.png
---

# Fragments

Fragments — простой в использовании BitTorrent-клиент. Он может использоваться для передачи файлов по протоколу BitTorrent, таких как видео, музыка или установочные образы для дистрибутивов Linux.

<AGWGallery />
<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
