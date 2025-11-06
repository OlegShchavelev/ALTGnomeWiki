# FOSSology

FOSSology is a software system and set of tools for ensuring compliance with license requirements when using free source software.

As a set of tools, FOSSology allows you to perform license, copyright, and export control scanning from the command line.

## Installation from repository

**FOSSology** can be installed via terminal:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fossology-nomos
```

```shell[epm]
epm -i node fossology-nomos
```

:::

## Using the **FOSSology** utility

To run the license scanner to check the source code of the program, if the `morphosis` folder contains the source code of the Morphosis program, you must enter the following command in the terminal:

```shell
nomossa -d morphosis
```

::: details Sample answer from nomossa

```shell
File morphosis/morphosis/main.py contains license(s) GPL-3.0-or-later
File morphosis/morphosis/print.py contains license(s) GPL-3.0-or-later
File morphosis/morphosis/window.py contains license(s) GPL-3.0-or-later
File morphosis/COPYING contains license(s) GPL-3.0-only
File morphosis/data/garden.jamie.Morphosis.metainfo.xml.in contains license(s) CC0-1.0,GPL-3.0-or-later
File morphosis/morphosis/morphosis.in contains license(s) GPL-3.0-or-later
File morphosis/morphosis/supported_formats.py contains license(s) GPL-3.0-or-later
File morphosis/.gear/morphosis.spec contains license(s) GPL-3.0-or-later

```

:::
