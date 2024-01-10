# Не запускаются Flatpak-и

Если при запуске flatpak приложений вы получаете ошибку или оно вовсе не запускается, то в данном случае может помочь выполнение следующих команд: 

```shell
su -
chmod 775 /usr/bin/bwrap
sysctl kernel.unprivileged_userns_clone=1
```
