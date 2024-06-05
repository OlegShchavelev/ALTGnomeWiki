# Ядро

С образом ALT Regular Gnome (с версии `20231122`) поставляется ядро следующих версии флейворов (FLAVOUR) `un-def` и `std-def`

-   `std-def` — стабильное ядро с longterm (LTS) поддержкой
-   `un-def` — стабильное ядро с Interim Releases (IR) поддержкой

Ядро содержит внешние модули, расширяющие функциональность или добавляющие поддержку нового оборудования.

## Управление модулями ядра

Для поиска модулей ядра введите в терминале следующую команду:

```shell
rpm -qa | grep -E '^kernel-modules-'
```

::: details вывод модулей ядра

```shell
kernel-modules-staging-un-def-6.6.16-alt2.x86_64
kernel-modules-rtw89-un-def-0.0-alt5.git.ebe87ac.394768.2.x86_64
kernel-modules-rtl8821ce-un-def-5.5.2-alt5.394764.1.x86_64
kernel-modules-rtw89-un-def-0.0-alt4.git.4f3464d.394764.1.x86_64
kernel-modules-rtl88x2bu-std-def-5.8.7.1-alt3.393545.1.x86_64
kernel-modules-rtl8821ce-un-def-5.5.2-alt5.394768.2.x86_64
kernel-modules-rtl8821cu-std-def-5.12.0.4-alt1.393545.1.x86_64
kernel-modules-r8125-un-def-9.011.01-alt1.394764.1.x86_64
kernel-modules-drm-std-def-6.1.73-alt1.x86_64
kernel-modules-rtl88x2bu-un-def-5.8.7.1-alt3.394768.2.x86_64
kernel-modules-drm-ancient-std-def-6.1.73-alt1.x86_64
kernel-modules-r8125-un-def-9.011.01-alt1.394768.2.x86_64
kernel-modules-staging-std-def-6.1.73-alt1.x86_64
kernel-modules-rtl8812au-std-def-5.6.4.2-alt2.393545.1.x86_64
kernel-modules-rtl8812au-un-def-5.6.4.2-alt2.394768.2.x86_64
kernel-modules-rtl8821cu-un-def-5.12.0.4-alt1.394768.2.x86_64
kernel-modules-rtl8812au-un-def-5.6.4.2-alt2.394764.1.x86_64
kernel-modules-drm-un-def-6.6.16-alt2.x86_64
kernel-modules-rtl8821cu-un-def-5.12.0.4-alt1.394764.1.x86_64
kernel-modules-rtl8192eu-std-def-5.2.19.1-alt2.393545.1.x86_64
kernel-modules-rtl8723bu-std-def-4.3.6.11-alt1.393545.1.x86_64
kernel-modules-rtl8821ce-std-def-5.5.2-alt5.393545.1.x86_64
kernel-modules-rtw89-std-def-0.0-alt4.git.4f3464d.393545.1.x86_64
kernel-modules-staging-un-def-6.6.12-alt1.x86_64
kernel-modules-drm-un-def-6.6.12-alt1.x86_64
kernel-modules-rtl88x2bu-un-def-5.8.7.1-alt3.394764.1.x86_64
kernel-modules-r8125-std-def-9.011.01-alt1.393545.1.x86_64
```

:::

Удалить модуль на примере модуля `kernel-modules-drm-nouveau-un-def`:

```shell
rpm -e --allmatches kernel-modules-drm-nouveau-un-def
```

## Обновление ядер

Обновить текущее ядро можно через терминал:

```shell
su -
update-kernel
```

После успешного обновления ядра и модулей перезагрузите операционную систему.

:::info
`update-kernel` обновляет в том числе и модули ядра. Утилита выведет список обновляемых модулей, необходимо подтвердить операцию в терминале набрав Y
:::

Обновить выбранную ветку ядра в системе через интерфейс ЦУС:

-   Открыть ЦУС и ввести пароль администратора
-   Перейти в раздел `Обновить ядро`
-   Нажать кнопку `Обновить ядро`

![Kernel](/kernel/kernel-1.png)

После успешного обновления ядра и модулей перезагрузите операционную систему.

## Переключить ветку ядра

Если ветка ядра не установлена в системе, то переключить его можно только через терминал:

```shell
su -
update-kernel -t std-def
```

Если ветка установлена (с версии `20231122`), то изменить ветку по умолчанию можно через ЦУС:

-   Открыть ЦУС и ввести пароль администратора
-   Перейти в раздел `Обновить ядро`
-   Выбрать ядро в списке `Установленные ядра`
-   Нажать кнопку `Сделать ядро загружаемым по умолчанию`

![Kernel](/kernel/kernel-2.png)

## Удаление старых версий ядра:

```shell
su -
remove-old-kernels
```
