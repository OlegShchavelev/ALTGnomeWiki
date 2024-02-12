---
title: GSConnect
pluginID: 1319
packageName: gnome-shell-extension-gsconnect
---

# GSConnect

GSConnect — расширение, которое включает в себя все функции KDE Connect и интегрируется с Nautilus, Chrome и Firefox. С помощью GSConnect можно безопасно обмениваться контентом между различными устройствами, такими как уведомления и файлы.

![Демонстрация интерфейса GSConnect](/gsconnect/menu.png)

Для подключения устройства необходимо приложение, которое доступно для Android, iOS, Windows, macOS и других платформ.

<!--@include: ./parts/show-install-steps.md-->

## Установка {{ $frontmatter.title }} из репозитория

Данный способ установки расширений крайне **не рекомендуется**, но имеет право на жизнь:

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install gnome-shell-extension-gsconnect
```

```shell[epm]
epm -i gnome-shell-extension-gsconnect
```
:::

<!--@include: ./parts/install-from-repository.md-->
