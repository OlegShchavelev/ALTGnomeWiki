---
aggregation:
  epm:
    play:
      id: myoffice
      build: unofficial
appstream:
  name: MyOffice
  icon: /my-office/my-office-logo.svg
  summary: A set of free text document and spreadsheet editors for solving everyday problems on your home computer.
  keywords:
    - proprietary
  metadata_license:
    name: Proprietary
    link: https://myoffice.ru/eula/
  developer:
    name: LLC "New Cloud Technologies"
  url:
    homepage: https://myoffice.ru/
---

# MyOffice

MyOffice is a set of free text, spreadsheet and other processors for solving everyday problems on your home computer.

- **High level of security**: Use products entirely developed in Russia.
- **Supports popular formats**: Create, view and edit documents in all popular formats - ODT, DOCX, ODS, XLSX and others.
- **A complete set of the most important functions**: Edit documents, format texts and work with spreadsheets.

<!--@include: @en/apps/.parts/install/content-epm-play.md -->

## Installation from the official website

Download the `.rpm` package from the `myoffice-standard-home-edition` application releases page from the manufacturer's official website, then install via terminal:

::: code-group

```shell[apt-get]
su -
cd $HOME/Downloads
apt-get install myoffice-standard-home-edition-*.rpm

```

```shell[epm]
сd $HOME/Downloads
epm -i myoffice-standard-home-edition-*.rpm
```

:::

## Editions MyOffice

### MyOffice Standard <Badge type="warning" text="Home edition" />

Includes: a text editor for working with documents and a program for working with spreadsheets, not intended for commercial use.

### MyOffice Standard

Includes: a complete set of office programs.

Designed for both home and commercial use. This version includes technical support from the software manufacturer.
