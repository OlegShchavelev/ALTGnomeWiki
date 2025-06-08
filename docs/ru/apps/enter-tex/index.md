---
aggregation:
  flatpak:
  sisyphus: enter-tex
appstream:
  id:  org.gnome.gitlab.wilmet.enter-tex
  name: Enter-tex
  icon: /enter-tex/enter-tex-logo.svg
  summary: Редактор Tex/LaTeX
  metadata_license:
    name: GNU GPLv3
    link: https://gitlab.gnome.org/swilmet/enter-tex/-/blob/main/LICENSES/GPL-3.0-or-later.txt
  developer:
    name: Sébastien Wilmet
    nickname: wilmet
  url:
    homepage: https://gitlab.gnome.org/swilmet/enter-tex
gallery:
  title: Галерея
  type: slider
  items:
    - src: /enter-tex/enter-tex-1.png
    - src: /enter-tex/enter-tex-2.png
    - src: /enter-tex/enter-tex-3.png
    - src: /enter-tex/enter-tex-4.png
    - src: /enter-tex/enter-tex-5.png
---

# Enter-TeX

Редактор для TeX/LaTeX


Enter-TeX - это приложение для составления документов на языках разметки TeX или LaTeX, и создания после компиляции файлов DVI, PDF или PS. Ранее это приложение носило название Gnome Latex, а еще раньше называлось Latexila.

Некоторые возможности и функции Enter-TeX:

- Настраиваемые инструменты сборки, которые позволяют задать желаемый компилятор TeX/LaTeX: `latexmk` (используется по умолчанию), `xelatex`, `lualatex`, и др. и формат вывода: DVI, PS или PDF;
- Автодополнение команд LaTeX;
- Просмотр структуры документа (см. примечания ниже);
- Наличие таблиц символов (греческий алфавит, стрелки, знаки и т.п.);
- Использование структур проектов для формирования связанных документов, например, с выделением глоссариев, и поддержка шаблонов документов (включая создание собственных шаблонов);
- Проверка орфографии;
- Автоматическое переключение между исходным и скомпилированным документом с попаданием в текущую область просмотра (Ctrl+клик);
- Настройка и вызов внешнего приложения для просмотра PDF (встроенная функция просмотра PDF отсутствует);
- Вызов основных команд и окружений LaTeX из меню.

<AGWGallery />

<!--@include: @ru/apps/.parts/install/content-repo.md-->

::: warning ВАЖНО:
Встроенная функция отображения структуры документа не всегда корректно работает, особенно на документах с нетипичной, сложной или экзотической структурой. Не забывайте компилировать ваш документ `.tex` два раза для корректной сборки оглавления (если оно, конечно, есть). Несмотря на встроенные темы, применяются они только к окну редактирования документа, а не ко всему окну программы.
:::

::: tip ПОДСКАЗКА:
Работает в среде Wayland и Xorg. Очень легковесная программа по сравнению с подобными, занимает мало памяти, загружается быстро.
:::
