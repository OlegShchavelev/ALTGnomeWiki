# ZSH

Zsh (Z-shell) — это интерактивная оболочка для операционных систем на базе ядра Linux, по своей сути такая же как и Bash, только намного интереснее.

## Установка из репозитория

**Zsh** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install zsh
```
```shell[epm]
epm install zsh
```
:::

## Установка oh-my-zsh

Oh-my-zsh даёт возможность воспользоваться дополнительными возможностями и плагинами доступными на сайте [oh-my-zsh](https://ohmyz.sh/). Установить **oh-my-zsh** можно через терминал:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Установка Zsh оболочкой по умолчанию для вашего пользователя

```shell
su -
usermod USER -s /bin/zsh
```

`USER` — имя вашего пользователя.

## Настройка Zsh для root пользователя

Если вы хотите поставить стороннюю тему, данные действие рекомендуется делать уже после её установки.
Создаём несколько символьных ссылок и прописываем параметр в .zshrc:

```shell
sudo ln -s /home/USER/.oh-my-zsh /root/.oh-my-zsh
sudo ln -s /home/USER/.zshrc /root/.zshrc
echo "ZSH_DISABLE_COMPFIX='true'" | cat - .zshrc > temp && mv temp .zshrc
```
`USER` — имя вашего пользователя.


## Установка темы для oh-my-zsh.

В качестве примера возьмём тему [powerlevel10k](https://github.com/romkatv/powerlevel10k)

Скачиваем необходимые шрифты с github страницы темы и устанавливаем их: [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf) | [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf) | [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf) | [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

Для корректный работы плагина необходимо устоновить шрифт «Noto Emoji»:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-google-noto-emoji
```
```shell[epm]
epm -i fonts-ttf-google-noto-emoji
```
:::

Устанавливаем тему и проходим первоначальную настройку:

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
zsh
```

Если вы хотите добавить Zsh с темой в root пользователя, то к выше описанным процедурам из пункта "Настройка Zsh для root пользователя" необходимо выполнить это:

```shell
sudo ln -s /home/USER/.p10k.zsh /root/.p10k.zsh
sudo ln -s /home/USER/powerlevel10k /root/powerlevel10k
```
`USER` — имя вашего пользователя.