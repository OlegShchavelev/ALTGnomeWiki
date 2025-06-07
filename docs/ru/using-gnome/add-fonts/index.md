# Установка шрифтов

## Форматы шрифтов

Шрифтовые наборы используемых в операционных системах представлены в форматах bitmap или outline.

**Растровые шрифты (bitmap)**

Формат шрифтов, формы букв создаются преимущественно в формате монохромной растровой графики. Популярным примером bitmap-шрифтов являются `emoji`. Для создания коллекции шрифтов используется следующие форматы:

- Bitmap Distribution Format (BDF) от Adobe
- Portable Compiled Format (PCB) от Xorg
- PC Screen Font (PSF) используется ядром операционной системы для консольных шрифтов не поддерживается Xorg

**Контурные шрифты (outline)**

Основной формат шрифтов для описания каждого глифа используются кривые Безье (векторная графика). Для создания коллекции шрифтов используется следующие форматы:

- TrueType от Apple и Microsoft (расширение файла: ttf)
- OpenType от Microsoft, построен на TrueType (расширения файлов: otf, ttf)
- PostScript от Adobe – имеют различные форматы, например: шрифт принтера ASCII (PFA) и шрифт принтера Binary (PFB)

## Установка шрифтов

Существуют различные методы установки шрифтов в операционную систему ALT Regular Gnome

### Из репозитория

Для поиска шрифтов размещённые репозитории Сизиф, перейдите [в раздел Шрифты](https://packages.altlinux.org/ru/sisyphus/packages/System/Fonts/) на `packages.altlinux.org`.

**Установим** дополнительные шрифты, на примере `google-noto-emoji` из репозитория Сизиф:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```

```shell[epm]
epm -i fonts-ttf-google-noto-emoji fonts-ttf-google-noto-emoji-color
```

:::

### Локальная установка (ручная)

При отсутствии шрифтового набора в репозитории Сизиф, шрифтовой набор в операционную систему **ALT Regular Gnome** устанавливается локально.

Для простоты установки шрифтов мы рекомендуем установить [программу Шрифты](/font-viewer), скачаем выбранные шрифты и откроем их в Файлах:

1. Кликнем по файлу шрифта.
2. В предпросмотре программы Шрифты, нажмите кнопку «Установить»

![Добавить шрифт](/add-fonts/add-fonts-1.png)

:::info
Шрифты устанавливается для конкретного пользователя и доступны после установки в следующей директории:

```
~/.local/share/fonts
```

:::

Альтернативным вариантом является установка через терминал. Операционная система будет рекурсивно искать пути по умолчанию, гарантируя, что вложенные файлы будут обнаружены. Пример файловой структуры:

```
/usr/local/share/fonts/
├── otf
│ └── SourceCodeVariable
│ ├── SourceCodeVariable-Italic.otf
│ └── SourceCodeVariable-Roman.otf
└── ttf
 ├── AnonymousPro
 │ ├── Anonymous-Pro-B.ttf
 │ ├── Anonymous-Pro-I.ttf
 │ └── Anonymous-Pro.ttf
 └── CascadiaCode
 ├── CascadiaCode-Bold.ttf
 ├── CascadiaCode-Light.ttf
 └── CascadiaCode-Regular.ttf
```

На примере шрифта [CascadiaCode](https://github.com/microsoft/cascadia-code/releases/tag/v2111.01):

::: code-group

```shell[Общесистемная]
su -
cd /home/`user`/Загрузки/CascadiaCode-2111.01/ttf
mkdir - p /usr/share/fonts/ttf/CascadiaCode/ && cp *.ttf /usr/share/fonts/ttf/CascadiaCode/
```

```shell[Пользовательская]
cd ~/Загрузки/CascadiaCode-2111.01/ttf
mkdir - p ~/.local/share/fonts/ttf/CascadiaCode/ && cp *.ttf ~/.local/share/fonts/ttf/CascadiaCode/
``` 

:::

## Шрифты из репозитория Сизиф

| Название      | Описание                                                                                                         | Название пакета              |
| :------------ | :--------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| Microsoft     | Шрифты от Microsoft                                                                                              | fonts-ttf-ms                 |
| Ubuntu        | Шрифты от дистрибутива Ubuntu                                                                                    | fonts-ttf-ubuntu-font-family |
| Cascadia Code | Шрифты от Microsoft, используется VSCode и Windows Terminal                                                      | fonts-cascadia-code          |
| Noto Emoji    | Шрифты удовлетворяет всем вашим потребностям в эмодзи, включая поддержку последней спецификации эмодзи в Юникоде | fonts-ttf-google-noto-emoji  |

## Советы и рекомендации

### Список установленных шрифтов

Для вывода списка установленных шрифтов в системе воспользуйтесь следующей командой:

```shell
fc-list
```
### Обновить кеш установленных шрифтов в системе
```shell
fc-cache -f -v
```
