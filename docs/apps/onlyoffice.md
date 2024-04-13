---
title: OnlyOffice
appstreamFlatpak: org.onlyoffice.desktopeditors
aggregation: 
    flatpak: org.onlyoffice.desktopeditors
appstream:
    id: org.onlyoffice.desktopeditors
    name: OnlyOffice
    icon: /onlyoffice/onlyoffice-logo.svg
    summary: Офисный пакет с открытым исходным кодом, разработанный компанией Ascensio System SIA с головным офисом в Риге (Латвия). 
    metadata_license: 
        name: GNU AGPLv3
        link: https://www.gnu.org/licenses/agpl-3.0.html
    developer: 
        name: Ascensio System SIA
    url: 
        homepage: https://www.onlyoffice.com/
        bugtracker: https://www.openoffice.org/qa/ooQAReloaded/ooQA-ReportBugs.html
        donation: https://www.openoffice.org/donations.html
---



# OnlyOffice 

OnlyOffice — офисный пакет с открытым исходным кодом, разработанный компанией Ascensio System SIA с головным офисом в Риге (Латвия). Объеденяет редакторы текста, электронных таблиц и презентаций, позволяющий создавать, просматривать и редактировать документы, хранящиеся на вашем ПК с ALT Regular Gnome без подключения к Интернету. Он полностью совместим с форматами Office Open XML: .docx, .xlsx, .pptx. 

## Установка c помощью Flatpak <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [Flatpak](/flatpak), можно установить **OnlyOffice** одной командой:

```shell
flatpak install flathub org.onlyoffice.desktopeditors
```

<!--@include: ./parts/install/software-flatpak.md-->

## Установка c помощью epm play <Badge type="danger" text="Неофициальная сборка" />

При наличии пакета [eepm](/epm), можно установить **OnlyOffice** одной командой:

```shell
epm play onlyoffice
```