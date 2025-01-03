---
aggregation:
  sisyphus: zsh
appstream:
  id: zsh
  name: ZSH
  icon: /zsh/zsh-logo.png
  summary: Интерактивная оболочка для операционных систем на базе ядра Linux
  developer:
    name: Z Shell Community
  metadata_license:
    name: Нет
    link: https://github.com/zsh-users/zsh?tab=License-1-ov-file#readme
  url:
    homepage: https://www.zsh.org/
---

# ZSH

Zsh (Z-shell) — интерактивная оболочка для операционных систем на базе ядра Linux, по своей сути такая же как и Bash, только намного интереснее.

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

Если вы хотите поставить стороннюю тему, данное действие рекомендуется делать уже после её установки.
Создаём несколько символьных ссылок и прописываем параметр в .zshrc:

```shell
sudo ln -s /home/USER/.oh-my-zsh /root/.oh-my-zsh
sudo ln -s /home/USER/.zshrc /root/.zshrc
echo "ZSH_DISABLE_COMPFIX='true'" | cat - .zshrc > temp && mv temp .zshrc
```

`USER` — имя вашего пользователя.

## Плагины Oh My Zsh

Oh My Zsh предлагает множество плагинов, которые вы можете использовать в своей работе. Чтобы ознакомиться с полным списком доступных плагинов, вы можете обратиться [к перечню плагинов](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins).

### Включение плагинов

Для использования плагинов в Oh My Zsh, вам нужно будет добавить их в файл.zshrc. Этот файл находится в вашем домашнем каталоге. Откройте его в вашем любимом текстовом редакторе.

```shell
vim ~/.zshrc
```

Например, добавим плагины `z`, `npm`:

```
plugins=(
 git
 z // [!code ++]
 npm // [!code ++]
)
```

:::warning
Обратите внимание, что плагины разделяются пробелами (пробелами, табуляциями, новыми строками...). Не используйте запятые между ними, иначе это приведёт к сбою.
:::

### Внешние плагины

Существуют плагины сторонних авторов. Чтобы их установить, потребуется [git](git). Давайте рассмотрим процесс установки на примере нескольких популярных плагинов.

#### zsh-autosuggestions

Плагин предлагает подсказки и интерфейс для быстрого ввода команд аналогично Fish

1. Клонируем плагин в `$ZSH_CUSTOM/plugins` (по умолчанию `~/.oh-my-zsh/custom/plugins`)

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

2. Добавьте плагин в список плагинов для Oh My Zsh (`~/.zshrc`):

```
plugins=(
 git
 z
 npm
 zsh-autosuggestions // [!code ++]
)
```

3. Перезапустите shell

```shell
zsh
```

#### zsh-syntax-highlighting

Этот плагин обеспечивает подсветку синтаксиса для оболочки zsh

1. Клонируем плагин в `$ZSH_CUSTOM/plugins` (по умолчанию `~/.oh-my-zsh/custom/plugins`)

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

2. Добавьте плагин в список плагинов для Oh My Zsh (`~/.zshrc`):

```
plugins=(
 git
 z
 npm
 zsh-autosuggestions
 zsh-syntax-highlighting // [!code ++]
)
```

3. Перезапустите shell

```shell
zsh
```

## Установка темы для oh-my-zsh.

В качестве примера возьмём тему [powerlevel10k](https://github.com/romkatv/powerlevel10k)

Скачиваем необходимые шрифты с github страницы темы и устанавливаем их: [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf) | [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf) | [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf) | [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

Для корректный работы плагина необходимо установить шрифт «Noto Emoji»:

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

Если вы хотите добавить Zsh с темой в root пользователя, то к выше описанным процедурам из пункта «Настройка Zsh для root пользователя» необходимо выполнить это:

```shell
sudo ln -s /home/USER/.p10k.zsh /root/.p10k.zsh
sudo ln -s /home/USER/powerlevel10k /root/powerlevel10k
```

`USER` — имя вашего пользователя.

## Решение проблем

### Тестовые артефакты при использовании `git`

После установки zsh в качестве shell при запросе `git log` вывод информации происходит с артефактами, как на изображении:

![артефакты лога](/zsh/zsh-1.png)

Чтобы настроить git для корректного отображения `git log`, добавьте новый параметр, введя следующую команду в консоли:

```shell
git config --global core.pager 'less -RX'
```

![вывод `git log` в zsh](/zsh/zsh-2.png)
