# Flatpak
Flatpak - это система для создания, распространения и запуска изолированных настольных приложений в Linux.
## Установка из репозитория <Badge type="warning" text="sysphus" />
**Flatpak** можно установить любым привычным и удобным способом

**Установка через терминал**
::: code-group

```bash[apt-get]
su -
apt-get update
apt-get install flatpak
```
```bash[epm]
epm -i flatpak
```
:::

Для установки приложений при помощи **flatpak** из-под непривилегированного пользователя, следует добавить пользователя в группу **fuse**:

```bash
su -
gpasswd -a USER fuse
```
::: info
USER - имя Вашего пользователя
:::
