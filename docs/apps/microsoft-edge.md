---
aggregation:
    flatpak: 
        id: com.microsoft.Edge
        build: unoffical
    epm:
        play:
            id: edge
            build: unoffical
appstream:
    id: com.microsoft.Edge
    name: Microsoft Edge
    icon: /microsoft-edge/microsoft-edge-logo.svg
    summary: Веб-браузер от Microsoft
    metadata_license: 
        name: CC0-1.0
        link: https://choosealicense.com/licenses/cc0-1.0/
    keywords:
        - proprietary
        - restrictions
    developer:
        name: Microsoft Corporation
        avatar: /microsoft-edge/microsoft-edge-avatar.svg
    url:
        homepage: https://microsoft.com/edge
        bugtracker: https://github.com/MicrosoftEdge/Status/issues
---

# Microsoft Edge

Браузер от Microsoft, выпущенный в 2015 году, замена Internet Explorer, основан на Chromium.

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/warns/unpriveleged-spases.md -->
<!--@include: @apps/_parts/install/content-epm-play.md-->