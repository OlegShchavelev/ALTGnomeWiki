---
aggregation:
  sisyphus: ffmpeg
appstream:
  id: ffmpeg
  name: FFmpeg
  icon: /ffmpeg/ffmpeg-logo.png
  summary: A utility for processing multimedia content such as audio, video, subtitles and associated metadata.
  metadata_license:
    name: LGPL v2.1+
    link: https://ffmpeg.org/legal.html
  developer:
    name: FFmpeg Community
  url:
    homepage: https://ffmpeg.org/
    bugtracker: https://trac.ffmpeg.org/
    donation: https://ffmpeg.org/donations.html
---

# FFmpeg

FFmpeg is a Linux utility for processing audio and video content, subtitles and associated metadata.

<!--@include: @en/apps/.parts/install/content-repo.md-->

## Summary of options

Specify input file

```shell
ffmpeg -i
```

To view the entire list of all supported formats, use:

```shell
ffmpeg -formats
```

Hide the banner about the information of the FFmpeg program itself in the output

```shell
ffmpeg -hide_banner
```

## Get information about a media file

```shell
1. ffmpeg -i input_file.mp4
2. ffmpeg -i /home/input_file.mp4
```

The example contains two methods:

1. You are in the current directory where this file is located.
2. You indicate the full path to the file.

Regardless of the file extension, information about the media file will be displayed.

## Converting media files

Convert various multimedia formats. To do this, you can simply specify the file names, since FFmpeg will get the required format from the extensions. This works to convert video to video and audio to audio.

Examples:

```shell
ffmpeg -i "video_input.mp4" "video_output.avi"
ffmpeg -i "video_input.webm" "video_output.flv"
ffmpeg -i "audio_input.mp3" "audio_output.ogg"
ffmpeg -i "audio_input.wav" "audio_output.flac"
```

::: tip
Below are examples where you can iterate through all the files in the current directory, which will ultimately affect absolutely all files, regardless of their extension. Instead of `for i in *.mkv;` write `for i in *;`
:::

## Changing the video resolution or aspect ratio

Another simple task for FFmpeg. All you need to do to resize a video is specify the new resolution using the `s` flag

The `-c copy` flag is used to preserve the original quality (In simple terms, repacking from one container to another while making changes)

::: code-group

```shell[One file]
ffmpeg -i "File.avi" -s 1024x576 -c copy "File1.avi"
```

```shell[Multiple files]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -s 1024x576 -c copy "/mnt/Hard/Result/${i}"; done
```

:::

## Trim video without recoding

For example, you can cut the first 45 minutes from a video:

::: code-group

```shell[One file]
ffmpeg -i "Video.mkv" -ss 00:45:00 -c copy "Video2.mkv"
```

```shell[Multiple files]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -ss 00:45:00 -c copy "/mnt/Hard/Result/${i}"; done
```

:::

Trim video from a specific time to a specific time:

::: code-group

```shell[One file]
ffmpeg -i "Видео.mkv" -ss 00:45:00 -to 1:55:00 -c copy "Видео2.mkv"
```

```shell[Multiple files]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -ss 00:45:00 -to 1:55:00 -c copy "/mnt/Hard/Result/${i}"; done
```

:::

## Preserve original content quality when encoding

There are several options with which you can get closer to the original:

1. `-qscale 0` - constant bitrate. If you need to process audio in parallel with this option, you need to separately specify `-q:a` or `-aq q`, since by default only the video codec is processed.
2. `-crf 18` - variable bitrate. If you specify a lower CRF, the file will be larger with better visual quality.
  - `18` - often considered “visually lossless” compression
  - `23` - considered standard.

::: warning
In FFmpeg support you can often find a mention that `-qscale` does not work well with H.264
:::

::: code-group

```shell[One file]
ffmpeg -hide_banner -i "File.avi" -qscale 0 "File.mp4"
ffmpeg -hide_banner -i "File.avi" -crf 18 "File.mp4"
```

```shell[Multiple files]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -qscale 0 "/mnt/Hard/Restul/${i}"; done
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -crf 18 "/mnt/Hard/Restul/${i}"; done
```

:::

A handwritten script extracts the video bitrate from the input file to preserve the original quality during conversion.

```shell
for i in *; do
  bitrate=$(ffmpeg -hide_banner -i "$i" 2>&1 | grep -oP 'bitrate: \K[0-9]+')
  ffmpeg -hide_banner -i "$i" -map 0:v:0 -map 0:a:0 -c:v libx264 -b:v ${bitrate}k -c:a copy "/mnt/Hard/Result/${i%.*}.mkv";
done
```

::: info
To use hardware acceleration of the video card, edit the `-c:v libx264` key

