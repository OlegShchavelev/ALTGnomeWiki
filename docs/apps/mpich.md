# Mpich

Mpich — высокопроизводительная реализация MPI для параллельных вычислений.

## Установка из исходного кода

- Установите компилятор `gcc`

```shell
su -
apt-get install gcc-c++
```

- Скачайте дистрибутив, распакуйте архив и перейдите в созданную папку

```shell
wget https://github.com/pmodels/mpich/releases/download/v4.1.2/mpich-4.1.2.tar.gz
tar -xvf mpich-4.1.2.tar.gz
cd mpich-4.1.2
```

- Скомпилируйте проект

```shell
su -
./configure --prefix=/home/$USER/mpich-install --disable-fortran
make
make install
```

::: tip
Флаг `--disable-fortran` отключает сборку для Fortran.
:::

- Добавьте путь к исполняемым файлам в `PATH` (от имени пользователя, которому собрали):

```shell
export PATH=/home/$USER/mpich-install/bin:$PATH
```
