---
aggregation:
  flatpak:
    id: com.microsoft.Edge
    build: unofficial
  epm:
    play:
      id: edge
      build: unofficial
appstream:
  id: com.microsoft.Edge
  name: Microsoft Edge
  icon: /microsoft-edge/microsoft-edge-logo.svg
  summary: Web browser from Microsoft
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

Microsoft Edge is a browser released in 2015 by Microsoft, a replacement for Internet Explorer, based on [Chromium](/en/apps/chromium/).

<!--@include: @en/apps/.parts/install/content-flatpak.md-->
<!--@include: @en/apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @en/apps/.parts/install/content-epm-play.md-->
