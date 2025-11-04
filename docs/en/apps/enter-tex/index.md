---
aggregation:
  flatpak:
  sisyphus: enter-tex
appstream:
  id:  org.gnome.gitlab.wilmet.enter-tex
  name: Enter-tex
  icon: /enter-tex/enter-tex-logo.svg
  summary: Tex/LaTeX Editor
  metadata_license:
    name: GNU GPLv3
    link: https://gitlab.gnome.org/swilmet/enter-tex/-/blob/main/LICENSES/GPL-3.0-or-later.txt
  developer:
    name: Sébastien Wilmet
    nickname: wilmet
  url:
    homepage: https://gitlab.gnome.org/swilmet/enter-tex
gallery:
  title: Gallery
  type: slider
  images:
    - src: /enter-tex/enter-tex-1.png
    - src: /enter-tex/enter-tex-2.png
    - src: /enter-tex/enter-tex-3.png
    - src: /enter-tex/enter-tex-4.png
    - src: /enter-tex/enter-tex-5.png
---

# Enter-TeX

Enter-TeX is an application for composing documents in TeX or LaTeX markup languages, and creating DVI, PDF or PS files after compilation. This application was previously called Gnome Latex, and even earlier was called Latexila.

Some features and functions of Enter-TeX:

- Custom build tools that allow you to specify the desired TeX/LaTeX compiler: `latexmk` (default), `xelatex`, `lualatex`, etc. and output format: DVI, PS or PDF;
- Autocompletion of LaTeX commands;
- View document structure (see notes below);
- Availability of symbol tables (Greek alphabet, arrows, signs, etc.);
- Using project structures to generate related documents, for example, highlighting glossaries, and supporting document templates (including creating your own templates);
- Spell checking;
- Automatic switching between the source and compiled document with entry into the current viewing area (Ctrl+click);
- Setting up and calling an external application for viewing PDF (there is no built-in PDF viewing function);
- Calling basic LaTeX commands and environments from the menu.

<Gallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->

::: warning IMPORTANT
The built-in function for displaying the document structure does not always work correctly, especially on documents with an atypical, complex or exotic structure. Don't forget to compile your `.tex` document twice to correctly assemble the table of contents (if there is one, of course). Despite the built-in themes, they apply only to the document editing window, and not to the entire program window.
:::

::: tip TIP
Works in Wayland and Xorg environment. A very lightweight program compared to similar ones, it takes up little memory and loads quickly.
:::
