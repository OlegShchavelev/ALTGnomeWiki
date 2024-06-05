---
aggregation:
    flatpak:
        id: io.github.diegopvlk.Dosage
        build: offical
    sisyphus: gnome-dosage
appstream:
    id: io.github.diegopvlk.Dosage
    name: Dosage
    icon: /dosage/Dosage.desktop-logo.png
    summary: Приложение для управления курсами лечения
    metadata_license:
        name: GNU GPLv3
        link: https://github.com/diegopvlk/Dosage?tab=GPL-3.0-1-ov-file
    developer:
        name: Diego Povliuk
        nickname: diegopvlk

    url:
        homepage: https://github.com/diegopvlk/Dosage
        bugtracker: https://github.com/diegopvlk/Dosage/issues
gallery:
    title: Галерея
    type: slider
    items:
        - src: dosage/dosage-1.png
        - src: dosage/dosage-2.png
        - src: dosage/dosage-3.png
        - src: dosage/dosage-4.png
---

# Dosage

Dosage — это приложение, для управления курсами лечения. С лёгкостью управляйте курсами лечения с Dosage: уведомления, история, многодозные приёмы, настройка частоты приём, мониторинг запаса и контроль длительности курсов.

Особенности приложения:

-   Уведомления — Получайте напоминания в нужное вам время.
-   История — Смотрите, какие лекарства вы принимали или пропустили.
-   Управление дозировкой — Настройте приём лекарст в разное время.
-   Режимы периодичности — Каждый день, в определённые дни, циклом или только по мере необходимости.
-   Цвет и значок — Укажите форму вашего лечения.
-   Отслеживание запасов — Следите за своими запасами и получайте напоминания, когда они заканчиваются.
-   Продолжительность — определите даты начала и окончания приёма лекарств.

<AGWGallery />

<!--@include: @apps/_parts/install/content-repo.md-->
<!--@include: @apps/_parts/install/content-flatpak.md-->
