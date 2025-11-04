# Installing fonts

## Font formats

Font sets used in operating systems are presented in bitmap or outline formats.

**Raster fonts (bitmap)**

Font formats and letter shapes are created primarily in monochrome raster graphics. A popular example of bitmap fonts are `emoji`. The following formats are used to create a font collection:

- Bitmap Distribution Format (BDF) by Adobe
- Portable Compiled Format (PCB) by Xorg
- PC Screen Font (PSF) is used by the operating system kernel for console fonts and is not supported by Xorg

**Outline fonts**

The main font format uses Bezier curves (vector graphics) to describe each glyph. The following formats are used to create a font collection:

- TrueType by Apple and Microsoft (file extension: ttf)
- OpenType by Microsoft, built on TrueType (file extensions: otf, ttf)
- PostScript by Adobe - have different formats, for example: Printer Font ASCII (PFA) and Printer Font Binary (PFB)

## Installing fonts

There are various methods to install fonts in ALT Regular Gnome operating system

### From the repository

To search for fonts hosted by Sisyphus repositories, go to the Fonts section at `packages.altlinux.org`.

**Let's install** additional fonts, using `google-noto-emoji` from the Sisyphus repository as an example:

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

### Local installation (manual)

If there is no font set in the Sisyphus repository, the font set in the **ALT Regular Gnome** operating system is installed locally.

To easily install fonts, we recommend installing [the Fonts program](/en/apps/font-viewer/), download the selected fonts and open them in Files:

1. Click on the font file.
2. In the preview of the Fonts program, click the “Install” button

![Add font](/add-fonts/add-fonts-1.png)

:::info
Fonts are installed for a specific user and are available after installation in the following directory:

```
~/.local/share/fonts
```

:::

An alternative option is to install via a terminal. The operating system will recursively search for default paths, ensuring that attached files are found. Example file structure:

```
/usr/local/share/fonts/
├── otf
│   └── SourceCodeVariable
│   ├── SourceCodeVariable-Italic.otf
│   └── SourceCodeVariable-Roman.otf
└── ttf
    ├── AnonymousPro
    │   ├── Anonymous-Pro-B.ttf
    │   ├── Anonymous-Pro-I.ttf
    │   └── Anonymous-Pro.ttf
    └── CascadiaCode
        ├── CascadiaCode-Bold.ttf
        ├── CascadiaCode-Light.ttf
        └── CascadiaCode-Regular.ttf
```

Using the example of the font [CascadiaCode](https://github.com/microsoft/cascadia-code/releases/tag/v2111.01):

::: code-group

```shell[System-wide]
su -
cd /home/`user`/Downloads/CascadiaCode-2111.01/ttf
mkdir -p /usr/share/fonts/ttf/CascadiaCode/ && cp *.ttf /usr/share/fonts/ttf/CascadiaCode/
```

```shell[User-wide]
cd ~/Downloads/CascadiaCode-2111.01/ttf
mkdir -p ~/.local/share/fonts/ttf/CascadiaCode/ && cp *.ttf ~/.local/share/fonts/ttf/CascadiaCode/
```

:::

## Fonts from the Sisyphus repository

| Title         | Description                                                                                    | Package name                 |
| :------------ | :--------------------------------------------------------------------------------------------- | :--------------------------- |
| Microsoft     | Fonts by Microsoft                                                                             | fonts-ttf-ms                 |
| Ubuntu        | Fonts by the Ubuntu distribution                                                               | fonts-ttf-ubuntu-font-family |
| Cascadia Code | Fonts by Microsoft, used by VSCode and Windows Terminal                                        | fonts-cascadia-code          |
| Noto Emoji    | Fonts meets all your emoji needs, including support for the latest Unicode Emoji Specification | fonts-ttf-google-noto-emoji  |

## Tips and tricks

### List of installed fonts

To display a list of installed fonts on the system, use the following command:

```shell
fc-list
```

### Refresh the cache of installed fonts on the system

```shell
fc-cache -f -v
```
