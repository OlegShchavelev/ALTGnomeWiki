---
gallery:
    title: Галерея
    type: slider
    items:
        - src: /hw-probe/hw-probe1.png
        - src: /hw-probe/hw-probe2.png
        - src: /hw-probe/hw-probe3.png
aggregation:
    snap:
        id: hw-probe
        build: offical
    flatpak:
        id: org.linux_hardware.hw-probe
        build: offical
    sisyphus: hw-probe
appstream:
    id: org.linux_hardware.hw-probe
    name: Hardware Probe
    icon: /hw-probe/hw-probe-logo.png
    summary: Инструмент для проверки работоспособности компьютерного оборудования и загрузки результатов в базу данных оборудования Linux
    developer:
        name: Linux Hardware Project (linuxhw)
    metadata_license:
        name: LGPL-2.1-or-later/BSD-4-Clause
        link: https://www.gnu.org/licenses/
    url:
        homepage: https://linux-hardware.org/
        bugtracker: https://github.com/linuxhw/hw-probe/issues
---

# Hardware Probe (hw-probe)

Hardware Probe (hw-probe) — инструмент для проверки работоспособности компьютерного оборудования и загрузки результатов в базу данных оборудования Linux. Предназначен для упрощения сбора истории, необходимой
для расследования проблем, связанных с оборудованием

Probe — это моментальный снимок состояния оборудования вашего компьютера и журналов. Инструмент проверяет работоспособность устройств путём анализа журналов и возвращает постоянный URL-адрес в публичной базе [Linux Hardware](https://linux-hardware.org/) для просмотра проверки компьютера.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
<!--@include: @apps/_parts/install/content-snap.md-->
