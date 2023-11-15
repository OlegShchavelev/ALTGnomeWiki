# FFMPEG

FFmpeg — это набор библиотек и инструментов для обработки мультимедийного контента, такого как аудио, видео, субтитры и связанные с ними метаданные.

## Установка из репозитория 

**FFmpeg** можно установить любым привычным и удобным способом:

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install ffmpeg
```
```shell[epm]
epm -i ffpmeg
```
:::

## Получите информацию о медиафайле

Отображение информации о медиафайле, введите

```shell
ffmpeg -i file_name
```

Получить информацию можно, как для аудио, так и для видео файлов

```shell
ffmpeg -i video_file.mp4 
ffmpeg -i audio_file.mp3
```

Для получения краткой информации, воспользуйтесь `-hide_banner`, введите:

```shell
ffmpeg -i video_file.mp4 -hide_banner 
ffmpeg -i audio_file.mp3 -hide_banner
```

## Конвертируйте медиафайлы

 Конвертируйте различные мультимедийными форматами. Вам нужно только указать входные и выходные файлы, поскольку ffmpeg получит требуемый формат из расширений файлов. Это работает для преобразования видео в видео и аудио в аудио.

 Примеры:

```shell
ffmpeg -i video_input.mp4 video_output.avi
ffmpeg -i video_input.webm video_output.flv
ffmpeg -i audio_input.mp3 audio_output.ogg
ffmpeg -i audio_input.wav audio_output.flac
```

Ознакомится со всем списком всех поддерживаемых форматов, используйте:

```shell
ffmpeg -formats
```

Укажите параметр `-qscale 0` перед выходным файлом, чтобы сохранить качество видеофайла:

```shell
ffmpeg -i video_input.wav -qscale 0 video_output.mp4
```

## Измените разрешение видео или соотношение сторон

Еще одна простая задача для ffmpeg. Все, что вам нужно сделать, чтобы изменить размер видео, - это указать новое разрешение после флага `-s``:

```shell
ffmpeg -i video_input.mov -s 1024x576 video_output.mp4
```