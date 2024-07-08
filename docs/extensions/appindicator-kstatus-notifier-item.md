---
title: AppIndicator/KStatusNotifierItem
pluginID: 615
packageName: gnome-shell-extension-appindicator
---

# AppIndicator/KStatusNotifierItem

Это расширение интегрирует Ubuntu AppIndicators и KStatusNotifierItems (благословенный преемник системного трея KDE) в оболочку GNOME. Включая поддержку устаревших значков в трее.

- Показывает значки индикаторов на панели
- Открывает меню индикаторов по щелчку мыши
- Двойной щелчок по значку активирует окно приложения (при условии поддержки приложением)
- Устаревшие значки в трее
- Поддержка сессий Xorg и Wayland

<!--@include: ./parts/show-install-steps.md-->

## Установка {{ $frontmatter.title }} из репозитория

Данный способ установки расширений крайне **не рекомендуется**, но имеет право на жизнь:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-appindicator
```

```shell[epm]
epm -i gnome-shell-extension-appindicator
```

:::

<!--@include: ./parts/install-from-repository.md-->
