---
aggregation:
  flatpak:
    id: com.github.geigi.cozy
    build: unofficial
  sisyphus: cozy
appstream:
  id: com.github.geigi.cozy
  name: Cozy
  icon: /cozy/cozy-logo.svg
  summary: Проигрыватель аудиокниг
  metadata_license:
    name: GNU GPLv3
    link: https://github.com/geigi/cozy/blob/master/LICENSE
  developer:
    name: Julian Geywitz and community
    nickname: geigi, rdbende and more...
  url:
    homepage: https://cozy.sh/
gallery:
  title: Галерея
  type: slider
  items:
    - src: /cozy/cozy-1.png
    - src: /cozy/cozy-2.png
    - src: /cozy/cozy-3.png
    - src: /cozy/cozy-4.png
    - src: /cozy/cozy-5.png
---

# Cozy

Вам нравятся аудиокниги? Тогда устраивайтесь поудобнее...

Cozy — это проигрыватель аудиокниг. Вот некоторые функции:

- Поддерживает импорт аудиокниг в собственную медиаотеку и организует её удобный просмотр;
- Позволяет прослушивать аудиокниги в форматах: mp3, m4b, m4a (aac, ALAC), flac, ogg и wav (см. примечания ниже);
- Запоминает место, на котором воспроизведение остановилось и продолжает с запомненного места;
- Управляет таймером сна;
- Контролирует скорость вопроизведения индивидуально для каждой книги;
- Поддерживает поиск по медиатеке и несколько мест для сканирования файлов аудиокниг;
- Имеет автономный режим, который позволяет сохранить аудиокнигу в собственном хранилище, например, если ваши аудиокниги обычно расположены на внешнем или сетевом диске. Этот режим идеально подходит для прослушивания в дороге;
- Управляется с помощью Drag and Drop. Просто перетаскивайте аудиокниги в окно программы;
- Сортирует аудиокниги по имени, автору или диктору. 

<AGWGallery />

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->

> [!IMPORTANT]
> Отмечались проблемы с добавлением и воспроизведением аудиокниг в некоторых форматах (например в формате m4b). Не поддерживается воспроизведение файлов с защитой от копирования при воспроизведении (DRM).

> [!TIP]
> Работает в среде Wayland и Xorg. 

Для удаления мета-данных и всей библиотеки удалите каталоги:

```shell
rm -rfv ~/.local/share/cozy
rm -rfv ~/.cache/cozy
```


