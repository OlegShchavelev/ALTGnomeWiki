# CryptoPro

CryptoPro is a line of crypto providers developed by the company of the same name. They are used in programs for generating electronic signatures, working with certificates, organizing the PKI structure, etc.

## Installation of CryptoPRO

1. Download the archive of CryptoPro CSP 5.0 software for Linux (x64, rpm) - ALT, RED OS, ROSA from the [official website](https://www.cryptopro.ru/products/csp/downloads)

::: warning
**Registration on the site is required in advance**
:::

![Download section](/cryptopro/cryptopro-1.png)

2. Unpack the archive (RMB -> `Extract`) and open the `linux-amd64` folder

![Unpacking archive](/cryptopro/cryptopro-2.png)

3. Open this folder in the terminal: RMB -> `Open Terminal`

![Context menu for opening a terminal](/cryptopro/cryptopro-3.png)

4. Run the installer

```shell[apt-get]
sudo apt-get update
sudo ./install_gui.sh
```

5. Click on the `<Next>` button. You can move between blocks using the [[Tab]] button, using the arrows inside the blocks on the keyboard [[←]], [[→]], [[↑]], [[↓]], to confirm, use [[Space]] or [[Enter]].

![Installer](/cryptopro/cryptopro-4.png)

6. Select all packages to install, except Provider KS2. To select, use [[Space]], to confirm [[Enter]] or `<Next>`

![Selecting components to install](/cryptopro/cryptopro-5.png)

7. Start installation by selecting `<Install>`

![Confirm installation list](/cryptopro/cryptopro-6.png)

8. Wait for the installation to complete and click `<Ok>`

![Completing installation](/cryptopro/cryptopro-7.png)

9. If the license was purchased separately, select `<Enter License>` and enter the license number shown on the form. If there is no license or the certificate has a built-in license, select `<Later>`

![License key](/cryptopro/cryptopro-8.png)

10. Select `<Exit>` and close the installer.

![Installer main menu](/cryptopro/cryptopro-9.png)

Sources:

- https://support.kontur.ru/ca/38813-ustanovka_kriptopro_csp_na_altlinux

## Login using a token on Gosuslugi

1. Install extensions for browsers based on [Chromium](https://chrome.google.com/webstore/detail/ifcplugin-extension/pbefkdcndngodfeigfdgiodgnmbgcfha) or [Mozilla Firefox](https://ds-plugin.gosuslugi.ru/plugin/upload/assets/distrib/addon-1.2.8-fx.xpi)

2. Check that the extension is enabled: on the [Gosuslugi](https://www.gosuslugi.ru/) website the extension should be in color and enabled. If not, check your extension settings

To check the operation: while on the Gosuslugi website, right-click on the extension, the second item from the top in the menu should be - the extension can access site data and change it

![Extensions](/cryptopro/cryptopro-10.png)

3. Install IFCPlugin package [from Gosuslugi](https://ds-plugin.gosuslugi.ru/plugin/upload/assets/distrib/IFCPlugin-x86_64.rpm) ([Source: Installation s.2](https://support.cryptopro.ru/index.php?/Knowledgebase/Article/View/275))

4. Download [`ifcx64.cfg`](https://www.cryptopro.ru/sites/default/files/public/faq/ifcx64.cfg) config file ([Source: Installation s.3](https://support.cryptopro.ru/index.php?/Knowledgebase/Article/View/275))

5. Open a terminal (RMB -> `Open Terminal`) in the same folder where the `ifcx64.cfg` file is located, and run the command

```shell
sudo cp ~/ifcx86.cfg /etc/ifc.cfg
```

6. Login can be verified at Gosuslugi using your token on the [login page](https://esia.gosuslugi.ru/login):

- Click on `Login with electronic signature` and `Finish`
- Select the desired electronic signature certificate
- In the `Enter PIN code` window, enter any value (it is not checked at this stage) and click `Continue`
- When the CryptoPro CSP window appears, enter the PIN code for the key container in the `Password` field and click `OK`.

7. If you encounter problems for browsers based on [Chromium](/apps/chromium/), run the following command:

```shell
sudo cp /etc/opt/chrome/native-messaging-hosts/ru.rtlabs.ifcplugin.json /etc/chromium/native-messaging-hosts
```

### Problem Solving

The error `Electronic signature not found` means that there are problems with the `ifcx64.cfg` file. Repeat the action from Step 4

![Gosuslugi portal error](/cryptopro/cryptopro-11.jpg)

Sources:

- [CryptoPro site](https://support.cryptopro.ru/index.php?/Knowledgebase/Article/View/275)
- [Gosuslugi](https://ds-plugin.gosuslugi.ru/plugin/upload/Index.spr)