- NVIDIA NVENC: `-c:v h264_nvenc`
- AMD AMF: `-c:v h264_amf`
- Intel Quick Sync Video: `-c:v h264_qsv`

:::

## Changing the structure of a video file container without changing the video quality

Let's say we have a video file with 5 audio tracks and 3 subtitle tracks, and we need a video specifically with the first audio track and the second subtitle stream.

::: code-group

```shell[One file]
ffmpeg -hide_banner -i "файл.mkv" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a copy -c:s copy "/path/to/save/file.mkv"
```

```shell[Multiple files]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a copy -c:s copy "/path/to/save/${i}"; done
```

:::

- Select the first video track: `-map 0:v:0`
- Select the first audio track: `-map 0:a:0`
- Select the second subtitle stream: `-map 0:s:1`
- Using `-c copy` is equivalent to specifying `-c:v copy -c:a copy -c:s copy` if the desired tracks were previously selected.

::: tip Be careful
Track indexing starts at zero, so the first track will be numbered `0` rather than `1`.
:::

## Change the audio codec without affecting the video itself.

The key for copying the audio codec (`-c:a copy`) is replaced with another key: `-c:a ac3`

::: code-group

```shell[One file]
ffmpeg -hide_banner -i "file.mkv" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a ac3 -c:s copy "/path/to/save/file.mkv"
```

```shell[Multiple files]
for i in *.mkv; do ffmpeg -hide_banner -i "$i" -map 0:v:0 -map 0:a:0 -map 0:s:1 -c:v copy -c:a ac3 -c:s copy "/path/to/save/${i}"; done
```

:::

## We combine video without recoding with the extension `.mkv` (current directory), audio with the extension `.mka` and subtitles with the extension `.ass` with the same names. The originality of the name and extension of video files is also preserved.

Let's assume that you have a series and two catalogs with the desired audio translation and subtitles:

::: code-group

```shell[With subtitles]
for i in *.mkv; do
  ffmpeg -hide_banner -i "$i" \
  -i "/path/to/audio/${i%.*}.mka" \
  -i "/path/to/subtitles/${i%.*}.ass" \
  -map 0:v:0 -map 1:a -map 2:s \
  -c copy \
  "/path/to/result/${i%.*}.mkv"
done
```

```shell[Without subtitles]
for i in *.mkv; do
  ffmpeg -hide_banner -i "$i" \
  -i "/path/to/audio/${i%.*}.mka" \
  -map 0:v:0 -map 1:a \
  -c copy \
  "/path/to/result/${i%.*}.mkv"
done
```

:::

## Displays the name of the audio codec, number of audio channels, language and audio track name.

```shell
for file in *; do
  echo "File: $file"
  ffprobe -v error -select_streams a -show_entries stream=codec_name,channels,tags:stream_tags=language,title -of csv=p=0 "$file"
done
```

## Useful keyword searches in media file metadata.

::: info
To specify a search parameter, change the line `"Stream\|Audio\|Subtitle"`, `\|` - the "or" operator.
:::

```shell
for file in *; do
  if [[ -f "$file" ]]; then
    echo "$file"
    ffmpeg -i "$file" 2>&1 | grep "Stream\|Audio\|Subtitle"
  fi
done
```

## Working with GIF

Convert videos with MP4 extension to GIF

```shell
ffmpeg -i "file.mp4" "file.gif"
```

MP4 conversion with 3 frames per second and 320 width scaling (height adjusts automatically):

```shell
ffmpeg -i "video.mp4" -vf "fps=3,scale=320:-1:flags=lanczos" "gif.gif"
```

GIF animation is 2 times slower. By editing the option `setpts=PTS*2` the animation speed is adjusted:

```shell
ffmpeg -i "gif.gif" -filter_complex "setpts=PTS*2" "gif1.gif"
```

Splitting a GIF into separate frames:

```shell
ffmpeg -i "gif.gif" "gif_%04d.png"
```

Splitting GIF into separate frames, but independently adjusting the number by editing the value `fps=10`:

```shell
ffmpeg -i "gif.gif" -vf "fps=10" "gif_%04d.png"
```

Combining images into GIF:

::: warning
It is necessary to rename the files using one pattern: `gif_0001.png`, `gif_0002.png` and so on
:::

```shell
ffmpeg -i "gif_%04d.png" -vf "fps=10" "gif.gif"
```

Adding text at bottom center:

```shell
ffmpeg -i gif.gif -vf "drawtext=text='ALT Gnome Wiki':x=(w-text_w)/2:y=main_h-text_h-10:fontsize=24:fontcolor=white" text.gif
```

How to upload a short video without sound to Telegram so that it is saved as a video and not converted to GIF:

```shell
ffmpeg -i "file.mp4" -f lavfi -i anullsrc -c:v copy -c:a aac -shortest "file2.mp4"
```
