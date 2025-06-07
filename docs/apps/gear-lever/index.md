---
aggregation:
  flatpak:
    id: it.mijorus.gearlever
    build: unofficial
  sisyphus: gearlever
appstream:
  id: it.mijorus.gearlever
  name: Gear Lever
  icon: /gear-lever/gear-lever.svg
  summary: Менеджер пакетов AppImage
  metadata_license:
    name: GNU GPLv3
    link: https://github.com/mijorus/gearlever/blob/master/COPYING
  developer:
    name: Lorenzo Paderi
    nickname: mijorus
  url:
    homepage: https://mijorus.it/projects/gearlever/
gallery:
  title: Галерея
  type: slider
  items:
    - src: /gear-lever/gear-lever-1.png
    - src: /gear-lever/gear-lever-2.png
    - src: /gear-lever/gear-lever-3.png
    - src: /gear-lever/gear-lever-4.png
---

# Gear Lever

Вы используете программы в формате AppImage? Но вы не помните куда их сохранили и где они теперь? Вы не знаете как их обновить? Вам неудобно их запускать, и вы не знаете как добавить их на панель запуска или в док?

Значит, вам нужно обратить внимание на Gear Lever. Это менеджер приложений AppImage (https://appimage.org/, https://appimage.github.io/).

Некоторые функции Gear Lever:

- Интеграция приложений AppImage в меню запуска одним кликом, или запуск их прямо из менеджера Gear Lever;
- Поддерживает организацию ваших приложений AppImage в одном выбранном каталоге;
- Управляет обновлениями ваших программ AppImage, причём можно отметить те из них, которые не нужно обновлять; 
- Автоматически сохраняет по имени исполняемого файла те ваши приложения AppImage, которые имеют командный интерфейс;
- Gear Lever предоставляет дружественный и понятный интерфейс управления;
- Управляется с помощью Drag and Drop. Просто перетаскивайте ваши образы AppImage в окно программы.

<AGWGallery />

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->

::: warning ВАЖНО:

`--talk-name=org.freedesktop.Flatpak`

Это разрешения требуется для открытия приложений и обновления системного меню при установке нового приложения. 

Если отключить это разрешение вручную (например, с помощью Flatseal), то Gear Lever продолжит работать в обычном режиме, за исключением того, что вы не сможете открывать приложения напрямую.

В сборе телеметрии не замечено.
:::

::: tip ПОДСКАЗКА:
Работает в среде Wayland и Xorg. 
:::

