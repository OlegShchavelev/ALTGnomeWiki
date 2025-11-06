---
gallery:
  - type: slider
    alias: workstation
    images:
      - src: /alt-workstation/alt-workstation-screenshot-1.png
      - src: /alt-workstation/alt-workstation-screenshot-2.png
      - src: /alt-workstation/alt-workstation-screenshot-3.png
      - src: /alt-workstation/alt-workstation-screenshot-4.png
      - src: /alt-workstation/alt-workstation-screenshot-5.png
  - type: slider
    alias: alt-tour
    images:
      - src: /alt-workstation/alt-workstation-alt-tour.png
  - type: slider
    alias: panelmoded
    images:
      - src: /alt-workstation/alt-workstation-alt-panelmoded.png
  - type: slider
    alias: installation
    images:
      - src: /alt-workstation/alt-workstation-installation.png
  - type: slider
    alias: grub
    images:
      - src: /alt-workstation/alt-workstation-grub.png
  - type: slider
    alias: icons
    images:
      - src: /alt-workstation/alt-workstation-icons.png
---

# Альт Рабочая станция 11

<Gallery alias=workstation />

Альт Рабочая станция — дистрибутив семейства ОС «Альт», разрабатываемый и поддерживаемый Базальт СПО.

В рамках 11 версии Рабочей станции сменилось графическое окружение. Теперь в качестве DE используется GNOME 47.4. Смена графического окружения обусловлена снижением активности разработки MATE и сильно отстающим внедрением в него новых стандартов и функциональности, приводящими к будущей невозможности его поддержки и развития;

