---
title: Blur my Shell
pluginID: 3193
packageName: gnome-shell-extension-blur-my-shell
---

# Blur my Shell

Расширение добавляет размытие различным частям оболочки GNOME, включая верхнюю панель, обзор и так далее.

![Демонстрация расширения Blur my Shell](/blur-my-shell/blur-my-shell.png)

Можно настроить силу размытия, яркость и множество других параметров.
![Настройки Blur my Shell](/blur-my-shell/settings.png)

<!--@include: ./parts/show-install-steps.md-->

## Установка {{ $frontmatter.title }} из репозитория

Данный способ установки расширений крайне **не рекомендуется**, но имеет право на жизнь:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-blur-my-shell
```

```shell[epm]
epm -i gnome-shell-extension-blur-my-shell
```

:::

<!--@include: ./parts/install-from-repository.md-->

## Известные проблемы

### Окна мерцают или исчезают на втором мониторе

Зайдите в настройки расширения, в меню Application и выключите пункт «Application blur»

### Остальные проблемы (решение неизвестно)

-   Размытие может не появляться в обзоре из-за второго монитора.
-   Между рабочими столами может возникнуть прозрачный «зазор». Его отчётливо видно, если переключаться между рабочими столами при помощи жестов тачпада.
