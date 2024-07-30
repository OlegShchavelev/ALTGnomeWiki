---
aggregation:
  flatpak: dev.vencord.Vesktop
  epm:
    play:
      id: vesktop
      build: unofficial
appstream:
  id: dev.vencord.Vesktop
  name: Vesktop
  icon: /vesktop/vesktop-logo.png
  summary: Альтернативный клиент Discord
  developer:
    name: Vencord Contributors
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://vencord.dev/
    bugtracker: https://github.com/Vencord/Vesktop/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: /vesktop/vesktop-1.png
    - src: /vesktop/vesktop-2.png
    - src: /vesktop/vesktop-3.png
---

# Vesktop

Vesktop — альтернативный клиент Discord c множеством встроенного дополнительного функционала, например

- Демонстрация всего экрана в Wayland сразу после установки
- Работа захвата звука как окон, так и всей системы
- Установка тем или создание своих

И множество как встроенных, так и устанавливаемых аддонов.

<AGWGallery />

<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-epm-play.md-->

## Демонстрация экрана в Wayland со звуком

Для того, чтобы поделиться звуком всей системы достаточно в окне настроек демонстрации выбрать пункт "Entire System"

![share-system-sound](/vesktop/vesktop-share-system-1.gif)

После этого ваш собеседник должен будет слышать все, кроме самого себя

::::::warning Я сделал все также, но звука нет! :smiling_face_with_tear:
Если звук после выбора все равно не появляется - попробуйте перезапустить приложение или включить на той же вкладке параметр "Microphone workaround"

::::center
![microphone-workaround](/vesktop/microphone-workaround.png)
::::
Если собеседник по-прежнему ничего не слышит, [[[:speech_balloon: обратитесь к нам в чат]]](https://t.me/alt_gnome_chat)
::::::

## Темы

### Генерация темы Discord в стиле вашего Gnome

С этим вам поможет open source проект [DNOME](https://github.com/GeopJr/DNOME) и его сайт [dnome.geopjr.dev](https://dnome.geopjr.dev/)

Данный способ максимально прост. Если вы используете стандартную тему Adwaita все что нужно это:

1. Открыть сайт проекта
2. Нажать [[Compile]]
3. Перейти в "Настройки пользователя" [[:gear:]] -> [[Vencord]] -> [[Open QuickCSS File]]
4. Вставить содержимое с сайта

![DNOME](/vesktop/theme-DNOME-1.gif 'Процесс генерации с использованием DNOME')

:::tip Поддержка кастомных тем Gnome :paintbrush:
Также сайт может попытаться создать тему на основе вашей темы Gnome
Для этого вам нужно вставить в поле для ввода содержимое файла:

`~/.config/gtk-4.0/gtk.css`

И повторить действия выше. Но результат очень сильно зависит от того, насколько грамотно сделана тема.
Мой результат, с темой сделанной за 5 минут в Gradience получился слишком вырвиглазным.
Но может быть у вас получится лучше :wink:
:::

### Где ещё можно найти темы?

Vesktop умеет работать с темами для BetterDiscord, соответственно темы для него можно взять на сайте [betterdiscord.app](https://betterdiscord.app/themes).

Установить темы также просто. Для этого нужно:

1. Выбрать тему которая вам понравится
2. Скачать файл в формате `.css`
3. Перейти в "Настройки пользователя" [[:gear:]] -> [[Themes]] и нажать [[Open Themes Folder]]
4. В открывшемся окне Nautilus переносим `.css` файл нашей темы в папку "Themes"
5. Возвращаемся в окно Vesktop и нажимаем [[Load missing Themes]]
6. Включаем нашу тему

P.S. Если вы ранее использовали DNOME или другие самописные CSS то так же нужно сделать это:

1. Перейти в "Настройки пользователя" [[:gear:]] -> [[Vencord]]
2. Отключить пункт "Enable custom CSS" или очистить содержимое [[Open QuickCSS File]]

![BetterDiscord themes in Vesktop](/vesktop/themes-better-1.gif 'Установка тем для BetterDiscord')
