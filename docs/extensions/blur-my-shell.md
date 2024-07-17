---
aggregation:
  extension:
    id: 3193
    uuid: blur-my-shell@aunetx
  sisyphus: gnome-shell-extension-blur-my-shell
appstream:
  id: 3193
  name: Blur my Shell
  summary: Добавление размытый вид различным частям оболочки GNOME, включая верхнюю панель, док и Обзор.
  icon: https://extensions.gnome.org/extension-data/icons/icon_3193_QedHJZY.png
  developer:
    name: Aurélien Hamy
    nickname: aunetx
    avatar: https://secure.gravatar.com/avatar/0b381639d3c7b921ce3ea4a60bb79958?d=mm&s=128
  url:
    homepage: https://github.com/aunetx/blur-my-shell
    bugtracker: https://github.com/aunetx/blur-my-shell/issues
    donation: https://github.com/sponsors/aunetx
---

# Blur my Shell

Расширение добавляет размытие различным частям оболочки GNOME, включая верхнюю панель, обзор и так далее.

![Демонстрация расширения Blur my Shell](/blur-my-shell/blur-my-shell.png)

Можно настроить силу размытия, яркость и множество других параметров.
![Настройки Blur my Shell](/blur-my-shell/settings.png)

<!--@include: ./parts/show-install-steps.md-->
<!--@include: ./parts/install-from-repository.md-->

## Известные проблемы

### Окна мерцают или исчезают на втором мониторе

Зайдите в настройки расширения, в меню Application и выключите пункт «Application blur»

### Остальные проблемы (решение неизвестно)

- Размытие может не появляться в обзоре из-за второго монитора.
- Между рабочими столами может возникнуть прозрачный «зазор». Его отчётливо видно, если переключаться между рабочими столами при помощи жестов тачпада.
