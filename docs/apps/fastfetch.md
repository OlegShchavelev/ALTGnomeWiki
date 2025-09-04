---
aggregation:
  sisyphus: fastfetch
appstream:
  name: Fastfetch
  icon: /fastfetch/fastfetch-logo.svg
  summary: Средство для отображения информации о системе.
  metadata_license:
    name: MIT License
    link: https://choosealicense.com/licenses/mit/
  developer:
    name: fastfetch-cli
  url:
    homepage: https://github.com/fastfetch-cli/fastfetch
    bugtracker: https://github.com/fastfetch-cli/fastfetch/issues
---

# Fastfetch

Fastfetch — инструмент для вывода системной информации и отображения её в привлекательном виде, похож на [Neofetch](/neofetch). Он написан в основном на C с учётом производительности и настраиваемости. В настоящее время поддерживаются Linux, Android, FreeBSD, macOS и Windows 7 (или более поздние версии).

![Fastfetch](/fastfetch/fastfetch-1.png)

## Установка из репозитория

**Fastfetch** можно установить через терминал:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install fastfetch
```

```shell[epm]
epm -i fastfetch
```

:::