---
aggregation:
  flatpak:
    id: com.opera.Opera
    build: unofficial
  epm:
    play:
      id: opera
      build: unofficial
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

Opera — быстрый, безопасный и удобный браузер, в котором есть всё необходимое для конфиденциальной и безопасной работы в Интернете.

<!--@include: @ru/apps/.parts/warns/unprivileged-spaces.md-->
<!--@include: @ru/apps/.parts/install/content-flatpak.md-->
<!--@include: @ru/apps/.parts/install/content-epm-play.md-->

## Выбор предпочитаемого языка (русификация браузера Opera)

При первом запуске Opera, используется язык английский. Переключить язык можно в настройках:

1. Откройте `Easy setup`
2. Внизу контекстного меню выберите пункт `Go to browser settings`
3. В поиске введите `lang`

Также, можно сразу открыть искомый раздел настроек через адресную строку браузера:

```
opera://settings/?search=lang
```

В разделе `Preferred languages` нажмите `Add languages` и выберите из списка `Russian`. Перезапустите браузер для изменение параметра запуска приложения.

Для простоты настройки рекомендуется установить приложение [PinApp](/pin-app). Выберите приложение **Opera**, сделайте `Pin` и внесите следующие параметр `--lang=ru` в поле `Exec`:

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

После изменения параметров запуска, перезайдите в учётную запись или перезагрузитесь

![opera](/opera/opera-1.png)
