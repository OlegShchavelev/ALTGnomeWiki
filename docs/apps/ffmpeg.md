---
aggregation:
  sisyphus: ffmpeg
appstream:
  id: ffmpeg
  name: FFMPEG
  icon: /ffmpeg/ffmpeg-logo.png
  summary: Утилита для обработки мультимедийного контента, такого как аудио, видео, субтитры и связанные с ними метаданные.
  metadata_license:
    name: LGPL v2.1+
    link: https://ffmpeg.org/legal.html
  developer:
    name: FFMPEG Community
  url:
    homepage: https://ffmpeg.org/
    bugtracker: https://trac.ffmpeg.org/
    donation: https://ffmpeg.org/donations.html
---

# FFmpeg

FFmpeg — Linux-утилита для обработки аудио- и видеоконтента, субтитров и связанные с ними метаданные.

## Установка из репозитория

**FFmpeg** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install ffmpeg
```

```shell[epm]
epm -i ffmpeg
```

:::

## Краткая сводка об опциях

Указать входной файл

```shell
ffmpeg -i
```

Ознакомится со всем списком всех поддерживаемых форматов, используйте:

```shell
ffmpeg -formats
```

Скрыть баннер об информации самой программы FFmpeg в выводе

```shell
ffmpeg -hide_banner
```

## Получите информацию о медиафайле

```shell
1. ffmpeg -i input_file.mp4
2. ffmpeg -i /home/input_file.mp4
```

В примере присутствуют два способа:

1. Вы находитесь в текущем каталоге где лежит данный файл.
2. Вы указывается полный путь к файлу.

Независимо от расширения файла информация о медиафайле отобразится.

## Конвертация медиафайлов

Конвертируйте различные мультимедийными форматами. Для этого можно просто указать имена файлов, поскольку FFmpeg получит требуемый формат из расширений. Это работает для преобразования видео в видео и аудио в аудио.

Примеры:

```shell
ffmpeg -i "video_input.mp4" "video_output.avi"
ffmpeg -i "video_input.webm" "video_output.flv"
ffmpeg -i "audio_input.mp3" "audio_output.ogg"
ffmpeg -i "audio_input.wav" "audio_output.flac"
```
::: tip
Ниже примеры где можно сделать перебор всех файлов в текущем каталоге, что по итогу затронет абсолютно все файлы независимо от их расширения.
Вместо `for i in *.mkv;` пропишем `for i in *;`
:::

## Изменение разрешения или соотношение сторон для видео

Ещё одна простая задача для FFmpeg. Всё, что нужно сделать, чтобы изменить размер видео, - указать новое разрешение, использовав флаг `s`
Флаг `-c copy` используется для сохранения оригинального качества (Простым языком перепаковка из одного контейнера в другой внося при этом изменения)

::: code-group

```shell[Один файл]
ffmpeg -i "Файл.avi" -s 1024x576 -c copy "Файл1.avi"
```

```shell[Пакетная работа]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -s 1024x576 -c copy "/mnt/Hard/Итог/${i}"; done
```

:::

## Обрезка видео без перекодирования

К примеру, можно вырезать первые 45 минут из видео:

::: code-group

```shell[Один файл]
ffmpeg -i "Видео.mkv" -ss 00:45:00 -c copy "Видео2.mkv"
```

```shell[Пакетная работа]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -ss 00:45:00 -c copy "/mnt/Hard/Итог/${i}"; done
```

:::

Обрезать видео с определённого времени до определённого времени:

::: code-group

```shell[Один файл]
ffmpeg -i "Видео.mkv" -ss 00:45:00 -to 1:55:00 -c copy "Видео2.mkv"
```

```shell[Пакетная работа]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -ss 00:45:00 -to 1:55:00 -c copy "/mnt/Hard/Итог/${i}"; done
```

:::


## Сохранение оригинального качества контента при кодировании.

Существует несколько опций с которыми можно приблизится к оригиналу:
1. `-qscale 0` Постоянный битрейт. Если нужно паралельно обработать этой опцией аудио нужно отдельно указывать `-q:a` или `-aq q` так как по умолчанию обрабатывается только видео-кодек.
2. `-crf 18` Переменный битрейт. Если указать более низкий CRF, файл будет большего размера с лучшим визуальным качеством.
   - 18 часто считается сжатием «без визуальных потерь»
   - 23 считается стандартом.
*В поддержке ffmpeg часто можно встретить упоминание что `-qscale` плохо работает с h264*

::: code-group

```shell[Один файл]
ffmpeg -hide_banner -i "Файл.avi" -qscale 0 "Файл.mp4"
ffmpeg -hide_banner -i "Файл.avi" -crf 18 "Файл.mp4"
```

```shell[Пакетная работа]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -qscale 0 "/mnt/Hard/Итог/${i}"; done
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -crf 18 "/mnt/Hard/Итог/${i}"; done
```

:::

Рукописный скрипт извлекает битрейт видео из входного файла, чтобы сохранить исходное качество при конвертации. 

```shell
for i in *; do 
  bitrate=$(ffmpeg -hide_banner -i "$i" 2>&1 | grep -oP 'bitrate: \K[0-9]+') 
  ffmpeg -hide_banner -i "$i" -map 0:v:0 -map 0:a:0 -c:v libx264 -b:v ${bitrate}k -c:a copy "/mnt/Hard/Итог/${i%.*}.mkv"; 
