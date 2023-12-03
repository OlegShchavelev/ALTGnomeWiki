# Mpich
Высокопроизводительная реализация MPI для параллельных вычислений.

## Сбор из исходников
Устанавливаем `gcc`:
```shell
su -
apt-get install gcc-c++
```

Скачиваем, разархивировываем и переходим в неё:
```shell
wget https://github.com/pmodels/mpich/releases/download/v4.1.2/mpich-4.1.2.tar.gz
tar -xvf mpich-4.1.2.tar.gz 
cd mpich-4.1.2
```

Собираем:
```shell
su -
./configure --prefix=/home/USER/mpich-install --disable-fortran
make
make install
```
где `USER` - имя пользователя, для которого собираем, `--disable-fortran` отключает сборку для Fortran (если нужно, уберите).

Для удобства можно добавить в PATH (от имени пользователя, которому собрали):
```shell
export PATH=/home/$USER/mpich-install/bin:$PATH
```