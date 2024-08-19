---
aggregation:
  sisyphus: thunderbird
  flatpak: org.mozilla.Thunderbird
  snap: thunderbird
appstream:
  id: org.mozilla.Thunderbird
  name: Thunderbird
  icon: /thunderbird/thunderbird-logo.svg
  summary: Бесплатное приложение для работы с электронной почтой, которое легко установить и настроить с отличными характеристиками.
  developer:
    name: Mozilla Foundation
    avatar: /thunderbird/thunderbird-avatar.png
  metadata_license:
    name: MPL-2.0 license
    link: https://choosealicense.com/licenses/mpl-2.0/
  url:
    homepage: https://www.thunderbird.net/
    bugtracker: https://bugzilla.mozilla.org/
    translate: https://www.thunderbird.net/en-US/get-involved/#translation
    donation: https://www.thunderbird.net/
---

# Thunderbird

Thunderbird — бесплатное приложение для работы с электронной почтой, которое легко установить и настроить с отличными характеристиками.

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/install/content-snap.md-->

## Thunderbird GNOME Theme

Клонируйте скрипт и установите:

```shell
git clone https://github.com/rafaelmardojai/thunderbird-gnome-theme .thunderbird/thunderbird-gnome-theme
cd .thunderbird/thunderbird-gnome-theme
```

**Thunderbird GNOME Theme <Badge type="warning" text="Sisyphus" />**

```shell
./scripts/install.sh -f ~/.thunderbird
```

**Thunderbird GNOME Theme <Badge type="tip" text="Flatpak" />**

```shell
./scripts/install.sh -f ~/.var/app/org.mozilla.Thunderbird/.thunderbird
```
