# ZSH
Z-shell (или Zsh) - это интерактивная оболочка для операционных систем на базе ядра Linux, по своей сути такая же как и Bash, только намного интереснее.

## Установка Zsh<Badge type="warning" text="sisyphus" />
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
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
Zsh и oh-my-zsh установлены и вы уже можете воспользоваться дополнительными возможностями и плагинами доступными на сайте [oh-my-zsh](https://ohmyz.sh/).

## Установка Zsh оболочкой по умолчанию для вашего пользователя
Выполняем следующую команду заменив \<user> на имя пользователя для которого вы хотите установить Zsh оболочкой по умолчанию.

```shell
su -
usermod <user> -s /bin/zsh
```

## Настройка Zsh для root пользователя
Если вы хотите поставить стороннюю тему, данные действие рекомендуется делать уже после её установки.
Создаём несколько символьных ссылок и прописываем параметр в .zshrc. Вместо \<user> указываем имя вашего пользователя.
```shell
sudo ln -s /home/<user>/.oh-my-zsh /root/.oh-my-zsh
sudo ln -s /home/<user>/.zshrc /root/.zshrc
echo "ZSH_DISABLE_COMPFIX='true'" | cat - .zshrc > temp && mv temp .zshrc
```

## Установка темы для oh-my-zsh.
В качестве примера возьмём тему [powerlevel10k](https://github.com/romkatv/powerlevel10k)

1. Скачиваем необходимые шрифты с github страницы темы и устанавливаем их: [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf) | [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf) | [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf) | [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

2. Устанавливаем тему и проходим первоначальную настройку.
```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
zsh
```

3. Если вы хотите добавить Zsh с темой в root пользователя, то к выше описанным процедурам из пункта "Настройка Zsh для root пользователя" необходимо выполнить это:
```shell
sudo ln -s /home/<user>/.p10k.zsh /root/.p10k.zsh
sudo ln -s /home/<user>/powerlevel10k /root/powerlevel10k
```
