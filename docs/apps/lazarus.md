---
title: Lazarus
nameRepo: lazarus
appstreamRepo: lazarus.desktop
aggregation: 
    sisyphus: lazarus
appstream:
    id: lazarus.desktop
    name: Lazarus
    icon: /lazarus/lazarus-logo.svg
    summary: Открытая среда программного обеспечения на языке Object Pascal для компилятора Free Pascal.
    metadata_license: 
        name: GNU GPLv3
        link: https://choosealicense.com/licenses/gpl-3.0/
    developer: 
        name: Lazarus and Free Pascal Team 
    url: 
        homepage: https://www.lazarus-ide.org/
        bugtracker: https://gitlab.com/freepascal.org/lazarus/lazarus/issues
---



# Lazarus

Lazarus — открытая среда программного обеспечения на языке Object Pascal для компилятора Free Pascal.
Основная цель - предоставление кроссплатформенных и свободных средств разработки в Delphi-подобном окружении. Позволяет переносить Delphi-программы с графическим интерфейсом в различные операционные системы, в том числе на ALT Regular Gnome.


## Установка из репозитория 

**Lazarus** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install lazarus fpc
```

```shell[epm]
epm -i lazarus fpc
```

