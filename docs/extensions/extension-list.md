---
title: Extension List
pluginID: 3088
packageName: gnome-shell-extension-extension-list
---

# Extension List

Расширение позволяет удобно управлять расширениями для GNOME: быстро перейти к настройкам расширения, включить/выключить
одним нажатием или удалить расширение. Точка рядом с расширением показывает, что расширение включено.

![extension-list](/extensions/extension-list/extension-list-1.png)

![extension-list](/extensions/extension-list/extension-list-2.png)

<!--@include: ./parts/show-install-steps.md-->

## Установка {{ $frontmatter.title }} из репозитория

Данный способ установки расширений крайне **не рекомендуется**, но имеет право на жизнь:

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-extension-list
```

```shell[epm]
epm -i gnome-shell-extension-extension-list
```
:::

<!--@include: ./parts/install-from-repository.md-->
