---
aggregation:
  flatpak: org.gnome.Calendar
  sisyphus: gnome-calendar
appstream:
  id: org.gnome.Calendar
  name: Calendar
  icon: /gnome-calendar/Calendar-logo.png
  summary: A simple and convenient tool for planning and tracking your schedule.
  keywords:
    - adaptive
    - core
    - oobe
  developer:
    name: GNOME
    avatar: https://gitlab.gnome.org/uploads/-/system/group/avatar/8/gnomelogo.png?width=48
  metadata_license:
    name: GPLv2+
    link: https://packages.altlinux.org/license/GPL-2.0-or-later
  url:
    homepage: https://apps.gnome.org/en/Calendar/
    bugtracker: https://gitlab.gnome.org/GNOME/gnome-calendar/-/issues
gallery:
  title: Gallery
  type: slider
  items:
    - src: /gnome-calendar/sc-1.webp
    - src: /gnome-calendar/sc-2.webp
    - src: /gnome-calendar/sc-3.webp
---

# Calendar

GNOME Calendar is an elegant tool that helps you plan and schedule the coming days and weeks, whether your months are filled with appointments, social events, travel, or other life commitments.

Easily create and manage an unlimited number of calendars and events using GNOME Calendar with infinite scrolling monthly, weekly, and schedule list views.

Integrating the latest GNOME technologies and best design practices, GNOME Calendar is built on top of the mature Evolution data server to manage a large number of events and integrate with other applications. You can add calendars from various online schedulers (such as NextCloud, Google Calendar and CalDAV/WebDAV servers), allowing you to sync events across devices and platforms. GNOME Calendar also supports local and offline calendaring, allowing you to use it anywhere and anytime while traveling (or after the collapse of civilization)

<AGWGallery />

<!--@include: @en/apps/.parts/install/content-repo.md-->
<!--@include: @en/apps/.parts/install/content-flatpak.md-->

## Synchronization of CalDAV with Yandex.Calendar

Create a password for CalDAV on the “Application Passwords” page](https://id.yandex.ru/security/app-passwords) and save it.

In Yandex.Calendar, open the settings of the calendar you are interested in and copy the link from the “Export” section

![Link in the “Export” section](/gnome-calendar/gnome-calendar-yandex-caldav-1.jpg)

In Calendar, open the Manage Calendars menu

![Menu “Manage calendars”](/gnome-calendar/gnome-calendar-yandex-caldav-2.jpg)

Click on the "Add calendar" button

![Button “Add calendar”](/gnome-calendar/gnome-calendar-yandex-caldav-3.jpg)

Paste the copied calendar link in the "Import calendar" section

::: tip
You don't have to enter the calendar name, otherwise a local duplicate will be created
:::

![Add calendar menu](/gnome-calendar/gnome-calendar-yandex-caldav-4.jpg)

When adding, enter your Yandex account login and the password you created for CalDAV. Enter your GNOME Keyring information again.

Ready! Now events added to Yandex.Calendar will be displayed in GNOME Calendar and vice versa.
