---
aggregation:
  sisyphus: zed
  flatpak: dev.zed.Zed
appstream:
  id: dev.zed.Zed
  icon: /zed/dev.zed.Zed.jpeg
  name: Zed
  summary: Высокопроизводительный редактор кода
  developer:
    name: Zed Industries
  metadata_license:
    name: MIT
  url:
    homepage: https://zed.dev/
    help: https://zed.dev/docs/getting-started/
    faq: https://zed.dev/faq/
    bugtracker: https://github.com/zed-industries/zed/issues/
gallery:
  title: Галерея Zed
  type: slider
  items:
    - src: /zed/zed-1.png
    - src: /zed/zed-2.png
    - src: /zed/zed-3.png
    - src: /zed/zed-4.png
    - src: /zed/zed-5.png
    - src: /zed/zed-6.png
    - src: /zed/zed-7.png
    - src: /zed/zed-8.png
---

# Zed

Продуктивное программирование начинается с инструмента, который не будет отвлекать вас от работы. Zed объединяет в себе возможности интегрированной среды разработки (IDE) и скорость лёгкого редактора, чтобы вы могли ощутить повышение производительности в процессе работы.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->

## Телеметрия в Zed

Zed предоставляет возможность пользователю передавать анонимные данные телеметрии, чтобы помочь разработчикам понять, как пользователи используют приложение, и узнать, с какими проблемами они сталкиваются.

:::info
C версии `0.147.2-alt1`, телеметрия по умолчанию отключена. Если вы хотите передавать разработчику данные необходимо включить в настройках или на экране `welcome`
:::

### Настройка параметров телеметрии

Вы полностью контролируете, какие данные отправляет ваше приложение Zed. Чтобы включить или отключить некоторые или все типы телеметрии, откройте свой `settings.json` из панели команд ([[F1]]), введите `zed: open settings` или с помощью меню User Menu -> Settings ([[ctrl]]+[[,]]). Вставьте и настройте следующее:

```json
"telemetry": {
  "diagnostics": true,
    "metrics": true
},
```

Вы можете выполнить аудит данных показателей, представленных Zed, выполнив команду `zed: open telemetry log` из палитры команд [[F1]] или лог с помощью меню Application Menu > View Telemetry.
