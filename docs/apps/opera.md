---
aggregation:
    flatpak:
        id: com.opera.Opera
        build: unoffical
    epm:
        play:
            id: opera
            build: unoffical
appstream:
    id: com.opera.Opera
    name: Opera
    icon: /opera/opera-logo.svg
    summary: Быстрый, безопасный и удобный браузер, в котором есть всё необходимое для конфиденциальной и безопасной работы в интернете.
    metadata_license:
        name: Собственная
        link: https://legal.opera.com/eula/computers/eula.html
    keywords:
        - proprietary
    developer:
        name: Opera Software
    url:
        homepage: https://www.opera.com/
---



# Opera

Opera — быстрый, безопасный и удобный браузер, в котором есть всё необходимое для конфиденциальной и безопасной работы в интернете.

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->

## Выбор предпочитаемого языка (русификация браузера Opera)

При первом запуске браузера Opera, приложение использует язык English (United States), изменим предпочтительный язык на Русский:

1. Откройте «Easy setup»
2. В контекстном меню, выберите пункт «Go to full browser settings»
3. В поиске введите «land»

или в строке вывидите `opera://settings/?search=lang`

В настройке «Preferred languages», нажмите «Add languages» и выберите из списка `Russian`. Закройте браузер для изменение параметра запуска приложения.

Для простоты настройки, мы рекомендуем установить приложение [PinApp](/pin-app), выбирите приложение **Opera**, сделайте Pin и внесите следующие параметр `--lang=ru` в поле `Exec`:

::: code-group

```[flatpak]
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=opera --file-forwarding com.opera.Opera @@u %U @@ // [!code --]
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=opera --file-forwarding com.opera.Opera --lang=ru @@u %U @@ // [!code ++]
```

```[epm play]
opera %U // [!code --]
opera --lang=ru %U // [!code ++]
```
:::

После изменения параметра запуска, выйдите из сессии и авторизируйтесь повторно на эране входа или перезапустите операционную систему ALT Regular Gnome

![opera](/opera/opera-1.png)