Альт Рабочая станция 11.0 является первым продуктом Базальт СПО на [одиннадцатой платформе](https://www.altlinux.org/Одиннадцатая_платформа) и первый дистрибутив компании на графическом окружении GNOME после долгого перерыва со времён [Альт Линукс 6 Кентавр](https://www.altlinux.org/Альт_Линукс_6.0_Кентавр).

## Что есть в Альт Рабочей станции 11?

### ALT Tour

<Gallery alias=alt-tour />

Интерактивный тур по Рабочей станции для настройки системы и изучения ключевых особенностей Альт и графического окружения GNOME.

С помощью него, пользователь может выбрать удобный именно для него профиль оформления системы, пройти краткий экскурс по системе с учётом выбранного им профиля оформления системы, а также включить дополнительные элементы управления окном.

[Исходный код ALT Tour](https://altlinux.space/alt-gnome/alt-tour)

### ALT Panelmoded

<Gallery alias=panelmoded />

Используется для реализации функционала панельного оформления системы в операционных системах семейства «Альт» с графическим окружением GNOME.

ALT Panelmoded состоит из двух профилей:

- **Профиль «GNOME»** — предоставляет пользовательский интерфейс «чистого» GNOME. Для удобства пользователей и совместимости с программами добавлен менеджер буфера обмена и трей.
- **Профиль «Панельный»** — имеет предварительно настроенные расширения для удобства работы пользователя и призван обеспечивать максимально плавный и комфортный переход пользователей с «Альт Рабочая станция 10», графических окружений MATE, KDE, Cinnamon, а также ОС Windows

ALT Panelmoded запоминает предпочтения пользователей по дополнительно включённым расширениям и сохраняет их при переключении на другой профиль, чтобы в случае возвращения пользователь чувствовал себя как дома.

[Исходный код ALT Panelmoded](https://gitlab.gnome.org/Armatik/alt-panelmoded)

### Стилевое оформление системы

В ходе подготовки 11-ой версии Альт Рабочая станция, кроме большого перехода на GNOME была проделала работа по улучшению визуальной составляющей системы, в частности установщика и его слайд-шоу, меню GRUB, фирменных обоев и единообразия значков программ, файлов и внешних устройств в системе.

#### Установщик

<Gallery alias=installation />

Свежий взгляд на установщик с элементами Глассморфизма, темы иконок Adwaita и фирменными акцентными цветами. Обновлённое слайд-шоу познакомит пользователей с Рабочей станцией, доступными на ней решениями, а также сообществами вокруг ALT Linux.

#### GRUB

<Gallery alias=grub />

GRUB продолжает тенденцию на обновление UI системы в стиле Глассморфизм, показывая пользователю ещё пока закрытый пейзаж за матовым стеклом, который обязательно откроется ему в уже установленной системе.

#### Иконки и обои

<Gallery alias=icons />

Продолжая визуальный код окружения GNOME в стиле Adwaita дополнительно доступны значки Morewaita, который значительно расширяет список типов файлов, устройств и приложений, имеющих уникальные иконки по гайдлайнам GNOME. Также в систему добавлен собственный набор иконок AltWorkstastion, позволяющий стандартным приложениям семейства «Альт» получить более свежий дизайн значков, подготовленных для одиннадцатой платформы.

Кроме стандартных обоев GNOME 47, в дистрибутиве имеются собственные обои, выполненные в стиле абстрактных волн, а также фотографии природы России.

### Другие важные изменения

- Использование **Wayland** как основного протокола графического сервера. **X11** остаётся доступным для выбора при запуске сессии;
- Переход на **PipeWire** вместо PulseAudio;
- Переход с использования 500 на 1000 UID для учётной записи пользователя;
- Изменение нейминга ядер, с `std-def/un-def` на `6.12`;
- Изменение директорий в файловой системе `/bin` -> `/usr/bin`, `/sbin` -> `/usr/sbin`;
- Драйверы NVIDIA в составе Рабочей станции. В установленной системе включены драйверы **NVIDIA 570 и 470 серии**;
- Полностью новая документация для ALT Workstation 11.0 доступна в разделе «О системе» или в `/usr/share/doc/alt-workstation/index.html`;
- **Сургуч** — программа для работы с цифровыми подписями PDF-документов;
- **Копидел** — программа для автоматизации процесса создания обезличенной копии уже настроенной системы перед развёрткой на большом количестве однотипных устройств;
- Шаблоны файлов в контекстном меню файлового менеджера Nautilus: обычный файл, документы в форматах ODT, ODG, ODP, ODS;
- **GNOME Software** c предпочтением установки пакетов из официального репозитория ALT;
- Поддержка полнодискового шифрования и установки на LUKS2;
- Подсистема начальной загрузки установщика [propagator](https://www.altlinux.org/Installer/common/propagator) заменена на [altboot](https://www.altlinux.org/Installer/common/altboot);
- Переход установщика системы на **Qt6**;
- Установщик работает на базе LiveCD-образа, содержащего большее количество компонентов совместимости с оборудованием;
- Всё ПО, за небольшим исключением, собрано с [оптимизацией связывания (LTO)](https://www.altlinux.org/LTO).

## Также может пригодиться

### Курс молодого бойца ALT Regular

[Начало. RUTUBE](https://rutube.ru/video/4fee599dd7adb484e7fd5411beb90e06/?r=a/)

[Продолжение. RUTUBE](https://rutube.ru/video/472705a16a81bb13f0e3321c63eb1ced/?r=a/)

### Обзор GNOME 47

[RUTUBE](https://rutube.ru/video/9b4be72fc4010eb5d40951d9f76a77ec/?r=a/)

[Часть 1. ВК](https://vkvideo.ru/video-223953895_456239042)

[Часть 2. ВК](https://vkvideo.ru/video-223953895_456239043)

## Скачать «Рабочую станцию» со средой рабочего стола GNOME (репозиторий P11)

### Для архитектуры `x86_64`

[ALT Workstation<Badge type="tip" text="iso" />](https://download.basealt.ru/pub/distributions/ALTLinux/p11/images/workstation/x86_64/alt-workstation-11.0-x86_64.iso)

### Для архитектуры `aarch64`

[ALT Workstation<Badge type="tip" text="iso" />](https://download.basealt.ru/pub/distributions/ALTLinux/p11/images/workstation/aarch64/alt-workstation-11.0-aarch64.iso)

[ALT Workstation<Badge type="tip" text="img.xz" />](https://download.basealt.ru/pub/distributions/ALTLinux/p11/images/workstation/aarch64/alt-workstation-11.0-aarch64.img.xz)

[ALT Workstation<Badge type="tip" text="tar.xz" />](https://download.basealt.ru/pub/distributions/ALTLinux/p11/images/workstation/aarch64/alt-workstation-11.0-aarch64.tar.xz)

## Хронология

<br />

::: timeline Alpha <Badge text="27.12.2024" />
[Пост ALT Gnome](https://t.me/alt_gnome/1862) | [Рассылка Devel](https://lore.altlinux.org/devel/e9d62a06-95c5-4e2c-99c2-802a6cab1016@altlinux.org/)
:::

::: timeline Beta 1 <Badge text="13.02.2025" />
[Пост ALT Gnome](https://t.me/alt_gnome/1906) | [Рассылка Devel](https://lore.altlinux.org/devel/120cc1f7-98a1-42dc-9573-f5d4dc081112@altlinux.org/)
:::

::: timeline Beta 2 <Badge text="24.02.2025" />
[Пост ALT Gnome](https://t.me/alt_gnome/1934) | [Рассылка Devel](https://lore.altlinux.org/devel/c4f9b32c-7c69-48df-9416-cbe8e1ea5797@altlinux.org/)
:::

::: timeline RC 0 <Badge text="10.03.2025" />
[Пост ALT Gnome](https://t.me/alt_gnome/1944) | [Рассылка Devel](https://lore.altlinux.org/devel/81cc1bf5-b3e3-4c5e-aab2-48897c9cc40b@altlinux.org/)
:::

::: timeline RC 1 <Badge text="06.04.2025" />
[Пост ALT Gnome](https://t.me/alt_gnome/1967) | [Рассылка Devel](https://lore.altlinux.org/devel/7caced42-3e86-40a8-98b6-9d5b2adf5a23@altlinux.org/)
:::

::: timeline RC 2 <Badge text="14.04.2025" />
[Пост ALT Gnome](https://t.me/alt_gnome/1977) | [Рассылка Devel](https://lore.altlinux.org/devel/1a42f1bd-1159-4e5c-af89-55370ab3c28b@altlinux.org/)
:::

::: timeline RC 3 <Badge text="19.04.2025" />
[Рассылка Devel](https://lore.altlinux.org/devel/1a42f1bd-1159-4e5c-af89-55370ab3c28b@altlinux.org/)
:::

::: timeline Релиз 11.0 <Badge type="tip" text="29.04.2025" />
:::