done
```

::: info
Для использования аппаратного ускорения видеокарты, отредактируйте ключ `-c:v libx264`

- NVIDIA NVENC `-c:v h264_nvenc`
- AMD AMF `-c:v h264_amf`
- Intel Quick Sync Video `-c:v h264_qsv`
:::


## Изменение структуры контейнера видеофайла без изменения качества видео

Допустим, у нас есть видеофайл с 5 аудиодорожками и 3 дорожками субтитров, а нам необходимо видео конкретно с первой аудиодорожкой и вторым потоком субтитров.

::: code-group

```shell[Один файл]
ffmpeg -hide_banner -i "файл.mkv" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a copy -c:s copy "/путь/к/файлу/куда/сохранить/файл.mkv"
```

```shell[Пакетная работа]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a copy -c:s copy "/путь/к/файлу/куда/сохранить/${i}"; done
```
:::

- Выбираем первую видеодорожку: `-map 0:v:0`
- Выбираем первую аудиодорожку: `-map 0:a:0`
- Выбираем второй поток субтитров: `-map 0:s:1`
- Применение -c copy равносильно указанию -c:v copy -c:a copy -c:s copy, если ранее были выбраны нужные дорожки. 

::: tip Будьте внимательны
Индексация дорожек начинается с нуля, поэтому первая дорожка будет иметь номер 0, а не 1.
:::

## Изменить кодек звуковой дорожки, не затрагивая само видео.

Ключ для копирования кодека аудио (`-c:a copy`) заменяется другим ключом: `-c:a ac3`

::: code-group

```shell[Один файл]
ffmpeg -hide_banner -i "файл.mkv" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a ac3 -c:s copy "/путь/к/файлу/куда/сохранить/файл.mkv"
```

```shell[Пакетная работа]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a ac3 -c:s copy "/путь/к/файлу/куда/сохранить/${i}"; done
```
:::


## Объединяем видео без перекодирования с расширением `.mkv` (текущий каталог) аудио с расширением `.mka` и субтитры с расширением `.ass` с одинаковыми названиями. Также сохраняется оригинальность названия и расширения видео-файлов.

Предположим, что у вас есть сериал и два каталога с нужным аудио-переводом и субтитрами:

```shell[С субтитрами]
for i in *.mkv; do
  ffmpeg -hide_banner -i "$i" \
  -i "/Путь/к/аудио/${i%.*}.mka" \
  -i "/Путь/к/субтитрам/${i%.*}.ass" \
  -map 0:v:0 -map 1:a -map 2:s \
  -c copy \
  "/Путь/к/итогу/${i%.*}.mkv"
done
```

```shell[Без субтитров]
for i in *.mkv; do
  ffmpeg -hide_banner -i "$i" \
  -i "/Путь/к/аудио/${i%.*}.mka" \
  -map 0:v:0 -map 1:a \
  -c copy \
  "/Путь/к/итогу/${i%.*}.mkv"
done
```

:::

## Вывод названия аудиокодека, количества каналов аудио, языка и названия аудиодорожки.

```shell
for file in *; do
  echo "Файл: $file"
  ffprobe -v error -select_streams a -show_entries stream=codec_name,channels,tags:stream_tags=language,title -of csv=p=0 "$file"
done
```
## Полезный поиск по ключевым словам в мета-данных медиафайла.

::: info
Для указания конректики что именно вам нужно найти измените строчку `"Stream\|Audio\|Subtitle"` на своё. Знаки `\|` служат разделителем.
:::

```shell
for file in *; do
  if [[ -f "$file" ]]; then
    echo "$file"
    ffmpeg -i "$file" 2>&1 | grep "Stream\|Audio\|Subtitle"
  fi
done
```

## Работа с GIF

Конвертация видео с расширением MP4 в GIF

```shell
ffmpeg -i "файл.mp4" "файл.gif"
```

Конвертация MP4 с 3 кадрами в секунду и масштабированием 320 по ширине (по высоте подстраивается автоматически):

```shell
ffmpeg -i "видео.mp4" -vf "fps=3,scale=320:-1:flags=lanczos" "гифка.gif"
```

Анимация GIF в 2 раза медленнее. Редактируя опцию `setpts=PTS*2` настраивается скорость анимации:

```shell
ffmpeg -i "гиф.gif" -filter_complex "setpts=PTS*2" "гифка.gif"
```

Разбиение GIF на отдельные кадры:

```shell
ffmpeg -i "гиф.gif" "гифка_%04d.png"
```

Разбиение GIF на отдельные кадры, но самостоятельно регулируем количеством, редактируя значение `fps=10`:

```shell
ffmpeg -i "гиф.gif" -vf "fps=10" "гифка_%04d.png"
```

Объединяем изображения в GIF:

::: warning
Необходимо переименовать файлы по одному паттерну: `гифка_0001.png`, `гифка_0002.png` и так далее
:::

```shell
ffmpeg -i "гифка_%04d.png" -vf "fps=10" "гиф.gif"
```

Добавление текста внизу по центру:

```shell
ffmpeg -i гиф.gif -vf "drawtext=text='ALT Gnome Wiki':x=(w-text_w)/2:y=main_h-text_h-10:fontsize=24:fontcolor=white" текст.gif
```

Как загрузить короткое видео без звука в Telegram, чтобы оно сохранилось как видео, а не конвертировалось в GIF:

```shell
ffmpeg -i "файл.mp4" -f lavfi -i anullsrc -c:v copy -c:a aac -shortest "файл2.mp4"
```
